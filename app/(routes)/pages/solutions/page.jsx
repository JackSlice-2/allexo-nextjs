import React from 'react'
import Navbar from '@/app/components/Navbar'
import './solutions.css'

const page = () => {
  return (
    <>
    <div>
        <Navbar />
    </div>
    <div class="container">
    <div class="services">
        <h1>Soluções</h1>
    </div>
    <div class="paragraph">
        <p>A Allexo possui soluções customizadas para atender diversas verticais.</p>
    </div>
    
    <div class="row">

      <div class="col-md-5 text-center">
        <a href="/modals/remoteManegement">
          <div class="icon">
              <i class="fas fa-signal"></i>
          </div>
          <h3>Gerenciamento Remoto de Dispositivos</h3>
          <p>Monitore remotamente, em tempo real, máquinas e equipamentos. Crie dashboards personalizados e configure
                alarmes para qualquer uma das variáveis monitoradas.</p>
        </a>
              </div>

              <div class="col-md-5 text-center">
                <a href="/modals/industrialManegement">
                  <div class="icon">
                      <i class="fas fa-cogs"></i>
                  </div>
                  <h3>Gestão Industrial</h3>
                  <p>Monitore em tempo real o funcionamento de máquinas e equipamentos no chão-de-fábrica gerando
                    dados estatísticos de produtividade e paradas de máquinas. Gerencie os principais indicadores de
                    desempenho, disponibilidade e qualidade de suas instalações com geração automática de KPIs.</p>
                </a>
                </div>
      
        <div class="col-md-5 text-center">
          <a href="/modals/generatorTelemetry">
            <div class="icon">
                <i class="fas fa-server"></i>
            </div>
            <h3>Telemetria de Geradores</h3>
            <p>Monitore em tempo real o funcionamento de sua frota de geradores recebendo informações e alertas de cada máquina
                  através do celular, tablet ou computador.</p>
          </a>
        </div>

        <div class="col-md-5 text-center">
          <a href="/modals/sanitation">
            <div class="icon">
                <i class="fas fa-water"></i>
            </div>
            <h3>Saneamento</h3>
            <p>Soluções para telemetria de estações de tratamento de água, casa de bombas, VRPs e demais instalações de água e esgoto.</p>
          </a>
          </div>

          <div class="col-md-5 text-center">
            <a href="/modals/energyManegement">
  
              <div class="icon">
                  <i class="fas fa-bolt"></i>
              </div>
              <h3>Gestão de Energia</h3>
              <p>Gerencie on-line o consumo e a produção de energia elétrica de suas instalações, máquinas , equipamentos e 
                    instalações fotovoltaicas.</p>
              </a>
          </div>

    </div>
</div>
      
    </>
  )
}

export default page
