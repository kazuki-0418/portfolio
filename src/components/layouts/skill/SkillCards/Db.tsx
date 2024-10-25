import React, { FC } from "react";
import { PieChart } from "../PieChart";
import { SkillCardProps } from "../SkillPage";

export const Db: FC<SkillCardProps> = ({ category, items, description }) => {
  return (
    <div className="bg-gray-200 rounded-lg shadow-lg p-6 m-4 w-80">
      <h2 className="text-2xl font-light mb-4 text-black">{category}</h2>
      {items.map((item) => (
        <PieChart key={item.name} {...item} />
      ))}
      <div className="text-sm text-gray-700">{description}</div>
    </div>
  );
};
