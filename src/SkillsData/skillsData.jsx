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

const skillsDataObject = {
  "Front-End": [
    {
      icon: <SiReact />,
      label: "React",
    },
    {
      icon: <SiTailwindcss />,
      label: "Tailwind CSS",
    },
    {
      icon: <SiStyledcomponents />,
      label: "Styled-Components",
    },
  ],
  "Back-End & Others": [
    {
      icon: <SiFirebase />,
      label: "Firebase",
    },
    {
      icon: <SiNextdotjs />,
      label: "Next.js",
    },
    {
      icon: <FaGithub />,
      label: "Git & Github",
    },
  ],
  Design: [
    {
      icon: <FaFigma />,
      label: "Figma",
    },
    {
      icon: <SiAdobephotoshop />,
      label: "Photoshop",
    },
    {
      icon: <SiAdobeillustrator />,
      label: "Illustrator",
    },
  ],
};

export const skillsData = Object.entries(skillsDataObject);
