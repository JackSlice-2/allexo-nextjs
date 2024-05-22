'use client'

// Import necessary components and hooks
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Corrected import path
import Button from './Button';
import Logo from './Logo';
import { MenuIcon } from 'lucide-react';
import { MenuItems } from '../data/MainTextData';

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
        <button onClick={() => setMenuOpen(!isMenuOpen)} className="md:hidden p-4">
          <MenuIcon size={80} />
        </button>

      <nav className={`pt-4 flex-row justify-between items-center md:pl-5 lg:pl-20 md:mx-2 max-w-screen w-screen h-screen md:w-auto md:h-auto bg-blue-800/40 md:bg-black md:pt-0 md:flex ${isMenuOpen? 'block' : 'hidden'}`}>

        <div className={`md:flex md:flex-row md:gap-4 lg:gap-7 text-md font-medium ${isMenuOpen? 'block' : 'hidden'} md:flex`}>
          {MenuItems.map((item) => (
            <a onClick={() => router.push(item.link)} key={item.name} href={item.link}>
              <div className='md:p-2 p-5 cursor-pointer hover:text-medium hover:underline justify-center items-center text-center text-3xl md:text-lg'>
                {item.name}
              </div>
            </a>
          ))}
        </div>

        <div className='justify-center text-center flex items-center py-5 md:p-2 text-2xl md:text-lg'>
          <Button 
            label='IoTHINGS Login'
            transperant
            url='http://iot.allexo.com.br'
            newTab={true}
          />
        </div>
      </nav>
      <Logo />
    </>
  );
};

export default Navbar;
