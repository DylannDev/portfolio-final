/* eslint-disable react/prop-types */
export default function Title({ className, label, description }) {
  return (
    <div
      className={`flex flex-col gap-2 ${
        className ? className : "text-4xl mb-20 text-center"
      }`}
    >
      <h2 className="font-extrabold">
        <span className="text-primary">/</span>
        <span>{label}</span>
        <span className="text-secondary">.</span>
      </h2>
      {description && <p className="text-xl">{description}</p>}
    </div>
  );
}
