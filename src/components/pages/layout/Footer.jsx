export default function Footer() {
  const date = new Date();
  const getYear = date.getFullYear();

  return (
    <div className="flex flex-col items-center border-t-[1px] border-slate-200 p-20">
      <div>Designé et développé par Dylann Xavero.</div>
      <div>Copyright © {getYear}. Tous droits réservés.</div>
    </div>
  );
}
