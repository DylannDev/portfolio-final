import { useContext } from "react";
import { DarkModeContext } from "../../../context/DarkModeProvider";
import Button from "../../reusable-ui/Button";
import Card from "../../reusable-ui/Card";
import Section from "../../reusable-ui/Section";
import { PiPaperPlaneTilt } from "react-icons/pi";

export default function Contact() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <Section className="absolute z-10 left-0 right-0 bottom-52">
      <Card
        className={`flex justify-between items-center w-full py-20 px-16 ${
          darkMode ? "bg-dark" : "bg-light"
        }`}
      >
        <h2 className="text-3xl font-extrabold">Un nouveau projet ?</h2>
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
