import { StaticImageData } from "next/image";
import React from "react";

type projectPropsType = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData;
};

export default function Project() {
  return <div>Project</div>;
}
