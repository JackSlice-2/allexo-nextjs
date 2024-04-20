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
    <div>
        <div class="heading">
        <h1>Telemetria de Geradores</h1>
        <p>Monitore em tempo real o funcionamento de sua frota recebendo automaticamente alertas quando algum problema ou mau funcionamento for detectado. Saiba quando e por quanto tempo o gerador entrou em funcionamento e acompanhe o histórico de desempenho de cada máquina individualmente. Compartilhe com os seus clientes a monitoração dos geradores locados através acesso exclusivo via celular.</p>
    </div>

    <div id="myModal" class="modal">
        <span class="close">&times;</span>
        <img alt="" class="modal-content" id="img01"/>
    </div>

    <div class="container">
        <section class="box">
            <div class="image">
                <img alt="" class="myImg" src="../image/solutions/generatorTelemetry/modalImg1.webp" />
            </div>
            <div class="content">
                <h2>Redução de Custos Operacionais</h2>
                <p>Através da plataforma da Allexo é possível acompanhar o tempo 
                    de funcionamento de cada gerador permitindo programar de forma precisa as manutenções cíclicas, 
                    evitando deslocamentos desnecessários, bem com recebendo alertas de qualquer falha detectada 
                    indicando o problema ocorrido, permitindo deslocamentos para manutenções corretivas mais assertivas; 
                    </p>
                    <a href="../pages/contact.html" class="button">Saiba Mais</a>
            </div>
        </section>
    </div>


    <div class="container">
        <section class="box">        
            <div class="content">
                <h2>Redução de Custos de Manutenção</h2>
                <p>Todos os parâmetros de funcionamento do gerador são 
                    acompanhados em tempo real permitindo gerar alertas sobre utilização inadequada do equipamento 
                    e com isto reduzindo possíveis desgastes operacionais por mau uso, aumentando 
                    a vida útil dos geradores monitorados; 
                    </p>
                    <a href="../pages/contact.html" class="button">Saiba Mais</a>
            </div>
            <div class="image">
                <img alt="" class="myImg" src="../image/solutions/generatorTelemetry/modalImg2.webp" />
            </div>
        </section>
    </div>


    <div class="container">
        <section class="box">
            <div class="image">
                <img alt="" class="myImg" src="../image/solutions/generatorTelemetry/modalImg3.webp" />
            </div>
            <div class="content">
                <h2>Diferencial competitivo ...</h2>
                <p>Através da plataforma IoTHINGS é possível compartilhar 
                    a experiência de acompanhamento do funcionamento em tempo real dos geradores com os 
                    diversos clientes finais através da configuração de dashboards personalizados e senhas de acesso 
                    individuais para cada usuário do cliente final; 
                    </p>
                    <a href="../pages/contact.html" class="button">Saiba Mais</a>
            </div>
        </section>
    </div>


    <div class="container">
        <section class="box">
            <div class="content">
                <h2>Proteção contra roubo</h2>
                <p>Os gateways Allexo possuem GPS integrado e bateria interna própria 
                    permitindo, mesmo no caso de desligamento da alimentação da bateria do gerador, localizar a 
                    posição exata do equipamento monitorado. Em caso de detecção de desligamento da bateria ou 
                    alteração na localização do gerador, um alerta automático é enviado permitindo acompanhar 
                    a cada 5 (cinco) minutos a localização do gerador, em qualquer lugar do Brasil; 
                    </p>
                    <a href="../pages/contact.html" class="button">Saiba Mais</a>
            </div>
            <div class="image">
                <img alt="" class="myImg" src="../image/solutions/generatorTelemetry/modalImg4.webp" />
            </div>
        </section>
    </div>


    <div class="container">
        <section class="box">
            <div class="image">
                <img alt="" class="myImg" src="../image/solutions/generatorTelemetry/modalImg5-1.webp" />
                <img alt="" class="myImg" src="../image/solutions/generatorTelemetry/modalImg5-2.webp" />
                <img alt="" class="myImg" src="../image/solutions/generatorTelemetry/modalImg5-3.webp" />
            </div>
            <div class="content">
                <h2>Melhor controle Sobre o contrato de locação</h2>
                <p>Relatórios personalizados para o mercado 
                    de locação com indicação de horas diárias trabalhadas x contratadas, histórico de funcionamento 
                    e exclusivo relatório de "check-out" através de aplicativo de celular onde o usuário pode 
                    coletar a assinatura do cliente em campo. Chega de papelada ou fichas que acabam se 
                    perdendo ou contendo informações imprecisas.
                    </p>
                    <a href="../pages/contact.html" class="button">Saiba Mais</a>
            </div>
        </section>
    </div>


    <div class="container">
        <section class="box">
            
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
            <div class="image">
                <img alt="" class="myImg" src="../image/solutions/generatorTelemetry/modalImg6.webp" />
            </div>
        </section>
    </div>


    <div class="container">
        <section class="box">
            <div class="image">
                <img alt="" class="myImg" src="../image/solutions/generatorTelemetry/modalImg7.webp" />
            </div>
            <div class="content">
                <h2>Única plataforma ...</h2>
                <p>Diversos modelos de equipamentos: a plataforma IOTHINGS assim 
                    como os gateways Allexo foram desenvolvidos para serem utilizados com diversos modelos de USCAs 
                    de diferentes fabricantes. Assim, em uma única plataforma e um único modelo de gateway é 
                    possível gerenciar uma gama variada de dispositivos e equipamentos; 
                    </p>
                    <a href="../pages/contact.html" class="button">Saiba Mais</a>
            </div>
        </section>
    </div>
    </div>
    </>
  )
}

export default page
