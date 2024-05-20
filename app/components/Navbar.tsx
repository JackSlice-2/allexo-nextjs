'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import Button from './Button';
import Logo from './Logo';

const MenuItems = [
    { name: 'Inicio', link: '/' },
    { name: 'Produtos', link: '/pages/products' },
    { name: 'Soluçoes', link: '/pages/solutions' },
    { name: 'Sobre', link: '/pages/about' },
    { name: 'Contato', link: '/pages/contact' },
    { name: 'Newsletter', link: '/pages/newsLetter' },
  ];

const Navbar: React.FC = () => {
  const router = useRouter()

  return (
    <>
      <div className='pt-6 md:pt-0 md:flex flex-row justify-between items-center pl-20 md:mx-2 max-w-screen'>

        <div className='flex flex-row justify-center items-center gap-2 md:gap-4 lg:gap-7 text-md font-medium'>
          {MenuItems.map((item) => (
            <a onClick={() => router.push(item.link)} key={item.name} href={item.link}>
            <div className='p-1.5 cursor-pointer hover:text-medium hover:underline'>
              {item.name}
            </div>
            </a>
            ))}
          </div>

          <div className='justify-center text-center flex items-center p-2'>
          <Button 
            label='IoTHINGS Login'
            transperant={true}
            url='http://iot.allexo.com.br'
            newTab={true}
          />
        </div>
        </div>
        <Logo />
    </>
  );
};

export default Navbar;