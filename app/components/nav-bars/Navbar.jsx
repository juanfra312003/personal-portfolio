'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { useTranslation } from '../../context/LanguageContext'

const Navbar = ({ isDarkMode, setIsDarkMode, isEnglish, setIsEnglish }) => {
  const { t } = useTranslation()
  const [isScroll, setIsScroll] = useState(false);


  // Manage of the state of the responsible design
  const sideMenuRef = useRef();

  const openMenu = () =>{
    // Open the side menu
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
  }

  const closeMenu = () =>{
    // Close the side menu
    sideMenuRef.current.style.transform = 'translateX(16rem)';
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
        if (scrollY > 50){
            setIsScroll(true);
        }else{
            setIsScroll(false);
        }
    })
  }, []);

  return (
    <>
    <div className = 'fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src ={assets.header_bg_color} alt="header background color" className='w-full'/>
    </div>

    <nav className={`w-full fixed px-5 lg:px-10 xl:px-[8%] flex items-center justify-between z-50 ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme' : ''}`}>
        <a href="#top">
            <Image
                src={isDarkMode ? assets.logo_dark:assets.logo}
                alt="logo"
                className="w-32 sm:w-40 lg:w-48 cursor-pointer mr-16"
            />
        </a>


        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 dark:bg-gray-800 ${isScroll ? '' : 'bg-white shadow-sm bg-opacity-50'}` }>
            <li><a className='font-Ovo' href="#top">{t.nav.home}</a></li>
            <li><a className='font-Ovo' href="#about">{t.nav.about}</a></li>
            <li><a className='font-Ovo' href="#services">{t.nav.services}</a></li>
            <li><a className='font-Ovo' href="#work">{t.nav.work}</a></li>
            <li><a className='font-Ovo' href="#contact">{t.nav.contact}</a></li>
        </ul>

        <div className = 'flex items-center gap-4'>

            <button onClick={() => setIsEnglish(prev => !prev)}>
                <Image src = {isEnglish ? assets.usa : assets.spain} alt="language" className='w-6' />
            </button>

            <button onClick={() => setIsDarkMode(prev => !prev)}>
                <Image src = {isDarkMode ? assets.sun_icon : assets.moon_icon} alt="app mode" className='w-6' />
            </button>

            <a href="#contact" className = 'hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>
                {t.nav.contact} <Image src = {isDarkMode ? assets.arrow_icon_dark: assets.arrow_icon} className='w-3' alt='Contact Link'/>
            </a>
            
            <button className='block md:hidden ml-3' onClick={openMenu}>
                <Image src = {isDarkMode ? assets.menu_white : assets.menu_black} alt="menu" className='w-6' />
            </button>

        </div>

        {/* Mobile Menu - Responsive Design */}
        <ul ref={sideMenuRef} className = 'flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-gray-800'>
           
           <div className='absolute top-6 right-6' onClick={closeMenu}>
                <Image src={isDarkMode ? assets.close_white : assets.close_black} alt = '' className='w-5 cursor-pointer'/>
           </div>
           
            <li><a className='font-Ovo' onClick={closeMenu} href="#top">{t.nav.home}</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#about">{t.nav.about}</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#services">{t.nav.services}</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#work">{t.nav.work}</a></li>
            <li><a className='font-Ovo' onClick={closeMenu} href="#contact">{t.nav.contact}</a></li>
        </ul>

      </nav>
    </>
  )
}

export default Navbar