import React from "react";

const Container = ({ children, customeStyle }) => {
  return (
    <section
      className={`bg-[#212121] text-white w-full lg:ms-auto ${customeStyle}`}
    >
      {children}
    </section>
  );
};

export default Container;
