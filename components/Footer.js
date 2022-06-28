import React from 'react';
import { MdArrowUpward } from 'react-icons/md';

const Footer = () => {
  return (
    <section className="flex w-[100vw]  p-8 sm:flex-col text-center text-xl items-center justify-center bg-[#F98C25] ">
      &copy; 2022 ALNAJAH AL MUTQAN ALL RIGHTS RESERVED | DESIGN AND DEVELOPMENT
      BY &nbsp;
      <a href="https://www.getsmartsol.com" className="hover:underline text-xl">
        Get Smart Solutions
      </a>
      <a href="#" className="">
        <MdArrowUpward className="text-2xl mx-8" />
      </a>
    </section>
  );
};

export default Footer;
