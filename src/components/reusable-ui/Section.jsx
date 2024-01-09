/* eslint-disable react/prop-types */
export default function Section({ children, className, variant = "normal" }) {
  return (
    <section
      className={`${className ? className : "mb-20"} ${
        variant === "large" ? "py-16" : "p-16"
      }`}
    >
      {children}
    </section>
  );
}
