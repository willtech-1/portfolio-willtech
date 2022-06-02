import React from 'react';
import { homeObjOne, homeObjTwo } from './Data';
import { InfoSection } from '../../Components';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Skills />
      <Projects />
      <Contact />
    </>
  )
}

export default Home