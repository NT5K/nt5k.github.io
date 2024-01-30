import React from 'react';
import TypingEffect from '../components/TypingEffect';

const Home = () => {
    return (
        <>
            <section id="home" className="h-screen flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 bg-grey-900 shadow-md rounded">
                <article className="sm:w-1/2 p-4">
                    <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-gray-100">
                        Hi, <span className="text-blue-500">My name is Nick</span> and I like building stuff
                    </h2>
                    <div className="max-w-md text-2xl mt-4 text-center sm:text-left text-gray-100">
                        <TypingEffect />
                    </div>
                    <div className="max-w-md text-2xl mt-4 text-center sm:text-left text-gray-100">
                        <span>
                            <a href='https://github.com/nt5k' target='_blank' className="hover:underline">
                                Github</a> | <a href='https://linkedin.com/in/nicholastysh' target='_blank' className="hover:underline">LinkedIn</a></span>
                    </div>
                </article>
                <div className="sm:w-1/2 flex justify-center items-center">
                    <img
                        className='max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl shadow-md rounded object-contain'
                        src="./images/code_freak.png"
                        alt="side"
                    />
                </div>
            </section>
        </>
    );
};

export default Home;
