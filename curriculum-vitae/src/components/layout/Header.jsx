import { NavLink } from 'react-router-dom'
import git from '../../assets/github.svg'
import { useMode } from '../../hooks/ModeProvider'

function Header() {
    const {dark} = useMode()
    return (
        <header className={` grid  h-[10vh] ${dark ? ' duration-500  bg-black text-white ' :  ' duration-500 text-white bg-violet '} `}>
            <nav className="flex items-center justify-between  px-[80px] ">
                <div className="font-robotoBold text-3xl ">
                    <span ><NavLink to="/">Curriculum Vitae</NavLink></span>
                </div>
                <div className="font-robotoRegular w-[20%] ">
                    <ul className="flex items-center justify-between text-xl">
                        <li className="cursor-pointer hover:bg-white hover:text-violet hover:scale-110 duration-300 p-2 rounded-xl">
                            <NavLink to="/about" className="w-full">
                                About
                            </NavLink>
                        </li>
                        <li className="cursor-pointer hover:bg-white hover:text-violet hover:scale-110 duration-300 p-2 rounded-xl">
                            <a href="#" className="w-full">
                                Contact
                            </a>
                        </li>
                        <li className={`cursor-pointer p-2 rounded-full ${dark ? 'bg-white hover:bg-violet/100 hover:text-white hover:scale-110 duration-300':'hover:bg-white hover:text-violet hover:scale-110 duration-300'}  `}>
                            <a href="https://github.com/Darkour7" className="w-full " target="_blank" rel="noreferrer">
                                <img src={git} className='w-[50px]' />
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header