import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import SocialIcon from "../../../reusable-ui/SocialIcon";
import NavbarLinks from "./NavbarLinks";
import ToggleButton from "./ToggleButton";

export default function NavbarLinksMobile() {
  return (
    <div className="hidden">
      <NavbarLinks />
      <div className="flex items-center gap-3">
        <SocialIcon Icon={<FaGithub />} size="text-2xl" />
        <SocialIcon Icon={<FaLinkedinIn />} size="text-2xl" />
        <ToggleButton />
      </div>
    </div>
  );
}
