/* eslint-disable react/prop-types */
export default function Title({
  className,
  label,
  description,
  variant = "normal",
}) {
  return (
    <div
      className={`flex flex-col gap-2 ${
        className ? className : "text-4xl mb-20 text-center"
      }`}
    >
      <h2 className="font-bold font-title">
        <span
          className={`text-primary ${
            variant === "normal" || variant === "hidden" ? "hidden" : ""
          }`}
        >
          /
        </span>
        <span>{label}</span>
        <span className={variant === "hidden" ? "hidden" : "text-secondary"}>
          .
        </span>
      </h2>
      {description && <p className="text-xl">{description}</p>}
    </div>
  );
}
