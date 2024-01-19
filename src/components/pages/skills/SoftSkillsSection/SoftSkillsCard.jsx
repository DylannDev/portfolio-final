/* eslint-disable react/prop-types */
import Card from "../../../reusable-ui/Card";

export default function SoftSkillsCard({ skill }) {
  return (
    <Card className="hover:scale-105 transition-all p-6 flex flex-col gap-3">
      <div className="min-h-[148px] flex items-center">
        <img src={skill.img} alt="illustration des qualités" />
      </div>
      <h3 className="font-bold text-md uppercase font-title">
        {skill.quality}
      </h3>
      <p className="text-sm">{skill.description}</p>
    </Card>
  );
}
