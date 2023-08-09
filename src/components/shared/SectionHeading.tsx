import React from "react";

type sectionHeadingPropsType = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: sectionHeadingPropsType) {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">
      {children}
    </h2>
  );
}
