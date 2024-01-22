/* eslint-disable react-refresh/only-export-components */
import LogoCrustyPizza from "../../components/reusable-ui/svg/LogoCrustyPizza";
import LogoDisneyPlus from "../../components/reusable-ui/svg/LogoDisneyPlus";
import LogoDylannDev from "../../components/reusable-ui/svg/LogoDylannDev";
import LogoVroom from "../../components/reusable-ui/svg/LogoVroom";
import {
  crustyDescription,
  disneyDescription,
  portfolioDescription,
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
    mediumDescription:
      "Application CRUD, contenant un panel admin permettant de créer, modifier ou supprimer un produit, ainsi que de sauvegarder le panier.",
    description: {
      header: crustyDescription.header,
      features: crustyDescription.features,
    },
    isClientProject: false,
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
    mediumDescription:
      "Vroom est une plateforme de location de véhicules qui calcule le prix total en fonction de la durée de location.",
    description: {
      header: vroomDescription.header,
      features: vroomDescription.features,
    },
    isClientProject: false,
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
      "La célèbre plateforme de streaming recréée par moi-même 📺",
    mediumDescription:
      "Reproduction de la plateforme de streaming et de quelques fonctionnalités.",
    description: {
      header: disneyDescription.header,
      features: disneyDescription.features,
    },
    isClientProject: false,
    badges: [REACT, NEXT, FIREBASE],
    links: {
      github: "https://github.com/DylannDev/disney-plus-clone",
      demo: "https://disneyplus-dylanndev.vercel.app/",
    },
  },
  {
    id: "portfolio",
    name: "Mon Portfolio",
    images: "projet-portfolio-dark.png",
    logo: <LogoDylannDev />,
    shortDescription: "Portfolio présentant mes différents projets 📂",
    mediumDescription:
      "Réalisation de mon portfolio développé par mes soins, ayant pour objectif de présenter mes différents projets.",
    description: {
      header: portfolioDescription.header,
      features: portfolioDescription.features,
    },
    isClientProject: false,
    badges: [REACT, TAILWIND],
    links: {
      github: "https://github.com/DylannDev/portfolio-final",
      demo: "https://www.dylann-dev.com/",
    },
  },
];
