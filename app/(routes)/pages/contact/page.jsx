import React from 'react'
import './contact.css'
import Navbar from '@/app/components/Navbar'
import { contactText } from './data'

const page = () => {
  return (
    <>
    <Navbar />
    <section class="contact">
        <div class="content">
            <h2>Quem somos</h2>
            <p>A Allexo é uma empresa de tecnologia fundada em 2016 com o objetivo de desenvolver soluções de Internet das Coisas para pequenas, médias e grandes indústrias visando tornar acessível as modernas tecnologias da Indústria 4.0 para qualquer tipo de empresa, para empresas de qualquer tamanho.</p>
        </div>
        <div class="container">
           
        <div className="contactInfo">
            {contactText.map((info, index) => (
              <div key={index} className="box">
                <div className="icon">
                    {info.icon}
                </div>
                <div className="text">
                  <h3>{info.title}</h3>
                  <p>{info.text}</p>
                </div>
              </div>
            ))}
          </div>

            <div class="contactForm">
                <form id="contactForm" method="POST" onsubmit="sendMessage(event)">
                    <div class="titleWrapper">
                        <h2>Entre em contato</h2>
                        <p>Por favor preencha os campos abaixo para podermos entrar em contato.</p>
                    </div>
            
                    <div class="inputBox">
                        <input type="text" name="name" required/>
                        <span>Full Name</span>
                    </div>
            
                    <div class="inputBox">
                        <input type="email" name="email" required/>
                        <span>Email</span>
                    </div>
            
                    <div class="inputPhone">
                        <div class="inputBox prefix">
                            <input type="text" name="prefix" required/>
                            <span>Prefix</span>
                        </div>
                        <div class="inputBox number">
                            <input type="text" name="number" required/>
                            <span>Phone Number</span>
                        </div>
                    </div>
            
                    <div class="inputBox">
                        <h3>Selecione um das Opçoes abaixo:</h3>
                        <div class="radioContainer">
                            <div>
                                <input type="radio" id="budget" name="SubjectOption" value="Budget"/>
                                <label for="budget">Orçamento</label>
                            </div>
                            <div>
                                <input type="radio" id="other" name="SubjectOption" value="Other"/>
                                <label for="other">Outro</label>
                            </div>
                            <div>
                                <input type="radio" id="tech" name="SubjectOption" value="Tech Support"/>
                                <label for="tech">Support Técnico</label>
                            </div>
                        </div>
                      {/*  <!-- Hidden input to store the selected subject -->*/}
                        <input type="hidden" id="subject" name="Subject" value=""/>
                    </div>
            
                    <div class="inputBox">
                        <textarea name="message" placeholder="Your Message" required></textarea>
                        <span>Message</span>
                    </div>
                    <div class="inputBox">
                        <input type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
            
        </div>
    </section>
            
    </>
  )
}

export default page
