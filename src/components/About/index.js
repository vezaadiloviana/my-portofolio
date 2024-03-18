import React from "react";
import codingBoy from '../../assets/img/coding-boy.png';
import Title from "../Title";

const About = () => {
  return (
    <div id="about">
      <Title title={"Know"} subTitle={"About Me"}/>
      <div className="flex flex-col md:grid grid-cols-2 gap-10 items-center">
        <div className="md:-mt-5">
          <h1 className="text-black dark:text-white text-3xl md:text-4xl font-bold underline mb-5">Front End Developer</h1>        
          <p className="text-black dark:text-white text-lg md:text-xl font-medium text-justify">
            I am a passionate front-end developer with a keen eye for detail and a drive to create engaging user experiences by translating design concepts into high-quality user interfaces and responsive websites. With a solid foundation in HTML, CSS, and JavaScript, with styling using tailwindCSS.
          </p>
        </div>
        <div className="flex justify-center">
          <img src={codingBoy} className="h-72 w-72 md:w-[430px] md:h-[430px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
