import FormSidePanel from "@/components/layout/FormSidePanel";
import Cadastro from "./Cadastro";
import LayoutFormSidePanel from "@/components/layout/LayoutFormSidePanel";
export default function page(){
    return (
       <LayoutFormSidePanel>
         <Cadastro/>
       </LayoutFormSidePanel>
    )
}