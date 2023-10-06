import '../CSS/Background.css';
import imageSlide from '../DataSlides/Dataslide';
import React, { useEffect, useState } from 'react';

const Background = () => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 3) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentState]);

  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundColor: '#333',
    height: '100vh',
    transition: 'background-image 0.5s ease-in-out',
  };

  const goToNext = (state) => {
    setCurrentState(state);
  };

  return (
    <div className={`container-style ${currentState === 0 ? 'slide-transition' : ''}`}>
      <div style={bgImageStyle}>
        <div className='transparent-background'></div>
        <div className='description'>
          <div>
            <h1>{imageSlide[currentState].title}</h1>
            <p>{imageSlide[currentState].body}</p>
          </div>
          <div className='carousel-boult'>
            {imageSlide.map((_, index) => (
              <span
                key={index}
                onClick={() => {
                  goToNext(index);
                }}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
