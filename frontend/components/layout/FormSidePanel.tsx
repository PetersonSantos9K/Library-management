import Login from "@/app/login/Login";
import Cadastro from "@/app/cadastro/Cadastro";

export default function FormSidePanel(){


    return (

        <div className="flex flex-col justify-between bg-[linear-gradient(160deg,#1A1917_0%,#2D2B27_50%,#1F2B5A_100%)] p-10">
            
            <div className="flex text-white gap-2 items-cente">
                <p className="p-1 pr-1.5 pb-0.5 bg-[#363532] rounded-md">📚</p>
                <h2 className="">Livraria</h2>
            </div>


            <div className="text-white  w-2/3 flex flex-col gap-2">
                <h2 className="text-2xl font-bold">Sua biblioteca digital,<br/> organizada com elegância.</h2>

                <p className="text-xs text-[#B3B4BB] font-light">Cadastre autores, organize livros, anexe PDFs e compartilhe seu acervo com quem você quiser.</p>

                <span className="flex gap-1 mt-6">
                    <span className="bg-[#3B5ADB] w-3.5 h-1 rounded-2xl block "></span>
                    <span className="bg-[#595F77] w-1 h-1 rounded-2xl block "></span>
                    <span className="bg-[#595F77] w-1 h-1 rounded-2xl block "></span>
                </span>
            </div>


        </div>

    )

}