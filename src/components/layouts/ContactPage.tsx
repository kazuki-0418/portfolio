import React from "react";

export const ContactPage = () => {
  return (
    <div>
      <div className="flex justify-start pl-48  bg-gray-200 absolute bottom-0 p-14 h-2/3 w-full z-0">
        <form className="space-y-6 w-2/3">
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
        <div className="flex justify-between mx-20 items-end w-full">
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
