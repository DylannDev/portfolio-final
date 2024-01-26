/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Title from "../../../reusable-ui/Title";
import StackBadges from "../../../reusable-ui/StackBadges";
import ExternalLinks from "../../../reusable-ui/ExternalLinks";
import Button from "../../../reusable-ui/Button";

export default function ProjectAheadText({ selectedProject }) {
  return (
    <div className="lg:w-1/2 w-full max-w-[600px] flex flex-col gap-6">
      <Title label={selectedProject.name} className="text-left text-3xl" />
      {selectedProject.description.header}
      <StackBadges project={selectedProject} shortenLabel />
      <ExternalLinks project={selectedProject} />
      <div className="flex flex-col items-center lg:items-start mt-4 lg:mt-0">
        <Button label="Consulter tous mes projets" href="/work" />
      </div>
    </div>
  );
}
