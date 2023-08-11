"use client";

import Image, { StaticImageData } from "next/image";
import React, { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";

type ProjectPropsType = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectPropsType) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      ref={ref}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="rounded-lg group-even:pl-8 relative bg-gray-100 max-w-[45rem] border border-black/5 overflow-hidden sm:pr-8 sm:h-[20rem] mb-3 sm:mb-8 last:mb-0 hover:bg-gray-200 transition">
        <div className="pt-4 py-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 w-1/2 flex flex-col h-full group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase  tracking-wider text-white rounded-full"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          className="absolute
        top-8
        -right-40
        w-[28.25rem]
        rounded-t-lg 
        shadow-2xl
        group-hover:scale-[1.04]
        group-even:right-[initial]
        group-even:-left-40 
        group-hover:-translate-x-3 
        group-hover:translate-y-3
        group-hover:-rotate-2 

        group-even:group-hover:translate-x-3 
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2 

        transition 
        "
          src={imageUrl}
          alt="project i worked on."
          quality={95}
        />
      </section>{" "}
    </motion.div>
  );
}