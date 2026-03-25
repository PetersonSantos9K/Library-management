'use client'
import LogoFull from "../ul/logo/LogoFull";

import {useEffect, useState } from "react";
export default function SideBar() {
  const [scrolled, setScrolled] = useState(false);

  const auth = ["Entrar", "Criar conta"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 h-16
             flex items-centerbg-bg/80 backdrop-blur-md transition-all duration-300 border-b border-bg
                ${scrolled ? "border-b border-border" : ""}
             `}
        >
            <div className="w-full max-w-275 mx-auto px-10 flex items-center justify-between">
                <LogoFull />
                <div className="flex items-center gap-4">
                    {auth.map((element, index) => (
                        <button key={index}
                            className={`py-2 px-6 text-[10px] uppercase tracking-[0.14em]
                            font-medium font-mono cursor-pointer transition-all duration-200
                                ${index === 0
                                    ? `bg-transparent text-text-sub border border-border-md
                                    hover:border-accent hover:text-accent`
                                    : `bg-accent text-bg shadow-[0_4px_20px_rgba(212,168,83,0.2)]
                                        hover:opacity-90`
                                }
                            `}
                            style={{
                                clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)",
                            }}
                        >
                            {element}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
  );
}