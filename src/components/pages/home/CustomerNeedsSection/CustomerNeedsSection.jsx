/* eslint-disable react/no-unescaped-entities */
import Section from "../../../reusable-ui/Section";
import CustomerNeedsText from "./CustomerNeedsText";

export default function CustomerNeedsSection() {
  return (
    <Section
      variant="large"
      className="flex lg:flex-row flex-col gap-20 justify-between items-center my-16"
    >
      <div className="flex flex-col lg:items-start items-center gap-6 lg:gap-4 lg:w-1/2 max-w-[700px] ">
        <CustomerNeedsText />
      </div>
      <img
        src="/images/illustrations/Hand-coding-pana.svg"
        alt="web developer illustration"
        className="lg:max-h-[400px] max-h-[550px]"
      />
    </Section>
  );
}
