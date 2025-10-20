

import { useTheme } from '../context/ThemeContext';

export default function Home() {
    const { theme, toggleTheme } = useTheme();

    return (
        <>
        <div className='text-3xl font-bold underline'>
        Hey bud
        </div>
            <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'dark' : 'light'} mode
            </button>
        </>
    )
}