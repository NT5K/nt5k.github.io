// Projects.js
import React from "react";
import { motion } from "framer-motion";
import { recentProjects, schoolProjects, web3Projects, developerServices } from "../assets/data/constants";
import ProjectCard from "./../components/ProjectCard";

const Projects = () => {
  const renderProjects = (projects) => (
    <motion.div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </motion.div>
  );

  return (
    <>
      <section id="projects" className="text-gray-100 p-6 my-12 scroll-mt-20">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6">Recent Projects</h2>
        {renderProjects(recentProjects)}

        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 mt-6">School & Bootcamp Projects</h2>
        {renderProjects(schoolProjects)}

        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 mt-6">NFT & Web3 Projects</h2>
        {renderProjects(web3Projects)}

        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 mt-6" id="services">What I Do</h2>
        {renderProjects(developerServices)}
      </section>
    </>
  );
};

export default Projects;
