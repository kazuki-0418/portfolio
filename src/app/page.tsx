export default function _() {
  return (
    <main className="h-screen">
      <video
        src={require("../../public/top.mov")}
        autoPlay
        muted
        loop
        className="object-cover h-full w-full fixed top-0 left-0 z-0"
      />

      <div className="relative h-screen flex flex-col justify-center items-center p-6 text-white font-light">
        <div className="absolute top-0 right-0 m-8 space-y-2 text-lg">
          <div>Top</div>
          <div>About</div>
          <div>Skill</div>
          <div>Profile</div>
          <div>Contact</div>
        </div>
        <div className="absolute top-8 flex justify-around text-sm w-1/2">
          <div className="w-36 text-start">
            My engineering skills are like this.
          </div>
          <div className="w-32 text-start">I’m an engineer born in Japan.</div>
        </div>
        <div className="absolute left-0 bottom-74 m-8 text-sm -rotate-90 origin-bottom-left">
          <div>jo.kazuki.com</div>
        </div>

        <div className="text-2xl mb-2">Hello. My name is</div>
        <div className="text-8xl font-bold">Kazuki Jo</div>
      </div>
    </main>
  );
}
