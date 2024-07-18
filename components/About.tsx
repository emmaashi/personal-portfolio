import React from "react";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

const About = () => {
  return (
    <div id="about" className="py-10 mt-32 flex flex-col items-center"> {/* Adjusted padding and margin */}
      <h1 className="heading">About Me</h1>
      <div className="max-w-2xl text-center mt-10 p-4">
        <MaskContainer
          revealText="[Your blurb goes here. You can write about your background, skills, interests, and any other relevant information you want to share about yourself.]"
          size={10}
          revealSize={600}
          className="lg:text-xl lg:font-normal font-light text-sm"
        >
          [Your blurb goes here. You can write about your background, skills, interests, and any other relevant information you want to share about yourself.]
        </MaskContainer>
      </div>
    </div>
  );
};

export default About;