"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface ImageItem {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  autoPlayMs?: number;
}

export default function ImageCarousel({
  autoPlayMs = 4200,
}: ImageCarouselProps) {
  const images: ImageItem[] = [
    { src: "/1.jpeg", alt: "Bright hospital atrium" },
    { src: "/2.jpeg", alt: "Recovery room" },
    { src: "/3.jpeg", alt: "Modern hospital ward" },
    { src: "/4.jpeg", alt: "NICU care area" },
  ];

  const total = images.length;

  const [current, setCurrent] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [reduceMotion, setReduceMotion] = useState<boolean>(false);

  const regionRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");

    setReduceMotion(mq.matches);
    setIsPlaying(!mq.matches);

    const handler = (e: MediaQueryListEvent) => {
      setReduceMotion(e.matches);
      setIsPlaying(!e.matches);
    };

    if (mq.addEventListener) {
      mq.addEventListener("change", handler);
    } else {
      mq.addListener(handler);
    }

    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener("change", handler);
      } else {
        mq.removeListener(handler);
      }
    };
  }, []);

  const goTo = useCallback(
    (index: number) => {
      setCurrent(((index % total) + total) % total);
    },
    [total]
  );

  const next = useCallback(() => {
    goTo(current + 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo(current - 1);
  }, [current, goTo]);

  useEffect(() => {
    if (!isPlaying || reduceMotion) return;

    intervalRef.current = setInterval(next, autoPlayMs);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, reduceMotion, next, autoPlayMs]);

  const pause = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resume = () => {
    if (!isPlaying || reduceMotion) return;

    pause();
    intervalRef.current = setInterval(next, autoPlayMs);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>
  ): void => {
    switch (e.key) {
      case "ArrowRight":
        e.preventDefault();
        next();
        break;

      case "ArrowLeft":
        e.preventDefault();
        prev();
        break;

      case "Home":
        e.preventDefault();
        goTo(0);
        break;

      case "End":
        e.preventDefault();
        goTo(total - 1);
        break;
    }
  };

  const handleTouchStart = (
    e: React.TouchEvent<HTMLDivElement>
  ): void => {
    touchStartX.current = e.touches[0].clientX;
    pause();
  };

  const handleTouchEnd = (
    e: React.TouchEvent<HTMLDivElement>
  ): void => {
    if (touchStartX.current === null) return;

    const dx = e.changedTouches[0].clientX - touchStartX.current;

    if (Math.abs(dx) > 40) {
      if (dx < 0) {
        next();
      } else {
        prev();
      }
    }

    touchStartX.current = null;
    resume();
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-6 py-12">
      {/* Header */}
      <div className="mb-8 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-600">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-600" />
            Facility gallery
          </p>

          <h2 className="text-3xl font-bold text-cyan-700 sm:text-4xl">
            A closer look at our wards
          </h2>
        </div>

        <button
          type="button"
          onClick={() => setIsPlaying((prev) => !prev)}
          aria-pressed={isPlaying}
          aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-cyan-200 bg-white text-cyan-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
        >
          {isPlaying ? (
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="currentColor"
            >
              <path d="M7 4l13 8-13 8V4z" />
            </svg>
          )}
        </button>
      </div>

      {/* Carousel */}
      <div
        ref={regionRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Facility image gallery"
        className="relative"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onFocus={pause}
        onBlur={resume}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Previous */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-cyan-200 bg-white/90 p-3 text-cyan-700 shadow-lg backdrop-blur transition hover:scale-105"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div
          className="relative h-[360px] sm:h-[460px]"
          style={{ perspective: "1600px" }}
        >
          <div
            className="relative h-full w-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            {images.map((img, i) => {
              let d = i - current;

              if (d > total / 2) d -= total;
              if (d < -total / 2) d += total;

              const abs = Math.abs(d);
              const x = d * 210 * 0.62;
              const y = abs === 0 ? 0 : abs * 10;
              const rotY = reduceMotion ? 0 : -d * 30;
              const scale = Math.max(0.72, 1 - abs * 0.14);
              const z = -abs * 150;
              const opacity = abs > 2 ? 0 : Math.max(0, 1 - abs * 0.3);
              const blur = reduceMotion ? 0 : Math.min(abs * 1.4, 4);

              return (
                <div
                  key={img.src}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${total}`}
                  tabIndex={d === 0 ? 0 : -1}
                  onClick={() => {
                    if (i !== current) goTo(i);
                  }}
                  className={`absolute left-1/2 top-1/2 h-[300px] w-[250px] -ml-[125px] -mt-[150px] cursor-pointer overflow-hidden rounded-3xl border border-white/60 bg-white transition-[transform,opacity,filter,box-shadow] duration-700 ease-[cubic-bezier(0.22,0.9,0.32,1)] sm:h-[390px] sm:w-[320px] sm:-ml-[160px] sm:-mt-[195px] ${
                    d === 0
                      ? "shadow-[0_36px_80px_-18px_rgba(8,145,178,0.38)] ring-1 ring-cyan-300/60"
                      : "shadow-[0_22px_46px_-16px_rgba(8,145,178,0.24)]"
                  }`}
                  style={{
                    transform: `translate3d(${x}px, ${y}px, ${z}px) rotateY(${rotY}deg) scale(${scale})`,
                    opacity,
                    filter: `blur(${blur}px)`,
                    zIndex: 100 - abs,
                    pointerEvents: abs > 2 ? "none" : "auto",
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    draggable={false}
                    className="h-full w-full object-cover"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Next */}
        <button
          type="button"
          onClick={next}
          aria-label="Next slide"
          className="absolute right-0 top-1/2 z-20 -translate-y-1/2 rounded-full border border-cyan-200 bg-white/90 p-3 text-cyan-700 shadow-lg backdrop-blur transition hover:scale-105"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>

      <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />

      <div className="flex flex-wrap items-center justify-between gap-4">
        <ul role="tablist" aria-label="Choose slide" className="flex gap-2">
          {images.map((img, i) => (
            <li key={img.src}>
              <button
                type="button"
                role="tab"
                aria-current={i === current}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-8 bg-cyan-600"
                    : "w-2.5 bg-cyan-300"
                }`}
              />
            </li>
          ))}
        </ul>

        <p className="font-mono text-xs text-cyan-700/80">
          <span className="font-semibold text-cyan-700">
            {String(current + 1).padStart(2, "0")}
          </span>{" "}
          / {String(total).padStart(2, "0")}
        </p>
      </div>

      <p className="sr-only" role="status" aria-live="polite">
        Slide {current + 1} of {total}
      </p>
    </div>
  );
}