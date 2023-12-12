import Button from "../../reusable-ui/Button";
import Card from "../../reusable-ui/Card";
import Section from "../../reusable-ui/Section";
import Title from "../../reusable-ui/Title";
import { PiPaperPlaneTilt } from "react-icons/pi";

export default function Contact() {
  return (
    <Section className="-mb-44">
      <Title
        label="Contact"
        description="Discutons plus en détails de vos idées."
      />
      <Card className="flex justify-between items-center w-full p-20 bg-textLight">
        <h2 className="text-3xl font-bold">Un nouveau projet ?</h2>
        <p className="text-center text-lg">
          Mon travail vous intéresse? <br /> N’hésitez pas à me contacter 😃
        </p>
        <Button label="d.xavero@hotmail.com" Icon={<PiPaperPlaneTilt />} />
      </Card>
    </Section>
  );
}
