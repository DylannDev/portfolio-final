import Title from "../../reusable-ui/Title";
import { FaGithub, FaFigma } from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiReact,
  SiTailwindcss,
  SiStyledcomponents,
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

export default function Skills() {
  return (
    <div className="p-16">
      <Title label="Skills" className="text-center mb-16 text-4xl" />
      <div className="flex justify-around">
        <div className="border-[1px] border-slate-200  rounded-3xl p-8 min-w-[280px]">
          <h2 className="mb-6 font-bold text-2xl text-primary">Front-End</h2>
          <ul className="text-lg flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <SiReact className="text-2xl" />
              React
            </li>
            <li className="flex items-center gap-2">
              <SiTailwindcss className="text-2xl" />
              Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <SiStyledcomponents className="text-2xl" />
              Styled-Components
            </li>
          </ul>
        </div>
        <div className="border-[1px] border-slate-200 rounded-3xl p-8 min-w-[280px]">
          <h2 className="mb-6 font-bold text-2xl text-primary">
            Back-End & Others
          </h2>
          <ul className="text-lg flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <SiFirebase className="text-2xl" />
              Firebase
            </li>
            <li className="flex items-center gap-2">
              <SiNextdotjs className="text-2xl" />
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <FaGithub className="text-2xl" />
              Git & Github
            </li>
          </ul>
        </div>
        <div className="border-[1px] border-slate-200 rounded-3xl p-8 min-w-[280px]">
          <h2 className="mb-6 font-bold text-2xl text-primary">Design</h2>
          <ul className="text-lg flex flex-col gap-2">
            <li className="flex items-center gap-2">
              <FaFigma className="text-2xl" />
              Figma
            </li>
            <li className="flex items-center gap-2">
              <SiAdobephotoshop className="text-2xl" />
              Photoshop
            </li>
            <li className="flex items-center gap-2">
              <SiAdobeillustrator className="text-2xl" />
              Illustrator
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
