'use client'

import { assets, infoList, getToolsData } from '@/assets/assets'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTranslation } from '../context/LanguageContext'
import {motion} from 'motion/react'


const About = ({ isDarkMode }) => {
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Get tools data based on dark mode (use false for SSR, then actual value after mount)
  const toolsData = getToolsData(mounted && isDarkMode);

  return (
    <motion.div id='about' 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 0.8}}
    viewport={{ once: true }}
    className='w-full px-[5%] sm:px-[8%] lg:px-[12%] py-10 scroll-mt-22'>
      
      <motion.h4 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.2}}
        viewport={{ once: true }}
        className='text-center mb-2 text-base sm:text-lg font-Ovo'>{t.about.subtitle}</motion.h4>
      
      <motion.h2 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        viewport={{ once: true }}
        className='text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo'>{t.about.title}</motion.h2>


      <div className='flex w-full flex-col lg:flex-row items-center justify-center gap-10 sm:gap-16 lg:gap-20 my-10 sm:my-15 max-w-6xl mx-auto'>
        <motion.div 
          initial={{opacity: 0, x: -50}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 0.6, delay: 0.4}}
          viewport={{ once: true }}
          className='w-64 sm:w-80 lg:w-115 rounded-3xl max-w-none flex-shrink-0'>
        <Image
            src={assets.user_image}
            alt='Juanfra Image'
            className='w-full h-auto rounded-3xl'
            priority
        />
        </motion.div>

        <motion.div 
          initial={{opacity: 0, x: 50}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 0.6, delay: 0.5}}
          viewport={{ once: true }}
          className='flex-1 w-full'>
            <p className='mb-6 sm:mb-10 max-w-2xl font-Ovo text-justify text-sm sm:text-base'>
                {t.about.paragraph1}
            </p>

            <p className='mb-6 sm:mb-10 max-w-2xl font-Ovo text-justify text-sm sm:text-base'>
                {t.about.paragraph2}
            </p>


            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl'>
                {infoList.map((info, index) => (
                    <li className='border-[0.5px] border-gray-400 rounded-xl p-4 sm:p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' key={index}>
                        <Image src={mounted && isDarkMode ? info.iconDark : info.icon} alt={t.about.infoItems[index].title} className='w-6 sm:w-7 mt-2 sm:mt-3'/>
                        <h3 
                        className='my-3 sm:my-4 font-semibold text-gray-700 dark:text-white text-sm sm:text-base'>
                            {t.about.infoItems[index].title}</h3>
                        <p className='text-gray-600 text-xs sm:text-sm dark:text-white/80'>{t.about.infoItems[index].description}</p>
                    </li>
                ))}
            </ul>

            <h4 className='my-4 sm:my-6 text-gray-700 font-Ovo dark:text-white/80 text-sm sm:text-base'>{t.about.toolsTitle}</h4>

            <ul className='flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-5'>
                {toolsData.map((tool, index) => (
                    <li className='flex items-center justify-center w-10 sm:w-12 lg:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                        <Image src={tool} alt='' className='w-4 sm:w-5 lg:w-7'/>
                    </li>
                ))}

            </ul>

        </motion.div>

      </div>
    </motion.div>
  )
}

export default About
