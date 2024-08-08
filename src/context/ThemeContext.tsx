import { createContext, useState, ReactNode } from "react";

// Definir a interface para o contexto de tema
interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggleTheme: () => {}, 
});

export const ThemeProvider = ({children}: {children: ReactNode}) => {
    const [ theme, setTheme ] = useState("light");
    
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
