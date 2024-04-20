import Navbar from "../../components/Navbar";
import './root.css';

/*
let currentIndex =  0;
const items = document.querySelectorAll('.carousel .list .item');
const thumbnails = document.querySelectorAll('.carousel .thumbnail .item');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');

function showItem(index) {
  items.forEach((item, i) => {
    item.style.display = i === index ? 'block' : 'none';
  });
}

thumbnails.forEach((thumbnail, i) => {
  thumbnail.addEventListener('click', () => {
    currentIndex = i;
    showItem(currentIndex);
  });
});
showItem(currentIndex);




// Get references to the video and play div elements
const video = document.getElementById("myVideo");
const playDiv = document.querySelector(".play");

// Add an event listener to the play div
playDiv.addEventListener("click", function() {
 // Make the video display block
 video.style.display = "block";
   // Set the current time to the start of the video
 video.currentTime = 0;
 // Play the video
 video.play();

 // Request fullscreen mode
 video.requestFullscreen().catch(err => console.log(`Error attempting to enable full-screen mode: ${err.message}`));
});

// Listen for fullscreen change event
document.addEventListener('fullscreenchange', function() {
 // If not in fullscreen mode
 if (!document.fullscreenElement) {
    // Pause the video
    video.pause();
 }
});

// Add an event listener for the ended event
video.addEventListener('ended', function() {
 // Exit fullscreen mode
 if (document.fullscreenElement) {
    document.exitFullscreen();
 }

 // Hide the video
 video.style.display = "none";
});
*/

