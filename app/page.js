'use client';

import React, { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/footers/Footer";
import Header from "./components/headers/Header";
import Navbar from "./components/nav-bars/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";
import { LanguageProvider } from "./context/LanguageContext";
import Head from "next/head";


export default function Home() {

  // State variable for dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isEnglish, setIsEnglish] = useState(true);

  // Initialize theme from localStorage on client side
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = storedTheme === "dark" || (!storedTheme && prefersDark);
    
    setIsDarkMode(shouldBeDark);
    setIsLoaded(true);
  }, []);

  // Apply theme changes
  useEffect(() => {
    if (!isLoaded) return;
    
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode, isLoaded]);

  return (
    
    <LanguageProvider isEnglish={isEnglish}>

      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} isEnglish={isEnglish} setIsEnglish={setIsEnglish} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </LanguageProvider>
  );
}
