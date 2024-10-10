import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const TypingEffect = ({ text, speed, pause }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]); // Append each letter
        setIndex(index + 1); // Move to the next character
      }, speed);

      return () => clearTimeout(timeoutId);
    } else {
      // Reset the typing after a short pause
      const pauseId = setTimeout(() => {
        setDisplayedText(''); // Clear the text
        setIndex(0); // Reset the index to 0
      }, pause); // Delay before restarting the typing

      return () => clearTimeout(pauseId);
    }
  }, [index, text, speed, pause]);

  return <span>{displayedText}</span>;
};

const Hero = () => {
  const onButtonClick = () => {
    // Open the PDF file in a new tab
    window.open("./Shaily_Macwan_Resume.pdf", "_blank");
  };

  return (
    <>
       <section className="relative w-full h-screen mx-auto">
        <div
          className={`${styles.paddingX} inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div>
            <h1 className={`${styles.heroHeadText} mt-20 `}>
              Hii, I am{" "}
              <span className="text-[#2006c7]">
                <TypingEffect text="Shaily Macwan" speed={150} pause={2000} />
              </span>
            </h1>
            <p className="mt-4 text-[24px] text-secondary">
              I develop <br className="sm:block hidden" /> what you see on your screen
            </p>
            <div className="social_icons flex flex-row gap-2 mt-1 justify-start">
              <a href="https://github.com/ShailyMacwan/">
                <img
                  src="./icons/github.png"
                  alt="github"
                  className="h-[32px] w-[32px]"
                />
              </a>
              <a href="https://www.linkedin.com/in/shailymacwan/">
                <img
                  src="./icons/linkedin.png"
                  alt="linkedIn"
                  className="h-[32px] w-[32px]"
                />
              </a>
              <a href="mailto:shailymacwan12@gmail.com">
                <img
                  src="./icons/mail.png"
                  alt="mail"
                  className="h-[32px] w-[32px]"
                />
              </a>
            </div>
            <button
              type="button"
              onClick={onButtonClick}
              className="bg-tertiary hover:bg-[#2e255e] active:bg-[#463d78] py-3 mt-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary block"
            >
              Open Resume
            </button>
          </div>
        </div>

        {/* PC Setup Image */}
        <div className="mt-8">
          <img
            src="pc_1.jpg" // Reference to pc_1.jpg in the public folder
            alt="PC setup"
            className="max-w-[500px] w-full h-auto mx-auto rounded-lg shadow-lg"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
