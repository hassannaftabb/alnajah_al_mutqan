import React from 'react';
import { MdEmail, MdCall } from 'react-icons/md';
import { FaFax } from 'react-icons/fa';

const StayinTouch = () => {
  return (
    <section className="flex flex-col w-[80vw] text-center mx-auto mb-12 mt-24">
      <h1 className="text-5xl text-[#F98C25] mb-12 font-serif">
        stay in touch with us.
      </h1>
      <div className="mt-8 grid grid-cols-3 md:grid-cols-1 lg:grid-cols-1 sm:grid-cols-1 gap-6">
        <div className="flex ">
          <MdEmail className="text-5xl text-[#F98C25] mr-8" />
          <div className="text-left ">
            <p className=" text-xl font-semibold">Have Any Questions?</p>
            <p className="text-xl">
              <a
                href="mailto:info@alnajahalmutqan.com"
                className="hover:text-gray-700"
              >
                info@alnajahalmutqan.com
              </a>
            </p>
          </div>
        </div>
        <div className="flex ">
          <MdCall className="text-5xl text-[#F98C25] mr-8" />
          <div className="text-left ">
            <p className=" text-xl font-semibold">Call Us</p>
            <p className="text-xl">
              <a className="hover:text-gray-700" href="callto:0138347576">
                013 83 47 576
              </a>
            </p>
          </div>
        </div>
        <div className="flex ">
          <FaFax className="text-5xl text-[#F98C25] mr-8" />
          <div className="text-left ">
            <p className=" text-xl font-semibold">Fax</p>
            <p className="text-xl">
              <a className="hover:text-gray-700">013 83 47 576</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StayinTouch;
