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
        <h1>Saneamento</h1>
        <p>A Allexo possui uma grande variedade de gateways com entradas e saídas, digitais e analógicas para interface com
            sensores de nível, vazão, temperatura e demais grandezas de processo. Possuímos módulos inteligentes com
            comunicação RS232/RS485 para comunicar em alto nível com inversores de frequência, medidores mássicos,
            analisadores de qualidade entre outros dispositivos.</p>
    </div>

    <div id="myModal" class="modal">
        <span class="close">&times;</span>
        <img alt="" class="modal-content" id="img01"/>
    </div>

    <div class="container">
        <section class="box">
            <div class="image">
                <img alt="" class="myImg" src="../image/solutions/sanitation/modalImg1.webp" />
            </div>
            <div class="content">
                <h2>Instalações de Captação de Água</h2>
                <p>As soluções de telemetria da Allexo para instalações de captação
                    de água bruta permitem monitorar e telecomandar todos os principais equipamentos instalados. Nossa solução
                    permite comunicar, via rede ETHERNET ou R-485, com os mais variados modelos de inversores do mercado
                    disponibilizando o envio remoto de comandos e set points e monitoração do status de funcionamento 
                    com indicação de alarmes detalhados de cada inversor. Possuímos interface para interligação com os 
                    principais medidores de vazão  bem como com os principais modelos de CLP's do mercado.
                    Mesmo nos locais mais remotos, sem infraestrutura de telefonia celular ou comunicação, o sistema 
                    de telemetria da Allexo, pioneira no Brasil, pode utilizar a rede de satélites da Starlink para envio 
                    em tempo real das informações monitoradas. 
                    </p>
                    <a href="../pages/contact.html" class="button">Saiba Mais</a>
            </div>
        </section>
    </div>


    <div class="container">
        <section class="box">        
            <div class="content">
                <h2>Monitoração de Barragens</h2>
                <p>Nossos gateways inteligentes permitem monitorar em tempo real o
                    nível de reservatórios e comunicar com os principais dispositivos inteligentes de proteção das 
                    instalações como relés de proteção e disjuntores permitindo o envio de comandos remotos. Através
                    da rede Stalink de satélites, os gateways Allexo podem ser instalados nos locais mais remotos sem
                    perda de dados permitindo a monitoração em tempo real em qualquer lugar do mundo. 
                    </p>
                    <a href="../pages/contact.html" class="button">Saiba Mais</a>
            </div>
            <div class="image">
                <img alt="" class="myImg" src="../image/solutions/sanitation/modalImg2.webp" />
            </div>
        </section>
    </div>

    <div class="container">
        <section class="box">
            <div class="image">
                <img alt="" class="myImg" src="../image/solutions/sanitation/modalImg3.webp" />
            </div>
            <div class="content">
                <h2>Telemetria de Reservatórios</h2>
                <p>monitore em tempo real de nível de reservatórios com medição
                    analógico ou digital. Nosso gateway permite a implementação de lógicas de controle  
                    local podendo comandar bombas com partida direta ou através de inversores de frequência
                    substituindo tradicionais e caras automações com CLP. Os dados coletados são enviados 
                    em tempo real para plataforma Allexo de telemetria onde através de algoritmos de 
                    inteligência artificial são gerados alertas caso o comportamento do
                    reservatório apresente inconsistências com o seu histórico de funcionamento;  
                    </p>
                    <a href="../pages/contact.html" class="button">Saiba Mais</a>
            </div>
        </section>
    </div>


    <div class="container">
        <section class="box">
            <div class="content">
                <h2>Monitoração de VRPs</h2>
                <p>Possuímos soluções para monitoração e telecomando de 
                    Válvulas Reguladoras de Pressão (VRP) com interfaces para sensores de pressão e vazão, 
                    com saída através de sinal analógico ou com comunicação digital. Através do módulo de
                    Inteligência Artificial, nossa plataforma analisa o comportamento de funcionamento das
                    VRPs monitoradas indicando ativamente desvios de funcionamento que possam indicar 
                    possíveis vazamentos na rede. 
                    </p>
                    <a href="../pages/contact.html" class="button">Saiba Mais</a>
            </div>
            <div class="image">
                <img alt="" class="myImg" src="../image/solutions/sanitation/modalImg4.webp" />
            </div>
        </section>
    </div>

    <div class="container">
        <section class="box">
            <div class="image">
                <img alt="" class="myImg" src="../image/solutions/sanitation/modalImg5.webp" />
            </div>
            
            <div class="content">
                <h2>Conectividade melhorada</h2>
                <p>Os gateways fornecidos já vem com chip celular para conexão 
                    nas bandas de transmissão 2G, 3G e 4G bem como na rede WiFi do cliente com chaveamento 
                    automático entre as tecnologias de conectividade em caso de perda de comunicação. 
                    Somos a primeira empresa de telemetria de geradores no Brasil com parceria com a Starlink 
                    para envio de dados em locais onde não existe infraestrutura celular; 
                    </p>
                    <a href="../pages/contact.html" class="button">Saiba Mais</a>
            </div>
           
        </section>
    </div>

    <div class="container">
        <section class="box">
            <div class="content">
                <h2>Integração com outros sistemas</h2>
                <p>os gateways Allexo possuem protocolo MQTT para
                    envio dos dados permitindo fácil conexão com os principais sistemas SCADA do mercado.
                    Através da plataforma IoTHINGS da Allexo é possível ainda acessar dados em tempo real
                    ou dados históricos através da API's no padrão RESTFull ou ainda é possível customizar
                    a transmissão de dados para integração com qualquer outro sistema existente.
                    </p>
                    <a href="../pages/contact.html" class="button">Saiba Mais</a>
            </div>
            <div class="image">
                <img alt="" class="myImg" src="../image/solutions/sanitation/modalImg6.webp" />
            </div>
        </section>
    </div>
    
    </>
  )
}

export default page
