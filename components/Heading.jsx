import React from "react";
import Tagline from "./Tagline/Tagline";

const Heading = ({ className, title, text, tag }) => {
  return (
    <>
      <div
        className={`${className} mx-auto max-w-[50rem] mb-12 lg:mb-20 md:text-center`}
      >
        {tag && <Tagline className="mb-3 md:justify-center">{tag}</Tagline>}
        {title && <h2 className="h2 leading-tight">{title}</h2>}
        {text && <p className="body-2 text-n-4 mt-3 lg:text-center leading-snug">{text}</p>}
      </div>
    </>
  );
};

export default Heading;
