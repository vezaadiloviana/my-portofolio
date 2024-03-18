import React from "react";

const Title = ({title, subTitle}) => {
  return (
    <div className="text-2xl md:text-3xl font-bold mb-5">
        <h1 className="text-yellow-500 dark:text-secondaryYellow">{title}</h1>
        <h1 className="text-primaryBlue dark:text-white underline">{subTitle}</h1>
    </div>
  );
};

export default Title;
