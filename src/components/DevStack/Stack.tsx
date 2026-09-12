import { use, useState } from "react";
import type { IDevStackType } from "../type/StackCardType";
import { StackCard } from "./StackCard";
import { YourStack } from "./YourStack";

interface IStackType {
  stackData: Promise<IDevStackType[]>;
}

const Stack = ({ stackData }: IStackType) => {
  const devStackDatas = use(stackData);
  const [skillsAdd, setSkillsAdd] = useState<IDevStackType[]>([]);

  return (
    <section className="mb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            Explore the{" "}
            <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
              Technologies
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#64748B]">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {devStackDatas.map((stackData) => (
                <StackCard
                  key={stackData.id}
                  stackData={stackData}
                  skillsAdd={skillsAdd}
                  setSkillsAdd={setSkillsAdd}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <YourStack skillsAdd={skillsAdd} setSkillsAdd={setSkillsAdd} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
