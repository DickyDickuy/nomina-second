// Coverflow Gallery — Originkit

"use client";

import {
  useState,
  useEffect,
  useCallback,
  useRef,
  type CSSProperties,
  type TouchEvent,
} from "react";

const useIsStaticRenderer = () => false;

export interface Slide {
  image?: { src?: string; srcSet?: string; alt?: string };
  title?: string;
  role?: string;
}

type AutoplayDir = "leftToRight" | "rightToLeft";
type TitleCorner = "topLeft" | "topRight" | "bottomLeft" | "bottomRight";

export interface Smooth3DSlideshowProps {
  slides?: Slide[];
  cardWidth?: number;
  cardHeight?: number;
  radius?: number;
  tilt?: number;
  sideTilt?: number;
  gap?: number;
  opacity?: number;
  transition?: {
    type?: string;
    duration?: number;
    delay?: number;
    ease?: number[] | string;
  };
  autoplay?: boolean;
  autoplayDirection?: AutoplayDir;
  showTitle?: boolean;
  titleFont?: CSSProperties;
  titleColor?: string;
  titlePosition?: {
    position?: TitleCorner;
    paddingLeft?: number;
    paddingRight?: number;
    paddingTop?: number;
    paddingBottom?: number;
  };
  style?: CSSProperties;
}

const DEFAULT_SLIDES: Slide[] = [
  {
    image: {
      src: "/assets/img/home-06/team/randy.png",
      alt: "Randy Yudesyaf",
    },
    title: "Randy Yudesyaf",
    role: "Chief Executive Officer",
  },
  {
    image: {
      src: "/assets/img/home-06/team/risa.png",
      alt: "Risa Fatima",
    },
    title: "Risa Fatima",
    role: "Chief Operating Officer",
  },
  {
    image: {
      src: "/assets/img/home-06/team/hana.png",
      alt: "Hana Benedicta",
    },
    title: "Hana Benedicta",
    role: "VP Operation",
  },
  {
    image: {
      src: "/assets/img/home-06/team/agung.png",
      alt: "Agung Nugraha",
    },
    title: "Agung Nugraha",
    role: "VP Project",
  },
  {
    image: {
      src: "/assets/img/home-06/team/rizal.png",
      alt: "Rizal Zulvianur",
    },
    title: "Rizal Zulvianur",
    role: "Sr. Graphic Designer",
  },
  {
    image: {
      src: "/assets/img/home-06/team/bima.png",
      alt: "Bima Nazuardi",
    },
    title: "Bima Nazuardi",
    role: "Sr. Motion Designer",
  },
  {
    image: {
      src: "/assets/img/home-06/team/riga.png",
      alt: "Riga Singawinata",
    },
    title: "Riga Singawinata",
    role: "Jr. Production Manager",
  },
];

const PERSPECTIVE = 1600;
const SCALE_STEP = 0.16;
const MAX_VISIBLE = 2;
const DEPTH = 240;
const INACTIVE_PIXEL_SIZE = 12;

function cssTransition(t: Smooth3DSlideshowProps["transition"]): {
  dur: number;
  ease: string;
} {
  const dur = t && typeof t.duration === "number" ? t.duration : 0.6;
  let ease = "cubic-bezier(0.22, 1, 0.36, 1)";
  const e = t?.ease;
  if (Array.isArray(e) && e.length === 4) {
    ease = `cubic-bezier(${e[0]}, ${e[1]}, ${e[2]}, ${e[3]})`;
  } else if (typeof e === "string") {
    const map: Record<string, string> = {
      linear: "linear",
      easeIn: "ease-in",
      easeOut: "ease-out",
      easeInOut: "ease-in-out",
    };
    ease = map[e] || "ease";
  }
  return { dur, ease };
}

/**
 * Renders a greyscale pixelated version of the card image when not centered,
 * and smoothly resolves the pixel blocks + restores full color when centered.
 */
