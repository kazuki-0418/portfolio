import React, { FC } from "react";
import { PieChart } from "./PieChart";
import { Language } from "./SkillCards/Language";

export type SkillCardProps = {
  category: string;
  items: SkillItem[];
  description?: string;
};

export type SkillItem = {
  name: string;
  src: string;
  percentage: number;
};

// export const SkillCard: FC<SkillCardProps[]> = ({skills}) => (
//   <div className="bg-gray-200 rounded-lg shadow-lg p-6 m-4 w-80 ">
//     <h2 className="text-2xl font-light mb-4 text-black">{category}</h2>
//     <div className="grid grid-cols-3 gap-4 mb-4">
//       <Language {...} />

//     </div>
//     <p className="text-sm text-gray-700">{description}</p>
//   </div>
// );
