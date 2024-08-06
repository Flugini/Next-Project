"use client"
import { PropsWithChildren, createContext, useState } from "react";


type Lang = "en" | "de"; //Language

 export const LangContext = createContext<Lang>("en")





const LangWrapper: React.FC<PropsWithChildren> = ({children}) => {
    const[lang, setlang] = useState<Lang>("en")
    return (
        <LangContext.Provider value={lang}>
            <h1>The current language is: {lang}</h1>
            <button onClick={() => setlang("en")}>EN</button>
            <br />
            <button onClick={() => setlang("de")}>DE</button>

            {children}
        </LangContext.Provider> 
        

)
}

export default LangWrapper