function PixelatedSlideImage({
  src,
  alt,
  cardWidth,
  cardHeight,
  isActive,
  dur,
  ease,
}: {
  src: string;
  alt: string;
  cardWidth: number;
  cardHeight: number;
  isActive: boolean;
  dur: number;
  ease: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);
  const offscreenRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const currentPixelRef = useRef<number>(isActive ? 1 : INACTIVE_PIXEL_SIZE);

  const drawPixelated = useCallback(
    (pixelSize: number) => {
      const canvas = canvasRef.current;
      const img = imgRef.current;
      if (!canvas || !img || !img.complete || img.naturalWidth === 0) return;

      if (canvas.width !== cardWidth || canvas.height !== cardHeight) {
        canvas.width = cardWidth;
        canvas.height = cardHeight;
      }

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      if (!offscreenRef.current) {
        offscreenRef.current = document.createElement("canvas");
      }
      const offscreen = offscreenRef.current;

      const block = Math.max(1, Math.round(pixelSize));
      const cols = Math.max(1, Math.ceil(cardWidth / block));
      const rows = Math.max(1, Math.ceil(cardHeight / block));

      if (offscreen.width !== cols || offscreen.height !== rows) {
        offscreen.width = cols;
        offscreen.height = rows;
      }

      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return;

      // Calculate object-fit: cover crop from source image
      const imgW = img.naturalWidth;
      const imgH = img.naturalHeight;
      const imgRatio = imgW / imgH;
      const cardRatio = cardWidth / cardHeight;

      let sx = 0;
      let sy = 0;
      let sw = imgW;
      let sh = imgH;

      if (imgRatio > cardRatio) {
        sw = imgH * cardRatio;
        sx = (imgW - sw) / 2;
      } else {
        sh = imgW / cardRatio;
        sy = (imgH - sh) / 2;
      }

      // Draw downsampled image into tiny offscreen canvas
      offCtx.imageSmoothingEnabled = false;
      offCtx.clearRect(0, 0, cols, rows);
      offCtx.drawImage(img, sx, sy, sw, sh, 0, 0, cols, rows);

      // Convert offscreen pixels to greyscale in-place for consistent support across all browsers
      const imgData = offCtx.getImageData(0, 0, cols, rows);
      const data = imgData.data;
      for (let p = 0; p < data.length; p += 4) {
        const lum = Math.round(
          0.299 * data[p] + 0.587 * data[p + 1] + 0.114 * data[p + 2],
        );
        data[p] = lum;
        data[p + 1] = lum;
        data[p + 2] = lum;
      }
      offCtx.putImageData(imgData, 0, 0);

      // Scale tiny greyscale grid back up to full card dimensions with nearest-neighbor (hard pixels)
      ctx.imageSmoothingEnabled = false;
      ctx.clearRect(0, 0, cardWidth, cardHeight);
      ctx.drawImage(offscreen, 0, 0, cols, rows, 0, 0, cardWidth, cardHeight);
    },
    [cardWidth, cardHeight],
  );

  // Load image and paint initial state
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    imgRef.current = img;

    const onLoad = () => {
      drawPixelated(currentPixelRef.current);
    };

    if (img.complete && img.naturalWidth > 0) {
      onLoad();
    } else {
      img.addEventListener("load", onLoad);
    }

    return () => {
      img.removeEventListener("load", onLoad);
    };
  }, [src, drawPixelated]);

  // Animate pixel block resolution when card moves in/out of center
  useEffect(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    const startPixel = currentPixelRef.current;
    const targetPixel = isActive ? 1 : INACTIVE_PIXEL_SIZE;

    if (Math.abs(startPixel - targetPixel) < 0.5) {
      currentPixelRef.current = targetPixel;
      drawPixelated(targetPixel);
      return;
    }

    const durationMs = Math.max(200, dur * 1000);
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const t = Math.min(1, elapsed / durationMs);
      // Cubic ease out
      const eased = 1 - Math.pow(1 - t, 3);
      const nextPixel = startPixel + (targetPixel - startPixel) * eased;
      currentPixelRef.current = nextPixel;
      drawPixelated(nextPixel);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        currentPixelRef.current = targetPixel;
        drawPixelated(targetPixel);
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [isActive, dur, drawPixelated]);

  return (
    <>
      {/* Full-color sharp image (visible when centered) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        draggable={false}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          userSelect: "none",
        }}
      />

      {/* Greyscale + pixelated canvas overlay (visible when NOT centered, dissolves when centered) */}
      <canvas
        ref={canvasRef}
        width={cardWidth}
        height={cardHeight}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "block",
          pointerEvents: "none",
          imageRendering: "pixelated",
          opacity: isActive ? 0 : 1,
          transition: `opacity ${dur}s ${ease}`,
        }}
      />
    </>
  );
}

