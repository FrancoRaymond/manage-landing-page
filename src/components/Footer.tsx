import logo from '../assets/images/logo.svg'
import fb from '../assets/images/icon-facebook.svg'
import insta from '../assets/images/icon-instagram.svg'
import pinterest from '../assets/images/icon-pinterest.svg'
import twitter from '../assets/images/icon-twitter.svg'
import yt from '../assets/images/icon-youtube.svg'


const Footer = () => {
  return (
    <div>
        <div className="bg-[#f25f3a] bg-[url('./assets/images/bg-simplify-section-mobile.svg')] bg-no-repeat bg-auto gap-10 py-10 flex justify-between items-center px-2.5 sm:px-5 md:px-10 lg:px-24">
            <h2 className="text-white text-2xl font-semibold md:text-3xl">Simplify how your teams works</h2>
            <button className="text-sm text-nowrap mx-auto sm:mx-0 text-[#f25f3a] rounded-3xl py-2 px-4 bg-white w-fit">Get Started</button>
        </div>
        <div className="px-2.5 sm:px-5 md:px-10 lg:px-24 py-10 bg-black md:grid md:grid-cols-4">
            <div className='flex flex-col items-center md:items-start'>
                <img src={logo} alt="" className='w-32'/>
                <div className='flex gap-2 mt-10  md:justify-between md:mt-auto'>
                    <img src={fb} alt="" />
                    <img src={yt} alt="" />
                    <img src={twitter} alt="" />
                    <img src={pinterest} alt="" />
                    <img src={insta} alt="" />
                </div>
            </div>
            <div className='flex justify-around mt-10 md:mt-0 md:justify-around w-full md:col-span-2 text-sm'>
                <ul className='text-gray-400 flex flex-col gap-3'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About us</a></li>
                </ul>
                <ul className='text-gray-400 flex flex-col gap-3'>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Products</a></li>
                </ul>
            </div>
            <div className='flex flex-col mt-10 md:mt-0 h-full'>
                <div className='w-fit mx-auto md:flex md:gap-2'>
                    <input type="email" name='email' placeholder='updates in your inbox' className='md:w-52 outline-0 rounded-3xl py-2 px-4 text-gray-500 bg-white'/>
                    <button className="ml-1.5 text-sm mx-auto sm:mx-0 text-white rounded-3xl py-2 px-4 bg-[#f25f3a] w-fit">Go</button>
                </div>
                <span className='mx-auto mt-10 md:mt-auto text-gray-400 text-sm'>Copyright {new Date().getFullYear()}. All rights Reserved</span>
            </div>
        </div>
    </div>
  )
}

export default Footer