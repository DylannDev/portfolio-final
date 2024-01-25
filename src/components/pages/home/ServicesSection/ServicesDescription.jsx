/* eslint-disable react/prop-types */
import { RxCheck } from "react-icons/rx";

export default function ServicesDescription({ description }) {
  return (
    <div className="flex items-start gap-1">
      <span className="pt-1">
        <RxCheck className="text-xl text-secondary" />
      </span>
      <p className="text-left flex gap-1 items-start">{description}</p>
    </div>
  );
}
