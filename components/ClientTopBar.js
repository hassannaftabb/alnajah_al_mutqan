import React from 'react';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';

const ClientTopBar = () => {
  return (
    <section className=" flex sm:flex-col p-8 w-[100vw] items-center justify-between bg-[#F98C25]">
      <h1 className="text-3xl font-semibold">Clients</h1>
      <nav aria-label="Breadcrumb">
        <ol
          role="list"
          className="flex items-center space-x-1 text-lg text-white mx-8"
        >
          <li>
            <Link href="/">
              <a className="block transition-colors hover:text-gray-700">
                Home
              </a>
            </Link>
          </li>

          <AiOutlineArrowRight />

          <li>
            <a
              className="block transition-colors hover:text-gray-700"
              href="#"
            >
              Clients
            </a>
          </li>
        </ol>
      </nav>
    </section>
  );
};

export default ClientTopBar;
