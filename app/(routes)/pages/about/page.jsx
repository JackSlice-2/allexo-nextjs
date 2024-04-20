import React from 'react'
import './about.css'
import Navbar from '@/app/components/Navbar'
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
    <div class="parallax">
        <div class="container">
            <h1>Allexo Tecnologia</h1>
            <div class="row">
                <div class="iconBox">
                    <i alt="Icon" class="bi-people"></i>
                </div>
                <span>Quem somos?</span>
                <div class="textBox">
                    <div class="subTitle">
                        <p>Allexo tecnologia é uma empresa com foco no desenvolvimento de soluções de Internet das Coisas para pequenas, 
                            médias e grandes indústrias. Viabilizamos a utilização das modernas tecnologias da Indústria 4.0 para qualquer segmento de empresa, 
                            para empresas de qualquer tamanho.</p>
                    </div>
                </div>
            </div>

            <div class="row">
                
                <div class="iconBox">
                    <i alt="Icon" class="bi-bullseye"></i>
                </div>
                <span>Missão</span>
                <div class="textBox">
                    <div class="subTitle">
                        <p>Fornecer soluções IoT visando o aumento da produtividade, 
                            redução dos custos operacionais e a melhor gestão dos ativos dos clientes.</p>
                    </div>
                </div>
            </div>

            <div class="row">
                
                <div class="iconBox">
                    <i alt="Icon" class="bi-heart-fill"></i>
                </div>
                <span>Nossos Valores</span>
                <div class="textBox">
                    <div class="subTitle">
                        <p>- Desenvolver soluções que atendam as necessidades dos nossos clientes
                        <br/>- Utilizar tecnologia de ponta nos processos internos e nos produtos desenvolvidos
                        <br/>- Credibilidade no relacionamento com os colaboradores e clientes</p>
                    </div>
                </div>
            </div>

    </div>
    <div class="imgObjects"></div>
    <div class="imgObjects"></div>
    <div class="imgObjects"></div>
    <div class="imgObjects"></div>
    <div class="imgObjects"></div>
    <div class="imgObjects"></div>
    <div class="imgObjects"></div>
    </div>
    
    </div>
    </>

  )
}

export default page
