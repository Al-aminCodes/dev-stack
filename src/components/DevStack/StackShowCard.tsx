import type { Dispatch, SetStateAction } from "react";
import type { IDevStackType } from "../type/StackCardType";
import { FiX } from "react-icons/fi";
import { Bounce, toast } from "react-toastify";

export interface StackShowCardProps {
  skill: IDevStackType;
  skillsAdd: IDevStackType[];
  setSkillsAdd: Dispatch<SetStateAction<IDevStackType[]>>;
}

export const StackShowCard = ({
  skill,
  skillsAdd,
  setSkillsAdd,
}: StackShowCardProps) => {
  const hendelDelet = () => {
    const removeStack = skillsAdd.filter((dev) => dev.id !== skill.id);
    setSkillsAdd(removeStack);
    toast.info(`${skill.id} is delete form your Stack`, {
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
  return (
    <div className=" p-3 border border-gray-200 m-4 rounded-xl flex justify-between items-center">
      <div className="flex gap-3 ">
        <img src={skill.icon} alt="" className="h-10 w-10 object-contain" />
        <div>
          <h2 className="text-xl font-bold ">{skill.id}</h2>
          <p className="text-gray-400 text-xs">{skill.category}</p>
        </div>
      </div>
      <div>
        <span
          onClick={hendelDelet}
          className="text-gray-400 text-2xl font-bold cursor-pointer"
        >
          <FiX />
        </span>
      </div>
    </div>
  );
};
