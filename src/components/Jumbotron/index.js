import React from "react";

const Jumbotron = () => {
  return (
    <div className="bg-[url('./assets/img/bgjumbotron.png')] bg-cover bg-center h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col items-center text-white mb-20">
        <h1 className="text-4xl font-extrabold">Hi there!</h1>
        <h1 className="text-4xl font-extrabold">I am <span className="text-secondaryYellow">Veza Adiloviana</span> </h1>
        <h1 className="text-4xl font-extrabold">and I am a <span className="text-secondaryYellow">Front End Web Developer</span> </h1>
      </div>
      <div>
        <a href="#about" className="bg-secondaryYellow text-white font-semibold px-5 py-2 rounded-lg">Let's Start</a>
      </div>
    </div>
  );
};

export default Jumbotron;
