import { BiCloudDownload, BiLock, BiShare } from "react-icons/bi";
import { BsEthernet } from "react-icons/bs";

export const featureText = [
    {
        icon: <BsEthernet />,
        title: 'Redes de Campo',
        desc: 'Portas de comunicação RS-232, RS-485 e ETHERNET para conexão a dispositivos de campo utilizando protocolo MODBUS-RTU e TCP/IP'
    },
    {
        icon: <BiCloudDownload />,
        title: 'Ampla conectividade',
        desc: 'Gateways com capacidade de conexão via rede WiFi, ETHERNET cabeada, 2G, 3G, 4G, Lora e satélite via Starlink'
    },
    {
        icon: <BiShare />,
        title: 'Modularidade de IO&aposs',
        desc: 'Diversas combinações de módulos para interface com sensores de campo com entradas e saídas digitais e analógicas'
    },
    {
        icon: <BiLock />,
        title: 'Comunicação segura',
        desc: 'Envio de dados usando protocolo criptografado MQTT garantindo a segurança dos dados.'
    }
]