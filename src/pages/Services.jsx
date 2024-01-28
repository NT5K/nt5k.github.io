import React from "react";
import { motion } from "framer-motion";
import { developerServices } from "../assets/data/constants";

const Services = () => {
    return (
        <>
            <section id="services" className=" text-gray-100 p-6 my-12 scroll-mt-20">
                <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6">
                    What I Do
                </h2>

                <motion.div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {developerServices.map((service, i) => (
                        <div key={i} className="bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center">
                            <img src={service.img} alt={service.name} className="w-64 h-64 mb-4 object-contain rounded" />
                            <h4 className="text-xl font-bold mt-4 text-center">{service.name}</h4>
                            <p className="text-lg mt-2 text-center text-gray-200">{service.desc}</p>
                        </div>
                    ))}
                </motion.div>
            </section>
        </>
    );
};

export default Services;
