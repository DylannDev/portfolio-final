import Title from "../../../reusable-ui/Title";
import SkillsCard from "./SkillsCard";
import { skillsData } from "../../../../SkillsData/skillsData";

export default function Skills() {
  console.log(skillsData);

  return (
    <div className="p-16">
      <Title label="Skills" className="text-center mb-16 text-4xl" />
      <div className="flex justify-around">
        {skillsData.map((skill, index) => (
          <SkillsCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}
