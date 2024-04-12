import React from 'react';
import Intro from './components/Intro';
import Details from './components/Details';
import Starfield from './components/Starfield';

function App() {
  return (
    <div className="bg-slate-900 md:min-h-screen flex flex-col md:flex-row">
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
      />
      <div className= 'relative md:fixed md:h-screen flex flex-col justify-center md:w-1/2'>
        <Intro />
      </div>
      <div className='md:max-h-screen md:absolute md:w-1/2 md:right-0 md:overflow-y-auto'>
        <Details />
      </div>
    </div>
  );
}

export default App;
