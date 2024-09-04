"use client";
import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import Link from 'next/link';
import { Typewriting } from './components/typewriter';

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative min-h-screen bg-mainbackground font-mono">
      <button
        className={`fixed top-4 left-4 ${isOpen ? 'ml-64 md:ml-80 lg:ml-96' : 'ml-0'} p-4 bg-gradient-to-r from-sidebarNavigation to-sidebarButton text-white rounded-full shadow-xl hover:shadow-3xl transform hover:scale-105 transition-transform duration-300 border-black border-solid`}
        onClick={toggleSidebar}
      >
        {isOpen ? 'Uncover' : 'Discover'}
      </button>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div className="pt-24 px-4 flex flex-col justify-center items-center space-y-12 text-white">
        <div className="max-w-4xl text-center items-center">
          <br></br>
          <h1 className="text-4xl font-bold text-center">Randolf [Gabe] Uy</h1>
          <br></br>
          <div className='flex flex-row space-x-6 items-center justify-center'>
            <Link href='https://www.linkedin.com/in/gabe-uy/' target='_blank' rel='noopener noreferrer'>
              <img src='/images/linkedin.png' className='max-h-12 max-w-12' />
            </Link>
            <Link href='https://github.com/randolfuy01' target='_blank' rel='noopener noreferrer'>
              <img src='/images/github.png' className='max-h-12 max-w-12' />
            </Link>
            <Link href='https://medium.com/@randolfuy09' target='_blank' rel='noopener noreferrer'>
              <img src='/images/Medium.png' className="max-h-13 max-w-14" />
            </Link>
            <Link href='https://leetcode.com/u/randolfuy/' target='_blank' rel='noopener noreferrer'>
              <img src='/images/leetcode.png' className="max-h-12 max-w-12" />
            </Link>
          </div>
        </div>
        <div className="p-2 inline-block">
          <img src='/images/Pfp.png' className=' border rounded-[20%] border-black h-full w-full object-cover' style={{ borderWidth: '4px', height: '16rem', width: '16rem' }} />
        </div>
        <Typewriting />
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}

export default Home;