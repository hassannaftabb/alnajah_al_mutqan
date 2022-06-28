import React from 'react';

const Heading = ({ title }) => {
  return (
    <section className=" flex sm:flex-col p-8 w-[100vw] items-center justify-center bg-[#F98C25]">
      <h1 className="text-3xl font-semibold">{title}</h1>
    </section>
  );
};

export default Heading;
