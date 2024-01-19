import { FaLaptopCode } from "react-icons/fa";
import { PiFileHtmlFill, PiPaletteFill } from "react-icons/pi";

export const servicesSectionData = [
  {
    icon: <PiFileHtmlFill />,
    service: "intégration web",
    description: [
      "Création de sites web attractifs et fonctionnels",
      "Conception responsive pour adapter votre site web sur différents appareils",
      "Transformation de designs graphiques (Figma, Sketch, Adobe XD) en pages web interactives",
    ],
  },
  {
    icon: <FaLaptopCode />,
    service: "développement web ",
    description: [
      "Optimisation des performances",
      "Développement de fonctionnalités sur mesure",
      "Intégration de services tiers et de données à partir d'API",
    ],
  },
  {
    icon: <PiPaletteFill />,
    service: "identité graphique",
    description: [
      "Création ou refonte de votre logo",
      "Création du design de votre application ou site web sur Figma",
      "Conseils en UX/UI pour améliorer l'expérience et l'interface utilisateur",
    ],
  },
];
