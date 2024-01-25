/* eslint-disable react/prop-types */
import Card from "../../../reusable-ui/Card";
import SkillsLi from "./SkillsLi";

export default function SkillsCard({ skill }) {
  return (
    <Card className="max-w-[350px] p-8">
      <h2 className="mb-6 font-bold text-2xl text-primary">{skill[0]}</h2>
      <ul className="text-lg flex flex-col gap-2 min-w-[214px] ">
        {skill[1].map((skillTechno, index) => (
          <SkillsLi key={index} {...skillTechno} />
        ))}
      </ul>
    </Card>
  );
}
