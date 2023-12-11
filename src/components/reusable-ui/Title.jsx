/* eslint-disable react/prop-types */
export default function Title({ size, label }) {
  return (
    <div className={`font-extrabold ${size ? size : "text-3xl"}`}>
      <span className="text-primary">/</span>
      {label}
      <span className="text-secondary">.</span>
    </div>
  );
}
