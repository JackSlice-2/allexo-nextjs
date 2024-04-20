import React from 'react'
import './contact.css'
import Navbar from '@/app/components/Navbar'
/*
  <script src="../Globals/menu/menu.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var checkboxes = document.querySelectorAll('input[name="SubjectOption"]');
            var subjectInput = document.getElementById('subject');
        
            checkboxes.forEach(function(checkbox) {
                checkbox.addEventListener('change', function() {
                    if (this.checked) {
                        subjectInput.value = this.value;
                    } else {
                        subjectInput.value = "";
                    }
                });
            });
        });
        


        function sendMessage(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Gather form data
    var formData = {
        title: document.querySelector('input[name="name"]').value,
        email: document.querySelector('input[name="email"]').value,
        prefix: document.querySelector('input[name="prefix"]').value,
        number: document.querySelector('input[name="number"]').value,
        subject: document.querySelector('input[name="Subject"]').value, // Ensure this is correctly set based on the selected radio button
        message: document.querySelector('textarea[name="message"]').value
    };

    // Send data to Flask server
    fetch('http://127.0.0.1:5000/receive_message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Serialize form data into JSON format
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        showToast('Message sent successfully!');
        document.getElementById('contactForm').reset();
    })
    .catch((error) => {
        console.error('Error:', error);
        showToast(error.message, true); // Show error toast
    });
}

function showToast(message, isError = false) {
    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    if (isError) {
        toast.style.backgroundColor = '#f44336'; // Red background for errors
    }
    document.body.appendChild(toast);
    toast.classList.add('show');
    setTimeout(function(){ toast.classList.remove('show'); }, 3000);
}

            </script> */
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
            <div class="contactInfo">
                <div class="box">
                    <div class="icon"><i aria-hidden="true" class="fa fa-map-marker"></i></div>
                    <div class="text">
                        <h3>Address</h3>
                        <p>porto alegre, Canoas numero 1444</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon"><i aria-hidden="true" class="fa fa-phone"></i></div>
                    <div class="text">
                        <h3>Phone</h3>
                        <p>857842 1444</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon"><i aria-hidden="true" class="fa fa-envelope-o"></i></div>
                    <div class="text">
                        <h3>email</h3>
                        <p>435346@432q2562.com</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon"><i aria-hidden="true" class="fa fa-whatsapp"></i></div>
                    <div class="text">
                        <h3>WhatsApp</h3>
                        <p>435346@432q2562.com</p>
                    </div>
                </div>
                <div class="box">
                    <div class="icon"><i aria-hidden="true" class="fa fa-telegram"></i></div>
                    <div class="text">
                        <h3>Telegram</h3>
                        <p>435346@432q2562.com</p>
                    </div>
                </div>
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
