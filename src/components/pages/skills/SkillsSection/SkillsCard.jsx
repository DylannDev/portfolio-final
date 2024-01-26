/* eslint-disable react/prop-types */
import Card from "../../../reusable-ui/Card";
import SkillsLi from "./SkillsLi";

export default function SkillsCard({ skill }) {
  return (
    <Card className="w-full p-8 max-w-[350px] ">
      <h2 className="mb-6 font-bold text-2xl text-primary">{skill[0]}</h2>
      <ul className="text-lg flex flex-col gap-2">
        {skill[1].map((skillTechno, index) => (
          <SkillsLi key={index} {...skillTechno} />
        ))}
      </ul>
    </Card>
  );
}
