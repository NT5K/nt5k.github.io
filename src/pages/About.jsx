import React from 'react';

const About = () => {
    return (
        <>
            <h2 id='about' className="text-4xl font-bold text-center sm:text-5xl mb-6">
                About Me
            </h2>
            <div className="bg-gray-900 text-gray-100 shadow-lg rounded-lg m-4 p-4 md:p-6">
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    {/* Profile Image Container */}
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                        <img
                            className="w-32 h-32 rounded-full border-2 border-gray-600"
                            src="./images/profile.png"
                            alt="Nick Tysh"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="flex-grow">
                        <h2 className="text-2xl font-bold">Nick Tysh</h2>
                        <p className="text-gray-400 mt-2">Software Developer / Web Designer</p>
                        <div className="mt-4 text-gray-300">
                            <p>
                                Highly skilled and motivated full stack web developer with 5+ years of experience building and maintaining web applications. Seeking an opportunity to leverage technical skills and creativity to deliver high-quality software solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;

