'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTranslation } from '../../context/LanguageContext'
import { VideoPlayer } from '../video-components/VideoPlayer'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'

const ModalProject = ({ isOpen, onClose, project, isDarkMode }) => {
  const { language } = useTranslation()
  const [imageError, setImageError] = useState({})
  
  // Generate a unique key for the current project
  const projectKey = project?.title || ''

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen || !project) return null

  const handleImageError = (imageKey) => {
    setImageError(prev => ({ ...prev, [`${projectKey}-${imageKey}`]: true }))
  }

  const hasImageError = (imageKey) => {
    return imageError[`${projectKey}-${imageKey}`]
  }

  // Placeholder for missing images
  const placeholderImage = '/work-1.png'

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal Content */}
      <div
        className={`relative rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all ${
          isDarkMode ? 'bg-darkTheme border border-white/20' : 'bg-white'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 z-10 p-2 rounded-full transition-colors ${
            isDarkMode
              ? 'bg-white/10 text-white hover:bg-white/20'
              : 'bg-black/10 text-gray-700 hover:bg-black/20'
          }`}
        >
          <IoClose size={24} />
        </button>

        {/* Content Container */}
        <div className="p-6 sm:p-8">
          {/* Title */}
          <h2
            className={`text-2xl sm:text-3xl font-bold mb-6 pr-10 font-Ovo ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            {project.title}
          </h2>

          {/* Long Description 1 */}
          <p
            className={`mb-6 text-base sm:text-lg leading-relaxed font-Ovo text-justify ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            {project.long_description_1}
          </p>

          {/* Inter Image 1 */}
          {project.inter_image && (
            <div className="relative w-full mb-6 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              <Image
                src={hasImageError('inter') ? placeholderImage : project.inter_image}
                alt={`${project.title} - Image 1`}
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
                onError={() => handleImageError('inter')}
              />
            </div>
          )}

          {/* Long Description 2 */}
          <p
            className={`mb-6 text-base sm:text-lg leading-relaxed font-Ovo text-justify ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
            dangerouslySetInnerHTML={{
              __html: project.long_description_2.replace(
                /\*\*(.*?)\*\*/g,
                `<strong class="${isDarkMode ? 'text-white' : 'text-black'}">$1</strong>`
              ),
            }}
          />

          {/* Inter Image 2 (optional) */}
          {project.inter_image_2 && (
            <div className="relative w-full mb-6 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              <Image
                src={hasImageError('inter2') ? placeholderImage : project.inter_image_2}
                alt={`${project.title} - Image 2`}
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
                onError={() => handleImageError('inter2')}
              />
            </div>
          )}

          {/* Project Facts */}
          <div className="mb-8">
            <h3
              className={`text-xl font-semibold mb-4 font-Ovo ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
            >
              {language === 'es' ? 'Aspectos Destacados' : 'Key Highlights'}
            </h3>
            <ul className="space-y-3">
              {project.project_facts.map((fact, index) => (
                <li
                  key={index}
                  className={`flex items-start gap-3 text-sm sm:text-base font-Ovo text-justify ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  <span
                    className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      isDarkMode
                        ? 'bg-white/10 text-white'
                        : 'bg-black/10 text-gray-900'
                    }`}
                  >
                    {index + 1}
                  </span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Demo Section */}
          {project.video_url && (
            <div className="mb-8">
              <h3
                className={`text-xl font-semibold mb-4 font-Ovo ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                } ${project.video_portrait ? 'text-center' : ''}`}
              >
                {project.demo_title}
              </h3>
              <div className="flex justify-center ">
                <VideoPlayer 
                  src={project.video_url} 
                  isPortrait={project.video_portrait || false}
                />
              </div>
            </div>
          )}

          {/* Social/Repository Button */}
          <div className="flex justify-center">
            {project.github_url && (
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 py-3 px-8 rounded-full transition-all duration-300 font-Ovo text-lg ${
                  isDarkMode
                    ? 'bg-transparent border border-white/90 text-white hover:bg-white/10'
                    : 'bg-gray-900 text-white hover:bg-black'
                }`}
              >
                <FaGithub size={24} />
                {project.github_button_description}
              </a>
            )}
            {project.instagram_url && (
              <a
                href={project.instagram_url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 py-3 px-8 rounded-full transition-all duration-300 font-Ovo text-lg ${
                  isDarkMode
                    ? 'bg-transparent border border-white/90 text-white hover:bg-white/10'
                    : 'bg-transparent border border-gray-900 text-gray-900 hover:bg-gray-100'
                }`}
              >
                <FaInstagram size={24} />
                {project.instagram_button_description}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalProject
