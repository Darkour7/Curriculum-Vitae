import Bubble from "./Bubble"
import Header from "./Header"

// eslint-disable-next-line react/prop-types
function Layout ({ children }){
    return(
        <>
            <Header />
            <main className="bg-gray over" style={{scrollbarGutter: 'stable'}}>
                {children}
            </main>
            <Bubble/>
        </>
    )
}

export default Layout