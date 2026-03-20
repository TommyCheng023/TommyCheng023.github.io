"use client";

import { type ReactNode, useRef } from "react";

type MobileCardCarouselProps = {
  ariaLabel: string;
  children: ReactNode[];
};

export default function MobileCardCarousel({
  ariaLabel,
  children,
}: MobileCardCarouselProps) {
  const trackRef = useRef<HTMLDivElement | null>(null);

  function scrollByCard(direction: "prev" | "next") {
    const track = trackRef.current;

    if (!track) {
      return;
    }

    const firstCard = track.querySelector<HTMLElement>(".mobileCarouselSlide");
    const cardWidth = firstCard?.offsetWidth ?? track.clientWidth;
    const gap = 16;
    const delta = direction === "next" ? cardWidth + gap : -(cardWidth + gap);

    track.scrollBy({ left: delta, behavior: "smooth" });
  }

  return (
    <div className="mobileCarouselShell" aria-label={ariaLabel}>
      <div ref={trackRef} className="mobileCarouselTrack">
        {children.map((child, index) => (
          <div key={index} className="mobileCarouselSlide">
            {child}
          </div>
        ))}
      </div>
      <div className="mobileCarouselControls">
        <button
          type="button"
          className="mobileCarouselButton"
          onClick={() => scrollByCard("prev")}
          aria-label="Previous card"
        >
          &lt;
        </button>
        <button
          type="button"
          className="mobileCarouselButton"
          onClick={() => scrollByCard("next")}
          aria-label="Next card"
        >
          &gt;
        </button>
      </div>
    </div>
  );
}
