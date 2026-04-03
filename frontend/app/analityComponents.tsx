export default function analityComponent() {
  return (
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
        <Button
          elements={hero}
          className="flex items-center gap-2 py-3 text-xs font-mono uppercase cursor-pointer"
          sizeIcon={15}
        />
      </div>

      <div className="absolute flex bottom-0  items-center justify-center z-0 w-full ">
        <SpineIcon />
      </div>
    </section>
  );
}
