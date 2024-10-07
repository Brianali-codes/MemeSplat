import React, { useRef } from 'react';


const HeroSection = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <button className="scroll-btn left" onClick={scrollLeft}>&lt;</button>
      <div className="scroll-container" ref={scrollContainerRef}>
        <div className="card">
          <h3>Card 1</h3>
          <p>This is some content inside card 1.</p>
        </div>
        <div className="card">
          <h3>Card 2</h3>
          <p>This is some content inside card 2.</p>
        </div>
        <div className="card">
          <h3>Card 3</h3>
          <p>This is some content inside card 3.</p>
        </div>
        <div className="card">
          <h3>Card 4</h3>
          <p>This is some content inside card 4.</p>
        </div>
        <div className="card">
          <h3>Card 5</h3>
          <p>This is some content inside card 5.</p>
        </div>
      </div>
      <button className="scroll-btn right" onClick={scrollRight}>&gt;</button>
    </section>
  );
};

export default HeroSection;
