"use client";

import { useEffect, useRef, useState } from "react";

// Subtle entrance motion for hero and section content. The transition
// itself is gated behind `motion-safe:`, so prefers-reduced-motion users
// still get the content — just without the animated fade/slide.
export default function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
      className={`motion-safe:transition motion-safe:duration-700 motion-safe:ease-out ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 motion-safe:translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}
