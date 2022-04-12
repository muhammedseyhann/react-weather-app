import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const lightTheme = {
        "background-image":
            'url("https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80")',
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "background-position": "center",
        transition: "0.5 all ease",
        color: "var(--bs-dark)",
    };

    const darkTheme = {
        "background-image":
            'url("https://images.unsplash.com/photo-1509226704106-8a5a71ffbfa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")',
        "background-repeat": "no-repeat",
        "background-size": "cover",
        "background-position": "center",
        transition: "0.5 all ease",
        color: "var(--bs-light)",
    };

    const [theme, setTheme] = useState({
        name: "light",
        color: lightTheme,
    });

    const preferTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
    if (!localStorage.theme) {
        preferTheme
            ? localStorage.setItem("theme", "dark")
            : localStorage.setItem("theme", "light");
    }

    useEffect(() => {
        if (localStorage.getItem("theme") === "dark") {
            setTheme({ name: "dark", color: darkTheme });
        } else {
            setTheme({ name: "light", color: lightTheme });
        }
    }, []);

    const body = document.body.style;
    const keys = Object.keys(theme.color);
    keys.map((key) => body.setProperty(key, theme.color[key]));

    const values = { theme, setTheme, lightTheme, darkTheme };

    return (
        <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
    );
};
const useTheme = () => useContext(ThemeContext);
export { useTheme, ThemeProvider };
