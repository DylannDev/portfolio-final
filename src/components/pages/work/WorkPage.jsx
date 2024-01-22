import BackButton from "../../reusable-ui/BackButton";
import Work from "./Work";

export default function WorkPage() {
  return (
    <>
      <BackButton />
      <div className="flex items-center justify-center pt-[20dvh]">
        <Work />
      </div>
    </>
  );
}
