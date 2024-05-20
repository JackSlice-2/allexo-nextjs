'use client';

import './root.css';
import { useState } from 'react'; // Import useState
import { carouselText, thumbnailText } from "./data";

export default function HomePage() {
  const [currentCarouselItem, setCurrentCarouselItem] = useState(0); // Initialize state

  // Define nextCaroselItem inside HomePage
  const nextCaroselItem = (index: number) => {
    setCurrentCarouselItem(index);
  };

  return (
    <>
      <div className="carousel">
        <div className="list">
          {carouselText[currentCarouselItem] && (
            <div key={currentCarouselItem} className="item">
              <img alt="" src={carouselText[currentCarouselItem].imageUrl}/>
              <div className="content text-sm">
                <div className="title">{carouselText[currentCarouselItem].name}</div>
                <div className="topic" id={`topic-${currentCarouselItem}`}>{carouselText[currentCarouselItem].topic}</div>
                <div className="des">{carouselText[currentCarouselItem].des}</div>
                <div className="buttons">
                  {carouselText[currentCarouselItem].buttons.map((button, btnIndex) => (
                    <button key={`${currentCarouselItem}-${btnIndex}`} aria-label={button.name}>
                      {button.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="thumbnail">
          {/* Thumbnails */}
          <div className="thumbnail">
            {thumbnailText.map((item, index) => (
              <button key={index} onClick={() => nextCaroselItem(index)}>
                <div className="item">
                  <img alt="" src={item.imageUrl}/>
                  <div className="content">
                    <div className="title">{item.name}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <video id="myVideo" className='hidden'>
          <source src="./Allexo Ad1.mp4" type="video/mp4"/>
        </video>

        <div>
          <div className="play"></div>
        </div>
      </div>
    </>
  );
}
