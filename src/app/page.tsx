import { Outside } from "@/components/elements/Outside";

export default function _() {
  return (
    <main className="h-screen">
      <video
        src={require("../../public/top.mov")}
        autoPlay
        muted
        loop
        className="object-cover h-full w-full absolute top-0 left-0"
      />
      <Outside blend="screen">
        <div className="flex flex-col justify-center items-center mt-64">
          <p className="text-2xl mb-2 text-gray-100 z-10">Hello. My name is</p>
          <p className="text-8xl font-bold text-gray-100 z-10">Kazuki Jo</p>
        </div>
      </Outside>
    </main>
  );
}
