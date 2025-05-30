"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";
import cursorYou from "@/assets/cursor-you.svg"

const Hero = () => {
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
    <section className=" pt-19 pb-24 px-4 md:px-0 overflow-x-clip" style={{
      cursor:`url(${cursorYou.src}) , auto`
    }}>
      <div className="container relative">
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, y: 100 , x:-100 }}
          animate={{ opacity: 1, y: 0 , x:0 }}
          transition={{ duration: 1 }}
          className="absolute -left-32 top-10 hidden lg:block"
        >
          <img
            src="https://plus.unsplash.com/premium_photo-1674624682288-085eff4f98da?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="logo"
            width={400}
            height={400}
            className="rounded-3xl"
          />
        </motion.div>
        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, y: 100 , x:100 }}
          animate={{ opacity: 1, y: 0 , x:0 }}
          transition={{ duration: 1 }}
          className="absolute -right-64 -top-16 hidden lg:block "
        >
          <img
            src="https://images.unsplash.com/photo-1657924170499-3dceeecdbdec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fGFncmljdWx0dXJlJTIwaW90fGVufDB8fDB8fHww"
            alt="logo"
            width={500}
            height={500}
            className="rounded-3xl"
          />
        </motion.div>
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 text-neutral-950 font-semibold rounded-full">
            ✨7.4M seed round raised
          </div>
        </div>
        <h1 className="text-6xl font-medium lg:text-8xl text-center mt-6 md:text-7xl mx-auto">
          Impactful Devices <br /> Created Effortlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          You can design and manufacture devices with ease, without the need for
          complex engineering knowledge with our ai powered platform.
        </p>
        <form
          action=""
          className="flex border border-white/15 rounded-full p-2 mt-8 justify-between max-w-lg mx-auto gap-2 items-center"
        >
          <Input
            className="rounded-full bg-transparent px-4 felx-1"
            type="email"
            placeholder="Enter your email"
          />
          <Button className="border rounded-full px-6 font-medium bg-indigo-500 text-white border-indigo-500 whitespace-nowrap h-10">
            Get Started
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Hero;
