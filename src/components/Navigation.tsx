'use client'
import React, { useEffect, useState } from 'react'
import style from '@/style/navbar.module.css'

const Navigation = () => {
    const [scroll, setScroll] = useState('nav')
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 15) {
            setScroll('nav_black'); // Nová barva při scrollování
          } else {
            setScroll('nav'); // Původní barva
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup funkce pro odstranění event listeneru při unmountu komponenty
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
  return (
    <header className={style[scroll]}>
          <nav className={style["nav-container"]}>
            <h1>JH</h1>
          </nav>
    </header>
  )
}

export default Navigation