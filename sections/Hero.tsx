"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";
import cursorYou from "@/assets/cursor-you.svg";
import { useRouter } from "next/navigation";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `Impactful Devices Created  `;
const herodescription = `You can design and manufacture devices with ease, without the need for complex engineering knowledge with our AI-powered platform.`;

const Hero = () => {
  const router = useRouter();
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: [1], duration: 1 }],
    ]);
    rightDesignAnimate([
      [rightDesignScope.current, { opacity: [1], duration: 1 }],
    ]);
  }, [
    leftDesignAnimate,
    rightDesignAnimate,
    leftDesignScope,
    rightDesignScope,
  ]);
  return (
    <section
      className="pt-20 pb-24 px-4 md:px-8 lg:px-12 overflow-x-clip bg-gradient-to-tl from-[#100a2e] to-[#000000] bg-opacity-95 md:bg-none md:min-h-screen [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{ cursor: `url(${cursorYou.src}), auto` }}
    >
      <div className="relative max-w-screen-xl mx-auto">
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100, x: -100 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute -left-36 top-10 hidden xl:block"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1674624682288-085eff4f98da?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="left visual"
            width={320}
            height={320}
            className="rounded-3xl"
          />
        </motion.div>

        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, y: 100, x: 100 }}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute -right-36 -top-16 hidden xl:block"
        >
          <img
            src="https://images.unsplash.com/photo-1657924170499-3dceeecdbdec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGFncmljdWx0dXJlJTIwaW90fGVufDB8fDB8fHww"
            alt="right visual"
            width={400}
            height={400}
            className="rounded-3xl"
          />
        </motion.div>

        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 text-neutral-950 font-semibold rounded-full">
            ✨7.4M seed round raised
          </div>
        </div>
        <h1 className="hidden md:block text-5xl md:text-6xl lg:text-7xl font-medium text-center mt-6 mx-auto max-w-4xl z-10 relative">
          Impactful Devices <br /> Created Effortlessly
        </h1>

        <TextGenerateEffect
          className="block md:hidden text-5xl md:text-6xl lg:text-7xl font-medium text-center mt-6 mx-auto max-w-4xl z-10 relative"
          words={words}
        />

        <motion.p
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-center text-lg md:text-xl text-white/50 mt-6 max-w-2xl mx-auto z-10 relative"
        >
          {herodescription}
        </motion.p>

        <div className="flex justify-center mt-8 z-10 relative px-4">
          <button
            type="button"
            onClick={() => router.push("/products")}
            className="w-full sm:w-auto text-white bg-gradient-to-r from-indigo-600 via-indigo-600 to-indigo-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-2xl text-base sm:text-sm text-center me-2 whitespace-nowrap px-6 sm:px-10 py-3 cursor-pointer"
          >
            Explore Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
