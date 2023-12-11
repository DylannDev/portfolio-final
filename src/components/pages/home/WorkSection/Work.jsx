import Badge from "../../../reusable-ui/Badge";
import Card from "../../../reusable-ui/Card";
import Section from "../../../reusable-ui/Section";
import Title from "../../../reusable-ui/Title";
import { SiReact, SiStyledcomponents } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";
import Button from "../../../reusable-ui/Button";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Work() {
  return (
    <Section>
      <Title
        label="Work"
        description="Voici quelques projets sur lesquels j'ai pris plaisir à travailler."
      />
      <div className="flex justify-between">
        <Card>
          <div className="flex flex-col gap-6 h-full">
            <div className="flex flex-col items-center">
              <img
                src="public/images/crusty-pizza.svg"
                className="w-[250px]"
                alt="logo crusty pizza"
              />
            </div>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              obcaecati quo necessitatibus, a illo fuga.
            </div>
            <div className="flex gap-1">
              <Badge label="React" Icon={<SiReact />} />
              <Badge label="Styled-Components" Icon={<SiStyledcomponents />} />
            </div>
            <div className="flex gap-4 border-primary">
              <Link
                to="https://github.com/DylannDev/crusty-pizza"
                className="flex items-center gap-1 text-primary font-medium text-lg hover:underline underline-offset-4"
              >
                <FaGithub />
                <span>Github</span>
              </Link>
              <Link
                to="https://crusty-pizza.vercel.app/"
                className="flex items-center gap-1 text-primary font-medium text-lg hover:underline underline-offset-4"
              >
                <FiExternalLink />
                <span>Demo</span>
              </Link>
            </div>
          </div>
        </Card>
        <Card>
          <img src="public/images/vroom.svg" className="w-[250px]" alt="" />
        </Card>
        <Card>
          <img
            src="public/images/disneyplus.svg"
            className="w-[250px]"
            alt=""
          />
        </Card>
      </div>
    </Section>
  );
}
