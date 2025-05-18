import React from "react";

import {
  Home,
  Link as Refi,
  DollarSign,
  Phone,
  DollarSignIcon,
  Smartphone,
  Calculator,
} from "lucide-react";

const Start = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 pb-24">
      <header className="w-full max-w-[1300px] flex items-center justify-between py-4 px-8 border-b-2 border-green-100 gap-4">
        <span className="text-xl font-semibold text-green-800">
          Better <span className="font-normal text-gray-800">Mortgage</span>
        </span>

        <div className="relative ">
          <img
            src="https://i.pravatar.cc/60"
            alt="Betsy avatar"
            className="w-12 h-12 rounded-full border-4 border-white shadow-md mx-auto md:block hidden"
          />
        </div>

        <a
          href="tel:+14155238837"
          className="md:flex hidden items-center gap-2 text-sm font-medium text-gray-700 hover:text-green-800 "
        >
          <span className="inline-flex items-center justify-center w-8 h-8 bg-green-100 rounded-full">
            <Phone size={16} />
          </span>
          Need help? Call (415) 523‑8837
        </a>
      </header>

      <main className="w-full flex flex-col items-center mt-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Hi, I'm Betsy!
          <br />
          What can I help you with?
        </h1>

        <div className="w-full max-w-[600px] mt-12 space-y-4">
          <button className="w-full flex items-center gap-3 border border-gray-300 rounded-lg py-6 px-6 text-lg hover:border-green-800 hover:border-2 hover:text-green-800  transition-colors">
            <Home size={24} className="text-green-800" />
            Buying a home
          </button>

          <button className="w-full flex items-center gap-3 border border-gray-300 rounded-lg py-6 px-6 text-lg hover:border-green-800 hover:border-2 hover:text-green-800  transition-colors">
            <Refi size={24} className="text-green-800" />
            Refinance my mortgage
          </button>

          <button className="w-full flex items-center gap-3 border border-gray-300 rounded-lg py-6 px-6 text-lg hover:border-green-800 hover:border-2 hover:text-green-800  transition-colors">
            <DollarSign size={24} className="text-green-800" />
            Get cash from my home
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-12 mt-16 text-center">
          <div>
            <p className="text-3xl font-bold">$100B</p>
            <p className="text-sm text-gray-600">
              home loans funded entirely online
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold">400K</p>
            <p className="text-sm text-gray-600">
              Customers who chose a Better Mortgage
            </p>
          </div>
        </div>

        <div className="bg-green-50 rounded-lg p-8 mt-16 max-w-md w-full text-center space-y-4">
          <p className="font-medium text-lg">
            After a few questions, you'll unlock:
          </p>
          <div className="flex items-center justify-center">
            <ul className="space-y-2 flex flex-col gap-2">
              <li className="flex items-center gap-4 text-[1.1rem]">
                <Calculator className="size-6 text-green-800 border-2 border-green-800 rounded-full p-1" />{" "}
                Custom mortgage rates
              </li>
              <li className="flex items-center gap-4 text-[1.1rem]">
                <DollarSignIcon className="size-6 text-green-800 border-2 border-green-800 rounded-full p-1" />
                Exclusive offers
              </li>
              <li className="flex items-center gap-4 text-[1.1rem]">
                <Smartphone
                  className="size-6 text-green-800 border-2
                border-green-800 rounded-full p-1"
                />{" "}
                A personalized dashboard
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Start;
