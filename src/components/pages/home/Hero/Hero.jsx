/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import Badge from "../../../reusable-ui/Badge";
import Button from "../../../reusable-ui/Button";
import { PiCode, PiFileArrowDown } from "react-icons/pi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import SocialIcon from "../../../reusable-ui/SocialIcon";
import ImageHero from "./ImageHero";
import TextHero from "./TextHero";
import Section from "../../../reusable-ui/Section";

export default function Hero() {
  return (
    <Section className="flex mb-20 sm:mb-40" variant="large">
      <div className="flex xl:flex-row flex-col gap-20 w-full items-center justify-between">
        <TextHero />
        <ImageHero />
      </div>
    </Section>
  );
}
