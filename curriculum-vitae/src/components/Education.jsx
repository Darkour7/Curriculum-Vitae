import { education } from "../data/education"
import EducationElement from "./Education-Element"

function Education (){
    return(
        <section className="bg-white text-center font-robotoBold py-[75px]">
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