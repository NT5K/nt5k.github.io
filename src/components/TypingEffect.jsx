import React, { useState, useEffect } from 'react';
import { techStack } from "../assets/data/constants";

const TypingEffect = () => {
    const [currentWord, setCurrentWord] = useState("");
    const typingDelay = 150; // milliseconds per character
    const wordChangeDelay = 2000; // milliseconds to wait before changing word

    useEffect(() => {
        let currentWordIndex = 0;
        let letterIndex = 0;
        let isDeleting = false;

        const type = () => {
            const fullWord = techStack[currentWordIndex].name;
            setCurrentWord(fullWord.slice(0, letterIndex));

            if (!isDeleting && letterIndex === fullWord.length) {
                // Pause at end of word before deleting
                setTimeout(() => isDeleting = true, wordChangeDelay);
            } else if (isDeleting && letterIndex === 0) {
                // Move to the next word and start typing
                isDeleting = false;
                currentWordIndex = (currentWordIndex + 1) % techStack.length;
            }

            const delay = isDeleting ? typingDelay / 2 : typingDelay;
            setTimeout(() => {
                letterIndex += isDeleting ? -1 : 1;
                type();
            }, delay);
        };

        type();
    }, []);

    return (
        <p>
            I'm a programmer based in the United States. I like buidling things with {currentWord}
        </p>
    );
};

export default TypingEffect;
