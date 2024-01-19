import Section from "../../reusable-ui/Section";
import Title from "../../reusable-ui/Title";
import TextAbout from "./TextAbout";

export default function AboutInfos() {
  return (
    <Section className="mb-0">
      <div className="max-w-3xl">
        <Title
          variant="section"
          label="About Me"
          description="Découvrez en plus sur moi et mon parcours."
        />
        <img
          src="/images/computer-background.jpg"
          alt="computer"
          className="max-w-3xl rounded-3xl mb-12"
        />

        <TextAbout />
      </div>
    </Section>
  );
}
