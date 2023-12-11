/* eslint-disable react/prop-types */
export default function Title({ size, label, description }) {
  return (
    <div className={`text-center ${size ? size : "text-4xl mb-16"}`}>
      <div className="font-extrabold mb-4">
        <span className="text-primary">/</span>
        {label}
        <span className="text-secondary">.</span>
      </div>
      {description && <p className="text-lg">{description}</p>}
    </div>
  );
}
