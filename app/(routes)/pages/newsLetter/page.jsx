import React from 'react'
import './newsLetter.css'
import Navbar from '@/app/components/Navbar'

const page = () => {
  return (
    <>
    <div className=''>
    <Navbar />
    </div>
    <div class="container">
    <form name="newsLetter" method="POST" data-netlify="true">
        <h1>Fique por dentro da últimas tendências do mercado de IoT.<br/>
            Increva-se para receber nossa newsletter.</h1>
        <p>Ao inserir seu e-mail, você concorda em receber a newsletter IoTHINGS da Allexo. Você pode cancelar sua inscrição a qualquer momento. Basta seguir as instruções fornecidas na mensagem de e-mail enviada.</p>    
        <div class="emailBox">
            <i class="bi bi-envelope"></i>
            <input class="textBox" type="email" name="email" placeholder="Insira seu E-mail"/>
            <input type="submit" value="Submit" class="btn" name="button"></input>
        </div>
    </form>
        </div>
        </>
  )
}

export default page
