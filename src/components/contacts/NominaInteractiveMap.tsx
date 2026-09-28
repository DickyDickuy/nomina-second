"use client";

import dynamic from "next/dynamic";

const NominaMapInner = dynamic(
  () => import("@/components/contacts/NominaMapInner"),
  {
    ssr: false,
    loading: () => (
      <div
        className="nomina-leaflet-skeleton"
        style={{
          width: "100%",
          height: "100%",
          minHeight: "500px",
          borderRadius: "8px",
          background: "#232326",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "rgba(255, 255, 255, 0.65)",
          fontSize: "14px",
          letterSpacing: "0.04em",
        }}
      >
        Loading Interactive Map...
      </div>
    ),
  }
);

export default function NominaInteractiveMap() {
  return <NominaMapInner />;
}
