/* eslint-disable react/prop-types */
export default function Card({ children, className }) {
  return (
    <div
      className={`border-[1px] border-slate-200 rounded-3xl ${
        className ? className : "p-8"
      }`}
    >
      {children}
    </div>
  );
}
