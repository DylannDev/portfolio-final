import { useContext } from "react";
import { DarkModeContext } from "../../../context/DarkModeContext";
import Button from "../../reusable-ui/Button";
import Card from "../../reusable-ui/Card";
import Section from "../../reusable-ui/Section";
import { PiPaperPlaneTilt } from "react-icons/pi";

export default function Contact() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <Section className="absolute z-10 left-0 right-0 bottom-52">
      <Card
        className={`flex lg:flex-row lg:gap-6 lg:justify-between lg:items-center flex-col gap-8 items-center py-12 px-8 lg:py-20 lg:px-16 ${
          darkMode ? "bg-slate-900" : "bg-light"
        }`}
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center">
          Collaborons ensemble
        </h2>
        <p className="text-center">
          Mon travail vous intéresse? <br /> Discutons plus en détails de vos
          idées 😃
        </p>
        <Button
          label="d.xavero@hotmail.com"
          href="mailto:d.xavero@hotmail.com"
          Icon={<PiPaperPlaneTilt />}
        />
      </Card>
    </Section>
  );
}
