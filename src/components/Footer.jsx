import React from 'react';
import { SectionWrapper } from '../layout';


const Footer = () => {

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
    <div className='w-full mx-3 flex flex-col sm:flex-row items-center py-5 bottom-0 z-20'>
      <div className='flex-center text-white sm:text-[14px] md:text-[18px] lg:text-[18px] cursor-pointer flex ml-3'>
        Developed by Shaily Macwan
      </div>

      <div className="social_icons flex flex-row gap-2 mt-1 sm:items-center justify-right p-6 absolute right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl">
            <img src="./icons/github.png" alt="GitHub icon" onClick={gitOpen}   className="h-[32px] w-[32px] hover:shadow-2xl hover:shadow-blue-500/50 hover:h-[35px] hover:w-[35px] transition-all duration-300"/>
            <img src="./icons/linkedin.png" onClick={linkedOpen} alt="LinkedIn icon"  className="h-[32px] w-[32px] hover:shadow-2xl hover:shadow-blue-500/50 hover:h-[35px] hover:w-[35px] transition-all duration-300"/>
            <img src="./icons/mail.png" alt="Email icon" onClick={gmailOpen}   className="h-[32px] w-[32px] hover:shadow-2xl hover:shadow-blue-500/50 hover:h-[35px] hover:w-[35px] transition-all duration-300"/>
      </div>
    </div>
  );
}

export default SectionWrapper(Footer,'')
