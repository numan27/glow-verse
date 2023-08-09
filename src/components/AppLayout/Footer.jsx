import React from 'react'
import IMAGES from '../../assets/images'
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa"
import { BsArrowRight } from "react-icons/bs"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#ee8bb9] pt-8 pb-2 shadow-lg">
      <div className="container mx-auto px-4">

        <div className="flex items-center justify-between flex-wrap mb-8 mb-12">
          {/* Logo */}
          <div className="lg:w-1/4 w-full flex items-center justify-center lg:justify-start px-4 lg:py-6 py-1">
            <img src={IMAGES.FOOTER_LOGO_2} alt="Logo" className="footer-logo lg:w-32 w-24 mr-3" />
            <span className="text-white uppercase font-bold text-2xl">Glow Verse</span>
          </div>

          {/* Links 1 */}

          <div className='lg:w-1/4 w-1/2 flex flex-col items-center my-6 md:my-0'>
            <h2 className='text-white text-xl md:mb-8 mb-4 uppercase text-semibold'>Links</h2>
            <ul>
              <li className='text-[#74322c] transition duration-300 ease-in-out hover:text-white mb-1.5 hover:translate-x-1'>
                <Link className='flex items-center'><span><BsArrowRight className='mr-2' /> </span> Contact</Link>
              </li>
              <li className='text-[#74322c] transition duration-300 ease-in-out hover:text-white mb-1.5 hover:translate-x-1'>
                <Link className='flex items-center'><span><BsArrowRight className='mr-2' /> </span> Shop</Link>
              </li>
              <li className='text-[#74322c] transition duration-300 ease-in-out hover:text-white mb-1.5 hover:translate-x-1'>
                <Link className='flex items-center'><span><BsArrowRight className='mr-2' /> </span>
                  Support
                </Link>
              </li>
            </ul>
          </div>


          {/* Links 2 */}
          <div className='lg:w-1/4 w-1/2 flex flex-col items-center'>
            <h2 className='text-white text-xl md:mb-8 mb-4 uppercase text-semibold'>Support</h2>
            <ul>
              <li className='text-[#74322c] transition duration-300 ease-in-out hover:text-white mb-1.5 hover:translate-x-1'>
                <Link className='flex items-center'><span><BsArrowRight className='mr-2' /> </span> Skin Quiz</Link>
              </li>
              <li className='text-[#74322c] transition duration-300 ease-in-out hover:text-white mb-1.5 hover:translate-x-1'>
                <Link className='flex items-center'><span><BsArrowRight className='mr-2' /> </span>
                  FAQs
                </Link>
              </li>
              <li className='text-[#74322c] transition duration-300 ease-in-out hover:text-white mb-1.5 hover:translate-x-1'>
                <Link className='flex items-center'><span><BsArrowRight className='mr-2' /> </span>
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact details */}

          <div className='lg:w-1/4 w-full text-center lg:text-left flex justify-center'>
            <ul className='lg:mt-12 mt-6 text-white'>
              <li className='mb-2'>P.O. Box: 9057, Jeddah, Saudi Arabia</li>
              <li className='mb-2'>+966 56 072 0308</li>
              <li className='mb-2'>info@glowverse.com</li>
            </ul>
          </div>
        </div>

        {/* Social - new row */}

        <div className="flex flex-wrap sm:justify-between justify-center items-center lg:px-32 px-0">

          <a href="https://www.facebook.com/" className='flex w-1/2 sm:w-fit items-center sm:justify-start justify-center transition duration-300 sm:mb-0 mb-3 ease-in-out group cursor-pointer'>
            <span className="text-white transition duration-300 ease-in-out group-hover:text-[#3b5998] mx-2">
              <FaFacebookF className='text-3xl' />
            </span>
            <span className='text-[#fae3d1] transition duration-300 ease-in-out group-hover:text-white sm:text-xl text-base font-bold'>Facebook</span>
          </a>

          <a href="https://www.instagram.com/" className='flex w-1/2 sm:w-fit items-center sm:justify-start justify-center transition duration-300 sm:mb-0 mb-3 ease-in-out group cursor-pointer'>
            <span className="text-white transition duration-300 ease-in-out group-hover:text-pink-500 mx-2">
              <FaInstagram className='text-3xl' />
            </span>
            <span className='text-[#fae3d1] transition duration-300 ease-in-out group-hover:text-white sm:text-xl text-base  font-bold'>Instagram</span>
          </a>

          <a href="https://www.youtube.com/"  className='flex w-1/2 sm:w-fit items-center sm:justify-start  justify-center transition duration-300 sm:mb-0 mb-3 ease-in-out group cursor-pointer'>
            <span className="text-white transition duration-300 ease-in-out group-hover:text-[#CD201F] mx-2">
              <FaYoutube className='text-3xl' />
            </span>
            <span className='text-[#fae3d1] transition duration-300 ease-in-out group-hover:text-white sm:text-xl text-base  font-bold'>Youtube</span>
          </a>

          <a href="https://twitter.com/" className='flex w-1/2 sm:w-fit items-center sm:justify-start justify-center transition duration-300 ease-in-out sm:mb-0 mb-3 group cursor-pointer'>
            <span className="text-white transition duration-300 ease-in-out group-hover:text-[#00acee] mx-2">
              <FaTwitter className='text-3xl' />
            </span>
            <span className='text-[#fae3d1] transition duration-300 ease-in-out group-hover:text-white sm:text-xl text-base font-bold'>Twitter</span>
          </a>
        </div>
      </div>

      {/* Copyrights */}
      <div className="mt-6 text-center text-[#74322c] flex items-center justify-center text-lg border-t pt-2">
        <span> &copy; </span>&nbsp; <span className='tracking-wider'> {new Date().getFullYear()}</span>&nbsp;
        <span className='tracking-wider'> Glow Verse</span>
      </div>
    </footer>
  )
}

export default Footer