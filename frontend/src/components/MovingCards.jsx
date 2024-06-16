"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

export const InfiniteMovingCards = ({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  // Hardcoded testimonies of students and parents with sample images
  const testimonies = [
    {
      quote:
        "My daughter's confidence has soared since joining VOPA. She now enjoys reading aloud and participating in class activities.",
      name: "Jane Doe",
      title: "Parent",
      image: "https://static.vecteezy.com/system/resources/previews/001/609/739/large_2x/indian-girl-face-avatar-cartoon-free-vector.jpg",
    },
    {
      quote:
        "As a student, VOPA has provided me with invaluable opportunities to improve my communication skills and gain confidence in public speaking.",
      name: "Joanna Smith",
      title: "Student",
      image: "https://media.istockphoto.com/id/1211708821/vector/beauty-young-indian-woman-portraits-expression-face-comic-arab-girl-head-avatar-cartoon.jpg?s=612x612&w=0&k=20&c=0QiqwXwH2veHbf-rcS4258BoIpFaWs7wh7oyIaoD1-E=",
    },
    {
      quote:
        "VOPA's supportive environment has helped my child excel academically and socially. I'm grateful for the positive impact it has had on our family.",
      name: "Mark Johnson",
      title: "Parent",
      image: "https://static.vecteezy.com/system/resources/previews/001/609/747/large_2x/man-face-avatar-cartoon-free-vector.jpg",
    },
  ];

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:animation-play-state:paused"
        )}
      >
        {testimonies.map((item, idx) => (
          <li
            key={idx}
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
            }}
          >
            {item.image && (
              <div className="mb-4">
                <img
                  src={item.image}
                  alt={`${item.name}'s picture`}
                  className="rounded-full w-24 h-24 object-cover mx-auto mb-2"
                />
              </div>
            )}
            <blockquote>
              <span className="relative z-20 text-sm leading-[1.6] text-black-800 dark:text-gray-100 font-normal">
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span className="text-sm leading-[1.6] text-black dark:text-gray-400 font-normal">
                    {item.name}
                  </span>
                  <span className="text-sm leading-[1.6] text-black dark:text-gray-400 font-normal">
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
