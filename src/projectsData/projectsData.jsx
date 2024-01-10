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
    image: {
      src: <LogoCrustyPizza />,
      alt: "logo crusty pizza",
    },
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos obcaecati quo necessitatibus, a illo fuga.",
    badges: [REACT, STYLEDCOMPONENTS, FIREBASE],
    links: {
      github: "https://github.com/DylannDev/crusty-pizza",
      demo: "https://crusty-pizza.vercel.app/",
    },
  },
  {
    image: {
      src: <LogoVroom />,
      alt: "logo vroom",
    },
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos obcaecati quo necessitatibus, a illo fuga.",
    badges: [REACT, NEXT, TAILWIND],
    links: {
      github: "https://github.com/DylannDev/vroom-car-rental",
      demo: "https://vroom-car-rental.vercel.app/",
    },
  },
  {
    image: {
      src: <LogoDisneyPlus />,
      alt: "logo disney plus",
    },
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos obcaecati quo necessitatibus, a illo fuga.",
    badges: [REACT, NEXT, FIREBASE],
    links: {
      github: "https://github.com/DylannDev/disney-plus-clone",
      demo: "https://disneyplus-dylanndev.vercel.app/",
    },
  },
];
