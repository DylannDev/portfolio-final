import BackButton from "../../reusable-ui/BackButton";
import ResumeSection from "./ResumeSection/ResumeSection";
import SkillsSection from "./SkillsSection/SkillsSection";
import SoftSkillsSection from "./SoftSkillsSection/SoftSkillsSection";

export default function SkillsPage() {
  return (
    <>
      <BackButton />
      <div className="fade-in lg:pt-60 pt-44">
        <SkillsSection />
        <SoftSkillsSection />
        <ResumeSection />
      </div>
    </>
  );
}
