import React from "react";
import Image from "next/image"; // For handling images

const About = () => {
  return (
    <div id="about" className="py-10 mt-32 flex flex-col items-center">
      <h1 className="heading">
        About <span className="text-purple">Me</span>
      </h1>
      <div className="relative flex flex-col items-center mt-10">
        {/* Circle Mask for Headshot */}
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white relative">
          <Image
            src="/Grad.png" // Replace with the path to your headshot image
            alt="Headshot"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
        <div className="max-w-2xl text-center mt-10 p-4">
          <p>
            Hi! My name is Emma Shi and I am an <b>1A Computer Science</b>{" "}
            student at the <b>University of Waterloo!</b> I am passionate about
            all things related to technology, finance, and sports!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
