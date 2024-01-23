import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Logo from "../../../reusable-ui/Logo";
import SocialIcon from "../../../reusable-ui/SocialIcon";
import NavbarLinks from "./NavbarLinks";
import ToggleButton from "./ToggleButton";

export default function NavbarDesktop() {
  return (
    <header className="lg:flex hidden justify-between items-center h-40 absolute top-0 left-0 right-0 border-b-[1px] border-slate-200 ">
      <Logo />
      <NavbarLinks />
      <div className="flex items-center gap-3">
        <SocialIcon Icon={<FaGithub />} size="text-2xl" />
        <SocialIcon Icon={<FaLinkedinIn />} size="text-2xl" />
        <ToggleButton />
      </div>
    </header>
  );
}
