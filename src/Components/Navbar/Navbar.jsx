import { RiCloseLine, RiMenu2Line } from '@remixicon/react';
import React, { useState } from 'react'
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setshowMenu] = useState(true);

  const navItems=[
    {id:"home" ,label:"HOME"},
     {id:"about" ,label:"ABOUT"},
      {id:"services" ,label:"SERVICES"},
       {id:"projects" ,label:"PROJECTS"},
        {id:"contacts" ,label:"CONTACT"},
  ]

  return (
    <nav className='fixed top-0 left-0 w-full z-50 bg-[#212741] flex justify-between items-center text-white px-6  md:px-14 h-20 '>
      <span className='text-2xl font-bold tracking-wide'>PORTFOLIO</span>
      <ul className={` ${menu ? "block" : "hidden"
        } font-semibold absolute bg-black top-20 left-0 w-full md:w-auto p-4 md:p-0 rounded-xl z-20  
        text-center md:bg-transparent md:static md:flex gap-6 `}>

        {navItems.map((item)=>(
          <Link 
          key={item.id}
          to={item.id}
          smooth={true}
          duration={700}
          offset={-70}// navbar height adjust karega
          className='cursor-pointer'
          onClick={()=>openMenu(false)} // mobile menu close after click
          >
            <li className='text-md transition-all duration-300 p-1 md:p-2'>
          {item.label}
            </li>
          </Link>

        ))}
      </ul>
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className='md:hidden absolute right-10 top-6 transition-all duration-300 '
          onClick={() => {
            openMenu(!menu);
            setshowMenu(!showMenu)
          }} />
      ) : (
        <RiCloseLine size={30} className='md:hidden absolute right-10 top-6 transition-all duration-300 ' />
      )
      }
    </nav>
  )
}

export default Navbar