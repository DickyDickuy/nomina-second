"use client";

import * as React from "react";
import { Gallery, GalleryGrid, GalleryImage } from "@/components/ui/shared-element-gallery";

const IMAGES = [
  { id: "1", src: "https://cdn.21st.dev/assets/mirror/80/80494ef454ff9a2fe026aa0312f355a273483a486f895570ff793ce5356b4abe.webp" },
  { id: "2", src: "https://cdn.21st.dev/assets/mirror/4f/4f0bb0ca11b70554ffaf2c82c8773b7c7b7c52e0d0267401f59c2dcac16952f0.jpg" },
  { id: "3", src: "https://cdn.21st.dev/assets/mirror/bb/bbec5c06a0146890a122307c9e5e791cf4cd07f73602b3dc630d08ed519be1c3.jpg" },
  { id: "4", src: "https://cdn.21st.dev/assets/mirror/e2/e29225e73e6dbe6c6f8cec2806a669e786e74aa9e4ada0c00b546234f230d5ed.webp" },
  { id: "5", src: "https://cdn.21st.dev/assets/mirror/e6/e6f485b1032af96ea11fbfc8f8c7f995152df6a00c1ad0677586298fbab7324f.jpg" },
  { id: "6", src: "https://cdn.21st.dev/assets/mirror/aa/aa240283d3ed9e7b982370191092928e70e54c350e0c66926d96b6d834296b8b.webp" },
  { id: "7", src: "https://cdn.21st.dev/assets/mirror/c6/c61c22d5bb029bbdd6f364575a5bd7c8b03e3b193e3f04d53c36bfd25fae0801.jpg" },
  { id: "8", src: "https://cdn.21st.dev/assets/mirror/8b/8b86448dbaf666b17fabb7ab642ee761be9c06ab48a10b55e5270beac537e617.jpg" },
  { id: "9", src: "https://cdn.21st.dev/assets/mirror/d8/d861295f84e4816a7f8cf3acfac326c5f5eedb050c876f448ee8281655d144ba.jpg" },
  { id: "10", src: "https://cdn.21st.dev/assets/mirror/e1/e11c5aeebba2e20efde848a13fcef3ffc6c344fae45a34d38d85b2261d6c1268.jpg" },
  { id: "11", src: "https://cdn.21st.dev/assets/mirror/d8/d817868dc56b92849b43c75e8e210b9b09744cfeea774525c6fcd49b55a77658.webp" },
  { id: "12", src: "https://cdn.21st.dev/assets/mirror/ed/ed5e362d625a205bc2d85af3653e44cb814e44153e997fd2d54a06ab0ede1395.webp" },
];

export default function GalleryDemo() {
  // Fix for app.tsx infrastructure horizontal scrolling
  React.useEffect(() => {
    document.documentElement.style.overflowX = "hidden";
    document.body.style.overflowX = "hidden";
    return () => {
      document.documentElement.style.overflowX = "";
      document.body.style.overflowX = "";
    };
  }, []);

  return (
    <div className="w-full self-start min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <header className="mb-16 space-y-4">
          <h1 className="text-5xl font-bold tracking-tight text-primary">
            Curated Spaces
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A premium photo experience with seamless shared-element transitions. 
            Tap any image to expand, drag vertically to dismiss.
          </p>
        </header>

        <Gallery>
          <GalleryGrid>
            {IMAGES.map((image) => (
              <GalleryImage 
                key={image.id} 
                id={image.id} 
                src={image.src} 
                alt={`Premium photography ${image.id}`} 
              />
            ))}
          </GalleryGrid>
        </Gallery>
      </div>
    </div>
  );
}
