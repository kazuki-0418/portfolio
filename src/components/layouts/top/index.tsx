import { TopPage } from "./TopPage";

export const Top = () => {
  return (
    <div className="h-screen w-screen" id="top">
      <video
        src={require("/public/top.mov")}
        autoPlay
        muted
        loop
        controls={false}
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <TopPage />
    </div>
  );
};
