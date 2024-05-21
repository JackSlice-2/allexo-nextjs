import Image from 'next/image';
import React from 'react';

const Logo = () => {
  return (
    <div >
      <div className="absolute top-14 right-0 p-1 z-50">
        <a href="/">
          <Image src="/Logo.webp" alt="logo" width={300} height={100} />
        </a>
      </div>
    </div>
  );
};

export default Logo;
