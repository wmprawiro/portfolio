"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";

interface ScrambleTextProps {
  text: string;
  className?: string;
}

export function ScrambleText({ text, className = "" }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scramble = useCallback(() => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    // Kecepatan seimbang: teks pendek tetap punya durasi animasi yang asik,
    // tapi teks panjang dilimit maksimal sekitar 1.5 detik
    const step = Math.max(0.5, text.length / 50); 

    intervalRef.current = setInterval(() => {
      setDisplayText((current) =>
        text
          .split("")
          .map((letter, index) => {
            if (letter === " ") return letter;
            if (index < iteration) {
              return text[index];
            }
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplayText(text);
      }
      
      iteration += step;
    }, 30); // Kembali ke 30ms agar gerakannya tetap terbaca
  }, [text]);

  // Run once on mount
  useEffect(() => {
    scramble();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [scramble]);

  const handleMouseEnter = () => {
    scramble();
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setDisplayText(text);
  };

  return (
    <span
      className={className}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {displayText}
    </span>
  );
}
