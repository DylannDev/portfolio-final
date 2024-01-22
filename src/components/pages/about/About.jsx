/* eslint-disable react/no-unescaped-entities */
import BackButton from "../../reusable-ui/BackButton";
import ResumeSection from "../skills/ResumeSection/ResumeSection";
import AboutInfos from "./AboutInfos";

export default function About() {
  return (
    <div className="fade-in">
      <BackButton />
      <div className="flex flex-col items-center pt-[20dvh]">
        <AboutInfos />
      </div>
      <ResumeSection />
    </div>
  );
}
