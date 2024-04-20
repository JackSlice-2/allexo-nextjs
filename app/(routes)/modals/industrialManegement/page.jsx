import React from 'react'
import Navbar from '@/app/components/Navbar'
import '../modals.css'
import '../styles.css'

const page = () => {
  return (
    <>
    <div>
      <Navbar />
    </div>
    <div class="heading">
        <h1>Gestão Industrial</h1>
        <p>Monitore em tempo real o funcionamento de máquinas e equipamentos no chão-de-fábrica gerando
            dados estatísticos de produtividade e paradas de máquinas. Gerencie os principais indicadores de
            desempenho, disponibilidade e qualidade de suas instalações com geração automática de KPIs</p>
    </div>

    <div id="myModal" class="modal">
        <span class="close">&times;</span>
        <img alt="" class="modal-content" id="img01"/>
    </div>

    <div class="container">
        <section class="box">
            <div class="image">
                <img alt="" class="myImg" src="../image/solutions/industrialManegement/modalImg1.webp" />
            </div>
            <div class="content">
                <h2>Soluções para Gestão Industrial</h2>
                <p>A Allexo possui hardware e software que visando a monitoração em tempo real máquinas e processos permitindo coletar dados de produção bem como informações sobre qualidade do processo como velocidade, temperatura, pressão etc.
                    </p>
                    <a href="../pages/contact.html" class="button">Saiba Mais</a>
            </div>
        </section>
    </div>


    <div class="container">
        <section class="box">        
            <div class="content">
                <h2>Gestão do chão-de-fábrica</h2>
                <p>Acompanhe em tempo real o que está sendo produzido no chão-de-fábrica em cada máquina. Saiba se a máquina está produzindo, parada por problemas de manutenção ou ociosa permitindo gerar estatísticas para relatórios de OEE.
                    </p>
                    <a href="../image/solutions/industrialManegement/modalImg2.webp" class="button">Saiba Mais</a>
            </div>
            <div class="image">
                <img alt="" class="myImg" src="./images/IndMan2.jpg" />
            </div>
        </section>
    </div>

    <div class="container">
        <section class="box">
            <div class="image">
                <img alt="" class="myImg" src="../image/solutions/industrialManegement/modalImg3.webp" />
            </div>
            <div class="content">
                <h2>Gestão da Manutenção</h2>
                <p>Gere relatórios de manutenção com os principais indicadores como MTBF, MTTR entre outros de forme automática com base em valores reais do processo. 
                    </p>
                    <a href="../pages/contact.html" class="button">Saiba Mais</a>
            </div>
        </section>
    </div>
    </>
  )
}

export default page
