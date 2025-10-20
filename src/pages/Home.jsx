import Nav from '../components/Nav';

import { useTheme } from '../context/ThemeContext';

export default function Home() {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
        <Nav />
        </>
    )
}