export default function Home() {
  return (
    <>
    <div className="">
    <Navbar />
    </div>
    <div className="carousel">
        <div className="list">

            <div className="item">
                <img alt="" src="image/homeBGImg1.webp"/>
                <div className="content">
                    <div className="title">Gerenciamento Remoto de Dispositivos</div>
                    <div className="topic" id="topic" >Monitore remotamente máquinas e equipamentos em qualquer lugar do mundo.</div>
                    <div className="des">	
                        As soluções de telemetria da Allexo permitem monitorar máquinas e equipamentos de forma remota através de 
comunicação utilizando diversos protocolos de mercado. Mesmo máquinas mais antigas pode receber a solução
Allexo de telemetria para coleta de informações de funcionamento através da instalação de sensores tradicionais
de mercado. </div>
                <div className="buttons">
                <button aria-label="Saiba Mais" type="button" onclick="window.location.href='/modals/remoteManegement';">Saiba mais</button>
                <button aria-label="Newsletter" type="button" onclick="window.location.href='./pages/newsLetter';">Newsletter</button>
                </div>
                </div>
            </div>
            <div className="item">
                <img alt="" src="image/homeBGImg5.webp"/>
                <div className="content">
                    <div className="title">Gestão Industrial</div>
                    <div className="topic" id="topic">Gerencie o que acontece no seu chão-de-fábrica.</div>
                    <div className="des">
                        Monitore em tempo real o funcionamento de máquinas e equipamentos no chão-de-fábrica gerando 
                        dados estatísticos de produtividade e paradas de máquinas. Gerencie os principais indicadores de
                        desempenho, disponibilidade e qualidade de suas instalações com geração automática de KPIs.</div>
                    <div className="buttons">
                    <button aria-label="Saiba Mais" type="button" onclick="window.location.href='/modals/industrialManegement';">Saiba mais</button>
                    <button aria-label="Newsletter" type="button" onclick="window.location.href='./pages/newsLetter';">Newsletter</button>
                    </div>
                </div>
            </div>
            
            <div className="item">
                <img alt="" src="image/homeBGImg2.webp"/>
                <div className="content">
                    <div className="title">Telemetria de Geradores</div>
                    <div className="topic" id="topic">Gerencie remotamente sua frota de geradores.</div>
                    <div className="des">
                        Monitore em tempo real o funcionamento de sua frota recebendo automaticamente alertas quando algum problema ou mau
funcionamento for detectado.  Saiba quando e por quanto tempo o gerador entrou em funcionamento e acompanhe o 
histórico de desempenho de cada máquina individualmente. Compartilhe com os seus clientes a monitoração dos geradores 
locados através acesso exclusivo via celular.</div>
                    <div className="buttons">
                    <button aria-label="Saiba Mais" type="button" onclick="window.location.href='/modals/generatorTelemetry';">Saiba mais</button>
                    <button aria-label="Newsletter" type="button" onclick="window.location.href='./pages/newsLetter';">Newsletter</button>
                    </div>
                </div>
            </div>
            <div className="item">
                <img alt="" src="image/homeBGImg3.webp"/>
                <div className="content">
                    <div className="title">Saneamento</div>
                    <div className="topic" id="topic">Telemetria de reservatórios e estações de bombeamento.</div>
                    <div className="des">
                        A Allexo possui uma grande variedade de gateways com entradas e saídas, digitais e analógicas para interface com
sensores de nível, vazão, temperatura e demais grandezas de processo. Possuímos módulos inteligentes com 
interfaces WiFi, ETHERNET e RS232/RS485 para comunicação em alto nível com inversores de frequência, 
medidores mássicos, analisadores de qualidade de água, entre outros dispositivos, utilizando os mais diversos 
protocolos de comunicação de mercado.</div>
                    <div className="buttons">
                    <button aria-label="Saiba Mais" type="button" onclick="window.location.href='/modals/sanitation';">Saiba mais</button>
                    <button aria-label="Newsletter" type="button" onclick="window.location.href='./pages/newsLetter';">Newsletter</button>
                    </div>
                </div>
            </div>

            <div className="item">
                <img alt="" src="image/homeBGImg4.webp"/>
                <div className="content">
                    <div className="title">Gestão de Energia</div>
                    <div className="topic" id="topic">Soluções de monitoração de consumo e geração de energia</div>
                    <div className="des">
                        Através da plataforma IoTHINGS acompanhe em tempo real o perfil de consumo de suas instalações com rateio por máquinas e equipamentos bem como a produção de energia de suas plantas fotovoltaicas. Verifique se o seu contrato com a concessionária
está adequado bem como receba do módulo de Inteligência Artificial de nossa plataforma sugestões para reduzir o custo da
energia ou evitar pagar multa por demanda ou baixo fator de potência. </div>
                    <div className="buttons">
                    <button aria-label="Saiba Mais" type="button" onclick="window.location.href='/modals/energyManegement';">Saiba mais</button>
                    <button aria-label="Newsletter" type="button" onclick="window.location.href='./pages/newsLetter';">Newsletter</button>
                    </div>
                </div>
            </div>
        
        </div>


        <div className="thumbnail">
            <div className="item">
                <img alt="" src="image/homeThumb1.webp"/>
                <div className="content">
                    <div className="title">
                        Gerenciamento Remoto de Dispositivos
                    </div>
                    
                </div>
            </div>
            <div className="item">
                <img alt="" src="image/homeThumb5.webp"/>
                <div className="content">
                    <div className="title">
                        Gestão Industrial
                    </div>
                    
                </div>
            </div>
            <div className="item">
                <img alt="" src="image/homeThumb2.webp"/>
                <div className="content">
                    <div className="title">
                        Telemetria de Geradores
                    </div>
                    
                </div>
            </div>
            
            <div className="item">
                <img alt="" src="image/homeThumb3.webp"/>
                <div className="content">
                    <div className="title">
                        Saneamento
                    </div>
                    
                </div>
            </div>
            <div className="item">
                <img alt="" src="image/homeThumb4.webp"/>
                <div className="content">
                    <div className="title">
                        Gestão de energia
                    </div>
                    
                </div>
            </div>
            
        </div>


        <div className="arrows">
            <div id="prev"></div>
            <button id="next"></button>
        </div>

    <video id="myVideo" className='hidden'>
        <source src="./Allexo Ad1.mp4" type="video/mp4"/>
    </video>

    <div>
        <div className="play"></div>
    </div>
</div>
</>
  );
}

