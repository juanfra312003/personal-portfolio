'use client'

import { assets, projectsData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { useTranslation } from '../context/LanguageContext'
import { motion } from 'motion/react'
import ModalProject from './modals/ModalProject'

const Work = ({isDarkMode}) => {
  const { t, language } = useTranslation()
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [imageErrors, setImageErrors] = useState({})

  // Get projects based on current language
  const projects = projectsData[language] || projectsData.en

  const handleProjectClick = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }))
  }

  // Placeholder for missing background images
  const placeholderBg = '/work-1.png'
  
  return (
    <>
      <motion.div 
        id="work" 
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
          className='text-center mb-2 text-lg font-Ovo'>{t.work.subtitle}</motion.h4>
        
        <motion.h2 
          initial={{opacity: 0, y: -20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.3}}
          viewport={{ once: true }}
          className='text-center text-5xl font-Ovo'>{t.work.title}</motion.h2>

        <motion.p 
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.5, delay: 0.4}}
          viewport={{ once: true }}
          className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
          {t.work.description}
        </motion.p>

        <div className='grid grid-cols-auto my-10 gap-5 dark:text-black'>
          {projects.map((project, index) => (
              <motion.div 
                initial={{opacity: 0, scale: 0.9}}
                whileInView={{opacity: 1, scale: 1}}
                transition={{duration: 0.5, delay: 0.1 * index}}
                viewport={{ once: true }}
                className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                key={index} 
                style={{backgroundImage: `url(${imageErrors[index] ? placeholderBg : project.bg_image})`}}
                onClick={() => handleProjectClick(project)}>
                
                  
                  <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                      <div>
                          <h3 className='font-semibold'>{project.title}</h3>
                          <p className='text-sm text-gray-700'>{project.description}</p>
                      </div>

                      <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-blue-200 transition'>
                          <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                      </div>
                  </div>

              </motion.div>
          ))}
        </div>

        <motion.a 
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.6}}
          viewport={{ once: true }}
          href="https://github.com/juanfra312003" 
          className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
          {t.work.viewMore} <Image src={isDarkMode ? assets.right_arrow_bold_dark: assets.right_arrow_bold} alt='right arrow' className='w-4 inline-block ml-2'/>
        </motion.a>

      </motion.div>

      {/* Project Modal */}
      <ModalProject 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
        isDarkMode={isDarkMode}
      />
    </>
  )
}

export default Work
