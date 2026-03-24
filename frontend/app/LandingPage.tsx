'use client'
import BookIcon from "@/components/icon/BookIcon";
import SideBar from "@/components/layout/SideBar";

export default function LandingPage() {

    const roleHero = [
        {
            label: "Criar meu arquivo",
            variant: "primary"
        },
        {
            label: "Saiba mais",
            variant: "ghost"
        }, 
    ];

  return (
    <section
      className="bg-bg scroll-smooth min-h-screen overflow-hidden"
      id="landing-page" 
    >
      <SideBar />
      <section className="flex flex-col min-h-screen  items-center justify-center relative overflow-hidden text-center" id="hero">

        <div id="hero-glow"/>
        <div id="hero-glow-bottom"></div>

        <div className="relative z-1 w-100 md:w-150  items-center justify-center flex flex-col gap-4 ">
            <p className="-tracking-[-3px] uppercase font-mono font-medium text-[10px] pt-10 text-accent inline-flex items-center gap-2 mb-28px opacity-0" id="hero-eyebrow">Sistema de arquivo pessoal</p>

            <h1 className="font-serif font-light leading-none tracking-[-0.02em] text-text mb-6 opacity-0 text-[88px] text-center">Sua colecão, <em className="font-cormorant text-accent font-light block text-center ">catalogada.</em></h1>

            <p className="text-xs text-left w-[70%] text-text-sub leading-5 font-light opacity-0 mx-auto mb-10 font-mono" id="hero-sub">Organize sua biblioteca pessoal com a seriedade que ela merece. Cadastre obras, autores e PDFs — e compartilhe com quem quiser.</p>
        </div>

        <div className="flex items-center justify-center gap-3" id="hero-cta">
            { roleHero.map((elementButtom, index) => (
                    <button 
                        key={elementButtom.variant} 
                        id={"index-"+index}
                        style={{clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)',}}
                        className={`
                            flex items-center gap-2  py-3  text-xs font-mono uppercase cursor-pointer

                        ${elementButtom.variant === "primary"
                            ?`bg-accent relative overflow-hidden
                              text-bg border-none shadow-[0_4px_32px_rgba(212,168,83,0.2)]
                               px-7 hover:opacity-90 shadow-[0_6px_40px rgba(212,168,83,0.3)]` 
                            : 'bg-transparent text-text-sub border border-border-md px-6'}  
                        
                                            ` 
                    }>
                        {index === 0 && <BookIcon className="text-bg" size={15}/> }   
                        {elementButtom.label}
                    </button>
                ))
            }

        </div>

      </section>
    </section>
  )
}
