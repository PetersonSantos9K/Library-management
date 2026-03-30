import BookIcon from "../icon/BookIcon"
import RightArrowIcon from "../icon/RightArrowIcon"

export default function ButtonAuth({className = "", buttonOne, buttonTwe}: {className: string, buttonOne: string, buttonTwe: string}){

    const animation = { 
        clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
        animation: "fadeUp 0.7s ease 0.35s both"
    }

    const standardDesign = "flex items-center gap-2 py-3 text-xs font-mono uppercase cursor-pointer"

    return ( 
        <div className={className}>
            <button 
                key={buttonOne} 
                style={animation}
                className={`
                    ${standardDesign}
                    bg-accent relative overflow-hidden
                    text-bg border-none
                    shadow-[0_4px_32px_rgba(212,168,83,0.2)]
                    px-7 transition-all duration-200
                    hover:bg-accent-hover 
                `}
            >
                <BookIcon size={15}/>
                {buttonOne}
            </button>
            <button 
                key={buttonTwe} 
                style={animation}
                className={`
                    ${standardDesign}
                    bg-transparent text-text-sub
                    border border-border-md
                    px-6 tracking-[0.14em]
                    transition duration-200
                  hover:border-accent hover:text-accent        
                `}
            > 
                {buttonTwe}
                <RightArrowIcon size={15}/>
            </button>
        </div>
    )
}