/* eslint-disable react/prop-types */
import Card from "../../../reusable-ui/Card";

export default function SoftSkillsCard({ skill }) {
  return (
    <Card className="hover:scale-105 transition-all p-8 flex flex-col gap-3">
      <div className="min-h-[131px] flex items-center">
        <img src={skill.img} alt="illustration des qualités" />
      </div>
      <h3 className="font-extrabold text-xl capitalize">{skill.quality}</h3>
      <p>{skill.description}</p>
    </Card>
  );
}
