const PAGE_BUBBLES = [
  {
    id: "p1",
    size: "h-10 w-10 sm:h-14 sm:w-14",
    position: "left-[4%] bottom-0",
    duration: "14s",
    delay: "-3s",
    drift: "26px",
    opacity: "0.85",
    hideMobile: false,
  },
  {
    id: "p2",
    size: "h-6 w-6 sm:h-8 sm:w-8",
    position: "left-[14%] bottom-0",
    duration: "11s",
    delay: "-7s",
    drift: "-20px",
    opacity: "0.8",
    hideMobile: false,
  },
  {
    id: "p3",
    size: "h-16 w-16 sm:h-24 sm:w-24",
    position: "left-[28%] bottom-0",
    duration: "19s",
    delay: "-11s",
    drift: "32px",
    opacity: "0.65",
    hideMobile: true,
  },
  {
    id: "p4",
    size: "h-8 w-8 sm:h-11 sm:w-11",
    position: "left-[48%] bottom-0",
    duration: "13s",
    delay: "-5s",
    drift: "-24px",
    opacity: "0.75",
    hideMobile: false,
  },
  {
    id: "p5",
    size: "h-12 w-12 sm:h-18 sm:w-18",
    position: "right-[26%] bottom-0",
    duration: "17s",
    delay: "-9s",
    drift: "28px",
    opacity: "0.7",
    hideMobile: true,
  },
  {
    id: "p6",
    size: "h-7 w-7 sm:h-9 sm:w-9",
    position: "right-[12%] bottom-0",
    duration: "12s",
    delay: "-2s",
    drift: "-18px",
    opacity: "0.85",
    hideMobile: false,
  },
  {
    id: "p7",
    size: "h-14 w-14 sm:h-20 sm:w-20",
    position: "right-[4%] bottom-0",
    duration: "16s",
    delay: "-13s",
    drift: "-26px",
    opacity: "0.75",
    hideMobile: false,
  },
  {
    id: "p8",
    size: "h-5 w-5 sm:h-7 sm:w-7",
    position: "left-[62%] bottom-0",
    duration: "10s",
    delay: "-6s",
    drift: "18px",
    opacity: "0.78",
    hideMobile: true,
  },
];

const HERO_BUBBLES = [
  {
    id: "b1",
    size: "h-12 w-12 sm:h-16 sm:w-16",
    position: "left-[6%] bottom-0",
    duration: "15s",
    delay: "-4s",
    drift: "22px",
    opacity: "0.82",
    hideMobile: false,
  },
  {
    id: "b2",
    size: "h-7 w-7 sm:h-10 sm:w-10",
    position: "left-[22%] bottom-0",
    duration: "12s",
    delay: "-8s",
    drift: "-16px",
    opacity: "0.75",
    hideMobile: false,
  },
  {
    id: "b3",
    size: "h-16 w-16 sm:h-22 sm:w-22",
    position: "left-[46%] bottom-0",
    duration: "18s",
    delay: "-2s",
    drift: "26px",
    opacity: "0.65",
    hideMobile: true,
  },
  {
    id: "b4",
    size: "h-10 w-10 sm:h-12 sm:w-12",
    position: "right-[14%] bottom-0",
    duration: "14s",
    delay: "-6s",
    drift: "-20px",
    opacity: "0.78",
    hideMobile: false,
  },
  {
    id: "b5",
    size: "h-14 w-14 sm:h-18 sm:w-18",
    position: "right-[4%] bottom-0",
    duration: "16s",
    delay: "-10s",
    drift: "-22px",
    opacity: "0.72",
    hideMobile: true,
  },
];

const ACCENT_BUBBLES = [
  {
    id: "a1",
    className: "top-6 right-8 h-10 w-10 sm:h-14 sm:w-14",
    duration: "6.5s",
    delay: "0s",
    drift: "12px",
  },
  {
    id: "a2",
    className: "bottom-10 left-4 h-7 w-7 sm:h-10 sm:w-10",
    duration: "8s",
    delay: "1.2s",
    drift: "-14px",
  },
  {
    id: "a3",
    className: "top-1/2 left-10 h-6 w-6 sm:h-8 sm:w-8",
    duration: "7s",
    delay: "2.4s",
    drift: "10px",
  },
];

export default function WaterBubbles({ variant = "hero" }) {
  if (variant === "cta") {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {ACCENT_BUBBLES.map((bubble) => (
          <span
            key={bubble.id}
            className={`trayo-bubble-static absolute opacity-55 ${bubble.className}`}
            style={{
              "--bubble-duration": bubble.duration,
              "--bubble-delay": bubble.delay,
              "--bubble-drift": bubble.drift,
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === "page") {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
      >
        {PAGE_BUBBLES.map((bubble) => (
          <span
            key={bubble.id}
            className={`trayo-bubble absolute ${bubble.size} ${bubble.position} ${
              bubble.hideMobile ? "hidden sm:block" : ""
            }`}
            style={{
              "--bubble-duration": bubble.duration,
              "--bubble-delay": bubble.delay,
              "--bubble-drift": bubble.drift,
              "--bubble-opacity": bubble.opacity,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {HERO_BUBBLES.map((bubble) => (
        <span
          key={bubble.id}
          className={`trayo-bubble absolute ${bubble.size} ${bubble.position} ${
            bubble.hideMobile ? "hidden sm:block" : ""
          }`}
          style={{
            "--bubble-duration": bubble.duration,
            "--bubble-delay": bubble.delay,
            "--bubble-drift": bubble.drift,
            "--bubble-opacity": bubble.opacity,
          }}
        />
      ))}
    </div>
  );
}
