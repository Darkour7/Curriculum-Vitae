import { createContext, useState , useContext} from "react";

export const ModeContext= createContext(null)

// eslint-disable-next-line react/prop-types
export const ModeProvider = ({children}) =>{
    const [dark, setDark] = useState('dark')
    const toggleDarkMode = ()=>{
        setDark(!dark)
      }
    return(
        <ModeContext.Provider value={{dark, toggleDarkMode}}>
            {children}
        </ModeContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useMode=()=>{
    return useContext(ModeContext)
}