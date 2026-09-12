import { type Dispatch, type SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";
import { badgeColors, type IDevStackType } from "../type/StackCardType";

export interface StackCardProps {
  stackData: IDevStackType;
  skillsAdd: IDevStackType[];
  setSkillsAdd: Dispatch<SetStateAction<IDevStackType[]>>;
}

export function StackCard({
  stackData,
  skillsAdd,
  setSkillsAdd,
}: StackCardProps) {
  // const [isAdd, setIsAdd] = useState(false);
  const isAdds = skillsAdd.some((skill) => skill.id === stackData.id);
  const handelButton = () => {
    const newSkills = [...skillsAdd, stackData];

    setSkillsAdd(newSkills);
    toast.success(`${stackData.id} add to your stack`, {
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
    <div
      className={`w-full max-w-sm rounded-2xl border ${isAdds ? "border-red-400" : "border-slate-200"}  bg-white p-4 shadow-sm`}
    >
      {/* Top */}
      <div className="mb-5 flex items-start justify-between">
        <img
          src={stackData.icon}
          alt={stackData.name}
          className="h-10 w-10 object-contain"
        />

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            // dynamic color with id and color objects
            badgeColors[stackData.id] || "bg-gray-50 text-gray-500"
          }`}
        >
          {stackData.badge}
        </span>
      </div>

      {/* Name */}
      <h2 className="mb-2 text-xl font-bold text-slate-900">
        {stackData.name}
      </h2>

      {/* Description */}
      <p className="min-h-16 text-sm leading-5 text-slate-500">
        {stackData.description}
      </p>

      {/* Info */}
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
        <span className="rounded bg-slate-50 px-2 py-1 text-xs text-slate-700">
          {stackData.category}
        </span>

        <span className="text-xs text-slate-500">{stackData.difficulty}</span>

        <span className="text-sm">⭐ {stackData.rating}</span>
      </div>

      {/* Button */}
      <button
        onClick={handelButton}
        className="mt-4 w-full rounded-lg bg-slate-950 py-3 text-sm font-medium text-white transition hover:bg-slate-800  disabled:bg-gray-400 disabled:hover:bg-gray-400 disabled:rounded-md"
        disabled={isAdds}
      >
        {isAdds ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}
