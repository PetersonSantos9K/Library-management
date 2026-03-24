'use client'
import LogoFull from "../ul/logo/LogoFull";

import {useEffect, useState } from "react";

export default function SideBar() {

    const [scrolled, setScrolled] = useState(false);

    const auth = ["Entrar", "Criar conta"];

    useEffect(() => {

        const handleScroll = () => {
             setScrolled(window.scrollY>20)
        }

        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

  return (
    <nav 
        className={`
            ${scrolled ? 'border border-border':''} m-1 fixed top-0 left-0 right-0 z-100 bg-bg px-10 justify-between flex items-center content-between h-15 transition: background 0.3s, border-color 0.3s;
        `}
    >
      <LogoFull />
      <div className="flex gap-3 items-center">
        {auth.map((element, index) => (
            <button 
                key={index} 
                className={`py-2 px-4 text-[10px] uppercase cursor-pointer tracking-[0.14em] font-medium font-mono
                    ${index === 0 
                        ?'bg-transparent text-text-sub  border border-border-md hover:border-accent hover:text-accent transition-colors duration-300'     
                        :'bg-accent text-bg border-none  transition-all duration-150'
                    }
                    
                `}
                style={{clipPath: 'polygon(0 0, calc(100% - 7px) 0, 100% 7px, 100% 100%, 0 100%)'}}
                >
                    {element}
            </button>
        ))}

      </div>
    </nav>
  );
}
