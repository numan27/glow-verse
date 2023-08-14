import React from 'react'
import IMAGES from '../../assets/images'
import { FaFacebookF, FaYoutube, FaTiktok, FaTwitter, FaInstagram, FaHome, FaPhone } from "react-icons/fa"
import { BsArrowRight } from "react-icons/bs"
import { MdMail } from "react-icons/md"
import { RiWhatsappFill } from "react-icons/ri"
import { Link } from 'react-router-dom'

const socialIcons = [
  {
    icon: FaFacebookF,
    title: 'Facebook',
    link: 'https://www.facebook.com/',
    color: '[#3b5998]',
  },
  {
    icon: FaInstagram,
    title: 'Instagram',
    link: 'https://www.instagram.com/',
    color: '[#DB0077]',
  },
  {
    icon: FaTiktok,
    title: 'TikTok',
    link: 'https://www.tiktok.com/',
    color: 'black',
  },
  {
    icon: FaYoutube,
    title: 'Youtube',
    link: 'https://www.youtube.com/',
    color: '[#CD201F]',
  },
  {
    icon: FaTwitter,
    title: 'Twitter',
    link: 'https://twitter.com/',
    color: '[#00acee]',
  },
];

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
              <li className='mb-2 flex items-center gap-2'> <span><RiWhatsappFill className='text-xl' /></span>
                +966 56 072 0308</li>

              <li className='mb-2 flex items-center gap-2'> <span><FaHome className='text-xl' /></span>
                +966 56 072 0308</li>

              <li className='mb-2 flex items-center gap-2'> <span><FaPhone className='text-xl' /></span>
                P.O. Box: 9057, Jeddah, Saudi Arabia</li>

              <li className='mb-2 flex items-center gap-2'> <span><MdMail className='text-xl' /></span>
                info@glowverse.com</li>
            </ul>
          </div>
        </div>

        {/* Social - new row */}

        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-10 lg:px-32 px-0">
          {socialIcons.map((socialIcon, index) => (
            <div className="flex justify-center items-center" key={index}>
              <a
                href={socialIcon.link}
                className="flex w-16 items-center sm:justify-start justify-start transition duration-300 sm:mb-0 mb-3 ease-in-out group cursor-pointer"
              >
                <span
                  className={`text-white w-1/2 transition duration-300 ease-in-out group-hover:text-${socialIcon.color} mx-2`}
                >
                  {React.createElement(socialIcon.icon, { className: 'text-3xl' })}
                </span>
                <span className={`text-[#fae3d1] transition duration-300 ease-in-out group-hover:text-white sm:text-xl text-base font-bold text-center`}>
                  {socialIcon.title}
                </span>
              </a>
            </div>
          ))}
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