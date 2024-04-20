import React from 'react'
import '../modals.css'
import '../styles.css'

const page = () => {
  return (
    <div>
          <div class="heading">
        <h1>Gestão de Energia</h1>
        <p> Através da plataforma IoTHINGS acompanhe em tempo real o perfil de consumo de suas instalações com rateio por máquinas e equipamentos bem como a produção de energia de suas plantas fotovoltaicas. Verifique se o seu contrato com a concessionária está adequado bem como receba do módulo de Inteligência Artificial de nossa plataforma sugestões para reduzir o custo da energia ou evitar pagar multa por demanda ou baixo fator de potência.</p>
    </div>

    <div id="myModal" class="modal">
        <span class="close">&times;</span>
        <img alt="" class="modal-content" id="img01"/>
    </div>

    <div class="container">
        <section class="box">
            <div class="image">
                <img alt="" class="myImg" src="../image/solutions/energyManegement/modalImg1.webp" />
            </div>
            <div class="content">
                <h2>Perfil de Consumo de Energia</h2>
                <p>Acompanhe o perfil de consumo de fábricas, máquinas e instalações. Saiba onde está concentrado o maior consumo permitindo que você possa tomar medidas para reduzir o consumo
                    </p>
                    <a href="../pages/contact" class="button">Saiba Mais</a>
            </div>
        </section>
    </div>


    <div class="container">
        <section class="box">        
            <div class="content">
                <h2>Alertas inteligentes</h2>
                <p>Através de ferramentas de inteligência artificial a plataforma da Allexo consegue detectar comportamentos de consumo fora do padrão normal de funcionamento alertado via e-mail, SMS e Telegram em caso de alguma anomalia seja detectada.
                    </p>
                    <a href="../pages/contact" class="button">Saiba Mais</a>
            </div>
            <div class="image">
                <img alt="" class="myImg" src="../image/solutions/energyManegement/modalImg2.webp" />
            </div>
        </section>
    </div>


    <div class="container">
        <section class="box">
            <div class="image">
                <img alt="" class="myImg" src="../image/solutions/energyManegement/modalImg3.webp" />
            </div>
            <div class="content">
                <h2>Análise de Demanda</h2>
                <p>Analise de forma detalhada a demanda registrada e compare com o contrato existente junto a concessionária de energia para verificar a existência de demanda que gere multas por ultrapassagem.
                    </p>
                    <a href="../pages/contact" class="button">Saiba Mais</a>
            </div>
        </section>
    </div>


    <div class="container">
        <section class="box">
            <div class="content">
                <h2>IA gerando redução de custos</h2>
                <p>A plataforma da Allexo utiliza recursos de Inteligência Artificial e Machine Learning para sugerir novos limites do contrato de demanda existente visando reduzir os custos fixos ou evitar o pagamento de multa por ultrapassagem.
                    </p>
                    <a href="../pages/contact" class="button">Saiba Mais</a>
            </div>
            <div class="image">
                <img alt="" class="myImg" src="../image/solutions/energyManegement/modalImg4.webp" />
            </div>
        </section>
    </div>


    <div class="container">
        <section class="box">
            <div class="image">
                <img alt="" class="myImg" src="../image/solutions/energyManegement/modalImg5.webp" />
            </div>
            <div class="content">
                <h2> Análise de Fator de Potência</h2>
                <p>Através da plataforma IoTHINGS é possível acompanhar em tempo real o fator de potência de máquinas e instalações bem como verificar a existência de baixo fator de potência que podem gerar multa por excesso de reativos.
                    </p>
                    <a href="../pages/contact" class="button">Saiba Mais</a>
            </div>
        </section>
    </div>


    <div class="container">
        <section class="box">
            
            <div class="content">
                <h2>Evite multas por baixo Fator de Potência</h2>
                <p>Receba da plataforma uma análise completa sobre o comportamento do fator de potência de sua instalação bem como a necessidade de banco de capacitores com dimensionamento automático em caso necessário.
                    </p>
                    <a href="../pages/contact" class="button">Saiba Mais</a>
            </div>
            <div class="image">
                <img alt="" class="myImg" src="../image/solutions/energyManegement/modalImg6.webp" />
            </div>
        </section>
    </div>


    <div class="container">
        <section class="box">
            <div class="image">
                <img alt="" class="myImg" src="../image/solutions/energyManegement/modalImg7.webp" />
            </div>
            <div class="content">
                <h2>Relatórios Detalhados</h2>
                <p>Gere relatórios completos sobre o consumo, demanda e fator de potência de suas instalações.
                    </p>
                    <a href="../pages/contact" class="button">Saiba Mais</a>
            </div>
        </section>
    </div>


    <div class="container">
        <section class="box">
            
            <div class="content">
                <h2>Simulação de Conta de Energia</h2>
                <p>Gere simulações de fatura de consumo para acompanhar sua conta junto a concessionária.
                    </p>
                    <a href="../pages/contact" class="button">Saiba Mais</a>
            </div>
            <div class="image">
                <img alt="" class="myImg" src="../image/solutions/energyManegement/modalImg8.webp" />
            </div>
        </section>
    </div>
    </div>
  )
}

export default page
