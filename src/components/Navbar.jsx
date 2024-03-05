import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";



const Navbar = () => {
  const  [toggle, setToggle] = useState(false);

  

 


  return (
    <nav className="  w-full flex  justify-between py-4 items-center navbar ">
        <img src={logo} alt="hoobank" className="w-[124px] h-[32px] cursor-pointer " />
        <ul className="list-none hidden sm:flex justify-end items-center flex-1 ">
          {navLinks.map((nav,index)=>(
            <li key={nav.id} className={`font-poppins font-normal cursor-pointe text-[16px] ${index === navLinks.length-1 ? 'mr-0' : 'mr-10'} text-white hover:text-cyan-300 transition-all	duration-300 hover:-translate-y-1 	` }>
              <a href={`#${nav.id}`}> {nav.title} </a>
            </li>
          )   
          )}
        </ul>

        <div className="sm:hidden flex justify-end items-center flex-1 cursor-pointer">
          <img src={toggle  ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={()=>setToggle((prev)=> !prev)}/>
        </div>

        <div className={`${toggle ? 'flex sm:hidden' : 'hidden'} bg-black-gradient min-w-[140px] p-6 absolute top-16 right-0 mx-4 my-2 rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1 ">

            {navLinks.map((nav,index)=>(
              <li key={nav.id} className={`font-poppins font-normal cursor-pointe text-[16px] ${index === navLinks.length-1 ? 'mb-0' : 'mb-4'} text-white hover:text-cyan-300 transition-all	duration-300 hover:translate-x-2` }>
                <a href={`#${nav.id}`}> {nav.title} </a>
              </li>))}

          </ul>

        </div>
    </nav>
  )
}

export default Navbar;