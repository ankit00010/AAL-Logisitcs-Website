import '../CSS/Background.css';
import React, { useEffect, useState } from 'react';
import imageSlide from '../DataSlides/Dataslide';

const Background = () => {
  const [currentState, setCurrentState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentState((prevState) => (prevState + 1) % imageSlide.length);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentState]);

  const handleImageError = () => {
    // Handle image loading error (e.g., replace with a placeholder)
    console.error(`Error loading image: ${imageSlide[currentState].url}`);
  };

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
      <img
        loading="lazy"
        srcSet={`${imageSlide[currentState].url} 1200w, ${imageSlide[currentState].url} 800w`}
        src={imageSlide[currentState].url}
        alt={imageSlide[currentState].title}
        style={{ display: 'none' }}
        onError={handleImageError}
      />
    </div>
  );
};

export default Background;
