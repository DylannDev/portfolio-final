/* eslint-disable react/prop-types */
import TitleProjects from "../../../reusable-ui/TitleProjects";

export default function ProjectDescription({ selectedProject }) {
  return (
    <div className="flex flex-col gap-4">
      <img
        src={`/images/${selectedProject.images}`}
        alt="computer background"
        className="max-w-3xl rounded-3xl mb-12"
      />
      <TitleProjects size="text-3xl" label="Note d'intention" />
      <div className="flex flex-col gap-3 text-justify pb-4">
        {selectedProject.description.header}
      </div>
      <div>
        <TitleProjects size="text-3xl" label="Features" />
        <ul className="list-disc py-4 px-10">
          {selectedProject.description.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
