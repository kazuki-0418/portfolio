import { TopPage } from "./TopPage";

export const Top = () => {
  return (
    <div className="h-screen w-screen ">
      <video
        src={require("/public/top.mov")}
        autoPlay
        muted
        loop
        className="w-full h-full object-cover absolute top-0 left-0 "
      />
      {/* <Outside blend="screen"> */}
      <TopPage />
      {/* </Outside> */}
      {/* <video
        src={require("/public/top.mov")}
        autoPlay
        muted
        loop
        className="object-cover h-full w-full z-0 h-screen"
      /> */}
    </div>
  );
};
