"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
}
export const Meteors = ({ number = 20 }: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([]);
  const [width, setWidth] = useState(0);

  // Set up window resizing for responsiveness
  useEffect(() => {
    // Only calculate window width when running in the browser
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth * 0.75);
      const handleResize = () => setWidth(window.innerWidth * 0.75);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    const styles = [...new Array(number)].map(() => ({
      top: -5,
      left: Math.floor(Math.random() * width) + "px",
      animationDelay: Math.random() * 1 + 0.2 + "s",
      animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
    }));
    setMeteorStyles(styles);
  }, [number, width]); // Re-run when width changes

  return (
    <>
      <div className="hidden lg:block"> {/* Hide on small screens, show on large screens */}
        {[...meteorStyles].map((style, idx) => (
          // Meteor Head
          <span
            key={idx}
            className={cn(
              "pointer-events-none absolute left-1/2 top-1/2 size-0.5 rotate-[215deg] animate-meteor rounded-full bg-black shadow-[0_0_0_1px_#ffffff10]",
            )}
            style={style}
          >
            {/* Meteor Tail */}
            <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-black to-transparent" />
          </span>
        ))}
      </div>
    </>
  );
};

export default Meteors;
