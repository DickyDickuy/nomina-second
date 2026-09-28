"use client";

import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const INITIAL_OVERVIEW_COORDS: [number, number] = [-6.2297, 106.8095];
const NOMINA_COORDS: [number, number] = [-6.2562171, 106.8246734];
const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=-6.2562171,106.8246734";

const nominaPinIcon = L.divIcon({
  className: "nomina-custom-marker",
  html: `
    <div class="nomina-pin-wrapper" aria-label="NOMINA Creative Studio Marker">
      <span class="nomina-pin-pulse"></span>
      <div class="nomina-pin-core">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#FFFFFF"/>
        </svg>
      </div>
    </div>
  `,
  iconSize: [56, 56],
  iconAnchor: [28, 28],
  popupAnchor: [0, -26],
});

function ViewportFlyController({
  markerRef,
}: {
  markerRef: React.RefObject<L.Marker | null>;
}) {
  const map = useMap();
  const hasFlownRef = useRef(false);

  useEffect(() => {
    let isMounted = true;
    const invalidateTimer = setTimeout(() => {
      if (isMounted) map.invalidateSize();
    }, 150);

    const handleResize = () => {
      map.invalidateSize();
    };
    window.addEventListener("resize", handleResize);

    const handleMoveEnd = () => {
      if (!isMounted) return;
      map.invalidateSize({ pan: false });
      markerRef.current?.openPopup();
    };

    const container = map.getContainer();
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasFlownRef.current) {
          hasFlownRef.current = true;
          map.invalidateSize();
          const reduceMotion =
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

          if (reduceMotion) {
            map.setView(NOMINA_COORDS, 16, { animate: false });
            markerRef.current?.openPopup();
          } else {
            map.once("moveend", handleMoveEnd);
            map.flyTo(NOMINA_COORDS, 16, {
              animate: true,
              duration: 1.8,
            });
          }
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(container);

    return () => {
      isMounted = false;
      clearTimeout(invalidateTimer);
      map.off("moveend", handleMoveEnd);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, [map, markerRef]);

  return null;
}

export default function NominaMapInner() {
  const markerRef = useRef<L.Marker | null>(null);

  return (
    <div className="nomina-leaflet-wrapper">
      <MapContainer
        center={INITIAL_OVERVIEW_COORDS}
        zoom={12}
        scrollWheelZoom={false}
        className="nomina-leaflet-map"
        style={{ width: "100%", height: "100%", minHeight: "500px", borderRadius: "8px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ViewportFlyController markerRef={markerRef} />
        <Marker position={NOMINA_COORDS} icon={nominaPinIcon} ref={markerRef}>
          <Popup className="nomina-leaflet-popup" maxWidth={280}>
            <div className="nomina-map-popup">
              <span className="nomina-map-popup-badge">South Jakarta Studio</span>
              <strong className="nomina-map-popup-title">NOMINA Creative</strong>
              <p className="nomina-map-popup-address">
                Jl. Kemang Utara X Jl. Melati No.2C, RT.2/RW.1, Duren Tiga, Kec. Pancoran, Kota Jakarta Selatan, DKI Jakarta 12760
              </p>
              <a
                href={DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="nomina-directions-btn"
              >
                Get Directions ↗
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
