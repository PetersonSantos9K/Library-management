"use client";
import BookIcon from "@/components/icon/BookIcon";
import SideBar from "@/components/layout/SideBar";
import SpineIcon from "@/components/icon/SpineIcon";
import { motion} from "motion/react";
import landingPageDate from "@/data/landing-page/landingPageDate";
import { useState } from "react";
import {Feature} from "@/data/landing-page/landingPageDate"

export default function LandingPage() {
    const {features, hero, socialProof} = landingPageDate();



    function CardFeature({element, index}: {element: Feature, index:number}){
      
      return  <article 
                    className="
                      relative overflow-hidden cursor-default 
                      px-6.5 pt-7 pb-8 bg-bg-card border border-border
                    hover:border-border-md transition-all duration-200 "
                    key={index}
                    style={{
                        clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)",
                      }}
                >   
                    <p className="font-mono text-[9px] tracking-[0.16em] uppercase text-text-muted mb-[20px]">{element.num}</p>
                    
                    <div 
                      className="w-12 h-10 flex items-center justify-center mb-[20px]" 
                      style={{
                        clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)",
                        backgroundColor: element.bg,
                      }}>
                      <element.icon color={element.color} size={17} strokeWidth={1.7}/>
                    </div>
                    
                    
                    <h3 className="font-serif text-[22px] font-normal text-text mb-[10px] leading-[1.2]">{element.title}</h3>
                    <p className="text-[13px] font-light text-text-sub leading-[1.7]">{element.desc}</p>
                </article>
    }

  return (
    <section
      id="landing-page"
      className="bg-bg scroll-smooth min-h-screen overflow-hidden"
    >
      <SideBar />
      <section
        className="
                        hero flex flex-col 
                        min-h-screen pt-32 
                        pb-24 px-10 items-center
                        justify-start relative
                        overflow-hidden text-center"
      >
        <div className="hero-grid absolute inset-0 pointer-events-none z-0" />
        <div className="hero-glow absolute z-0" />
        <div className="hero-glow-bottom absolute z-0"></div>

        <div className="relative z-10 max-w-225 w-full flex flex-col items-center gap-6">
          <p
            className="hero-eyebrow uppercase font-mono font-medium text-[10px]
                     text-accent inline-flex items-center gap-2 mb-6 opacity-0"
          >
            Sistema de arquivo pessoal
          </p>

          <h1
            className="font-serif font-light leading-none tracking-[-0.02em] text-text
                        opacity-0 text-[clamp(52px,7vw,88px)] text-center"
          >
            Sua coleção,
            <em className="block text-accent font-light">catalogada.</em>
          </h1>

          <p
            className="hero-sub text-sm text-text-sub leading-7 font-light
                       opacity-0 max-w-140 mx-auto mb-8 font-mono text-center"
          >
            Organize sua biblioteca pessoal com a seriedade que ela merece.
            Cadastre obras, autores e PDFs — e compartilhe com quem quiser.
          </p>
        </div>

        <div className="hero-cta flex items-center justify-center gap-4 mt-2 z-10 relative">
          {hero.map((e, index) => (
            <button
              key={index}
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                animation: "fadeUp 0.7s ease 0.35s both",
              }}
              className={`flex items-center gap-2 py-3 text-xs font-mono uppercase cursor-pointer
                                ${e.variant}
                                ${
                                  e.variant === "primary"
                                    ? `bg-accent relative overflow-hidden
                                        text-bg border-none
                                        shadow-[0_4px_32px_rgba(212,168,83,0.2)]
                                        px-7
                                        transition duration-150
                                        hover:opacity-90
                                        hover:shadow-[0_6px_40px_rgba(212,168,83,0.3)]`
                                    : `bg-transparent text-text-sub
                                        border border-border-md
                                        px-6 tracking-[0.14em]
                                        transition duration-200
                                        hover:border-accent hover:text-accent`
                                }
                            `}
            >
              {index === 0 && <BookIcon className="text-bg" size={15} />}
              {e.label}
            </button>
          ))}
        </div>

        <div className="absolute flex bottom-0  items-center justify-center z-0 w-full ">
          <SpineIcon />
        </div>
      </section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-t border-border border-b  bg-bg-raised py-5 flex items-center justify-center gap-0"
      >
        {socialProof.map((e, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-1 px-10 border-r border-border last:border-r-0"
          >
            <span className="font-serif text-[28px] font-light text-accent leading-none tracking-[0.01em]">
              {e.val}
            </span>
            <span className="font-mono text-[9px] tracking-[0.16em] uppercase text-text-muted">
              {e.label}
            </span>
          </div>
        ))}
      </motion.div>

      <section className="py-25 px-12 max-w-275 mt-0 mx-auto flex flex-col gap-10 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-baseline gap-4 mb-13">
            <p className="font-mono text-[9.5px] tracking-[0.2em] uppercase text-accent">
              Funcionalidades
            </p>
            <span className="block flex-1 h-px bg-border"></span>
            <p className="font-mono text-[9.5px] tracking-widest text-text-muted">
              § 01
            </p>
          </div>

          <div className="max-w-130 mg-[52px]">
            <h2 className="font-serif text-[48px] font-light text-text leading-[1.1] mb-3.5 tracking-[-0.01em]">
              Tudo que uma
              <br />
              <em className="italic text-accent">biblioteca precisa.</em>
            </h2>
            <p className="text-[14px] font-light text-text-sub leading-[1.75]">
              Do cadastro simples à gestão completa de acessos compartilhados —
              o Librarium foi pensado para quem leva a sério o que lê.
            </p>
          </div>
        </motion.div>
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-3 gap-1"
        >
            {features.map((e, i) => (
                <CardFeature key={i} element={e} index={i}/>
            ))}
        </motion.div>
      </section>
    </section>
  );
}
