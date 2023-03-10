
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
  const [showEducation, setShowEducation] = useState(true);
  //console.log (CV);
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
          <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(true)}
            >
              Education
            </button>
            <button
              className="custom-btn btn-4"
              onClick={() => setShowEducation(false)}
            >
              Experience
            </button> 
      <div>
        {showEducation ? (
          <Education education={education} />
        ) : (
          <Experience experience={experience} />
        )}
      </div>
      <div>
      {/* crearemos un div posteriormente con un ternario que nos muestre 
      Education si showEducation = true y nos muestre Experience si showEducation = false. */}
          
      </div>
         
    </div>
    
  );
}

export default App;
