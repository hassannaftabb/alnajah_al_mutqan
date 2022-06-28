import React from 'react';
import { MdOutlineMessage } from 'react-icons/md';
import { AiOutlineBulb, AiOutlineStock } from 'react-icons/ai';

const Corevalues = () => {
  return (
    <section className="flex flex-col w-[100vw] items-center justify-center">
      <div className="text-4xl sm:text-xl">
        <h1 className="inline mr-2 bg-[#F98C25] sm:text-2xl text-5xl">
          ALNAJAH AL MUTQAN
        </h1>
        <p className="font-bold inline">Core Values</p>
      </div>
      <div className="grid grid-cols-3 lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 mt-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
            <MdOutlineMessage className="text-8xl text-[#F98C25]" />
          </div>
          <span className="w-96 text-2xl text-center font-semibold">
            We Believe in treating our Clients with respect and faith
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
            <AiOutlineBulb className="text-8xl text-[#F98C25]" />
          </div>
          <span className="w-96 text-2xl text-center font-semibold">
            We grow through Creativity, Technology and Quality solutions.
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
            <AiOutlineStock className="text-8xl text-[#F98C25]" />
          </div>
          <span className="w-96 text-2xl text-center font-semibold">
            We grow through Creativity, Technology and Quality solutions.
          </span>
        </div>
      </div>
      <button className="m-32 p-4 bg-[#F98C25] text-xl font-sans font-bold rounded-lg hover:bg-[#df6f06] sm:w-80">
        <a href="callto:0138347576">Try Now Free Consulting</a>
      </button>
    </section>
  );
};

export default Corevalues;
