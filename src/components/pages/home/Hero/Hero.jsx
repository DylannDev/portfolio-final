/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import Badge from "../../../reusable-ui/Badge";
import Button from "../../../reusable-ui/Button";
import { PiCode, PiFileArrowDown } from "react-icons/pi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import SocialIcon from "../../../reusable-ui/SocialIcon";
import ExternalLink from "../WorkSection/ExternalLink";
import ImageHero from "./ImageHero";
import TextHero from "./TextHero";

export default function Hero() {
  return (
    <div className="flex pt-[30dvh] pb-[15dvh] ">
      <div className="flex w-full items-center justify-between">
        <TextHero />
        <ImageHero />
      </div>
    </div>
  );
}
