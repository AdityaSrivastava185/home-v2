import React from "react";
import Image from "next/image";
import IntegrationsColumn from "@/components/IntegrationsColumn";
const integrations = [
  {
    name: "Figma",
    icon: "/figma-logo.svg",
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: "/notion-logo.svg",
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: "/slack-logo.svg",
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: "/relume-logo.svg",
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    icon: "/framer-logo.svg",
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "GitHub",
    icon: "/github-logo.svg",
    description: "GitHub is the leading platform for code collaboration.",
  },
];

export type IntegrationsType = typeof integrations;

const Integrations = () => {
  return (
    <section className="py-24 overflow-hidden md:px-24 px-10">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16 ">
          <div>
            <div className="flex justify-center items-center">
              <div className="inline-flex border border-lime-400 gap-2 text-lime-400 px-3 py-1 rounded-full uppercase items-center text-sm ">
                {" "}
                &#10038; Integrations
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-6xl font-medium mt-6">
              Place well with <span className="text-lime-400">others</span>
            </h2>
            <p className="text-white/50 mt-4 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              temporibus quibusdam porro tempore dolores molestias voluptates
              delectus aut itaque inventore!
            </p>

            <div className=" lg:mt-0 mt-8 h-[400px] lg:h-[800px] overflow-hidden grid md:grid-cols-2 gap-4  [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              <IntegrationsColumn integrations={integrations} />
              <IntegrationsColumn
              reverse
                integrations={integrations.slice().reverse()}
                className="hidden md:flex "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
