"use client";
import React from "react";
import { LinkPreview } from "./ui/LinkPreview";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import { articles } from "@/data";

const About = () => {
  return (
    <div className="pb-20 pt-14 relative" id="about">
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg--white/[0.03] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h1 className="heading text-center">
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
              <p className="text-neutral-500 dark:text-neutral-400 text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed">
                Hi! I’m{" "}
                <LinkPreview
                  imageSrc="/ulti.PNG"
                  className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                >
                  Emma Shi
                </LinkPreview>
                , a <b>Computer Science</b> student at the University of
                Waterloo with a passion for leveraging{" "}
                <LinkPreview
                  imageSrc="/google.jpeg"
                  className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                >
                  tech
                </LinkPreview>{" "}
                for social good, particularly at the crossroads of finance and
                environmental sustainability. When I’m not diving into new side
                projects, you’ll often find me staying{" "}
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
      </div>

      {/* Articles Section */}
      {/* <div className="mt-48">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map(({ id, title, description, img, link }) => (
            <div key={id} className="flex flex-col items-center">
              <PinContainer title={title} href={link}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-5">
                  <div className="relative w-full h-full overflow-hidden bg-[#13162d]">
                    <Image
                      src={img}
                      alt={title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <h3 className="font-bold text-lg line-clamp-1 mt-4">{title}</h3>
                <p className="text-sm line-clamp-2">{description}</p>
              </PinContainer>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default About;
