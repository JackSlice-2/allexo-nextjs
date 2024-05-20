'use client'

import './root.css';
import { carouselText, thumbnailText } from "./data";

export default function HomePage() {
  return (
    <>
    <div className="carousel">

    <div className="list">
              {carouselText.map((item, index) => (
                  <div key={index} className="item">
                      <img alt="" src={item.imageUrl}/>
                      <div className="content text-sm">
                          <div className="title">{item.name}</div>
                          <div className="topic" id={`topic-${index}`}>{item.topic}</div>
                          <div className="des">{item.des}</div>
                          <div className="buttons">
                              {item.buttons.map((button, btnIndex) => (
                                  <button key={`${index}-${btnIndex}`} aria-label={button.name}>
                                      {button.name}
                                  </button>
                              ))}
                          </div>
                      </div>
                  </div>
              ))}
          </div>

        <div className="thumbnail">
             {/* Thumbnails */}
          <div className="thumbnail">
              {thumbnailText.map((item, index) => (
                  <button key={index}>
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

