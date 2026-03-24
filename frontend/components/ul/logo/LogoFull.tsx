import { LogoIcon } from "@/components/icon/LogoIcon";

export default function LogoFull() {
  return (
    <div className="flex gap-3 items-center" id="logofull">

      <LogoIcon dark={true}/>

      <div className="flex flex-col gap-1 " id="logo_full_">
        <span className="font-serif font-semibold uppercase text-text text-xl tracking-[0.12em] leading-none">
            LIBRAR<span className="text-accent font-serif">IUM</span>
        </span>
        <span className="text-text-logo text-[10px] font-medium tracking-[0.22em] leading-none uppercase">
            Arquivo Pessoal
        </span>

      </div>
    </div>
  );
}
