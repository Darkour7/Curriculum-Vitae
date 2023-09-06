import { education } from "../data/education"
import EducationElement from "./Education-Element"
import { useMode } from '../../../hooks/ModeProvider'

function Education (){
    const {dark} = useMode()
    return(
        <section className={` text-center font-robotoBold py-[75px] ${dark ? 'bg-black text-white duration-500' :'bg-white duration-500'}`}>
            <h1 className="text-2xl">Education:</h1>
            <div className="grid grid-cols-2 gap-3 px-[450px] pt-[10px]" >
                {
                    education.map((certificate, index)=>{
                        return <EducationElement 
                        first={certificate.principal} 
                        second={certificate.secondary} 
                        key={index} />
                    })
                }
            </div>
        </section>
    )
}

export default Education