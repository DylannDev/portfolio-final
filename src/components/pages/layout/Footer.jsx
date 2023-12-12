import { nanoid } from "nanoid";
import SocialIcon from "../../reusable-ui/SocialIcon";
import { socialIconData } from "../../../socialIconData/socialIconData";

export default function Footer() {
  const date = new Date();
  const getYear = date.getFullYear();

  return (
    <div className="flex flex-col gap-8 items-center border-t-[1px] border-slate-200 px-20 pb-20 pt-48 absolute w-full -z-[1]">
      <div className="flex gap-4">
        {socialIconData.map((icon) => (
          <SocialIcon key={nanoid(8)} Icon={icon.icon} size="text-2xl" />
        ))}
      </div>
      <div className="text-slate-600">
        <p>Designé et développé par Dylann Xavero.</p>
        <p>Copyright © {getYear}. Tous droits réservés.</p>
      </div>
    </div>
  );
}
