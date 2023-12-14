import React from 'react';
import Intro from './components/Intro';
import Details from './components/Details';

function App() {
  return (
    <div className="bg-slate-900 h-screen">
      <div className='bg-slate-900 fixed h-screen flex flex-col justify-center w-1/2'>
        <Intro />
      </div>
      <div className='bg-slate-900 absolute w-1/2 right-0'>
        <Details />
      </div>
    </div>
  );
}

export default App;
