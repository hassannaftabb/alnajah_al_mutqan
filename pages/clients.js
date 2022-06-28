import React from 'react';
import ClientTopBar from '../components/ClientTopBar';
import NavSection from '../components/NavSection';
import Image from 'next/image';
import StayinTouch from '../components/StayinTouch';

const clients = () => {
  return (
    <section className="mt-[28%] sm:mt-0">
      <ClientTopBar />
      <section className="flex flex-col w-[80vw] text-center mx-auto mb-12 mt-12">
        <h1 className="text-5xl text-[#F98C25] mb-12 font-serif">
          The List of Our Clients
        </h1>
        <p className="text-xl">
          We believe our diversity makes us stronger, smarter, and more
          innovative, helping us better serve the needs of our clients, our
          people, and our communities.
        </p>
      </section>
      <div className="max-w-5xl px-4 py-8 mx-auto">
        <section className="p-8 bg-gray-100 rounded-lg">
          <div className="grid grid-cols-3 gap-12 sm:grid-cols-1 sm:items-center">
            <div className="relative h-[200px]">
              <div className="aspect-w-1 aspect-h-1">
                <Image
                  src="/images/clients/1.png"
                  alt=""
                  height={250}
                  width={250}
                />
              </div>

              <div className="absolute inline-flex px-4 py-2 bg-white rounded-lg shadow-xl -bottom-4 -right-4"></div>
            </div>

            <blockquote className="col-span-2 sm:col-span-1">
              <div className="text-xl sm:text-2xl">
                <h1 className="font-bold text-gray-800">SINOPEC</h1>
                <p className="text-sm text-gray-400">
                  SINOPEC Civil and Refinery Const. Field
                </p>
                Sinopec Corp is one of the largest integrated energy and
                chemical company.The Scope of its business mainly covers oils
                and gas exploration and production,extraction, pipeline
                transmission and marketing, import/export agency of crude oil ,
                Natural gas, Refined oil products, Petrochemicals, Chemicals and
                other commodities and technologies, Research, Development and
                Application of technology and information.
              </div>
            </blockquote>
          </div>
        </section>
      </div>
      <div className="max-w-5xl px-4 py-8 mx-auto">
        <section className="p-8 bg-gray-100 rounded-lg">
          <div className="grid grid-cols-3 gap-12 sm:grid-cols-1 sm:items-center">
            <div className="relative h-[200px]">
              <div className="aspect-w-1 aspect-h-1 mt-16 flex items-center">
                <Image
                  src="/images/clients/2.png"
                  alt=""
                  height={150}
                  width={350}
                />
              </div>

              <div className="absolute inline-flex px-4 py-2 bg-white rounded-lg shadow-xl -bottom-4 -right-4"></div>
            </div>

            <blockquote className="col-span-2 sm:col-span-1">
              <div className="text-xl  sm:text-2xl">
                <h1 className="font-bold text-gray-800">Schlumberger</h1>
                <p className="text-sm text-gray-400">
                  WESTERNGECO SAUDI ARABIA
                </p>
                WesternGeco, a business segment of Schlumberger, is the worlds
                leading geophysical service company, providing worldwide
                reservoir imaging, monitoring and development services with the
                most extensive geophysical survey crews and data processing
                centers in the industry, as well as the world largest
                multi-clients data library.Services range from 3d and 4d (time
                lapse) seismic surveys to multi component and electromagnetic
                surveys, supply our clients with accurate measurement of
                subsurface geology.
              </div>
            </blockquote>
          </div>
        </section>
      </div>
      <div className="max-w-5xl px-4 py-8 mx-auto">
        <section className="p-8 bg-gray-100 rounded-lg">
          <div className="grid grid-cols-3 gap-12 sm:grid-cols-1 sm:items-center">
            <div className="relative h-[200px]">
              <div className="aspect-w-1 aspect-h-1 mt-16 flex items-center">
                <Image
                  src="/images/clients/3.png"
                  alt=""
                  height={150}
                  width={350}
                />
              </div>

              <div className="absolute inline-flex px-4 py-2 bg-white rounded-lg shadow-xl -bottom-4 -right-4"></div>
            </div>

            <blockquote className="col-span-2 sm:col-span-1">
              <div className="text-xl  sm:text-2xl">
                <h1 className="font-bold text-gray-800">ARGAS</h1>
                <p className="text-sm text-gray-400">
                  ARGAS-ARABIAN GEOPHYSICAL & SURVEYING COMPANY
                </p>
                Based in Al-Khobar, Saudi-Arabia, ARGAS is the first majority
                Saudi Capital Company of its kind in the Middle East that
                specialized in providing land, shallow water and marine seismic
                data acquisition, processing services as well as the other
                geophysical R&D and serving services for petroleum, water, and
                other ground resources
              </div>
            </blockquote>
          </div>
        </section>
      </div>
      <div className="max-w-5xl px-4 py-8 mx-auto">
        <section className="p-8 bg-gray-100 rounded-lg">
          <div className="grid grid-cols-3 gap-12 sm:grid-cols-1 sm:items-center">
            <div className="relative h-[200px]">
              <div className="aspect-w-1 aspect-h-1 mt-12 flex items-center">
                <Image
                  src="/images/clients/4.png"
                  alt=""
                  height={150}
                  width={350}
                />
              </div>

              <div className="absolute inline-flex px-4 py-2 bg-white rounded-lg shadow-xl -bottom-4 -right-4"></div>
            </div>

            <blockquote className="col-span-2 sm:col-span-1">
              <div className="text-xl  sm:text-2xl">
                <h1 className="font-bold text-gray-800">CNPC</h1>
                <p className="text-sm text-gray-400">
                  CNPC CHINA NATIONAL PETROLEUM CORPORATION
                </p>
                The China National Petroleum Corporation is the major national
                oil and Gas Corporation of China PR and one of the largest
                integrated energy group in the world
              </div>
            </blockquote>
          </div>
        </section>
      </div>
      <StayinTouch />
    </section>
  );
};

export default clients;
