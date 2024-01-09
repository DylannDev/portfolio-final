import Card from "../../../reusable-ui/Card";
import Section from "../../../reusable-ui/Section";
import Title from "../../../reusable-ui/Title";
import { skillsData } from "../../../../SkillsData/skillsData";
import ExternalLinks from "./ExternalLinks";
import StackBadges from "./StackBadges";

const REACT = skillsData[0][1][0],
  NEXT = skillsData[1][1][1],
  TAILWIND = skillsData[0][1][1],
  STYLEDCOMPONENTS = skillsData[0][1][2],
  FIREBASE = skillsData[1][1][0];

const projectsData = [
  {
    image: { src: "public/images/crusty-pizza.svg", alt: "logo crusty pizza" },
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos obcaecati quo necessitatibus, a illo fuga.",
    badges: [REACT, STYLEDCOMPONENTS, FIREBASE],
    links: {
      github: "https://github.com/DylannDev/crusty-pizza",
      demo: "https://crusty-pizza.vercel.app/",
    },
  },
  {
    image: { src: "public/images/vroom.svg", alt: "logo vroom" },
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos obcaecati quo necessitatibus, a illo fuga.",
    badges: [REACT, NEXT, TAILWIND],
    links: {
      github: "https://github.com/DylannDev/vroom-car-rental",
      demo: "https://vroom-car-rental.vercel.app/",
    },
  },
  {
    image: { src: "public/images/disneyplus.svg", alt: "logo disney plus" },
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos obcaecati quo necessitatibus, a illo fuga.",
    badges: [REACT, NEXT, FIREBASE],
    links: {
      github: "https://github.com/DylannDev/disney-plus-clone",
      demo: "https://disneyplus-dylanndev.vercel.app/",
    },
  },
];

export default function Work() {
  return (
    <Section variant="large">
      <Title
        label="Work"
        description="Voici quelques projets sur lesquels j'ai pris plaisir à travailler."
      />
      <div className="flex justify-between">
        {projectsData.map((project, index) => (
          <Card key={index}>
            <div className="flex flex-col gap-6 h-full">
              <div className="flex flex-col items-center">
                <img
                  src={project.image.src}
                  className="w-[250px]"
                  alt={project.image.alt}
                />
              </div>
              <div>{project.description}</div>
              <StackBadges project={project} />
              <ExternalLinks project={project} />
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
