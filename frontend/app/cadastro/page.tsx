import FormSidePanel from "@/components/layout/FormSidePanel";
import Cadastro from "./Cadastro";
export default function page(){
    return (
        <div className="flex items-center justify-center h-screen w-scren">

            <div className="flex bg-amber-100  rounded-md h-100">
                <FormSidePanel/>
                <Cadastro/>
            </div>
        
        </div>
    )
}