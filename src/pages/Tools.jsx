import React from "react";
import { motion } from "framer-motion";
import { techStack } from "../assets/data/constants";

const Tools = () => {
  return (
    <>
      <section id="tools" className=" text-gray-100 p-6 my-12 scroll-mt-20">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6">
          Tech Stack
        </h2>

        <motion.div className="mt-8 flex flex-wrap justify-center">
          {techStack.map((tool, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView={"visible"}
              variants={{
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                  },
                },
                hidden: { opacity: 1, y: 80 },
              }}
              className="flex flex-col items-center justify-center bg-gray-900 py-6 px-2 mb-2 m-1 rounded-3xl shadow-xl h-25 w-30"
            >

              <a href={tool.website} target="_blank" className="flex flex-col items-center">
                <img
                  alt={tool.name}
                  src={tool.img}
                  className="w-16 h-16 mb-4 object-contain"
                />
                <h4 className="text-md text-center text-gray-300">{tool.name}</h4>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default Tools;
