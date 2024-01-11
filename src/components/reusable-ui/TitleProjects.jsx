/* eslint-disable react/prop-types */
export default function TitleProjects({ size, label, description }) {
  return (
    <div className={`flex flex-col gap-2 ${size ? size : "text-5xl"}`}>
      <div className="flex font-extrabold">
        <h2>{label}</h2>
        <span className="text-secondary">.</span>
      </div>
      {description && <p className="text-xl">{description}</p>}
    </div>
  );
}
