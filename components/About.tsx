import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="py-10 mt-32 flex flex-col items-center">
      <h1 className="heading">
        About <span className="text-purple">Me</span>
      </h1>
      <div className="relative flex flex-col items-center mt-10">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white relative transition-transform duration-500 ease-in-out hover:scale-125 hover:rotate-3">
          <Image
            src="/emma.png"
            alt="Headshot"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
        <div className="max-w-2xl text-center mt-10 p-4">
        <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg">
            Hi! I’m Emma Shi, a <b>Computer Science</b> student at the{" "}
            <b>University of Waterloo</b> with a passion for leveraging tech for
            social good, particularly at the crossroads of finance and
            environmental sustainability. When I’m not diving into new side
            projects, you’ll often find me staying active—whether it’s throwing
            a frisbee, playing basketball, or swimming!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
