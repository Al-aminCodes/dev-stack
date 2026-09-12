import type { Dispatch, SetStateAction } from "react";
import type { IDevStackType } from "../type/StackCardType";
import { YourStackCard } from "./YourStackCard";

export interface YourStackProps {
  skillsAdd: IDevStackType[];
  setSkillsAdd: Dispatch<SetStateAction<IDevStackType[]>>;
}

export function YourStack({ skillsAdd, setSkillsAdd }: YourStackProps) {
  return (
    <div className="border border-gray-200  rounded-md">
      <div className="p-5">
        <h1 className="text-2xl font-extrabold">Your Stack</h1>
        <p className=" text-[#64748B] ">
          {skillsAdd.length === 0
            ? "No technologies selected yet."
            : `${skillsAdd.length} Technology Selected`}
        </p>
        <div>
          <YourStackCard
            skillsAdd={skillsAdd}
            setSkillsAdd={setSkillsAdd}
          ></YourStackCard>
        </div>
      </div>
    </div>
  );
}
