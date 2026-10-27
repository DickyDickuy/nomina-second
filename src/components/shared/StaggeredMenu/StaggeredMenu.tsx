"use client";

import Image from "next/image";
import React, { useCallback, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { navigateWithTransition } from "../PageTransition/PageTransition";

import styles from "./StaggeredMenu.module.scss";

export interface StaggeredMenuItem {
    label: string;
    ariaLabel: string;
    link: string;
}

export interface StaggeredMenuSocialItem {
    label: string;
    link: string;
}

interface StaggeredMenuProps {
    position?: "left" | "right";
    colors?: string[];
    items?: StaggeredMenuItem[];
    socialItems?: StaggeredMenuSocialItem[];
    displaySocials?: boolean;
    displayItemNumbering?: boolean;
    className?: string;
    logoUrl?: string;
    menuButtonColor?: string;
    openMenuButtonColor?: string;
    accentColor?: string;
    changeMenuColorOnOpen?: boolean;
    isFixed?: boolean;
    closeOnClickAway?: boolean;
    onMenuOpen?: () => void;
    onMenuClose?: () => void;
}

const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
    position = "right",
    colors = ["#B497CF", "#5227FF", "#2a302b"],
    items = [],
    socialItems = [],
    displaySocials = true,
    displayItemNumbering = true,
    className,
    logoUrl = "/assets/img/logo/logo-white.png",
    menuButtonColor = "#ffffff",
    openMenuButtonColor = "#111111",
    accentColor = "#fb5102",
    changeMenuColorOnOpen = true,
    isFixed = true,
    closeOnClickAway = true,
    onMenuOpen,
    onMenuClose,
}) => {
    const [open, setOpen] = useState(false);
    const [menuLabel, setMenuLabel] = useState("Menu");
    const openRef = useRef(false);
    const panelRef = useRef<HTMLElement | null>(null);
    const preLayersRef = useRef<HTMLDivElement | null>(null);
    const preLayerElsRef = useRef<HTMLDivElement[]>([]);
    const barTopRef = useRef<HTMLSpanElement | null>(null);
    const barMidRef = useRef<HTMLSpanElement | null>(null);
    const barBotRef = useRef<HTMLSpanElement | null>(null);
    const iconRef = useRef<HTMLSpanElement | null>(null);
    const textInnerRef = useRef<HTMLSpanElement | null>(null);
    const toggleBtnRef = useRef<HTMLButtonElement | null>(null);


    const openTlRef = useRef<gsap.core.Timeline | null>(null);
    const closeTweenRef = useRef<gsap.core.Tween | null>(null);
    const spinTweenRef = useRef<gsap.core.Timeline | null>(null);
    const textCycleAnimRef = useRef<gsap.core.Tween | null>(null);
    const colorTweenRef = useRef<gsap.core.Tween | null>(null);
    const busyRef = useRef(false);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const panel = panelRef.current;
            const preContainer = preLayersRef.current;
            const barTop = barTopRef.current;
            const barMid = barMidRef.current;
            const barBot = barBotRef.current;

            if (!panel || !barTop || !barMid || !barBot) {
                return;
            }

            const preLayers = preContainer ? Array.from(preContainer.children) as HTMLDivElement[] : [];
            preLayerElsRef.current = preLayers;

            const offscreen = position === "left" ? -100 : 100;
            gsap.set([panel, ...preLayers], { xPercent: offscreen, opacity: 1 });
            if (preContainer) {
                gsap.set(preContainer, { xPercent: 0, opacity: 1 });
            }
            gsap.set([barTop, barMid, barBot], { transformOrigin: "50% 50%", y: 0, rotate: 0, scaleX: 1, opacity: 1 });
        });

        return () => ctx.revert();
    }, [position]);

    // Keep the closed-state color in sync (e.g. white at top of page, black once scrolled)
    // without re-running the layout effect, so an open panel is never reset.
    React.useEffect(() => {
        const btn = toggleBtnRef.current;
        if (btn && !openRef.current) {
            colorTweenRef.current?.kill();
            gsap.to(btn, { color: menuButtonColor, duration: 0.3, ease: "power2.out", overwrite: "auto" });
        }
    }, [menuButtonColor]);

    const buildOpenTimeline = useCallback(() => {
        const panel = panelRef.current;
        const layers = preLayerElsRef.current;

        if (!panel) {
            return null;
        }

        openTlRef.current?.kill();
        if (closeTweenRef.current) {
            closeTweenRef.current.kill();
            closeTweenRef.current = null;
        }

        const itemEls = Array.from(panel.querySelectorAll<HTMLElement>(".sm-panel-itemLabel"));
        const numberEls = Array.from(panel.querySelectorAll<HTMLElement>(".sm-panel-list[data-numbering] .sm-panel-item"));
        const socialTitle = panel.querySelector<HTMLElement>(".sm-socials-title");
        const socialLinks = Array.from(panel.querySelectorAll<HTMLElement>(".sm-socials-link"));

        const offscreen = position === "left" ? -100 : 100;

        if (itemEls.length) {
            gsap.set(itemEls, { yPercent: 140, rotate: 10 });
        }
        if (numberEls.length) {
            gsap.set(numberEls, { "--sm-num-opacity": 0 });
        }
        if (socialTitle) {
            gsap.set(socialTitle, { opacity: 0 });
        }
        if (socialLinks.length) {
            gsap.set(socialLinks, { y: 25, opacity: 0 });
        }

        const tl = gsap.timeline({ paused: true });

        layers.forEach((layer, index) => {
            tl.fromTo(layer, { xPercent: offscreen }, { xPercent: 0, duration: 0.45, ease: "power4.out" }, index * 0.07);
        });

        const layerEnd = layers.length ? (layers.length - 1) * 0.07 + 0.08 : 0;
        tl.fromTo(panel, { xPercent: offscreen }, { xPercent: 0, duration: 0.65, ease: "power4.out" }, layerEnd);

        if (itemEls.length) {
            const itemsStart = layerEnd + 0.12;
            tl.to(
                itemEls,
                {
                    yPercent: 0,
                    rotate: 0,
                    duration: 0.9,
                    ease: "power4.out",
                    stagger: { each: 0.08, from: "start" },
                },
                itemsStart
            );

            if (numberEls.length) {
                tl.to(
                    numberEls,
                    {
                        duration: 0.5,
                        ease: "power2.out",
                        "--sm-num-opacity": 1,
                        stagger: { each: 0.06, from: "start" },
                    },
                    itemsStart + 0.1
                );
            }
        }

        if (socialTitle || socialLinks.length) {
            const socialsStart = layerEnd + 0.3;
            if (socialTitle) {
                tl.to(socialTitle, { opacity: 1, duration: 0.45, ease: "power2.out" }, socialsStart);
            }
            if (socialLinks.length) {
                tl.to(
                    socialLinks,
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.55,
                        ease: "power3.out",
                        stagger: { each: 0.07, from: "start" },
                    },
                    socialsStart + 0.05
                );
            }
        }

        openTlRef.current = tl;
        return tl;
    }, [position]);

    const playOpen = useCallback(() => {
        if (busyRef.current) {
            return;
        }

        busyRef.current = true;
        const tl = buildOpenTimeline();

        if (tl) {
            tl.eventCallback("onComplete", () => {
                busyRef.current = false;
            });
            tl.play(0);
            return;
        }

        busyRef.current = false;
    }, [buildOpenTimeline]);

    const playClose = useCallback(() => {
        openTlRef.current?.kill();
        openTlRef.current = null;

        const panel = panelRef.current;
        const layers = preLayerElsRef.current;

        if (!panel) {
            return;
        }

        const offscreen = position === "left" ? -100 : 100;
        const all = [...layers, panel];

        closeTweenRef.current?.kill();
        closeTweenRef.current = gsap.to(all, {
            xPercent: offscreen,
            duration: 0.32,
            ease: "power3.in",
            overwrite: "auto",
            onComplete: () => {
                const itemEls = Array.from(panel.querySelectorAll<HTMLElement>(".sm-panel-itemLabel"));
                const numberEls = Array.from(panel.querySelectorAll<HTMLElement>(".sm-panel-list[data-numbering] .sm-panel-item"));
                const socialTitle = panel.querySelector<HTMLElement>(".sm-socials-title");
                const socialLinks = Array.from(panel.querySelectorAll<HTMLElement>(".sm-socials-link"));

                if (itemEls.length) {
                    gsap.set(itemEls, { yPercent: 140, rotate: 10 });
                }
                if (numberEls.length) {
                    gsap.set(numberEls, { "--sm-num-opacity": 0 });
                }
                if (socialTitle) {
                    gsap.set(socialTitle, { opacity: 0 });
                }
                if (socialLinks.length) {
                    gsap.set(socialLinks, { y: 25, opacity: 0 });
                }

                busyRef.current = false;
            },
        });
    }, [position]);

    const animateIcon = useCallback((opening: boolean) => {
        const barTop = barTopRef.current;
        const barMid = barMidRef.current;
        const barBot = barBotRef.current;

        if (!barTop || !barMid || !barBot) {
            return;
        }

        spinTweenRef.current?.kill();

        // Simple burger -> X morph: outer bars slide to center and rotate, middle bar fades out.
        const tl = gsap.timeline({
            defaults: { duration: opening ? 0.45 : 0.35, ease: opening ? "power3.out" : "power3.inOut" },
        });
        tl.to(barTop, { y: opening ? 6 : 0, rotate: opening ? 45 : 0 }, 0)
            .to(barMid, { opacity: opening ? 0 : 1, scaleX: opening ? 0 : 1 }, 0)
            .to(barBot, { y: opening ? -6 : 0, rotate: opening ? -45 : 0 }, 0);
        spinTweenRef.current = tl;
    }, []);

    const animateColor = useCallback(
        (opening: boolean) => {
            const btn = toggleBtnRef.current;

            if (!btn) {
                return;
            }

            colorTweenRef.current?.kill();

            if (changeMenuColorOnOpen) {
                const targetColor = opening ? openMenuButtonColor : menuButtonColor;
                colorTweenRef.current = gsap.to(btn, {
                    color: targetColor,
                    delay: 0.12,
                    duration: 0.28,
                    ease: "power2.out",
                });
                return;
            }

            gsap.set(btn, { color: menuButtonColor });
        },
        [changeMenuColorOnOpen, menuButtonColor, openMenuButtonColor]
    );

    const animateText = useCallback((opening: boolean) => {
        setMenuLabel(opening ? "Close" : "Menu");
    }, []);

    const toggleMenu = useCallback(() => {
        const nextOpen = !openRef.current;

        openRef.current = nextOpen;
        setOpen(nextOpen);

        if (nextOpen) {
            onMenuOpen?.();
            playOpen();
        } else {
            onMenuClose?.();
            playClose();
        }

        animateIcon(nextOpen);
        animateColor(nextOpen);
        animateText(nextOpen);
    }, [animateColor, animateIcon, animateText, onMenuClose, onMenuOpen, playClose, playOpen]);

    const closeMenu = useCallback(() => {
        if (!openRef.current) {
            return;
        }

        openRef.current = false;
        setOpen(false);
        onMenuClose?.();
        playClose();
        animateIcon(false);
        animateColor(false);
        animateText(false);
    }, [animateColor, animateIcon, animateText, onMenuClose, playClose]);

    React.useEffect(() => {
        if (!closeOnClickAway || !open) {
            return;
        }

        const handleClickOutside = (event: MouseEvent) => {
            const targetNode = event.target as Node | null;

            if (
                panelRef.current &&
                targetNode &&
                !panelRef.current.contains(targetNode) &&
                toggleBtnRef.current &&
                !toggleBtnRef.current.contains(targetNode)
            ) {
                closeMenu();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [closeMenu, closeOnClickAway, open]);

    return (
        <div
            className={`${styles.wrapper} ${isFixed ? styles.fixedWrapper : ""} ${className || ""}`}
            style={accentColor ? ({ ["--sm-accent" as string]: accentColor } as React.CSSProperties) : undefined}
            data-position={position}
            data-open={open || undefined}
        >
            <div ref={preLayersRef} className={styles.prelayers} aria-hidden="true">
                {(colors && colors.length ? colors.slice(0, 4) : ["#171b17", "#202521"]).map((color, index) => (
                    <div key={`prelayer-${index}`} className={styles.prelayer} style={{ background: color }} />
                ))}
            </div>

            <header className={styles.header} aria-label="Main navigation header">
                <button
                    ref={toggleBtnRef}
                    className={styles.toggle}
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    aria-controls="staggered-menu-panel"
                    onClick={toggleMenu}
                    type="button"
                >
                    <span style={{ fontWeight: 700, fontSize: 'inherit', lineHeight: 1, whiteSpace: 'nowrap', minWidth: '4.75rem', display: 'inline-block', color: 'inherit' }} aria-hidden="true">
                        <span ref={textInnerRef}>{menuLabel}</span>
                    </span>
                    <span ref={iconRef} className={styles.icon} aria-hidden="true">
                        <span ref={barTopRef} className={`${styles.iconLine} ${styles.iconLineTop}`} />
                        <span ref={barMidRef} className={`${styles.iconLine} ${styles.iconLineMid}`} />
                        <span ref={barBotRef} className={`${styles.iconLine} ${styles.iconLineBot}`} />
                    </span>
                </button>
            </header>

            <aside id="staggered-menu-panel" ref={panelRef} className={styles.panel} aria-hidden={!open}>
                <div className={styles.panelInner}>
                    <ul className={styles.panelList} role="list" data-numbering={displayItemNumbering || undefined}>
                        {items.length ? (
                            items.map((item, index) => (
                                <li className={styles.panelItemWrap} key={`${item.label}-${index}`}>
                                    <a className={styles.panelItem} href={item.link} aria-label={item.ariaLabel} data-index={index + 1} onClick={(e) => {
                                        e.preventDefault();
                                        closeMenu();
                                        navigateWithTransition(item.link);
                                    }}>
                                        <span className={styles.panelItemLabel}>{item.label}</span>
                                    </a>
                                </li>
                            ))
                        ) : (
                            <li className={styles.panelItemWrap} aria-hidden="true">
                                <span className={styles.panelItem}>
                                    <span className={styles.panelItemLabel}>No items</span>
                                </span>
                            </li>
                        )}
                    </ul>

                    {displaySocials && socialItems.length > 0 && (
                        <div className={styles.socials} aria-label="Social links">
                            <h3 className={styles.socialsTitle}>Socials</h3>
                            <ul className={styles.socialsList} role="list">
                                {socialItems.map((item, index) => (
                                    <li key={`${item.label}-${index}`} className={styles.socialsItem}>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.socialsLink}>
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </aside>
        </div>
    );
};

export default StaggeredMenu;