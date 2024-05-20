import React from 'react'
import './newsLetter.css'
import Navbar from '@/app/components/Navbar'
import { BsEnvelopeAtFill } from 'react-icons/bs'

const page = () => {
  return (
    <>
    <div>
    <Navbar />
    </div>
    <div className="container bg-cover text-center text-white flex justify-center ml-52 mt-52">
    <form name="newsLetter" method="POST" data-netlify="true">
        <h1 className='w-[1000px] text-5xl font-semibold text-center ml-64'>
            Fique por dentro da últimas tendências do mercado de IoT.
        <br/>
            Increva-se para receber nossa newsletter.
        </h1>
        <p className='max-w-[50%] text-lg font-medium ml-96'>
            Ao inserir seu e-mail, você concorda em receber a newsletter IoTHINGS da Allexo. Você pode cancelar sua inscrição a qualquer momento. Basta seguir as instruções fornecidas na mensagem de e-mail enviada.
        </p>    
        <div className="emailBox h-10 flex justify-center">
            <div className="bg-gray-700 text-white text-4xl cursor-pointer h-14 p-3">
                <BsEnvelopeAtFill />
            </div>
            <input className="textBox h-14 w-0 transition-[2s]" type="email" name="email" placeholder="Insira seu E-mail"/>
            <input type="submit" value="Submit" className="h-14 w-20 bg-gray-700 cursor-pointer text-white uppercase" name="button">
            </input>
        </div>
    </form>
        </div>
        </>
  )
}

export default page
