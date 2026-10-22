"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./GallerySlider.module.css";

export interface GalleryItem {
  src: string;
  alt: string;
}

interface GallerySliderProps {
  items: GalleryItem[];
  autoPlay?: boolean;
  interval?: number; // ms
}

export default function GallerySliderNew({
  items,
  autoPlay = true,
  interval = 3000,
}: GallerySliderProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = items.length;
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  // loop forward: last -> first
  const next = useCallback(() => setActive((i) => (i + 1) % total), [total]);
  // loop backward: first -> last
  const prev = useCallback(
    () => setActive((i) => (i - 1 + total) % total),
    [total]
  );

  useEffect(() => {
    if (!autoPlay || paused || total < 2) return;
    timer.current = setInterval(next, interval);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [autoPlay, paused, interval, next, total]);

  // position of a slide relative to the active one (0 = active)
  const getPosition = (index: number) => (index - active + total) % total;

  const getClass = (pos: number) => {
    if (pos === 0) return styles.active; // big front image
    if (pos === 1) return styles.next; // peeks on the right
    if (pos === total - 1) return styles.prev; // moves up / behind
    return styles.hidden;
  };

  return (
    <div
      className={styles.wrapper}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.stage}>
        {items.map((item, index) => {
          const pos = getPosition(index);
          return (
            <div
              key={item.src}
              className={`${styles.slide} ${getClass(pos)}` }
              onClick={() => pos === 1 && next()}
              aria-hidden={pos !== 0}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.img}
                priority={index === 0}
              />
            </div>
          );
        })}
      </div>

      <div className={styles.controls}>
        <button type="button" onClick={prev} aria-label="Previous image">
          ‹
        </button>
        <div className={styles.dots}>
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to image ${i + 1}`}
              className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
        <button type="button" onClick={next} aria-label="Next image">
          ›
        </button>
      </div>
    </div>
  );
}