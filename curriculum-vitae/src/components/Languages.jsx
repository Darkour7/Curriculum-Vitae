import es from '../assets/languages/es.png'
import en from '../assets/languages/en.png'

function Languages(){
    return(
        <section className="bg-white text-center font-robotoBold py-[75px] ">
            <h1 className="text-2xl">Comunication:</h1>
            <div className="grid grid-cols-2 text-xl px-[15%] py-[10px]">
                <div className=" items-center p-4 w-1/4 mx-auto hover:scale-[1.1] duration-300 rounded-xl hover:text-white hover:bg-gradient-to-br relative from-violet from-50% to-lightblue" >
                    <img src = {es} className="h-[100px] w-full"/>
                    <h2>Spanish</h2>
                </div>
                <div className=" items-center p-4 w-1/4 mx-auto hover:scale-[1.1] duration-300 rounded-xl hover:text-white hover:bg-gradient-to-br relative from-violet from-50% to-lightblue">
                    <img src = {en} className="h-[100px]"/>
                    <h2>English</h2>
                </div>
            </div>
        </section>
    )
}

export default Languages