import git from '../../assets/github.svg'

// eslint-disable-next-line react/prop-types
function Header({ dark , toggled}) {
    return (
        <header className={` grid  h-[10vh] ${dark ? ' duration-500  bg-black text-white ' :  ' duration-500 text-white bg-violet '} `}>
            <nav className="flex items-center justify-between  px-[80px] ">
                <div className="font-robotoBold text-3xl ">
                    <span>Curriculum Vitae</span>
                </div>
                <div className="font-robotoRegular w-[20%] ">
                    <ul className="flex items-center justify-between text-xl">
                        <li className="cursor-pointer hover:bg-white hover:text-violet hover:scale-110 duration-300 p-2 rounded-xl">
                            <a href="#" className="w-full">
                                About
                            </a>
                        </li>
                        <li className="cursor-pointer hover:bg-white hover:text-violet hover:scale-110 duration-300 p-2 rounded-xl">
                            <a href="#" className="w-full">
                                Contact
                            </a>
                        </li>
                        <li className="cursor-pointer hover:bg-white hover:text-violet hover:scale-110 duration-300 p-2 rounded-full">
                            <a href="https://github.com/Darkour7" className="w-full " target="_blank" rel="noreferrer">
                                <img src={git} className='w-[50px]' />
                            </a>
                        </li>
                        <li className="cursor-pointer hover:bg-white hover:text-violet hover:scale-110 duration-300 p-2 rounded-full">
                            <button
                            onClick={()=>toggled()}
                            >Dark</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header