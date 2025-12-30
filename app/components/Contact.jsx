'use client'

import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'
import Modal from './modals/Modal'
import { useTranslation } from '../context/LanguageContext'
import { motion } from 'motion/react'

const Contact = ({isDarkMode}) => {
  const { t } = useTranslation()

  // Hook for manage the form submission and modal
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStatus, setModalStatus] = useState(''); // 'sending', 'success', 'error'

  const onSubmit = async (event) => {
    event.preventDefault();
    setModalStatus('sending');
    setModalOpen(true);
    
    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    console.log(data);
    if (data.success) {
      setModalStatus('success');
      event.target.reset();
    } else {
      setModalStatus('error');
    }
  };

  // Function to close the modal and reset status
  const closeModal = () => {
    setModalOpen(false);
    setModalStatus('');
  };


  return (
    <motion.div 
      id='contact'
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.8}}
      viewport={{ once: true }}
      className='w-full px-[12%] py-10 scroll-mt-22 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
      
      <motion.h4 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.2}}
        viewport={{ once: true }}
        className='text-center mb-2 text-lg font-Ovo'>{t.contact.subtitle}</motion.h4>
      
      <motion.h2 
        initial={{opacity: 0, y: -20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.3}}
        viewport={{ once: true }}
        className='text-center text-5xl font-Ovo'>{t.contact.title}</motion.h2>

      <motion.p 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.4}}
        viewport={{ once: true }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        {t.contact.description}
      </motion.p>

      <motion.form 
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.6, delay: 0.5}}
        viewport={{ once: true }}
        className='max-w-2xl mx-auto' onSubmit={onSubmit}>
        
        <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
          
          <input type='text' placeholder={t.contact.namePlaceholder} required
          className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'
          name='name'
          />
          
          <input type='email' placeholder={t.contact.emailPlaceholder} required
          className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90'
          name='email'
          />
        </div>

        <textarea rows={6} placeholder={t.contact.messagePlaceholder} required
        className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90'
        name='message'
        >
        </textarea>

        <button type='submit'
        className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border dark:border-white/90 dark:text-white dark:hover:bg-darkHover/50'
        >{t.contact.submitBtn}
        
        <Image src={assets.right_arrow_white} alt='' className='w-4'/>
        </button>

      </motion.form>

      <Modal 
        isOpen={modalOpen} 
        onClose={closeModal} 
        status={modalStatus} 
        isDarkMode={isDarkMode}
      />

    </motion.div>
  )
}

export default Contact