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
        <h1>Gerenciamento Remoto de Dispositivos</h1>
        <p>As soluções de telemetria da Allexo permitem monitorar máquinas e equipamentos de forma remota através de comunicação utilizando diversos protocolos de mercado. Mesmo máquinas mais antigas pode receber a solução Allexo de telemetria para coleta de informações de funcionamento através da instalação de sensores tradicionais de mercado.</p>
    </div>

    <div id="myModal" class="modal">
        <span class="close">&times;</span>
        <img alt="" class="modal-content" id="img01"/>
    </div>

    <div class="container">
        <section class="box">
            <div class="image">
                <img alt="" class="myImg" src="../image/solutions/remoteManegementOfDevices/modalImg1.webp" />
            </div>
            <div class="content">
                <h2>Protocolo aberto de comunicação</h2>
                <p>Os gateways da Allexo possuem canais de comunicação RS-232, RS-485 e ETHERNET permitindo interligação a diversos equipamentos de campo com comunicação no padrão aberto MODBUS RTU ou TCP/IP. Através de exclusiva tecnologia DCloud, os drivers de comunicação desenvolvidos podem ser carregados dinamicamente via internet. Novos drivers podem ser desenvolvidos por nossa equipe de P&D caso seja necessário.
                    </p>
                    <a href="../pages/contact.html" class="button">Saiba Mais</a>
            </div>
        </section>
    </div>


    <div class="container">
        <section class="box">        
            <div class="content">
                <h2>Capacidade modular de Entradas e Saídas</h2>
                <p>Os gateways da linha ALX-1000 possuem capacidade modular com inúmeras combinações de entradas e saídas, digitais e analógicas para interligação com sensores de campo como sensores de vazão, nível, temperatura entre outros sinais discretos de campo;
                    </p>
                    <a href="../pages/contact.html" class="button">Saiba Mais</a>
            </div>
            <div class="image">
                <img alt="" class="myImg" src="../image/solutions/remoteManegementOfDevices/modalImg2.webp" />
            </div>
        </section>
    </div>
    </>
  )
}

export default page
