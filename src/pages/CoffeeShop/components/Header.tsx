import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/Icon';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Отслеживание скролла для изменения прозрачности
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full py-4 z-50 font-montserrat backdrop-blur-lg transition-all duration-300 ${
        scrolled 
          ? 'bg-[#2E8B57]/80 shadow-lg'
          : 'bg-[#2E8B57]/50'
      }`}
    >
      <div className=