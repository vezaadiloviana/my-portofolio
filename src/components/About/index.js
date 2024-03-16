import React from "react";
import codingBoy from '../../assets/img/coding-boy.png';

const About = () => {
  return (
    <div id="about">
      <div className="text-3xl font-bold">
        <h1 className="text-yellow-500 dark:text-secondaryYellow">Know</h1>
        <h1 className="text-primaryBlue dark:text-white underline">About Me</h1>
      </div>
      <div className="grid grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-black dark:text-white text-4xl font-bold underline mb-5">Front End Developer</h1>        
          <p className="text-black dark:text-white text-xl font-medium text-justify">
            I am a passionate front-end developer with a keen eye for detail and a drive to create engaging user experiences by translating design concepts into high-quality user interfaces and responsive websites. With a solid foundation in HTML, CSS, and JavaScript, with styling using tailwindCSS.
          </p>
        </div>
        <div className="flex justify-center">
          <img src={codingBoy} className="w-[430px] h-[430px]" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
