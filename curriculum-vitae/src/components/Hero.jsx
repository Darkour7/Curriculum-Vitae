import me from '../assets/me.png'

function Hero(){
    return(
        <section className="bg-gradient-to-br relative from-violet from-50% to-lightblue h-[90vh]">
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