import Image, { StaticImageData } from "next/image";
import React from "react";

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
  return (
    <section className="relative bg-gray-100 max-w-[45rem] border border-black/5 overflow-hidden sm:pr-8 sm:h-[20rem] mb-3 sm:mb-8 last:mb-0">
      <div className="py-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 w-1/2 flex flex-col h-full">
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
        className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl "
        src={imageUrl}
        alt="project i worked on."
        quality={95}
      />
    </section>
  );
}
