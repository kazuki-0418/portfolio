export default function _() {
  return (
    <main className="h-screen bg-black">
      <div className="relative h-screen flex flex-col justify-center items-center p-6 text-white font-light">
        <div className="absolute top-0 right-0 m-8 space-y-2 text-lg">
          <div>Top</div>
          <div>About</div>
          <div>Skill</div>
          <div>Profile</div>
          <div>Contact</div>
        </div>
        <div className="top-8 flex justify-around text-sm w-full">
          <div className="absolute top-8 flex justify-around text-sm w-1/2">
            <div className="w-36 text-start">
              My engineering skills are like this.
            </div>
            <div className="w-32 text-start">
              I’m an engineer born in Japan.
            </div>
          </div>
          <div className="absolute left-0 bottom-74 m-8 text-sm -rotate-90 origin-bottom-left z-10 text-black">
            <div>jo.kazuki.com</div>
          </div>
          <div className="bg-gray-200 absolute bottom-0 p-14 h-2/3 w-full z-0">
            <form className="space-y-6 pl-32">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2 w-fit"
                  htmlFor="name"
                >
                  ° Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
          </div>
          <div className="flex justify-between items-end">
            <div className="flex flex-col items-center">
              <p className="text-sm font-bold">GitHub</p>
              <p className="text-sm font-bold">Linked In</p>
            </div>
            <p className="text-sm font-bold">
              © 2024 Kazuki Jo All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
