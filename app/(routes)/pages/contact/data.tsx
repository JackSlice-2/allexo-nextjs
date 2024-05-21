
import { PhoneIcon } from 'lucide-react'
import { BsEnvelope, BsTelegram, BsWhatsapp } from 'react-icons/bs'
import { FaMapMarkedAlt, FaMapMarker } from 'react-icons/fa'

export const contactText = [
    {
        title: "Address",
        text: "porto alegre, Canoas numero 1444",
        icon: <FaMapMarkedAlt />
    },
    {
        title: "Phone",
        text: "857842 1444",
        icon: <PhoneIcon />
    },
    {
        title: "email",
        text: "allexo@allexo.com",
        icon: <BsEnvelope />
    },
    {
        title: "WhatsApp",
        text: "857842 1444",
        icon: <BsWhatsapp />
    },
    {
        title: "Telegram",
        text: "857842 1444",
        icon: <BsTelegram />
    }
]