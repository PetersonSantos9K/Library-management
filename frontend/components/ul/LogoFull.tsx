import Image from "next/image";
import Logo from "../../../public/icon.svg"


export default function LogoFull() {
  return (
    <div className="flex items-center gap-4 cursor-pointer" id="logofull">
      <Image src={Logo} alt={"librarium-logo"} className="h-8 w-auto" priority/>

      <div className="flex flex-col leading-none">

        <span className="font-serif font-semibold uppercase text-text text-lg tracking-widest">
            LIBRAR<span className="text-accent">IUM</span>
        </span>
       
      </div>
    </div>
  );
}
