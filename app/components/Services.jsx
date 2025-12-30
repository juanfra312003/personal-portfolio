'use client'

import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useTranslation } from '../context/LanguageContext'
import { motion } from 'motion/react'

const Services = () => {
  const { t } = useTranslation()

  return (
    <motion.div 
      id="services" 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.8}}
      viewport={{ once: true }}
      className='w-full px-[12%] py-10 scroll-mt-22'>
      
      <motion.h4 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.2}}
        viewport={{ once: true }}
        className='text-center mb-2 text-lg font-Ovo'>{t.services.subtitle}</motion.h4>
      
      <motion.h2 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        viewport={{ once: true }}
        className='text-center text-5xl font-Ovo'>{t.services.title}</motion.h2>

      <motion.p 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.4}}
        viewport={{ once: true }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        {t.services.description}
      </motion.p>

      <div className='grid grid-cols-auto gap-6 my-10'>
        {serviceData.map((service, index) => (
          <motion.div 
            key={index}
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.1 * index}}
            viewport={{ once: true }}
            className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'> 
            <Image src={service.icon} alt='' className='w-10'/>
            <h3 
            className='text-lg my-4 text-gray-800 dark:text-white'>{t.services.items[index].title}</h3>
            <p className='text-sm text-gray-600 leading-5 dark:text-white/80 line-clamp-3'>{t.services.items[index].description}</p>
          </motion.div>
        ))}
      </div>

    </motion.div>
  )
}

export default Services
