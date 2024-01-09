/* eslint-disable react/prop-types */
export default function Card({ children, className }) {
  return (
    <div
      className={`border-[1px] border-slate-200 rounded-3xl  min-w-[280px] shadow-md ${
        className ? className : "max-w-[360px] p-8"
      }`}
    >
      {children}
    </div>
  );
}
