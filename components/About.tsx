import React from "react";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

const About = () => {
  return (
    <div id="about" className="py-10 mt-32 flex flex-col items-center">
      {" "}
      <h1 className="heading">
        About <span className="text-purple">Me</span>
      </h1>
      <div className="max-w-2xl text-center mt-10 p-4">
        <p>
          Hi! My name is Emma Shi and I am an <b>1A Computer Science</b> student
          at the
          <b> University of Waterloo!</b> I am passionate about all things
          related to technology, finance, and sports!
        </p>
      </div>
    </div>
  );
};

export default About;
