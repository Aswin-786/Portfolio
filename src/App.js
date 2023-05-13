
import React from 'react';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Experiance from './Components/Experiance';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Skills from './Components/Skills';

function App() {

  return (

    <div className='relative '>
      <Navbar />
      <main className="md:w-[80%] w-[90%] mx-auto">
        <About />
        <Experiance />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App;