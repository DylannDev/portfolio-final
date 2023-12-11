/* eslint-disable react/prop-types */
export default function Title({ className, label }) {
  return (
    <div className={`font-extrabold ${className}`}>
      <span className="text-primary">/</span>
      {label}
      <span className="text-secondary">.</span>
    </div>
  );
}
