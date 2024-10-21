import React from "react";
import { projects } from "@/data";
import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
import Image from 'next/image';

const RecentProjects = () => {
  return (
    <div id="projects" className="py-10">
      <h1 className="heading">
        My <span className="text-purple">Projects</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(({ id, title, des, img, iconLists, link, date }) => (
          <CardContainer
            key={id}
            className="inter-var w-full"
          >
            <CardBody
              className="relative group/card hover:shadow-2xl hover:shadow-emerald-500/[0.1] border border-white/[0.1] rounded-xl p-6 w-full h-full max-w-md"
            >
              <CardItem
                translateZ="100"
                className="relative flex items-center justify-center w-full h-[15rem] lg:h-[20rem] overflow-hidden mb-5"
              >
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl">
                  <Image src="/bg.png" alt="bg-img" layout="fill" objectFit="cover" />
                </div>
                <Image
                  src={img}
                  alt={title}
                  layout="fill"
                  objectFit="contain"
                  className="z-10 absolute bottom-0"
                />
              </CardItem>

              <CardItem
                translateZ="50"
                className="text-xl font-bold text-white lg:text-2xl md:text-xl line-clamp-1"
              >
                {title}
              </CardItem>

              <CardItem
                as="p"
                translateZ="60"
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-4 text-white mt-2"
              >
                {des}
              </CardItem>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border-white/[0.2]"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center mt-7">
                <CardItem
                  translateZ={20}
                  translateX={-40}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                >
                  <a href={link}>
                    Try now →
                  </a>
                </CardItem>

                <CardItem
                  translateZ={20}
                  translateX={40}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold"
                >
                  <a href={link}>
                    {date}
                  </a>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;