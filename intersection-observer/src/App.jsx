import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import clsx from 'clsx';
let headers = ['Intro', 'Random Header', 'Another One', 'Javascript', 'Next.js'];
let bgColors = ['blue', 'red', 'green', 'yellow', 'purple'];
function App() {
  const [activeHeader, setActiveHeader] = useState(headers[0]);
  const handlerIntersectionObserver = (entries) => {
    // define the options
    let options = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    };
    // define the targets
    const targets = document.getElementById('main-content').querySelectorAll('section');

    // define the observer
    const activeHeader = (target) => {
      const headerObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHeader(entry.target.getAttribute('id'));
            observer.disconnect();
          }
        });
      }, options);
      headerObserver.observe(target);
    };
    // loop through the targets
    targets.forEach((target) => {
      activeHeader(target);
    });
  };
  useEffect(() => {
    handlerIntersectionObserver();
  });
  return (
    <div className='App'>
      <main className='flex'>
        <div id='main-content' className='flex-grow w-6'>
          {headers.map((header, index) => (
            <section id={header} key={index} className={clsx('w-full h-[90vh]', `bg-${bgColors[index]}-400`)}>
              <h2 className='text-sm'> {header}</h2>
            </section>
          ))}
        </div>
        <div className='sticky top-0 h-[100vh] w-[300px] bg-gray-200 flex flex-col'>
          <h3 className='text-xl font-black'>on this page</h3>
          {headers.map((header, index) => (
            <p className='text-sm' key={index}>
              <a
                href={`#${header}`}
                className={clsx('text-black no-underline', {
                  'font-bold': activeHeader === header,
                })}
              >
                {header}
              </a>
            </p>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
