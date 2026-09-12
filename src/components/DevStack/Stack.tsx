import React, { use, useState } from "react";
import type { IDevStackType } from "../type/StackCardType";
import { StackCard } from "./StackCard";
import { YourStack } from "./YourStack";

interface IStackType {
  stackData: Promise<IDevStackType[]>;
}

const Stack = ({ stackData }: IStackType) => {
  const devStackDatas = use(stackData);
  const [skillsAdd, setSkillsAdd] = useState<IDevStackType[]>([]);
  console.log(devStackDatas);
  console.log(skillsAdd);
  return (
    <section>
      <div className="container mx-auto">
        <div className="mb-6 space-y-3">
          <h1 className="text-4xl font-extrabold leading-[1.05] ">
            Explore the{" "}
            <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Technologies
            </span>
          </h1>

          <p className=" text-[#64748B]">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>
        <div className="grid md:grid-cols-12 justify-between gap-2">
          <div className="col-span-8 lg:col-span-9 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {devStackDatas.map((stackData) => (
                <StackCard
                  key={stackData.id}
                  stackData={stackData}
                  skillsAdd={skillsAdd}
                  setSkillsAdd={setSkillsAdd}
                ></StackCard>
              ))}
            </div>
          </div>
          <div className=" col-span-12 md:col-span-4 lg:col-span-3 gird justify-center ">
            <YourStack
              skillsAdd={skillsAdd}
              setSkillsAdd={setSkillsAdd}
            ></YourStack>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
