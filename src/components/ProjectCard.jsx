import React from 'react';

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center">
            <div className="flex justify-center items-center h-64 w-full mb-4">
                <img src={project.img} alt={project.name} style={{ borderRadius: '1.25rem' }} className="w-full h-auto object-contain p-4" />
            </div>
            <h4 className="text-xl font-bold mt-4 text-center">{project.name}</h4>
            <div className="flex justify-center mt-2 w-full">
                {project.link !== "#" &&
                    <a className="text-lg mr-4 text-blue-500 underline hover:text-blue-400" target="_blank" rel="noopener noreferrer" href={project.link}>Demo</a>
                }
                {project.github !== "#" &&
                    <a className="text-lg text-blue-500 underline hover:text-blue-400" target="_blank" rel="noopener noreferrer" href={project.github}>Github</a>
                }
            </div>
            <p className="text-lg mt-2 text-center text-gray-300">{project.desc}</p>
            <div className="mt-2 flex flex-wrap justify-center gap-2">
                {project.badges.map((badge, index) => (
                    <span key={index} className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded text-blue-600 bg-blue-200 last:mr-0 mr-1">
                        {badge}
                    </span>
                ))}
            </div>
        </div>
    );
};


export default ProjectCard;
