import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider=({children})=>{
    const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")));
    const theSetter={
        backgroundColor: theme? "white": "#070214",
        color: theme ? "black": "white"
    }

    const changeTheme =()=>{
        setTheme(!theme);
    }
    useEffect(()=>{
        localStorage.setItem("theme", theme)
    }, [theme])
        return (
            <ThemeContext.Provider value={{theme, theSetter, changeTheme}}>
                {children}
            </ThemeContext.Provider>
        )
}

// export const ContextTheme =()=> useContext(ThemeContext)