import { useTheme } from "../../context/ThemeContext";

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
            <nav className="desktopNav w-screen flex justify-between align-middle py-4 px-6 box-border backdrop-blur-md shadow-[0_4px_20px_.05px_var(--color-button-border)]">
                <div className="left flex-4">
                    <ul className="flex gap-12 h-full justify-start items-center">
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
                    <button onClick={toggleTheme}>
                        Theme
                    </button>
                </div>
            </nav>
        </>
    )
}