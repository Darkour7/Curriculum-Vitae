import { skills } from "../data/skills"
import SkillCard from "./Skill-Card"
function Skills(){
    return(
        <section className="bg-white text-center font-robotoBold py-[75px]">
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