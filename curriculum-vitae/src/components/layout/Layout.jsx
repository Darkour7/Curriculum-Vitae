import Header from "./Header"

// eslint-disable-next-line react/prop-types
function Layout ({ children, dark , toggled}){
    return(
        <>
            <Header dark={dark} toggled={toggled}/>
            <main>
                {children}
            </main>
        </>
    )
}

export default Layout