import Button from "../../reusable-ui/Button";
import Card from "../../reusable-ui/Card";
import Section from "../../reusable-ui/Section";
import { PiPaperPlaneTilt } from "react-icons/pi";

export default function Contact() {
  return (
    <Section className="-mb-44">
      <Card className="flex justify-between items-center w-full py-20 px-16 bg-light">
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
