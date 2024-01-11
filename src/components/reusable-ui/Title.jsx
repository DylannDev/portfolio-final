/* eslint-disable react/prop-types */
export default function Title({ size, label, description }) {
  return (
    <div
      className={`flex flex-col gap-4 text-center ${
        size ? size : "text-4xl mb-16"
      }`}
    >
      <div className="flex justify-center font-extrabold">
        <span className="text-primary">/</span>
        <h2>{label}</h2>
        <span className="text-secondary">.</span>
      </div>
      {description && <p className="text-lg">{description}</p>}
    </div>
  );
}
