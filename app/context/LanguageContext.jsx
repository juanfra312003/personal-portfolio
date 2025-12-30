'use client'

import React, { createContext, useContext } from 'react'
import { translations } from '../translations'

const LanguageContext = createContext()

export const LanguageProvider = ({ children, isEnglish }) => {
  const t = isEnglish ? translations.en : translations.es
  const language = isEnglish ? 'en' : 'es'
  
  return (
    <LanguageContext.Provider value={{ t, isEnglish, language }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useTranslation = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider')
  }
  return context
}
