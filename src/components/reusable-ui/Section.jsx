/* eslint-disable react/prop-types */
export default function Section({ children, className }) {
  return (
    <section className={`p-16  ${className ? className : "mb-40"}`}>
      {children}
    </section>
  );
}
