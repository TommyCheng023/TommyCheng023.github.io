"use client";

import {
  type CSSProperties,
  type ElementType,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type RevealOnScrollProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

export default function RevealOnScroll({
  as: Component = "div",
  children,
  className,
  delay = 0,
  id,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const style = {
    "--reveal-delay": `${delay}ms`,
  } as CSSProperties;

  return (
    <Component
      ref={ref}
      id={id}
      className={[
        "reveal",
        isVisible ? "reveal-visible" : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={style}
    >
      {children}
    </Component>
  );
}
