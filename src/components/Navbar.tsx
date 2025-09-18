import { useState, useEffect } from 'react';
import logo from '../assets/images/logo.svg'
import menu from '../assets/images/icon-hamburger.svg'
import close from '../assets/images/icon-close.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className='flex items-center justify-between px-2.5 sm:px-5 md:px-10 lg:px-24 py-2'>
      <a href="#"><img src={logo} alt="" className='h-5'/></a>
      <nav className='hidden md:flex'>
          <ul className='flex items-center gap-7 text-sm text-gray-600'>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Community</a></li>
          </ul>
      </nav>
      <button className='text-sm text-white rounded-3xl py-2 px-4 bg-[#f25f3a] hidden md:flex'>Get Statrted</button>
      <div className='md:hidden'>
        <button onClick={() => setIsOpen(prev => !prev)} className={`${isOpen ? "hidden" : ""} cursor-pointer`}><img src={menu} alt="" className='size-4' /></button>
        <button onClick={() => setIsOpen(prev => !prev)} className={`${isOpen ? "" : "hidden"} cursor-pointer`}><img src={close} alt="" className='size-4' /></button>
      </div>
      {
        isOpen && (
          <div className='absolute top-12 left-0 w-full h-screen mobileMenu'>
            <nav className='bg-white mt-10 py-5 w-[90%] mx-auto rounded-md'>
              <ul className='flex flex-col items-center gap-7 text-sm text-blue-950 font-semibold'>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Product</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Community</a></li>
              </ul>
            </nav>
          </div>
        )
      }
    </div>
  )
}

export default Navbar
