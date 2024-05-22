'use client';

import './root.css';
import { useState } from 'react';
import { carouselText, thumbnailText } from "./data";

export default function HomePage() {
  const [currentCarouselItem, setCurrentCarouselItem] = useState(0);

  const nextCaroselItem = (index: number) => {
    setCurrentCarouselItem(index);
  };

  return (
    <>
      <div className="carousel h-[100vh] w-[100vw] overflow-hidden relative">
        <div className="list">
          {carouselText[currentCarouselItem] && (
            <div key={currentCarouselItem} className="item w-[100%] h-[100%] absolute inset-0">
              <img alt="" className='w-full h-full object-cover' src={carouselText[currentCarouselItem].imageUrl}/>
              <div className="content text-sm absolute top-16 max-w-[95%] md:max-w-[55%] md:pl-20 pl-5 text-white box-border">
                <div className="title lg:text-6xl text-3xl font-bold">
                  {carouselText[currentCarouselItem].name}
                </div>
                <div className="topic text-3xl lg:text-7xl font-bold text-orange-600" id={`topic-${currentCarouselItem}`}>
                  {carouselText[currentCarouselItem].topic}</div>
                <div className="des text-xl lg:text-2xl">
                  {carouselText[currentCarouselItem].des}
                </div>
                <div className="buttons p-5 grid gap-1 mt-5">
                  {carouselText[currentCarouselItem].buttons.map((button, btnIndex) => (
                    <button key={`${currentCarouselItem}-${btnIndex}`} 
                    className='bg-white text-black pointer-events-auto'
                    aria-label={button.name}>
                      {button.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

          <div className="thumbnail absolute bottom-2 md:bottom-10 lg:left-1/2 gap-1 md:gap-5 flex z-50 ml-1 md:ml-10">
            {thumbnailText.map((item, index) => (
              <button key={index} onClick={() => nextCaroselItem(index)}>
                <div className="item w-[92px] h-72 md:w-40 md:h-80 relative">
                  <img alt="" 
                  src={item.imageUrl} 
                  className='w-[100%] h-[100%] object-cover rounded-xl'
                  />
                  <div className="content absolute bottom-3 left-1 right-1">
                    <div className="title rounded-md bg-slate-300/50 text-xs md:text-lg text-center font-semibold text-black">
                      {item.name}
                  </div>
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
          <div className="play bg-red-700 rounded-2xl h-24 w-32 text-white text-3xl absolute right-8 bottom-52 md:bottom-0 md:top-64 text-center cursor-pointer hover:bg-orange-500 indent-1 transition-all ease-out"></div>
        </div>
    </>
  );
}
