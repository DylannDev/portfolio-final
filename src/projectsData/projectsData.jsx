/* eslint-disable react-refresh/only-export-components */

import LogoCrustyPizza from "../components/reusable-ui/svg/LogoCrustyPizza";
import LogoDisneyPlus from "../components/reusable-ui/svg/LogoDisneyPlus";
import LogoVroom from "../components/reusable-ui/svg/LogoVroom";
import {
  crustyDescription,
  disneyDescription,
  vroomDescription,
} from "./projectsDescription";
import {
  FIREBASE,
  NEXT,
  REACT,
  STYLEDCOMPONENTS,
  TAILWIND,
} from "./variablesSkillsData";

export const projectsData = [
  {
    id: "crusty-pizza",
    name: "Crusty Pizza",
    images: "projet-crusty-pizza.png",
    logo: <LogoCrustyPizza />,
    shortDescription: "Plateforme de commandes de pizzas 🍕",
    description: {
      header: crustyDescription.header,
      features: crustyDescription.features,
    },
    badges: [REACT, STYLEDCOMPONENTS, FIREBASE],
    links: {
      github: "https://github.com/DylannDev/crusty-pizza",
      demo: "https://crusty-pizza.vercel.app/",
    },
  },
  {
    id: "vroom",
    name: "Vroom - Agence de Location",
    images: "projet-vroom.png",
    logo: <LogoVroom />,
    shortDescription: "Plateforme de location de véhicules 🚘",
    description: {
      header: vroomDescription.header,
      features: vroomDescription.features,
    },
    badges: [REACT, NEXT, TAILWIND],
    links: {
      github: "https://github.com/DylannDev/vroom-car-rental",
      demo: "https://vroom-car-rental.vercel.app/",
    },
  },
  {
    id: "disney-plus-clone",
    name: "Disney + (Clone)",
    images: "projet-disney.png",
    logo: <LogoDisneyPlus />,
    shortDescription:
      "La célèbre plateforme de streaming recréée par moi-même.",
    description: {
      header: disneyDescription.header,
      features: disneyDescription.features,
    },
    badges: [REACT, NEXT, FIREBASE],
    links: {
      github: "https://github.com/DylannDev/disney-plus-clone",
      demo: "https://disneyplus-dylanndev.vercel.app/",
    },
  },
  {
    id: "portfolio",
    name: "Portfolio | Dylann Xavero",
    images: "computer-background.jpg",
    logo: <LogoVroom />,
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    description: {
      header: vroomDescription.header,
      features: vroomDescription.features,
    },
    badges: [REACT, TAILWIND],
    links: {
      github: "https://github.com/DylannDev/vroom-car-rental",
      demo: "https://vroom-car-rental.vercel.app/",
    },
  },
];
