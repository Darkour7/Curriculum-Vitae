import { skills } from "../data/skills"
import SkillCard from "./Skill-Card"
import { useMode } from '../../../hooks/ModeProvider'

function Skills(){
    const {dark} = useMode()
    return(
        <section className={` text-center font-robotoBold py-[75px] ${dark ? ' bg-black text-white/90 duration-500 ': ' bg-white duration-500 '}`}>
            <h1 className="text-2xl">Skills:</h1>
            <div className="grid grid-cols-3 px-[400px] py-[10px] items-center align-middle">
                {skills.map((skill,index)=>{
                    return <SkillCard img={skill.img} name={skill.technology} key={index}/>
                })}
            </div>
        </section>
    )
}

export default Skills