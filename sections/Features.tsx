import React from "react";
import FeatureCard from "@/components/FeatureCard";
import Image from "next/image";
import Avatar from "@/components/Avatar";

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

const Features = () => {
  return (
    <section className="py-18 px-10 md:px-24">
      <div className="container">
        <div className="flex justify-center items-center">
          <div className="inline-flex border border-indigo-500 gap-2 text-indigo-500 px-3 py-1 rounded-full uppercase items-center text-sm ">
            {" "}
            &#10038; Features
          </div>
        </div>
        <h2 className=" text-4xl md:text-6xl font-medium  text-center mt-6 max-w-2xl mx-auto">
          Place where power meets{" "}
          <span className="text-indigo-500">simplicity</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8 ">
          <FeatureCard
            className="md:col-span-2 lg:col-span-1"
            title="Real Time monitoring"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quia voluptatum placeat praesentium corporis quo ea explicabo deserunt ratione nobis."
          >
            <div className="aspect-video flex items-center justify-start">
              <Avatar>
                <Image
                  src="/avatar-ashwin-santiago.jpg"
                  alt="logo"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </Avatar>
              <Avatar>
                <Image
                  src="/avatar-lula-meyers.jpg"
                  alt="logo"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </Avatar>
              <Avatar>
                <Image
                  src="/avatar-owen-garcia.jpg"
                  alt="logo"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
              </Avatar>
            </div>
          </FeatureCard>
          <FeatureCard
            className="md:col-span-2 lg:col-span-1"
            title="Interactive prototyping"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quia voluptatum placeat praesentium corporis quo ea explicabo deserunt ratione nobis."
          >
            <div className="aspect-video flex flex-col gap-4 items-center justify-center">
              <p className="text-4xl font-extrabold text-white/20 text-cneter ">
                We help to achieve{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text ">
                  growth{" "}
                </span>
                for you 
              </p>
            </div>
          </FeatureCard>
          <FeatureCard
            className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto"
            title="Keyboard Actions"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quia voluptatum placeat praesentium corporis quo ea explicabo deserunt ratione nobis."
          >
            <div className="aspect-video flex items-center justify-center gap-4">
              <div className="size-14 bg-neutral-300 inline-flex items-center justify-center rounded-2xl text-xl text-neutral-950 font-medium">
                shift
              </div>
              <div className="size-14 bg-neutral-300 inline-flex items-center justify-center rounded-2xl text-xl text-neutral-950 font-medium">
                alt
              </div>
              <div className="size-14 bg-neutral-300 inline-flex items-center justify-center rounded-2xl text-xl text-neutral-950 font-medium">
                ctrl
              </div>
            </div>
          </FeatureCard>
        </div>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {features.map((feature) => (
            <div
              key={feature}
              className="bg-neutral-900 border border-white/10 p-6 rounded-2xl inline-flex px-3 py-1.5 gap-2 items-center "
            >
              <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center mr-2 text-xl">
                &#10038;
              </span>
              <span className="font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
