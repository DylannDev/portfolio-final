/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function ProjectAheadImage({ selectedProject }) {
  const navigate = useNavigate();
  return (
    <img
      src={`/images/${selectedProject.images}`}
      alt="image du projet crusty pizza"
      className="rounded-3xl w-full max-w-[600px] cursor-pointer"
      onClick={() => navigate(`/work/${selectedProject.id}`)}
    />
  );
}
