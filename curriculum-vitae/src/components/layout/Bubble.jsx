import moon  from '../../assets/moon.svg'
import sun from '../../assets/sun.svg'
import { useMode } from '../../hooks/ModeProvider'

// eslint-disable-next-line react/prop-types
function Bubble (){
    const {dark, toggleDarkMode} = useMode()
    return (
        <div 
        onClick={()=>toggleDarkMode()}
        className={`h-[75px] w-[75px] cursor-pointer rounded-full flex  fixed z-[50] right-[5%] bottom-[5%] shadow-xl p-2 hover:scale-110 hover:animate-bounce
        ${dark ? 'shadow-white drop-shadow-lg bg-gradient-to-bl  from-white to-lightblue duration-500':'shadow-black drop-shadow-lg bg-gradient-to-bl from-black to-violet duration-500'}  `}>
            {
                dark ? <img src={sun}/>
                :<img src={moon}/>
            }
        </div>
    )
}

export default Bubble