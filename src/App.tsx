import React from 'react';
import Intro from './components/Intro';
import Details from './components/Details';

function App() {
  return (
    <div className="bg-slate-900 md:h-screen flex flex-col md:fkex-row">
      <div className='bg-slate-900 relative md:fixed md:h-screen flex flex-col justify-center md:w-1/2'>
        <Intro />
      </div>
      <div className='bg-slate-900 md:absolute md:w-1/2 md:right-0'>
        <Details />
      </div>
    </div>
  );
}

export default App;
