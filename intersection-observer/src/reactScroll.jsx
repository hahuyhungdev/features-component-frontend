import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import { Link, Element } from 'react-scroll';
import clsx from 'clsx';
let headers = ['Intro', 'Random Header', 'Another One', 'Javascript', 'Next.js'];
let bgColors = ['blue', 'red', 'green', 'yellow', 'purple'];

function App() {
  return (
    <div className='App'>
      <main className='flex'>
        <div id='main-content' className='flex-grow w-6'>
          {headers.map((header, index) => (
            <Element key={index} name={header} className='element'>
              <section className={clsx('w-full h-[90vh]', `bg-${bgColors[index]}-400`)}>
                <h2 className='text-sm'> {header}</h2>
              </section>
            </Element>
          ))}
        </div>
        <div className='sticky top-0 h-[100vh] w-[300px] bg-gray-200 flex flex-col'>
          <h3 className='text-xl font-black'>on this page</h3>
          {headers.map((header, index) => (
            <p className='text-sm' key={index}>
              <Link
                activeClass='active'
                activeStyle={{ color: 'red' }}
                offset={-50}
                className={clsx('text-black no-underline')}
                to={header}
                spy={true}
                smooth={true}
                duration={500}
              >
                {header}
              </Link>
            </p>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
