/* eslint-disable react/no-unescaped-entities */
import BackButton from "../../reusable-ui/BackButton";
import ResumeSection from "../skills/ResumeSection/ResumeSection";
import AboutInfos from "./AboutInfos";

export default function About() {
  return (
    <>
      <BackButton />
      <div className="fade-in pt-60">
        <AboutInfos />
        <ResumeSection />
      </div>
    </>
  );
}
