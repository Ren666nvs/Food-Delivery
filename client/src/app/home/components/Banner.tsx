"use client";

import Image from "next/image";

export default function Banner() {
  return (
    <div
      className="relative mt-4 rounded-xl overflow-hidden shadow-lg"
      style={{
        width: "1440px",  // Custom width
        height: "570px",  // Custom height
        top: "68px",      // Custom top position
      }}
    >
      <Image
        src="/images/BG.jpg"
        alt="Banner"
        layout="fill"   // This will make the image fill the container
        objectFit="cover"  // Ensures the image covers the div area without stretching
      />
    </div>
  );
}
