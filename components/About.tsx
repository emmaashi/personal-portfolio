import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="about" className="py-10 mt-32 flex flex-col items-center">
      <h1 className="heading">
        About <span className="text-purple">Me</span>
      </h1>
      <div className="relative flex flex-col items-center mt-10">
        <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white relative">
          <Image
            src="/Grad.png"
            alt="Headshot"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
        <div className="max-w-2xl text-center mt-10 p-4">
          <p>
            Hi! My name is Emma Shi and I am a <b>1A Computer Science</b>{" "}
            student at the <b>University of Waterloo!</b> I’m passionate about
            technology, finance, and sports, and I’m always eager to connect
            with new people!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
