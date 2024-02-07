import gsap, { Power2 } from 'gsap';
import { useEffect, useState } from 'react';
import './Intersection.scss';

export const Intersection = () => {
  // let sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState('sectionFirst');
  useEffect(() => {
    // define the options for the observer
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };
    // defint the target for the observer
    const target = document.querySelector('.content')?.querySelectorAll('section') as NodeListOf<HTMLElement>;
    // define the observer
    const ActiveSection = (target: HTMLElement) => {
      let currentSection: HTMLElement | null = null;
      const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.className);
            console.log(entry.target.className, entry.isIntersecting);
            if (currentSection !== entry.target) {
              currentSection = entry.target as HTMLElement;
              fadeIn('.fadeIn');
            }
          } else if (currentSection === entry.target) {
            currentSection = null;
            fadeOut('.fadeIn');
          }
        });
      }, options);
      sectionObserver.observe(target);
    };
    // loop through the sections and observe each one
    target.forEach((section: any) => {
      ActiveSection(section);
    });
  });

  // const intersection = useIntersection(sectionRef, {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 0.3,
  // });

  const fadeIn = (element: string) => {
    gsap.to(element, {
      opacity: 1,
      y: -60,
      duration: 1,
      ease: Power2.easeOut,
      stagger: {
        amount: 0.3,
      },
    });
  };

  const fadeOut = (element: string) => {
    gsap.to(element, {
      opacity: 0,
      y: -20,
      duration: 1,
      ease: Power2.easeOut,
    });
  };

  // intersection && intersection.isIntersecting ? fadeIn('.fadeIn') : fadeOut('.fadeIn');

  return (
    <>
      <div className='header'>
        <div className='sm-btn'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='3'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='feather feather-chevron-left'
          >
            <polyline points='15 18 9 12 15 6'></polyline>
          </svg>
        </div>
        <h5>About</h5>
        <div className='sm-btn'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2.2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='feather feather-send'
          >
            <line x1='22' y1='2' x2='11' y2='13'></line>
            <polygon points='22 2 15 22 11 13 2 9 22 2'></polygon>
          </svg>
        </div>
      </div>
      <div className='content'>
        <section className='sectionFirst'>
          <div className='pic'>
            <img
              src='https://cdn.dribbble.com/users/997665/screenshots/9634478/media/8ad68f67fdbfb09bc054937edecf2d27.png'
              alt=''
            />
          </div>
          <h3>Alara Frank</h3>
          <p className='fadeIn'>
            Massa id neque aliquam vestibulum. Nibh praesent tristique magna sit. Auctor eu augue ut lectus arcu
            bibendum at varius. Nam aliquam sem et tortor consequat id. Nunc mi ipsum faucibus vitae aliquet nec. Eu
            consequat ac felis donec et. Vivamus arcu felis bibendum ut tristique. Egestas diam in arcu cursus euismod
            quis viverra nibh. Donec ac odio tempor orci dapibus ultrices in iaculis. Enim eu turpis egestas pretium.
          </p>
        </section>
        <section className='sectionSecond'>
          <div className='inner'>
            <h3 className='fadeIn'>The talk of what makes a champion.</h3>
            <p className='fadeIn'>
              Massa id neque aliquam vestibulum. Nibh praesent tristique magna sit. Auctor eu augue ut lectus arcu
              bibendum at varius. Nam aliquam sem et tortor consequat id. Nunc mi ipsum faucibus vitae aliquet nec. Eu
              consequat ac felis donec et. Vivamus arcu felis bibendum ut tristique. Egestas diam in arcu cursus euismod
              quis viverra nibh. Donec ac odio tempor orci dapibus ultrices in iaculis. Enim eu turpis egestas pretium.
              Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Eget nulla facilisi etiam dignissim
              diam quis enim lobortis. Enim sit amet venenatis urna cursus eget. Tellus id interdum velit laoreet id. Ac
              odio tempor orci dapibus. Et ultrices neque ornare aenean euismod elementum nisi. Dolor morbi non arcu
              risus quis. Lectus sit amet est placerat in egestas erat imperdiet. Cum sociis natoque penatibus et magnis
              dis.
            </p>
            <div className='btn-row fadeIn'>
              <a href='/'>Click here bruh</a>
            </div>
          </div>
        </section>
        <section className='sectionThird'>
          <h3>New Section</h3>
          <p className='fadeIn'>
            Massa id neque aliquam vestibulum. Nibh praesent tristique magna sit. Auctor eu augue ut lectus arcu
            bibendum at varius. Nam aliquam sem et tortor consequat id. Nunc mi ipsum faucibus vitae aliquet nec. Eu
            consequat ac felis donec et. Vivamus arcu felis bibendum ut tristique. Egestas diam in arcu cursus euismod
            quis viverra nibh. Donec ac odio tempor orci dapibus ultrices in iaculis. Enim eu turpis egestas pretium.
            Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Eget nulla facilisi etiam dignissim diam
            quis enim lobortis. Enim sit amet venenatis urna cursus eget. Tellus id interdum velit laoreet id. Ac odio
            tempor orci dapibus. Et ultrices neque ornare aenean euismod elementum nisi. Dolor morbi non arcu risus
            quis. Lectus sit amet est placerat in egestas erat imperdiet. Cum sociis natoque penatibus et magnis dis.
            Massa id neque aliquam vestibulum. Nibh praesent tristique magna sit. Auctor eu augue ut lectus arcu
            bibendum at varius. Nam aliquam sem et tortor consequat id. Nunc mi ipsum faucibus vitae aliquet nec. Eu
            consequat ac felis donec et. Vivamus arcu felis bibendum ut tristique. Egestas diam in arcu cursus euismod
            quis viverra nibh. Donec ac odio tempor orci dapibus ultrices in iaculis. Enim eu turpis egestas pretium.
            Tortor vitae purus faucibus ornare suspendisse sed nisi lacus sed. Eget nulla facilisi etiam dignissim diam
            quis enim lobortis. Enim sit amet venenatis urna cursus eget. Tellus id interdum velit laoreet id. Ac odio
            tempor orci dapibus. Et ultrices neque ornare aenean euismod elementum nisi. Dolor morbi non arcu risus
            quis. Lectus sit amet est placerat in
          </p>
        </section>
      </div>
    </>
  );
};

export default Intersection;
