
import './App.css';
import {CV} from './CV/CV'
import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import More from './components/More';

const { hero, education, experience, languages, habilities, volunteer } = CV;

function App() {
  console.log (CV);
  return (
    <div className="App">
    <Hero hero={hero}/>
    <About hero={hero}/>
    <Education education={education}/>
    <Experience experience={experience}/>
    <More	
          languages={languages}
	        habilities={habilities}
	        volunteer={volunteer}/>
         
    </div>
  );
}

export default App;
