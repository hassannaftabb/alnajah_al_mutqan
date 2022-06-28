import React from 'react';
import Heading from '../components/Heading';
import ManpowerSolutions from '../components/ManpowerSolutions';
import ManPowerTopBar from '../components/ManPowerTopBar';
import { MdOutlineMessage } from 'react-icons/md';
import { AiOutlineBulb, AiOutlineStock } from 'react-icons/ai';
import Image from 'next/image';
import StayinTouch from '../components/StayinTouch';

const manpower = () => {
  return (
    <section className="mt-[29%] sm:mt-0">
      <ManPowerTopBar />
      <ManpowerSolutions />
      <Heading title="Construction & Industrial Work" />
      <section className="flex flex-col w-[100vw] items-center justify-center my-12">
        <div className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 mt-4">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
              <Image
                src="/images/construction/scaffold.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="w-96 text-2xl text-center font-semibold">
              Scaffold
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
              <Image
                src="/images/construction/labour.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="w-96 text-2xl text-center font-semibold">
              Skilled labour
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
              <Image
                src="/images/construction/plumber.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="w-96 text-2xl text-center font-semibold">
              Plumber
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
              <Image
                src="/images/construction/fork_lifter.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="w-96 text-2xl text-center font-semibold">
              Fork Lifter
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
              <Image
                src="/images/construction/mason.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="w-96 text-2xl text-center font-semibold">
              Mason
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
              <Image
                src="/images/construction/safety_officer.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="w-96 text-2xl text-center font-semibold">
              Safety Officer
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
              <Image
                src="/images/construction/driver.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="w-96 text-2xl text-center font-semibold">
              HD & Lite Driver
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
              <Image
                src="/images/construction/welder.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="w-96 text-2xl text-center font-semibold">
              Welder
            </span>
          </div>
        </div>
      </section>
      <Heading title="Drilling Work" />
      <section className="flex flex-col w-[100vw] items-center justify-center my-12">
        <div className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 mt-4">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
              <Image
                src="/images/drilling/rosta.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="w-96 text-2xl text-center font-semibold">
              Rostabout
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
              <Image
                src="/images/drilling/floorman.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="w-96 text-2xl text-center font-semibold">
              Floorman
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
              <Image
                src="/images/drilling/derrick.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="w-96 text-2xl text-center font-semibold">
              Derrickman
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
              <Image
                src="/images/drilling/mudboy.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="w-96 text-2xl text-center font-semibold">
              Mud Boy
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
              <Image
                src="/images/drilling/drivers.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="w-96 text-2xl text-center font-semibold">
              Drivers
            </span>
          </div>
        </div>
      </section>
      <Heading title="Seismic Work" />
      <section className="flex flex-col w-[100vw] items-center justify-center my-12">
        <div className="grid grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 mt-4">
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
              <Image
                src="/images/seismic/line_labour.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="w-96 text-2xl text-center font-semibold">
              Line Labour
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
              <Image
                src="/images/seismic/forman.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="w-96 text-2xl text-center font-semibold">
              Foreman
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
              <Image
                src="/images/seismic/line_boss.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="w-96 text-2xl text-center font-semibold">
              Line Boss
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
              <Image
                src="/images/seismic/permit.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="w-96 text-2xl text-center font-semibold">
              Permit Man
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
              <Image
                src="/images/seismic/trouble.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="w-96 text-2xl text-center font-semibold">
              Trouble Shooter
            </span>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-center border-2 border-gray-300 m-4 rounded-full p-16">
              <Image
                src="/images/seismic/driver.png"
                width={100}
                height={100}
                alt=""
              />
            </div>
            <span className="w-96 text-2xl text-center font-semibold">
              Driver
            </span>
          </div>
        </div>
      </section>
      <StayinTouch />
    </section>
  );
};

export default manpower;
