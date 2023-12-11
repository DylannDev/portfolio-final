/* eslint-disable react/prop-types */
export default function Card({ children }) {
  return (
    <div className="border-[1px] border-slate-200 rounded-3xl p-8 min-w-[280px] max-w-[350px]">
      {children}
    </div>
  );
}
