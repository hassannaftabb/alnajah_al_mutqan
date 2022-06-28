import React from 'react';
import ContactTopBar from '../components/ContactTopBar';
import { MdEmail, MdCall } from 'react-icons/md';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const toastTrigger = () => {
    toast.success('Message Sent!');
  };
  return (
    <div className="h-[200vh] mt-[29%] sm:mt-0">
      <Toaster />
      <ContactTopBar />
      <section className="flex flex-col w-[80vw] text-center mx-auto mb-12 mt-12">
        <h1 className="text-5xl text-[#F98C25] mb-12 font-serif">
          Stay In Touch With Us
        </h1>
      </section>
      <div className="w-[100vw] grid grid-cols-2 sm:grid-cols-1">
        <div className="m-12">
          <h1 className="text-3xl text-[#F98C25]">Main Office</h1>
          <p className="font-bold">
            Kingdom of saudi Arabia-8,7786 Dammam Aladama 4326 P.code 32242
          </p>
          <span className="flex items-center">
            <MdCall className="text-xl mr-1" />{' '}
            <a
              className="text-xl hover:underline text-blue-500"
              href="callto:0138347576"
            >
              013 83 47 576
            </a>
          </span>
          <span className="flex items-center">
            <MdEmail className="text-xl mr-1" />{' '}
            <a
              className="text-xl hover:underline text-blue-500"
              href="mailto:info@alnajahalmutqan.com"
            >
              info@alnajahalmutqan.com
            </a>
          </span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-lg mx-auto text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">
              Send us a message.
            </h1>
          </div>

          <form className="mt-8 mb-0 space-y-4 sm:w-[80vw] w-[40vw]">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter your name."
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter your email."
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <div className="relative">
                <textarea
                  type="text"
                  className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter your message."
                  rows={10}
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button
                className="inline-block px-16 py-4 ml-3 text-xl font-medium text-white bg-[#F98C25] rounded-lg"
                onClick={toastTrigger}
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
