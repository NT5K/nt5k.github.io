import React from "react";
import { motion } from "framer-motion";
import { serviceData } from "../assets/data/constants";

const Projects = () => {
  return (
    <>
      <section id="projects" className=" text-gray-100 p-6 my-12 scroll-mt-20">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6">
          Projects
        </h2>

        <motion.div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceData.map((el, i) => (
            <div key={i} className="bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center">
              <img src={el.img} alt={el.name} className="w-50 h-50 mb-4 object-contain rounded" />
              <h4 className="text-xl font-bold mt-4 text-center">{el.name}</h4>
              <p className="text-lg mt-2 text-center text-gray-300">{el.desc}</p>
              <div className="flex justify-center mt-2 w-full">
                {el.link !== "#" &&
                  <a className="text-lg mr-4 text-blue-500 underline hover:text-blue-400" target="_blank" rel="noopener noreferrer" href={el.link}>Demo</a>
                }
                <a className="text-lg text-blue-500 underline hover:text-blue-400" target="_blank" rel="noopener noreferrer" href={el.github}>Github</a>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Projects;
