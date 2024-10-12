import React, { useState, useEffect } from 'react';
import { styles } from '../styles';

// TypingEffect Component
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

  return <span style={{ whiteSpace: 'nowrap', display: 'inline-block', width: `${text.length}ch` }}>{displayedText}</span>;
};

const Hero = () => {
  const onButtonClick = () => {
    window.open('./Shaily_Macwan_Resume.pdf', '_blank');
  };

  const gitOpen = () =>{
    window.open('https://github.com/ShailyMacwan/');
  }

  const linkedOpen=()=>{
    window.open('https://www.linkedin.com/in/shailymacwan/');
  }

  const gmailOpen =()=>{
    window.open('mailto:shailymacwan12@gmail.com:')
  }

  return (
    <section className="relative w-full h-screen mx-auto flex items-center justify-left">
      {/* SVG Wave Animation */}
      <div className="absolute bottom-0 inset-x-0 overflow-hidden  md:h-[300px] sm:h-[600px] lg:h-[700px]">
  <svg
    viewBox="0 0 1000 700"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    overflow="auto"
    shapeRendering="auto"
    fill="currentColor"
  >
    <defs>
      <path id="wave" d="M 0 2000 0 500 Q 120 420 300 500 t 300 0 300 0 300 0 300 0 300 0  v700 z" />
      <path id="wave-path" d="M -600 0 0 0" />
    </defs>
    <g>
      <use xlinkHref="#wave" x="-100" y="-200" fill="rgba(2, 132, 199, 0.5)">
        <animateMotion dur="10s" repeatCount="indefinite">
          <mpath xlinkHref="#wave-path" />
        </animateMotion>
      </use>
      <use xlinkHref="#wave" x="0" y="-180" fill="rgba(2, 132, 199, 0.4)" opacity="50%">
        <animateMotion dur="6s" repeatCount="indefinite">
          <mpath xlinkHref="#wave-path" />
        </animateMotion>
      </use>
      <use xlinkHref="#wave" x="0" y="-280" fill="rgba(22, 132, 199, 0.2)">
        <animateMotion dur="14s" repeatCount="indefinite">
          <mpath xlinkHref="#wave-path" />
        </animateMotion>
      </use>
    </g>
  </svg>
</div>


      <div className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col items-left gap-5 relative z-10`}>
        {/* Stable Text */}
        <h1 className={`${styles.heroHeadText} mt-20 text-white`}>
          Hii, I am{' '}
          <span className="text-[#2006c7]">
            <TypingEffect text="Shaily Macwan" speed={150} pause={2000} />
          </span>
        </h1>

        {/* Stable Text */}
        <p className="mt-4 text-[24px] text-secondary">
          I develop <br className="sm:block hidden" /> what you see on your screen
        </p>

        <div className="social_icons flex flex-row gap-2 mt-1 justify-start">
  
            <img src="./icons/github.png" alt="GitHub icon" onClick={gitOpen}   className="h-[32px] w-[32px] hover:shadow-2xl hover:shadow-blue-500/50 hover:h-[35px] hover:w-[35px] transition-all duration-300"/>
            <img src="./icons/linkedin.png" onClick={linkedOpen} alt="LinkedIn icon"  className="h-[32px] w-[32px] hover:shadow-2xl hover:shadow-blue-500/50 hover:h-[35px] hover:w-[35px] transition-all duration-300"/>
            <img src="./icons/mail.png" alt="Email icon" onClick={gmailOpen}   className="h-[32px] w-[32px] hover:shadow-2xl hover:shadow-blue-500/50 hover:h-[35px] hover:w-[35px] transition-all duration-300"/>
        </div>

        <button
          type="button"
          onClick={onButtonClick}
          aria-label="Open my resume"
          className="bg-tertiary hover:bg-[#2e255e] active:bg-[#463d78] py-3 mt-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary block"
        >
          Open Resume
        </button>
      </div>
    </section>
  );
};

export default Hero;
