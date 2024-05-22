import React from 'react'
import Navbar from '@/app/components/Navbar'
import './products.css'
import { featureText } from '@/app/data/ProductData'

const page = () => {
  return (
    <>
    <Navbar />
    <div id="nav">

<div class="navBottom text-3xl py-4">
    <h3 class="menuItem">Hardware</h3>
    <h3 class="menuItem">Software</h3>
</div>
</div>

<div class="slider">
<div class="sliderWrapper">
    <div class="sliderItem">
        <img alt="" src="/image/products/productsHardwareMain.webp" class="sliderImg"/>
        <div class="sliderBg"></div>
        <h1 class="sliderTitle">Gateway<br/> com IA<br/> Embarcada</h1>
        <h2 class="sliderPrice"></h2>
        <a href="#product">
        </a>
    </div>
    <div class="sliderItem">
        <img alt="" src="../image/products/productsSoftwareMain.webp" class="sliderImg"/>
        <div class="sliderBg"></div>
        <h1 class="sliderTitle"> Plataforma<br/>  IoT<br/> </h1>
        <h2 class="sliderPrice"></h2>
        <a href="#product">
        </a>
    </div>
</div>
</div>

<div class="features">
{featureText.map((feature, index) => (
          <div key={index} className="feature">
            <div className='featureIcon'>
            {feature.icon}
            </div>
            <span className="featureTitle">{feature.title}</span>
            <span className="featureDesc">{feature.desc}</span>
          </div>
        ))}
</div>

<div class="product" id="product">
<img alt="" src="../image/products/productsHardwareSecondary.webp" class="productImg myImg"/>
<div class="productDetails">
    <h1 class="productTitle">ALX-1000</h1>
    <h2 class="productPrice"></h2>
    <p class="productDesc">A linha de gateways ALX-1000 foi projetada para ser totalmente modular visando atender a grande variedade de aplicações
        de telemetria de máquinas, equipamentos e processos. Com diversas opções de conectividade e ampla capacidade modular com
        entradas e saídas digitais e analógicas incorporadas, o gateway ALX-1000 pode ao mesmo tempo comunicar com dispositivos que
        possuam comunicação MODBUS RTU, MODBUS TCP/IP e receber sinais de sensores discretos de campo.
        Utilizando protocolo MQTT para envio de dados criptografados, o gateway ALX-1000 funciona como um datalogger registrando em
        memória de massa os dados coletados mesmo quando a comunicação com o servidor está indisponível, enviando sincronamente
        os dados registrados após a restabelecimento da comunicação.
        Possui bateria interna de lítio recarregável que permite o funcionamento em caso de falta de energia com envio automático de alerta
        em caso de falha na alimentação externa.</p>
    <button aria-label="Download PDF" class="productButton">Download PDF</button>
    </div>
</div>

<div class="imageProduct" id="product">
<img alt="" src="../image/products/productsHardwareDetail1.webp" class="productImg myImg product-image"/>
<img alt="" src="../image/products/productsHardwareDetail2.webp" class="productImg myImg product-image"/>
<img alt="" src="../image/products/productsHardwareDetail3.webp" class="productImg myImg product-image"/>
<img alt="" src="../image/products/productsHardwareDetail3.webp" class="productImg myImg product-image"/>
</div>

<footer>
<div class="footerLeft">
    <div class="footerMenu">
        <h1 class="fMenuTitle">About Us</h1>
        <ul class="fList">
            <li class="fListItem">Company</li>
            <li class="fListItem">Contact</li>
            <li class="fListItem">Careers</li>
            <li class="fListItem">Affiliates</li>
            <li class="fListItem">Stores</li>
        </ul>
    </div>
    <div class="footerMenu">
        <h1 class="fMenuTitle">Useful Links</h1>
        <ul class="fList">
            <li class="fListItem">Support</li>
            <li class="fListItem">Refund</li>
            <li class="fListItem">FAQ</li>
            <li class="fListItem">Feedback</li>
            <li class="fListItem">Stories</li>
        </ul>
    </div>
    <div class="footerMenu">
        <h1 class="fMenuTitle">Products</h1>
        <ul class="fList">
            <li class="fListItem">GATEWAYS</li>
            <li class="fListItem">Iothigns</li>
            <li class="fListItem">Product</li>
        </ul>
    </div>
</div>
<div class="footerRight">
    <div class="footerRightMenu">
        <h1 class="fMenuTitle">Subscribe to our newsletter</h1>
        <div class="fMail">
            <input type="text" placeholder="your@email.com" class="fInput"/>
            <button aria-label="Join" class="fButton">Join!</button>
        </div>
    </div>
    <div class="footerRightMenu">
        <span class="copyright">Allexo Technologia LLC. All rights reserved. 2024.</span>
    </div>
</div>
</footer>
   
    </>
  )
}

export default page
