import { useEffect, useRef, useState } from "react";

export default function ImageSlider({
  images = [],
  interval = 4000,    // time each slide stays (ms)
  transitionMs = 700, // fade duration (ms)
  aspect = "16 / 9",  // change if you want a taller area, e.g., "4 / 3" or null for auto height
  rounded = 12,       // border radius (px)
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const total = images.length;

  // Preload to avoid flicker
  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [images]);

  // Autoplay
  useEffect(() => {
    if (total <= 1 || paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, interval);
    return () => clearInterval(id);
  }, [interval, paused, total]);

  // Touch swipe (mobile)
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const THRESHOLD = 40;
    if (dx > THRESHOLD) setIndex((i) => (i - 1 + total) % total);
    if (dx < -THRESHOLD) setIndex((i) => (i + 1) % total);
    touchStartX.current = null;
  };

  const containerStyle = {
    position: "relative",
    width: "100%",
    maxWidth: 720,                // tweak to fit your design
    aspectRatio: aspect || undefined,
    marginInline: "auto",
    overflow: "hidden",
    borderRadius: rounded,
    boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
    background: "#111",
  };

  const slideBase = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0,
    transition: `opacity ${transitionMs}ms ease`,
  };

  return (
    <div
      style={containerStyle}
      aria-roledescription="carousel"
      aria-label="Showcase images"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {images.map((src, i) => (
        <img
          key={src + i}
          src={src}
          alt={`Showcase ${i + 1}`}
          style={{ ...slideBase, opacity: i === index ? 1 : 0 }}
          className="hero-image" // keeps your existing styling hooks
        />
      ))}
    </div>
  );
}