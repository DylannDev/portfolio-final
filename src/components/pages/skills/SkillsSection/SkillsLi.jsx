/* eslint-disable react/prop-types */
export default function SkillsLi({ icon, label }) {
  return (
    <li className="flex items-center gap-2">
      <div className="text-2xl">{icon}</div>
      <span>{label}</span>
    </li>
  );
}
