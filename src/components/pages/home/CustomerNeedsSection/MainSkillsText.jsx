/* eslint-disable react/prop-types */
import { RxCheck } from "react-icons/rx";

export default function MainSkillsText({ skill }) {
  return (
    <div className="flex  items-center gap-[2px]">
      <RxCheck className="text-xl text-secondary animate-pulse" />
      <span className="text-sm font-bold">{skill.label}</span>
    </div>
  );
}
