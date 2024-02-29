import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineHome } from 'react-icons/ai';

const Navbar = () => {

   const [nav, setNav] = useState(false);
     const handleNav = () => {
    setNav(!nav);

   };

  return (
    <div>
        <AiOutlineMenu onClick={handleNav} className='absolute  md:hidden'/>
        {
          nav ? (
            <div className='fixed w-full h-sceen bg-white/90 flex flex-col justify-center items-center z-20'>
              <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-g hover:scale-110 eas'>

                <AiOutlineHome size={20} />

                <span className='home1'>Home</span>



              </a>



            </div>


          )
          : (
            <div></div>


          )
        }

    </div>
  );

};

export default Sidenav;