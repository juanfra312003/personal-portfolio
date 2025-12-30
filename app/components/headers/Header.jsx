'use client'

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useTranslation } from '../../context/LanguageContext'
import {motion} from 'motion/react'

const Header = () => {
  const { t } = useTranslation()
  
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 pt-25'>
      <motion.div
      initial={{scale:0}}
      whileInView={{scale:1}}
      transition={{duration: 0.8, type: 'spring', stiffness: 100}}
      
      >
        <Image src={assets.profile_img} alt='Profile Image - Juanfra' className='rounded-full h-auto w-60'/>
      </motion.div>
      
      <motion.h3
        initial={{y: -20, opacity: 0}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6, delay:0.3}}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
              {t.header.greeting} <Image src={assets.hand_icon} alt='Hi Icon' className='w-6'/>    
      </motion.h3>

      <motion.h1
        initial={{y: -30, opacity: 0}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.8, delay:0.5}}
        className='text-3xl sm:text-4xl lg:text-[55px] font-Ovo flex items-center gap-2'>
        {t.header.title}
      </motion.h1>

      <motion.p 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay:0.7}}
      
        className='max-w-2xl mx-auto font-Ovo'>
        {t.header.description}
      </motion.p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a href="#contact" 
          initial={{y: 30, opacity: 0}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay:1}}
        
          className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>
          {t.header.contactBtn}
          <Image src={assets.right_arrow_white} alt='' className='w-4'/>
        </motion.a>

        <motion.a 
          initial={{y: 30, opacity: 0}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay:1}}
          
          href="/juanfra-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
          {t.header.resumeBtn}
          <Image src={assets.download_icon} alt='' className='w-4'/>
        </motion.a>
      </div>
    
    </div>
  )
}

export default Header
