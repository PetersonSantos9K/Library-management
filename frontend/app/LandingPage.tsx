"use client";
import BookIcon from "@/components/icon/BookIcon";
import SideBar from "@/components/layout/SideBar";
import SpineIcon from "@/components/icon/SpineIcon";

export default function LandingPage() {
  const roleHero = [
    {
      label: "Criar meu arquivo",
      variant: "primary",
    },
    {
      label: "Ver o sistema",
      variant: "ghost",
    },
  ];

    return (
        <section
            id="landing-page"
            className="bg-bg scroll-smooth min-h-screen overflow-hidden"
        >
            <SideBar />
            <section className="
                        hero flex flex-col 
                        min-h-screen pt-32 
                        pb-24 px-10 items-center
                        justify-start relative
                        overflow-hidden text-center"
            >
                <div className="hero-grid absolute inset-0 pointer-events-none z-0"/>
                <div className="hero-glow absolute z-0" />
                <div className="hero-glow-bottom absolute z-0"></div>

                <div className="relative z-10 max-w-225 w-full flex flex-col items-center gap-6">
                    <p className="hero-eyebrow uppercase font-mono font-medium text-[10px]
                     text-accent inline-flex items-center gap-2 mb-6 opacity-0"
                    >
                        Sistema de arquivo pessoal
                    </p>

                    <h1 className="font-serif font-light leading-none tracking-[-0.02em] text-text
                        opacity-0 text-[clamp(52px,7vw,88px)] text-center"
                    >
                        Sua coleção,
                        <em className="block text-accent font-light">catalogada.</em>
                    </h1>

                    <p className="hero-sub text-sm text-text-sub leading-7 font-light
                       opacity-0 max-w-140 mx-auto mb-8 font-mono text-center"
                    >
                        Organize sua biblioteca pessoal com a seriedade que ela merece.
                        Cadastre obras, autores e PDFs — e compartilhe com quem quiser.
                    </p>
                </div>

                <div className="hero-cta flex items-center justify-center gap-4 mt-2 z-10 relative">
                    {roleHero.map((e, index) => (
                        <button key={index}
                            style={{
                                clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                                animation: "fadeUp 0.7s ease 0.35s both",
                            }}
                            className={`flex items-center gap-2 py-3 text-xs font-mono uppercase cursor-pointer
                                ${e.variant}
                                ${e.variant === "primary"
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

                <div
                    className="absolute flex bottom-0  items-center justify-center z-0 w-full "
                >   
                    <SpineIcon/>
                </div>
            </section>
        </section>
  );
}
