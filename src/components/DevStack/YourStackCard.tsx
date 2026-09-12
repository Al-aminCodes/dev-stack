import type { Dispatch, SetStateAction } from "react";
import type { IDevStackType } from "../type/StackCardType";

import { StackShowCard } from "./StackShowCard";
import { Bounce, toast } from "react-toastify";

export interface YourStackCardProps {
  skillsAdd: IDevStackType[];
  setSkillsAdd: Dispatch<SetStateAction<IDevStackType[]>>;
}

export const YourStackCard = ({
  skillsAdd,
  setSkillsAdd,
}: YourStackCardProps) => {
  const removeAllStack = () => {
    setSkillsAdd([]);
    toast.info("remove all your Stack", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  if (skillsAdd.length === 0) {
    return (
      <div className=" p-4 py-8 border border-gray-200 mt-3 rounded-xl flex justify-center items-center">
        <p className="text-xl text-gray-400">Your stack is empty.</p>
      </div>
    );
  }
  return (
    <div>
      {skillsAdd.map((skill) => (
        <StackShowCard
          skill={skill}
          skillsAdd={skillsAdd}
          setSkillsAdd={setSkillsAdd}
          key={skill.id}
        ></StackShowCard>
      ))}
      <button
        onClick={removeAllStack}
        className="w-full h-9 rounded-md border border-red-300
             bg-white text-red-500
             text-xm font-medium
             hover:bg-red-50"
      >
        Remove All
      </button>
    </div>
  );
};
