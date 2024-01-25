import BackButton from "../../reusable-ui/BackButton";
import Work from "./Work";

export default function WorkPage() {
  return (
    <div className="fade-in">
      <BackButton />
      <div className="flex items-center justify-center lg:pt-60 pt-44 ">
        <Work />
      </div>
    </div>
  );
}
