import Image from "next/image";
import { FC, useMemo } from "react";

type PieChartProps = {
  name: string;
  src: string;
  percentage?: number;
};

export const PieChart: FC<PieChartProps> = ({
  name,
  src,
  percentage = 100,
}) => {
  const randomDelay = useMemo(() => Math.random() * 0.6, []);

  const CIRCUMFERENCE = 152.68140296446396;

  const strokeDashoffset = CIRCUMFERENCE * (1 - percentage / 100);

  return (
    <div className="md:flex justify-start md:items-start md:space-x-2 space-y-2 md:space-y-0 max-w-max	">
      <div className="rounded-lg flex flex-col items-center justify-center min-w-[60px] w-full md:w-1/3">
        <div className="relative w-[54px] h-[54px] mb-2">
          <svg className="w-[54px] h-[54px] transform -rotate-90">
            <circle
              className="fill-none stroke-[#f3f3f3] stroke-[3.6] stroke-round"
              cx="27"
              cy="27"
              r="24.3"
            />
            <circle
              className="fill-none stroke-[#03a9f4] stroke-[3.6] stroke-round animate-[circleAnim_1s_forwards] origin-center"
              cx="27"
              cy="27"
              r="24.3"
              strokeDasharray={`${CIRCUMFERENCE} ${CIRCUMFERENCE}`}
              strokeDashoffset={strokeDashoffset}
              style={{
                animation: `circleAnim 1s forwards ${randomDelay}s`,
                transition: "stroke-dashoffset 0.5s ease",
              }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center ">
            <h3 className="text-[18px] text-gray-900 ">
              <Image
                src={src}
                alt={name}
                width="58"
                height="58"
                className="z-10"
              />
            </h3>
          </div>
        </div>
        <p className="mt-1 text-[14px] text-black">{name}</p>
      </div>
    </div>
  );
};
