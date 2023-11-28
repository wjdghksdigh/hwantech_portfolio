import React, { useState } from 'react';

// Component
import ProjectCard from "./projectCard";
import ProjectModal from './projectModal';

//Type
import { ProjectType } from '@/type/project';

// Data
import { Projectitem } from "@/data/projectList";

const ProjectList: React.FC = () => {
  // modal
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);

  const handleProjectCardClick = (project: ProjectType) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-2 mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
              Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {Projectitem.map((project) => (
              <ProjectCard
                key={project.id}
                data={project}
                onClick={() => handleProjectCardClick(project)}
              />
            ))}
          </div>
        </div>
      </div>
      {selectedProject && (
        <ProjectModal data={selectedProject} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default ProjectList;
