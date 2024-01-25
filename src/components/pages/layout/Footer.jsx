import SocialMediaLinks from "../../reusable-ui/SocialMediaLinks";

export default function Footer() {
  const date = new Date();
  const getYear = date.getFullYear();

  return (
    <div className="flex flex-col gap-8 items-center border-t-[1px] border-slate-200 px-0 sm:px-20 pb-20 pt-56 lg:pt-48 mt-48">
      <SocialMediaLinks />
      <div className="text-center">
        <p>Designé et développé par Dylann Xavero.</p>
        <p>Copyright © {getYear}. Tous droits réservés.</p>
      </div>
    </div>
  );
}
