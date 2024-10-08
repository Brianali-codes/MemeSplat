import React, { useRef } from 'react';
import MT from './assets/TTM.png';
import LQ from './assets/LQW.png';
import { Button } from "flowbite-react";
import HERO from './assets/GTI.jpg'

const HeroSection = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
  };

  return (
    <section className="hero relative">



      <button 
        className="scroll-btn left absolute left-0" 
        onClick={scrollLeft} 
        aria-label="Scroll left">&lt;</button>



      <div className="scroll-container overflow-x-hidden flex" ref={scrollContainerRef}>


        <div className="card flex-shrink-0 w-screen md:w-1/3 bg-white dark:bg-black ">
          <div>
            <img src={LQ} alt="High-quality meme generation" className='imgh' />
          </div>
          <div className='text-start '>
            <p className='Desc text-black dark:text-white'>Generate High Quality Memes. Credit to Dev Daksan (D3VD) on github for the Meme Api.</p>
            <br />
            <p className='Desc text-black dark:text-white'>View Their Github <a href="https://github.com/D3vd/Meme_Api/tree/master"><span className='text-cyan-400'>Here</span></a></p>
            <br />
            <Button outline gradientDuoTone="purpleToPink">
              Generate Random Memes
            </Button>
          </div>
        </div>

        <div className="card flex-shrink-0 w-screen md:w-1/3 bg-white dark:bg-black ">
          <div>
            <img src={MT} alt="High-quality meme generation" className='imgh' />
          </div>
          <div className='text-start'>
            <p className='Desc text-black dark:text-white'>Generate High Quality Meme Templates. Using MemeGen.link Template Api. </p>
            <br />
            <p className='Desc text-black dark:text-white'>View The site <a href="https://memegen.link/" target='_blank'><span className='text-cyan-400'>Here</span></a></p>
            
            <br />
            <Button outline gradientDuoTone="tealToLime">
                View Meme Templates.
            </Button>
          </div>
        </div>

        <div className="card flex-shrink-0 w-screen md:w-1/3 bg-white dark:bg-black ">
          <div>
            <img src={HERO} alt="High-quality meme generation" className='imgh' />
          </div>
          <div className='text-start'>
            <p className='Desc text-black dark:text-white'>To view More Projects Check my github below:</p>
            <br />
            <p className='Desc text-black dark:text-white'>This Project is Made with ❤️ by Brian Ali</p>
            <br />
            <a href="https://github.com/gamerfunky78" target='_blank'>
                <Button outline gradientDuoTone="purpleToBlue">
                    View My Github.
                </Button>
            </a>
          </div>
        </div>
      </div>
      <button 
        className="scroll-btn right absolute right-0" 
        onClick={scrollRight} 
        aria-label="Scroll right">&gt;</button>
    </section>
  );
};

export default HeroSection;
