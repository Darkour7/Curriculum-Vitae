/* eslint-disable react/no-unescaped-entities */
import me from '../assets/me.png'

// eslint-disable-next-line react/prop-types
function Hero({dark}){
    return(
        <section className={`h-[90vh]  relative ${dark ? ' bg-gradient-to-br from-black from-50% to-violet duration-1000 ' : '  bg-gradient-to-br  from-violet from-50% to-lightblue duration-1000 '}  `} >
            <div className="text-white text-5xl font-robotoBold leading-loose absolute top-[40%] translate-y-[-50%] left-[10%] animate-fade-in-up">
                <h1> Hi, my name is </h1>
                <h1> Pablo Maguiña Apaza !</h1>
                <h2 className="text-2xl"> I'm 21 and soon will be an Informatics Engineer </h2>
            </div>
            <div className="absolute right-[15%] opacity-[0.8] rounded-xl overflow-hidden rotate-[5deg] top-[40%] translate-y-[-50%] animate-fade-in-up">
                <img src={me} className='h-[500px] w-[500px] '/>
            </div>
        </section>
    )
}

export default Hero