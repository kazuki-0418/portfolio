import { FC } from "react";
import { PieChart } from "../PieChart";
import { SkillCardProps } from "../SkillCard";

export const Nodejs: FC<SkillCardProps> = ({
  category,
  items,
  description,
}) => {
  return (
    <div className="bg-gray-200 p-6 m-4 max-w-2xl rounded-lg shadow-lg flex flex-col items-start">
      <div className="text-2xl font-light text-black">{category}</div>
      <div className="flex space-x-8 items-center h-full">
        <div className="flex gap-10 mb-4 ml-2 ">
          <PieChart
            name={items[0].name}
            src={items[0].src}
            percentage={items[0].percentage}
          />
          <p className="text-sm text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};
