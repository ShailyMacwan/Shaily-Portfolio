import React from 'react'
import {motion} from 'framer-motion'

import { styles } from '../styles'
import { SectionWrapper } from '../layout'


const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.heroSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview</h2>
      </motion.div>

      <motion.p className='mt-4 text-secondary leading-[25px]'>
        My name is Shaily Macwan. As a Software Developer, my goal is to leverage my proficiencies to create visually stunning and user-friendly websites. With a keen eye for design and a passion for coding, I am dedicated to delivering innovative solutions that enhance the digital presence of businesses and provide exceptional user experiences.
        
      </motion.p>

    </>
  )
}

export default SectionWrapper(About, 'about')