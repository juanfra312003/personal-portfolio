'use client'

import React, { useEffect } from 'react'
import { useTranslation } from '../../context/LanguageContext'

const Modal = ({ isOpen, onClose, status, isDarkMode}) => {
  const { t } = useTranslation()
  
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

  if (!isOpen) return null

  const getStatusConfig = () => {
    switch (status) {
      case 'sending':
        return {
          icon: (
            <div className={`w-12 h-12 border-4 rounded-full animate-spin ${isDarkMode ? 'border-gray-600 border-t-white' : 'border-gray-200 border-t-black'}`} />
          ),
          title: t.modal.sending,
          message: t.modal.sendingMsg,
          showButton: false
        }
      case 'success':
        return {
          icon: (
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-green-900/50' : 'bg-green-100'}`}>
              <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          ),
          title: t.modal.success,
          message: t.modal.successMsg,
          showButton: true
        }
      case 'error':
        return {
          icon: (
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-red-900/50' : 'bg-red-100'}`}>
              <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          ),
          title: t.modal.error,
          message: t.modal.errorMsg,
          showButton: true
        }
      default:
        return null
    }
  }

  const config = getStatusConfig()
  if (!config) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
      
      {/* Modal Content */}
      <div 
        className={`relative rounded-2xl shadow-xl max-w-sm w-full p-8 transform transition-all ${isDarkMode ? 'bg-darkTheme border border-white/20' : 'bg-white'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        {config.showButton && (
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-400 hover:text-gray-600'}`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        
        {/* Content */}
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            {config.icon}
          </div>
          
          <h3 className={`text-xl font-semibold mb-2 font-Ovo ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            {config.title}
          </h3>
          
          <p className={`mb-6 font-Ovo ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {config.message}
          </p>
          
          {config.showButton && (
            <button
              onClick={onClose}
              className={`py-2.5 px-6 rounded-full transition-colors duration-300 font-Ovo ${isDarkMode ? 'bg-transparent border border-white/90 text-white hover:bg-darkHover/50' : 'bg-black/80 text-white hover:bg-black'}`}
            >
              {t.modal.close}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Modal
