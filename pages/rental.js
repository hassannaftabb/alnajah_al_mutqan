import React from 'react';
import RentalTopBar from '../components/RentalTopBar';
import Heading from '../components/Heading';
import Image from 'next/image';
import StayinTouch from '../components/StayinTouch';

const rental = () => {
  return (
    <section className="mt-[28%] sm:mt-0">
      <RentalTopBar />
      <section className="flex flex-col w-[80vw] text-center mx-auto mb-12 mt-12">
        <h1 className="text-5xl text-[#F98C25] mb-12 font-serif">
          Rental Solutions
        </h1>
        <p className="text-xl">
          Quality Construction Equipment are readily available for short term
          and long term hire and with option of with or without the operators
        </p>
      </section>
      <Heading title="Rental Equipments Include" />
      <section className="flex flex-col w-[100vw] items-center justify-center my-12">
        <div className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 mt-4">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
              <Image
                src="/images/rental/boomtruck.jpg"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="w-96 text-2xl text-center font-semibold">
              Boom Truck
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
              <Image
                src="/images/rental/busses.jpg"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="w-96 text-2xl text-center font-semibold">
              Busses
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
              <Image
                src="/images/rental/car.jpg"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="w-96 text-2xl text-center font-semibold">Car</span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
              <Image
                src="/images/rental/cranes.jpg"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="w-96 text-2xl text-center font-semibold">
              Cranes
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
              <Image
                src="/images/rental/dumptruck.jpg"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="w-96 text-2xl text-center font-semibold">
              Dump Truck
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
              <Image
                src="/images/rental/forklift.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="w-96 text-2xl text-center font-semibold">
              Fork Lift
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
              <Image
                src="/images/rental/minibus.jpg"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="w-96 text-2xl text-center font-semibold">
              Minibus
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
              <Image
                src="/images/rental/pickup.jpg"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="w-96 text-2xl text-center font-semibold">
              Pickup
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
              <Image
                src="/images/rental/roller.jpg"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="w-96 text-2xl text-center font-semibold">
              Roller
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
              <Image
                src="/images/rental/trailer.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="w-96 text-2xl text-center font-semibold">
              Trailer Low Bed & Flat Bed
            </span>
          </div>
        </div>
      </section>
      <StayinTouch />
    </section>
  );
};

export default rental;
