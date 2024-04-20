import React from 'react'

const Navbar = () => {
  return (
    <div className='my-9'>
       <div className='header'>
        <nav id='menu'>
          <input type='checkbox' id='responsive-menu' onclick='updatemenu()'/><label></label>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/pages/products'>Produtos</a></li>
            <li><a href='/pages/solutions'>Soluções</a></li>
            <li><a href='/pages/about'>Sobre</a></li>
            <li><a href='/pages/contact'>Contato</a></li>
            <li><a href='/pages/newsLetter'>Newsletter</a></li>
            <li id="iot-li">
              <a href='http://iot.allexo.com.br' target="_blank" >IoTHINGS Login</a></li>
          </ul>
        </nav>
        <div>
          <img alt="" src="/image/Logo.webp" class="logo"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
