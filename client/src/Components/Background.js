import '../CSS/Background.css';
import imageSlide from './Dataslide';
import React, { useEffect, useState } from 'react'
const Background = () => {
  const [currentState, setCurrentState] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState == 3) {
        setCurrentState(0);
      }
      else {
        setCurrentState(currentState + 1);

      }
    }, 5000)
    return () => clearTimeout(timer);

  }, [currentState])
  const bgImageStlye = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundColor: "#333",
    height: '75vh'

  };

  const goToNext = (currentState) => {
    setCurrentState(currentState)
  }
  console.log(imageSlide.url); // Log the imageSlide data to the console


  return (
    <div className=' container-style'>
      <div style={bgImageStlye}>
        <div className='transparent-backgorund'></div>
        <div className="description">
          <div>
            <h1>
              {imageSlide[currentState].title}
            </h1>
            <p>
              {imageSlide[currentState].body}
            </p>
          </div>
          <div className='carousel-boult'>
            {
              imageSlide.map((imageSlide, currentState) => (
                <span key={currentState} onClick={() => {
                  goToNext(currentState);
                }}></span>
              ))


            }
          </div>
        </div>

      </div>
    </div>
  )
}

export default Background