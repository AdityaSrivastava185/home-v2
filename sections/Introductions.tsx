"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

const text = `lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. `;

const words = text.split(" ");

const Introductions = () => {
  const scrollTarget = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollTarget,
    offset: ["start end", "end end"],
  });
  const [currentWord, setCurrentWord] = useState(0);
  const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

  useEffect(() => {
    wordIndex.on("change", (latest) => {
      setCurrentWord(latest);
    });
  }, [wordIndex]);

  return (
    <section className="py-18 lg:py-24 md:px-24 px-10 ">
      <div className="container">
        <div className="sticky top-28">
          <div className="flex justify-center items-center">
            <div className="inline-flex border border-lime-400 gap-2 text-lime-400 px-3 py-1 rounded-full uppercase items-center text-sm ">
              {" "}
              &#10038; Introducing EZEBUDDIES
            </div>
          </div>
          <div className="text-3xl text-center font-medium mt-10 md:text-6xl">
            <span>
              Your Organinizarion need btter and customized devices to work
            </span>
            <span className="text-white/15">
              {words.map((word, wordIndex) => (
                <span
                  key={wordIndex}
                  className={
                    wordIndex < currentWord ? "transition duration-500 text-white" : ""
                  }
                >{`${word} `}</span>
              ))}
            </span>
            <span className="text-lime-400 block">
              That&apos;s why we created EZEBUDDIES
            </span>
          </div>
        </div>
        <div className="h-[150vh]" ref={scrollTarget}></div>
      </div>
    </section>
  );
};

export default Introductions;
