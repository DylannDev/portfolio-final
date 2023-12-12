/* eslint-disable no-unused-vars */
import Badge from "../../reusable-ui/Badge";
import Button from "../../reusable-ui/Button";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import SocialIcon from "../layout/Navbar/SocialIcon";

export default function Hero() {
  return (
    <div className="flex items-center justify-center h-[100dvh]">
      <div className="flex items-center gap-20">
        <img
          className="rounded-full w-[350px] shadow-lg"
          src="public/images/portrait-dylann-carré.jpg"
          alt="portrait dylann xavero"
        />
        <div className="flex flex-col items-center justify-center gap-6 w-[350px] h-[350px]">
          <p className="font-bold text-lg text-slate-600 ">Hello, je suis</p>
          <h1 className="font-extrabold text-4xl leading-6">Dylann Xavero</h1>
          <p className="font-extrabold text-3xl text-slate-600  ">
            Dev Front-End React
          </p>
          <Button Icon={<PiPaperPlaneTilt />} label="d.xavero@hotmail.com" />
          <div className="flex items-center gap-3">
            <SocialIcon Icon={<FaGithub />} size="text-3xl" />
            <SocialIcon Icon={<FaLinkedinIn />} size="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
