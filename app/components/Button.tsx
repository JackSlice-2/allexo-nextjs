"use client";

import React, { ReactElement } from 'react'

interface ButtonProps {
    label?: string;
    live?: boolean;
    iconBtn?: boolean;
    transperant?: boolean;
    more?: boolean;
    icon?: ReactElement;
    url: string;
    newTab?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    label,
    live,
    iconBtn,
    more,
    transperant,
    icon: Icon,
    url,
    newTab,
}) => {

  return (
<a href={url}  
    target={newTab ? '_blank' : '_self'} 
    rel={newTab ? 'noopener noreferrer' : ''} 
    aria-label={label}
> 
    <button 
    id={label}
    className={`transition font-medium rounded-lg hover:text-white'

        ${live ? 'w-[250px]' : 'w-auto'}
        ${live ? 'h-[80px]' : 'h-auto'}
        ${live ? 'absolute' : 'relative'}
        ${live ? 'left-10' : 'left-0'}
        ${live ? 'top-3/4' : 'top-0'}
        ${live ? 'hover:bg-red-700' : 'hover:scale-125'}
        ${live ? 'text-black' : 'text-white'}
        ${iconBtn ? 'p-1' : 'p-2'}
        
        ${transperant ? 'bg-none' : 'bg-blue-900'}
        ${live ? 'bg-yellow-500' : ''}
        ${iconBtn ? 'bg-transparent' : ''}

        ${iconBtn ? 'hover:bg-blue-400/30' : ''}
        ${iconBtn ? 'border-blue-800' : ''}
        ${iconBtn ? 'border-2' : ''}

        ${more ? 'w-40' : ''}
        `}>
        {Icon}
        {label}
    </button>
        </a>
  )
}

export default Button