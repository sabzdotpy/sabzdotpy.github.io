import { useTheme } from "../../context/ThemeContext";

import light from "../../assets/light.png";
import dark from "../../assets/dark.png";

import CLink from "../CLink";

export default function Nav() {

    const { theme, toggleTheme } = useTheme();

    const navLinks = {
        home: "/",
        freelance: "/freelance",
        contact: "/contact"
    }
    

    return (
        <>
            <nav className="desktopNav fixed top-0 z-10 w-screen flex justify-between align-middle py-4 px-6 box-border backdrop-blur-md shadow-[0_4px_20px_.05px_var(--color-button-border)]">
                <div className="left flex-4">
                    <ul className="flex gap-6 h-full justify-start items-center">
                        {
                            Object.entries(navLinks).map(([name, path]) => (
                                <li key={name} className="navLink list-none text-md font-normal hover:font-medium underline-offset-8 decoration-2 decoration-[var(--color-accent)]">
                                    <CLink to={path}  >{name.charAt(0).toUpperCase() + name.slice(1)}</CLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="right flex flex-2 justify-end">
                    <div className="themeToggle w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:scale-105 transition-transform" onClick={toggleTheme} >
                        <img className="w-full h-full object-contain" src={theme === "light" ? dark : light} alt={(theme == "light") ? "take me back to the dark side" : "i love the light"} />
                    </div>
                </div>
            </nav>
        </>
    )
}