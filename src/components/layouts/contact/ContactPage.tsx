import React from "react";
import { FluidShape } from "./FluidShape";

export const ContactPage = () => {
  return (
    <div className="h-full flex flex-col items-end bg-gray-200">
      <div className="relative top-0 left-0 w-full h-1/3 bg-black" />
      <div className="flex justify-start pl-48  p-14 h-2/3 w-full z-20 inset-0 relative">
        <FluidShape random={0.01 * (Math.floor(Math.random() * 6) + 3)} />
        <FluidShape random={0.01 * (Math.floor(Math.random() * 6) + 2)} />
        <FluidShape random={0.01 * (Math.floor(Math.random() * 6) + 2)} />

        <form className="space-y-6 w-2/3 z-20">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2 w-fit"
              htmlFor="name"
            >
              ° Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2 w-fit"
              htmlFor="email"
            >
              ° Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2 w-fit"
              htmlFor="message"
            >
              ° Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Message"
              rows={5}
            ></textarea>
          </div>
          <div className="flex items-center justify-start">
            <button
              className="bg-slate-200 hover:bg-gray-200 font-medium text-gray-700 py-2 px-8 rounded shadow-md focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send
            </button>
          </div>
        </form>
        <div className="flex justify-between mx-20 items-end w-full text-black">
          <div className="flex flex-col items-start gap-8">
            <p className="text-sm font-light">GitHub</p>
            <p className="text-sm font-light">LinkedIn</p>
          </div>
          <p className="text-sm font-light">
            © 2024 Kazuki Jo All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};
