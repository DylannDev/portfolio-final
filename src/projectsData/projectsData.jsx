/* eslint-disable react-refresh/only-export-components */

import LogoCrustyPizza from "../components/reusable-ui/svg/LogoCrustyPizza";
import LogoDisneyPlus from "../components/reusable-ui/svg/LogoDisneyPlus";
import LogoVroom from "../components/reusable-ui/svg/LogoVroom";
import {
  FIREBASE,
  NEXT,
  REACT,
  STYLEDCOMPONENTS,
  TAILWIND,
} from "./variablesSkillsData";

export const projectsData = [
  {
    logo: <LogoCrustyPizza />,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos obcaecati quo necessitatibus, a illo fuga.",
    badges: [REACT, STYLEDCOMPONENTS, FIREBASE],
    links: {
      github: "https://github.com/DylannDev/crusty-pizza",
      demo: "https://crusty-pizza.vercel.app/",
    },
  },
  {
    logo: <LogoVroom />,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos obcaecati quo necessitatibus, a illo fuga.",
    badges: [REACT, NEXT, TAILWIND],
    links: {
      github: "https://github.com/DylannDev/vroom-car-rental",
      demo: "https://vroom-car-rental.vercel.app/",
    },
  },
  {
    logo: <LogoDisneyPlus />,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos obcaecati quo necessitatibus, a illo fuga.",
    badges: [REACT, NEXT, FIREBASE],
    links: {
      github: "https://github.com/DylannDev/disney-plus-clone",
      demo: "https://disneyplus-dylanndev.vercel.app/",
    },
  },
  {
    logo: <LogoVroom />,
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos obcaecati quo necessitatibus, a illo fuga.",
    badges: [REACT, TAILWIND],
    links: {
      github: "https://github.com/DylannDev/vroom-car-rental",
      demo: "https://vroom-car-rental.vercel.app/",
    },
  },
];