function OriginkitBaseSmooth3DSlideshow({
  slides = DEFAULT_SLIDES,
  cardWidth = 400,
  cardHeight = 400,
  radius = 3,
  tilt = 12,
  sideTilt = 8,
  gap = 8,
  opacity = 60,
  transition = COMPONENT_DEFAULTS.transition,
  autoplay = false,
  autoplayDirection = "rightToLeft",
  showTitle = true,
  titleFont = COMPONENT_DEFAULTS.titleFont,
  titleColor = "#ffffff",
  titlePosition = COMPONENT_DEFAULTS.titlePosition,
  style,
}: Smooth3DSlideshowProps) {

  // Responsive card dimensions for smaller viewports so mobile & desktop share one component cleanly
  const [viewportWidth, setViewportWidth] = useState<number>(1200);
  useEffect(() => {
    const updateSize = () => setViewportWidth(window.innerWidth);
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const responsiveScale =
    viewportWidth < 500
      ? Math.max(0.65, (viewportWidth - 64) / cardWidth)
      : viewportWidth < 768
        ? Math.max(0.8, (viewportWidth - 96) / cardWidth)
        : 1;

  const effectiveCardWidth = Math.round(cardWidth * responsiveScale);
  const effectiveCardHeight = Math.round(cardHeight * responsiveScale);
  const effectiveGap = gap * responsiveScale;

  const tp = titlePosition || {};
  const corner: TitleCorner = tp.position || "bottomLeft";
  const isTop = corner === "topLeft" || corner === "topRight";
  const isRight = corner === "topRight" || corner === "bottomRight";
  const padLeft = tp.paddingLeft ?? 22;
  const padRight = tp.paddingRight ?? 22;
  const padTop = tp.paddingTop ?? 24;
  const padBottom = tp.paddingBottom ?? 24;

  const isStatic = useIsStaticRenderer();
  const list = slides && slides.length ? slides : DEFAULT_SLIDES;
  const n = list.length;

  const loop = true;
  const [rawActive, setActive] = useState(0);
  const active = n > 0 ? Math.max(0, Math.min(n - 1, rawActive)) : 0;
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const moveDur =
    transition && typeof transition.duration === "number"
      ? transition.duration
      : 0.6;
  const lockRef = useRef(false);
  const lock = useCallback(() => {
    lockRef.current = true;
    window.setTimeout(
      () => {
        lockRef.current = false;
      },
      Math.max(50, moveDur * 1000),
    );
  }, [moveDur]);

  const step = useCallback(
    (dir: number) => {
      if (lockRef.current) return;
      lock();
      setActive((a) => (((a + dir) % n) + n) % n);
    },
    [n, lock],
  );

  const handleCardClick = useCallback(
    (i: number) => {
      if (isStatic || autoplay || lockRef.current) return;
      lock();
      setActive((a) => (i === a ? (a + 1) % n : i));
    },
    [isStatic, autoplay, n, lock],
  );

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      step(diff > 0 ? 1 : -1);
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const delay =
    transition && typeof transition.delay === "number"
      ? transition.delay
      : 2.5;
  useEffect(() => {
    if (isStatic || !autoplay || n < 2) return;
    const ms = Math.max(0.3, delay) * 1000;
    const dir = autoplayDirection === "leftToRight" ? -1 : 1;
    const id = window.setInterval(() => step(dir), ms);
    return () => window.clearInterval(id);
  }, [isStatic, autoplay, autoplayDirection, delay, n, step]);

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        step(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        step(-1);
      }
    },
    [step],
  );

  const { dur, ease } = cssTransition(transition);
  const transitionCss = `transform ${dur}s ${ease}, opacity ${dur}s ${ease}`;

  const effectiveRadius =
    (Math.max(0, Math.min(20, radius)) / 20) *
    (Math.min(effectiveCardWidth, effectiveCardHeight) / 2);

  const dim = 1 - Math.max(0, Math.min(100, opacity)) / 100;

  const rootStyle: CSSProperties = {
    ...(style || {}),
    position: "relative",
    width: "100%",
    height: "100%",
    minWidth: 320,
    minHeight: effectiveCardHeight + 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    perspective: `${PERSPECTIVE}px`,
    overflow: "hidden",
    outline: "none",
  };

  return (
    <div
      style={rootStyle}
      tabIndex={0}
      role="group"
      aria-roledescription="carousel"
      onKeyDown={isStatic ? undefined : onKeyDown}
      onTouchStart={isStatic ? undefined : handleTouchStart}
      onTouchMove={isStatic ? undefined : handleTouchMove}
      onTouchEnd={isStatic ? undefined : handleTouchEnd}
    >
      <div
        style={{
          position: "relative",
          width: effectiveCardWidth,
          height: effectiveCardHeight,
          transformStyle: "preserve-3d",
        }}
      >
        {list.map((slide, i) => {
          let rel = i - active;
          if (loop) {
            if (rel > n / 2) rel -= n;
            if (rel < -n / 2) rel += n;
          }
          const ax = Math.abs(rel);
          const visible = ax <= MAX_VISIBLE;
          const isActive = rel === 0;
          const sc = Math.max(0.4, 1 - ax * SCALE_STEP);

          const tx = rel * (effectiveGap * 30);
          const tz = -ax * DEPTH;
          const ry = -rel * tilt;
          const rz = rel * sideTilt;
          const src = slide.image?.src || "";

          const cardStyle: CSSProperties = {
            position: "absolute",
            left: "50%",
            top: "50%",
            width: effectiveCardWidth,
            height: effectiveCardHeight,
            borderRadius: effectiveRadius,
            overflow: "hidden",
            transformStyle: "preserve-3d",
            transformOrigin: "center center",
            transform: `translate(-50%, -50%) translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) rotateZ(${rz}deg) scale(${sc})`,
            transition: transitionCss,
            opacity: visible ? 1 : 0,
            cursor: autoplay || isActive ? "default" : "pointer",
            pointerEvents:
              visible && !isStatic && !autoplay ? "auto" : "none",
            backgroundColor: "#1a1a1a",
          };

          return (
            <div
              key={i}
              style={cardStyle}
              onClick={isStatic ? undefined : () => handleCardClick(i)}
              aria-label={
                slide.role ? `${slide.title} — ${slide.role}` : slide.title
              }
              aria-hidden={!visible}
            >
              {src ? (
                <PixelatedSlideImage
                  src={src}
                  alt={slide.image?.alt || slide.title || ""}
                  cardWidth={effectiveCardWidth}
                  cardHeight={effectiveCardHeight}
                  isActive={isActive}
                  dur={dur}
                  ease={ease}
                />
              ) : null}

              {showTitle && (
                <>
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: isTop
                        ? "linear-gradient(0deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.75) 100%)"
                        : "linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.75) 100%)",
                      pointerEvents: "none",
                      opacity: isActive ? 1 : 0,
                      transition: `opacity ${dur}s ${ease}`,
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      left: padLeft,
                      right: padRight,
                      [isTop ? "top" : "bottom"]: isTop ? padTop : padBottom,
                      textAlign: isRight ? "right" : "left",
                      pointerEvents: "none",
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "translateY(0)" : "translateY(8px)",
                      transition: `opacity ${dur}s ${ease}, transform ${dur}s ${ease}`,
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        color: titleColor,
                        fontSize: responsiveScale < 1 ? 22 : 28,
                        fontWeight: 700,
                        lineHeight: "1.1em",
                        letterSpacing: "-0.02em",
                        whiteSpace: "pre-line",
                        textShadow: "0 2px 10px rgba(0,0,0,0.4)",
                        ...(titleFont || {}),
                      }}
                    >
                      {slide.title}
                    </span>
                    {slide.role && (
                      <span
                        style={{
                          display: "block",
                          marginTop: 6,
                          color: "rgba(255, 255, 255, 0.82)",
                          fontSize: responsiveScale < 1 ? 12 : 14,
                          fontWeight: 500,
                          lineHeight: "1.2em",
                          letterSpacing: "0.04em",
                          textTransform: "uppercase",
                          textShadow: "0 2px 10px rgba(0,0,0,0.4)",
                          fontFamily: "var(--font-body), sans-serif",
                        }}
                      >
                        {slide.role}
                      </span>
                    )}
                  </div>
                </>
              )}

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "#000000",
                  opacity: isActive ? 0 : dim,
                  transition: `opacity ${dur}s ${ease}`,
                  pointerEvents: "none",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

const COMPONENT_DEFAULTS: Smooth3DSlideshowProps = {
  slides: DEFAULT_SLIDES,
  cardWidth: 400,
  cardHeight: 400,
  radius: 3,
  tilt: 12,
  sideTilt: 8,
  gap: 8,
  opacity: 60,
  autoplay: false,
  autoplayDirection: "rightToLeft",
  transition: {
    type: "tween",
    duration: 0.6,
    delay: 2.5,
    ease: [0.22, 1, 0.36, 1],
  },
  showTitle: true,
  titleFont: {
    fontFamily: "var(--font-heading), Inter, sans-serif",
    fontSize: "28px",
    letterSpacing: "-0.02em",
    lineHeight: "1.1em",
  },
  titleColor: "#ffffff",
  titlePosition: {
    position: "bottomLeft",
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 24,
    paddingBottom: 24,
  },
};

export default function Smooth3DSlideshow(props: Smooth3DSlideshowProps) {
  return <OriginkitBaseSmooth3DSlideshow {...props} />;
}
