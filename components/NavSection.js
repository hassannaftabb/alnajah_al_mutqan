import React, { useRef, useState } from 'react';
import { MdEmail, MdCall } from 'react-icons/md';
import Link from 'next/link';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import Image from 'next/image';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const NavSection = () => {
  const [dropDown, setdropDown] = useState(false);
  const sidebarRef = useRef();
  const toggleSidebar = () => {
    if (sidebarRef.current.classList.contains('hidden')) {
      sidebarRef.current.classList.remove('hidden');
      sidebarRef.current.classList.add('flex');
    } else if (sidebarRef.current.classList.contains('flex')) {
      sidebarRef.current.classList.remove('flex');
      sidebarRef.current.classList.add('hidden');
    }
  };

  return (
    <>
      <section className=" relative z-50 flex p-4 w-[100vw] sm:w-[90vw] sm:m-auto font-semibold text-lg sm:flex-col flex-row sm:text-black text-white">
        <div className="ml-12 sm:hidden block">Have Any Questions?</div>
        <div className=" flex  ml-8 items-center space-x-1 hover:underline hover:text-yellow-700">
          <MdCall />
          <div>
            <a href="callto:0138347576">013 83 47 576</a>
          </div>
        </div>
        <div className="ml-8">
          <a
            href="mailto:info@alnajahalmutqan.com"
            className="hover:underline hover:text-yellow-700 flex items-center"
          >
            <MdEmail className="mr-1" />
            info@alnajahalmutqan.com
          </a>
        </div>
      </section>
      <section className="relative flex sm:w-[100vw] w-[80vw] mx-24 sm:mx-0 items-center bg-white shadow-2xl z-50">
        <div className="sm:mx-auto lg:mx-auto md:mx-auto m-0">
    <Link href='/'>
          <Image src="/images/logo.png" alt="logo" width={85} height={85} />
    </Link>
        </div>

        <div className="ml-16 ">
          <ul className="lg:hidden md:hidden sm:hidden flex space-x-8 sm:space-x-12 items-center">
            <li>
              <Link href="/">
                <a className="text-lg hover:text-[#F98C25]">Home</a>
              </Link>
            </li>
            <li
              onMouseOver={() => setdropDown(true)}
              onMouseLeave={() => setdropDown(false)}
            >
              <Link href="/manpower">
                <div className="text-lg hover:text-[#F98C25]  py-10 cursor-pointer">
                  Services
                </div>
              </Link>
              {dropDown && (
                <div className="bg-gray-200 flex flex-col absolute">
                  <Link href="/manpower">
                    <a className="text-lg hover:text-[#F98C25] p-2 w-52 border mx-2 border-b-gray-300 ">
                      Manpower Services
                    </a>
                  </Link>
                  <Link href="/rental">
                    <a className="text-lg hover:text-[#F98C25] p-2 w-52 border mx-2 border-b-gray-300 ">
                      Rental Services
                    </a>
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link href="/clients">
                <a className="text-lg hover:text-[#F98C25]">Clients</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="text-lg hover:text-[#F98C25]">Contact</a>
              </Link>
            </li>
          </ul>
          <button
            className="sm:block lg:block md:block p-2.5 mx-8 text-white bg-gray-800 rounded hidden hover:text-white/75 "
            onClick={toggleSidebar}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <section ref={sidebarRef} className="hidden absolute right-0 top-0">
          <div className="flex flex-col justify-between h-screen bg-white border-r w-[90vw] ">
            <div className="px-4 py-6">
              <div className="mx-auto m-0">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={85}
                  height={85}
                />
              </div>
              <div className="absolute right-8 top-14" onClick={toggleSidebar}>
                <AiOutlineCloseSquare className="text-3xl" />
              </div>
              <nav className="flex flex-col mt-6 space-y-1">
                <Link href="/">
                  <a
                    href=""
                    className="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg"
                    onClick={toggleSidebar}
                  >
                    <span className="ml-3 text-sm font-medium"> Home </span>
                  </a>
                </Link>

                <details className="group">
                  <summary className="flex items-center px-4 py-2 text-gray-500 rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                    <span className="ml-3 text-sm font-medium"> Services </span>

                    <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <nav className="mt-1.5 ml-8 flex flex-col">
                    <Link href="/manpower">
                      <a
                        className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                        onClick={toggleSidebar}
                      >
                        <span className="ml-3 text-sm font-medium">
                          Manpower Services
                        </span>
                      </a>
                    </Link>
                    <Link href="/rental">
                      <a
                        onClick={toggleSidebar}
                        className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                      >
                        <span className="ml-3 text-sm font-medium">
                          {' '}
                          Rental Services{' '}
                        </span>
                      </a>
                    </Link>
                  </nav>
                </details>
                <Link href="/clients">
                  <a
                    onClick={toggleSidebar}
                    className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span className="ml-3 text-sm font-medium"> Clients </span>
                  </a>
                </Link>
                <Link href="/contact">
                  <a
                    onClick={toggleSidebar}
                    className="flex items-center px-4 py-2 text-gray-500 rounded-lg hover:bg-gray-100 hover:text-gray-700"
                  >
                    <span className="ml-3 text-sm font-medium"> Contact </span>
                  </a>
                </Link>
              </nav>
            </div>
          </div>
        </section>
      </section>
      <div className="absolute sm:relative top-0 flex">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showIndicators={false}
          width="100%"
          showStatus={false}
          showThumbs={false}
        >
          <div>
            <Image
              src="/images/1.jpg"
              height={800}
              width={2000}
              alt="1"
              className="opacity-90"
            />
            <div className="absolute md:hidden sm:hidden flex items-center justify-center w-[100vw] lg:top-[12rem] top-[16rem] z-50">
              <div className="bg-[#F98C25] p-1 rounded-lg text-4xl font-bold text-black font-mono w-[50vw] mx-auto">
                We believe in treating our clients with respect and faith.
              </div>
            </div>
          </div>
          <div>
            <Image
              src="/images/2.jpg"
              height={800}
              width={2000}
              alt="1"
              className="opacity-90"
            />
          </div>
          <div>
            <Image
              src="/images/3.jpg"
              height={800}
              width={2000}
              alt="1"
              className="opacity-90"
            />
          </div>
          <div>
            <Image
              src="/images/4.jpg"
              height={800}
              width={2000}
              alt="1"
              className="opacity-90"
            />
          </div>
        </Carousel>
      </div>
    </>
  );
};

export default NavSection;
