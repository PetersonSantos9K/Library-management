import Image from "next/image";
import Logo from "../../public/icon.svg"
import LogoName from "./LogoName";


export default function LogoFull() {
  return (
    <div className="flex items-center gap-4 cursor-pointer" id="logofull">
      <Image src={Logo} alt={"librarium-logo"} className="h-8 w-auto" priority/>

      <div className="flex flex-col leading-none">

       <LogoName className="text-lg"/>
      </div>
    </div>
  );
}
