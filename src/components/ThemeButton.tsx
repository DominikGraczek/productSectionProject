import { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";

const ThemeButton = () => {
    const [theme, setTheme] = useState<string>("light");
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);
    const handleSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
    return (
        <button onClick={() => handleSwitch()}>
            <FaMoon size={25} />
        </button>
    );
};

export default ThemeButton;
