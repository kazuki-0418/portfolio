import Image from "next/image";

export default function _() {
  return (
    <main className="h-screen bg-black">
      <div className="relative h-screen flex flex-col justify-center items-center  text-white font-light">
        <div className="absolute top-0 right-0 m-8 space-y-2 text-lg z-10">
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
          <div className="w-32 text-start z-10">
            I’m an engineer born in Japan.
          </div>
        </div>
        <div className="absolute left-0 bottom-74 m-8 text-sm -rotate-90 origin-bottom-left">
          <div>jo.kazuki.com</div>
        </div>
        <div className="flex h-screen">
          <div className="w-1/2 bg-black text-white flex flex-col items-center justify-center">
            <h1 className="text-4xl mb-8">Kazuki Jo</h1>
            <div className="space-y-4 ">
              <p>2018.01 Born in Osaka, Japan</p>
              <p>2018.01 Born in Osaka, Japan</p>
              <p>
                2018.01 experience mainly in front end. We develop applications
                and corporate
              </p>
              <p>2018.01 Born in Osaka, Japan</p>
              <p>
                2018.01 experience mainly in front end. We develop applications
                and corporate
              </p>
              <p>2018.01 Born in Osaka, Japan</p>
              <p>
                2018.01 experience mainly in front end. We develop applications
                and corporate
              </p>
            </div>
          </div>
          <div className="w-1/2 relative flex flex-col items-start justify-center">
            <Image
              src="/seasons/spring.png"
              alt="Cherry blossoms over a river at night with city lights in the background"
              width={1920}
              height={1080}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
