import logo from '../assets/images/logo.svg'
import menu from '../assets/images/icon-hamburger.svg'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-2.5 sm:px-5 md:px-10 lg:px-24 py-2'>
        <a href="#"><img src={logo} alt="" /></a>
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
            <button className='cursor-pointer'><img src={menu} alt="" /></button>         
        </div>
    </div>
  )
}

export default Navbar
