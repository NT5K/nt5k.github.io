import React from 'react';

const getYearsSinceOctober2019 = () => {
    const startDate = new Date('2019-01-01'); // Starting date: October 1, 2019
    const currentDate = new Date(); // Current date

    const differenceInYears = currentDate.getFullYear() - startDate.getFullYear();
    const monthDifference = currentDate.getMonth() - startDate.getMonth();

    // Adjust the year difference if the current month is before October
    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < startDate.getDate())) {
        return differenceInYears - 1;
    } else {
        return differenceInYears;
    }
}

const experienceText = () => {
    const years = getYearsSinceOctober2019();
    return `over ${years} years of experience`;
}

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
                        <p className="text-gray-400 mt-2">Full-Stack Software & Web Developer</p>
                        <div className="mt-4 text-gray-300">
                            <p>
                                Dynamic and results-oriented Full-Stack Developer with {experienceText()} in crafting and deploying innovative software & web applications. Proficient in a broad spectrum of programming languages and tools, with a strong emphasis on efficient, scalable solutions. Demonstrated expertise in project management and driving process enhancements, contributing to the continual improvement of development practices and team productivity.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
