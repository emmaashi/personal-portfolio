import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "@/components/ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import { articles } from "@/data";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 relative" id="home">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg--white/[0.03] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Welcome to my page
          </p>

          <TextGenerateEffect
            words="Hey, I'm Emma Shi"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Computer Science @ University of Waterloo
          </p>

          <a href="#projects">
            <MagicButton
              title="My work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>

      {/* Articles Section */}
      <div className="mt-48">
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
      </div>
    </div>
  );
};

export default Hero;
