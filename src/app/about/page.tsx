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
        <div className="absolute top-8 flex justify-around text-sm w-1/2">
          <div className="w-36 text-start">
            My engineering skills are like this.
          </div>
          <div className="w-32 text-start">I’m an engineer born in Japan.</div>
        </div>
        <div className="absolute left-0 bottom-74 m-8 text-sm -rotate-90 origin-bottom-left">
          <div>jo.kazuki.com</div>
        </div>
        <div className="flex items-center">
          <div className="absolute left-48 text-6xl transform -rotate-90 whitespace-nowrap w-fit">
            I’m engineer.
          </div>
          <div className="border-l border-white h-96 mx-8"></div>
          <div className="text-xl leading-loose">
            <p>
              2 and a half years of development experience mainly in front end
            </p>
            <p>We develop applications</p>
            <p>
              2 and a half years of development experience mainly in front end
            </p>
            <p>We develop applications</p>
          </div>
        </div>
      </div>
    </main>
  );
}
