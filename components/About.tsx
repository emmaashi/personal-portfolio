"use client";
import React from "react";
import { motion } from "framer-motion";
import { LinkPreview } from "./ui/LinkPreview";
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
        <div className="max-w-4xl text-center mt-10 p-4">
          {" "}
          <p className="text-neutral-500 dark:text-neutral-400 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed">
            {" "}
            Hi! I’m{" "}
            <LinkPreview
              imageSrc="/ulti.PNG"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
              Emma Shi
            </LinkPreview>
            , a <b>Computer Science</b> student at the University of Waterloo
            with a passion for leveraging {""}
            <LinkPreview
              imageSrc="/google.jpeg"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
              tech
            </LinkPreview>{" "}
            for social good, particularly at
            the crossroads of finance and environmental sustainability. When I’m
            not diving into new side projects, you’ll often find me staying{" "}
            <LinkPreview
              imageSrc="/aoty.jpg"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
              active
            </LinkPreview>
            —whether it’s throwing a{" "}
            <LinkPreview
              imageSrc="/warriors.PNG"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
              frisbee
            </LinkPreview>
            , playing{" "}
            <LinkPreview
              imageSrc="/basketball.JPG"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
            >
              basketball
            </LinkPreview>
            , or swimming!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
