/* eslint-disable react/no-unescaped-entities */
import SoftSkillsSection from "../home/SoftSkillsSection/SoftSkillsSection";
import AboutInfos from "./AboutInfos";

export default function About() {
  return (
    <>
      <div className="flex flex-col items-center pt-[20dvh] ">
        <AboutInfos />
      </div>
      <hr />
      <SoftSkillsSection />
    </>
  );
}
