import git from '../assets/github.svg'

function Header() {
    return (
        <header className="bg-violet grid text-white h-[10vh]">
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
                            <a href="https://github.com/Darkour7" className="w-full" target="_blank" rel="noreferrer">
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