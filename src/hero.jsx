import React, { useRef } from 'react';
import HERO from './assets/home.jpg';
import PEPE from './assets/pepe.webp';
import { Button } from "flowbite-react";

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


        <div className="card flex-shrink-0 w-screen md:w-1/3">
          <div>
            <img src={HERO} alt="High-quality meme generation" className='imgh' />
          </div>
          <div className='text-start'>
            <p className='Desc'>Generate High Quality Memes. Using Open Source Apis from github. Credit to Dev Daksan (D3VD) on github for the Meme Generating Api tied to reddit Memes.</p>
            <p className='Desc'>View Their Github <a href="https://github.com/D3vd/Meme_Api/tree/master"><span className='text-cyan-400'>Here</span></a></p>
            <br />
            <Button outline gradientDuoTone="purpleToPink">
              Generate Memes
            </Button>
          </div>
        </div>
        
        <div className="card flex-shrink-0 w-screen md:w-1/3">
          <div>
            <img src={HERO} alt="High-quality meme generation" className='imgh' />
          </div>
          <div className='text-start'>
            <p className='Desc'>Generate High Quality Memes. Using Open Source Apis from github. Credit to Dev Daksan (D3VD) on github for the Meme Generating Api tied to reddit Memes.</p>
            <p className='Desc'>View Their Github <a href="https://github.com/D3vd/Meme_Api/tree/master"><span className='text-cyan-400'>Here</span></a></p>
            <br />
            <Button outline gradientDuoTone="purpleToPink">
              Generate Memes
            </Button>
          </div>
        </div>

        <div className="card flex-shrink-0 w-screen md:w-1/3">
          <div>
            <img src={HERO} alt="High-quality meme generation" className='imgh' />
          </div>
          <div className='text-start'>
            <p className='Desc'>Generate High Quality Memes. Using Open Source Apis from github. Credit to Dev Daksan (D3VD) on github for the Meme Generating Api tied to reddit Memes.</p>
            <p className='Desc'>View Their Github <a href="https://github.com/D3vd/Meme_Api/tree/master"><span className='text-cyan-400'>Here</span></a></p>
            <br />
            <Button outline gradientDuoTone="purpleToPink">
              Generate Memes
            </Button>
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
