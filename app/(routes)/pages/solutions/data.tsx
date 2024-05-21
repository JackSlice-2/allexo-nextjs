import { BiServer, BiSignal5 } from "react-icons/bi";
import { BsLightningChargeFill } from "react-icons/bs";
import { GiWaterDrop } from "react-icons/gi";
import { IoCogSharp } from "react-icons/io5";

export const solutionsText = [
  {
    title: 'Gerenciamento Remoto de Dispositivos',
    text: 'Monitore remotamente, em tempo real, máquinas e equipamentos. Crie dashboards personalizados e configure alarmes para qualquer uma das variáveis monitoradas.',
    icon: <BiSignal5 />,
    href: '/modals/remoteManegement'
  },
  {
    title: 'Gestão Industrial',
    text: 'Monitore em tempo real o funcionamento de máquinas e equipamentos no chão-de-fábrica gerando dados estatísticos de produtividade e paradas de máquinas. Gerencie os principais indicadores de desempenho, disponibilidade e qualidade de suas instalações com geração automática de KPIs.',
    icon: <IoCogSharp />,
    href: '/modals/industrialManegement'
  },
  {
    title: 'Telemetria de Geradores',
    text: 'Monitore em tempo real o funcionamento de sua frota de geradores recebendo informações e alertas de cada máquina através do celular, tablet ou computador.',
    icon: <BiServer />,
    href: '/modals/generatorTelemetry'
  },
  {
    title: 'Saneamento',
    text: 'Soluções para telemetria de estações de tratamento de água, casa de bombas, VRPs e demais instalações de água e esgoto.',
    icon: <GiWaterDrop />,
    href: '/modals/sanitation'
  },
  {
    title: 'Gestão de Energia',
    text: 'Gerencie on-line o consumo e a produção de energia elétrica de suas instalações, máquinas , equipamentos e instalações fotovoltaicas.',
    icon: <BsLightningChargeFill/>,
    href: '/modals/energyManegement'
  },
]