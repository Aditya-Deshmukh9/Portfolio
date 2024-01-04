import React from "react";
import UserProject from "../components/UserProject";
import { projectData } from "../Utils/projectData";

const Projects = () => {
  return (
    <section
      id="projects"
      className="dark:bg-gray-900 dark:text-white dark:border-white"
    >
      <div className="mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 ">
        <div className="mx-auto max-w-lg text-center lg:mt-20">
          <h2 className="text-center text-3xl font-bold text-indigo-600 sm:text-3xl  lg:mt-18">
            Projects
          </h2>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 ">
          {projectData.map((project, index) => (
            <UserProject key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
