'use client'

import { assets, contactData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { useTranslation } from '../../context/LanguageContext'
import { motion } from 'motion/react'

const Footer = ({isDarkMode}) => {
  const { t } = useTranslation()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const contacts = contactData(mounted && isDarkMode);
  
  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.6}}
      viewport={{ once: true }}
      className='mt-22'>
      <div className='text-center'>

        <div className='w-max flex items-center gap-2 mx-auto'>
            <Image src={assets.mail_icon} alt='Juanfra logo' className='w-5'/>
            <a href='mailto:juanframireze@gmail.com' className='ml-2 text-lg font-Ovo'>
                juanframireze@gmail.com
            </a>
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-4 py-6'>
        <p>{t.footer.rights}</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            {contacts.map((item, index) => (
                <li key={index}>
                    <a href={item.link} target='_blank' rel='noopener noreferrer'>
                        <Image src={item.icon} alt={item.title} className='w-6 mx-2 inline-block'/>
                    </a>
                    <p>
                        {item.title}
                    </p>
                </li>
            ))}

        </ul>
      </div>
    </motion.div>
  )
}

export default Footer