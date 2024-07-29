import { FaLocationArrow } from "react-icons/fa6";
import { contact } from "@/data";
import MagicButton from "@/components/ui/MagicButton";

const Footer = () => {
  return (
    <footer className="relative w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] text-center">
          I would <span className="text-purple">LOVE</span> to connect!
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Please feel free to contact me if you’d like to discuss tech, explore
          opportunities, or simply have a chat!
        </p>
        <a href="mailto:emma.shi@uwaterloo.ca">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between items-center mt-16">
        <p className="md:text-base text-sm md:font-normal font-light text-center">
          emma shi ♡ july 2024
        </p>

        <div className="flex items-center md:gap-3 gap-6 mt-6 md:mt-0">
          {contact.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img
                src={info.img}
                alt="social media icon"
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
