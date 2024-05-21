import React from 'react'
import Navbar from '@/app/components/Navbar'
import './solutions.css'
import { solutionsText } from './data'

const page = () => {
  return (
    <>
      <Navbar />
      <div>
    <div className="background bg-cover absolute">
    <div className="text-center gap-24 my-24 mx-auto">
    <h2 className="underline text-7xl yellow-underline">
    Soluções
</h2>
    </div>
    <div>
        <h1 className='font-medium text-2xl relative text-center'>
          A Allexo possui soluções customizadas para atender diversas verticais.
        </h1>
    </div>
    <div className="lg:flex">
    {solutionsText.map((item, index) => (
        <div key={index} className="text-center rounded-xl  hover:shadow-xl hover:shadow-yellow-600 transition m-20 my-32 lg:mx-0">
        <a href={item.href}>
          <div className="text-yellow-600 text-4xl p-5 h-20 w-20 rounded-full border-solid border-2 border-yellow-600 my-5 mx-auto">
              {item.icon}
          </div>
          <h2 className='text-2xl'>{item.title}</h2>
          <p className='px-20'>{item.text}</p>
        </a>
        </div>
      ))}
    </div>
    </div>
</div>
    </>
  )
}
export default page
