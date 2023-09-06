// eslint-disable-next-line react/prop-types
function EducationElement ({first, second}){
    return (
        <div className = " bg-violet p-10 text-white w-full mx-auto rounded-xl">
            <h2 className = "font-robotoBold">
                {first}
            </h2>
            <h3 className = "font-robotoRegular">
                {second}
            </h3>
        </div>
    )
}

export default EducationElement