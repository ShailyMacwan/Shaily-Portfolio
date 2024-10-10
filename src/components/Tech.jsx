import React from 'react'
import { technologies } from '../constants'
import { styles } from '../styles'
import { SectionWrapper } from '../layout'
import {BallCanvas} from './canvas'

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      {/* {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas technology={technology} />
        </div>
      ))} */}
    </div>
  );
};

export default SectionWrapper(Tech,'')