import NavbarLinks from "./NavbarLinks";
import Logo from "../../../reusable-ui/Logo";
import SocialIcon from "./SocialIcon";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center h-[15dvh] absolute w-full border-b-[1px] border-slate-200 ">
      <Logo />
      <NavbarLinks />
      <div className="flex items-center gap-3">
        <SocialIcon Icon={<FaGithub />} size="text-2xl" />
        <SocialIcon Icon={<FaLinkedinIn />} size="text-2xl" />
      </div>
    </div>
  );
}
