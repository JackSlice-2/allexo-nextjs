import React from 'react'
import './about.css'
import Navbar from '@/app/components/Navbar'
import { aboutText } from './data'
/*
let parallax = document.querySelector(".parallax");
let imgObjects = document.querySelectorAll(".imgObjects");

parallax.onmousemove = function(e) {
    let X = e.pageX;
    let Y = e.pageY;

    imgObjects[0].style.transform = "translate(" + X /  100 * -7 + "px," + Y /  100 * -7 + "px)";
    imgObjects[1].style.transform = "translate(" + X /  100 * -6 + "px," + Y /  100 * -6 + "px)";
    imgObjects[2].style.transform = "translate(" + X /  100 * -3 + "px," + Y /  100 * -3 + "px)";
    imgObjects[3].style.transform = "translate(" + X /  100 * -1 + "px," + Y /  50 * -1 + "px)";
    imgObjects[4].style.transform = "translate(" + X /  100 *  4 + "px," + Y /  100 *  4 + "px)";
    imgObjects[5].style.transform = "translate(" + X /  100 *  7 + "px," + Y /  100 *  7 + "px)";
    imgObjects[6].style.transform = "translate(" + X /  100 *  11 + "px," + Y /  100 *  11 + "px)";
}
*/

const page = () => {
  return (
    <>
    <Navbar />
    <div>
    <div className="parallax">
        <div className="flex flex-col p-[3%] gap-5 justify-center">
            <h1 className='text-white text-5xl font-bold p-2'>Allexo Tecnologia</h1>
            {aboutText.map((section, index) => (
              <div key={index} className="row flex p-6 z-10 lg:h-[100%] lg:w-[45%] justify-center bg-slate-100/60">
                <div className="max-h-[100px]">
                  <div className="icon text-5xl text-blue-800 p-3 bg-white justify-center">
                    {section.icon}
                  </div>
                </div>
                <span className='max-h-[100px] flex flex-col justify-center items-center text-black m-5 text-xl font-semibold'>{section.title}</span>
                <div className="textBox max-h-[80px] flex flex-col justify-center items-center text-black m-5 font-semibold text-md">
                  <div className="subTitle">
                    <p>{section.text}</p>
                  </div>
                </div>
              </div>
            ))}
    </div>

    <div className="imgObjects"></div>
    <div className="imgObjects"></div>
    <div className="imgObjects"></div>
    <div className="imgObjects"></div>
    <div className="imgObjects"></div>
    <div className="imgObjects"></div>
    <div className="imgObjects"></div>
    </div>
    
    </div>
    </>

  )
}

export default page
