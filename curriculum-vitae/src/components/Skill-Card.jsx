// eslint-disable-next-line react/prop-types
function SkillCard ({ img, name }){
    return(
        <div className="w-fit m-auto p-10 hover:scale-[1.1] duration-300 rounded-xl hover:text-white hover:bg-gradient-to-br relative from-violet from-50% to-lightblue">
            <div>
                <img src={img} className="h-[100px] w-[100px]"/>
            </div>
            <div className="pt-[10px]">
                <h1>{name}</h1>
            </div>
        </div>
    )
}

export default SkillCard