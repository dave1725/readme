"use client";
import React, { useMemo, useState, useEffect } from "react";

const Background = () => {
  const [isClient, setIsClient] = useState(false);

  // Ensure we're on the client side to avoid hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Generate stars once to prevent flickering on re-renders
  const stars = useMemo(() => {
    if (!isClient) return [];
    
    return Array.from({ length: 200 }, (_, index) => ({
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.8 + 0.2,
      animationDelay: Math.random() * 5
    }));
  }, [isClient]);

  return (
    <div className="fixed inset-0 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black z-[-1]">
      {isClient && stars.map((star) => {
        const glowSize = star.size * 1;

        return (
          <div
            key={star.id}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.y}%`,
              left: `${star.x}%`,
              opacity: star.opacity,
              boxShadow: `0 0 ${glowSize}px rgba(255, 255, 255, 0.8)`,
              animationDelay: `${star.animationDelay}s`
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Background;
