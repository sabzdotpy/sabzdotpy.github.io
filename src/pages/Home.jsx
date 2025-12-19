import { Helmet } from 'react-helmet';

import Nav from '../components/Nav';
import TwoPaneContaier from '../views/SelfTwoSectionLayout/TwoPaneContainer';
import { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';


 const colors = [
            { primary: "#e856e8", hover: "#ff7dff", theme: "dark" },
            { primary: "#00ffff", hover: "#00e6e6", theme: "dark" },
            { primary: "#e8e854", hover: "#ffff91", theme: "dark" },
            { primary: "#ff8364", hover: "#f25e53", theme: "dark" },
            { primary: "#d2a1f5", hover: "#c588f2", theme: "dark" },
            { primary: "#7be57b", hover: "#78ff78", theme: "dark" },

            { primary: "#0b7373", hover: "#2c9494", theme: "light" },
            { primary: "#99341b", hover: "#f25e53", theme: "light" },
            { primary: "#922295", hover: "#6c5dff", theme: "light" },
            { primary: "#384e6c", hover: "#476895", theme: "light" },
        ];

export default function Home() {
    const { theme } = useTheme();

    const [colorComb, setColorComb] = useState();

    const chooseRandomColor = () => {
        const filteredColors = colors.filter(color => color.theme === theme);
        let chosen = filteredColors[Math.floor(Math.random() * filteredColors.length)];
        setColorComb({...chosen});
    }

    useEffect(() => {
        if (theme) {
            chooseRandomColor();
            return;
        }
    }, []);

    useEffect(() => {
        chooseRandomColor();
    }, [theme]);

    return (
        <div style={{"--color-primary": colorComb?.primary, "--color-primary-hover": colorComb?.hover}} >
            <Helmet>
                <title>Sabari S // Personal Portfolio</title>
                <meta name="description" content="Welcome to Sabari S's personal portfolio website. Explore projects, skills, and get in touch!" />
            </Helmet>
            <Nav />
            <TwoPaneContaier />
        </div>
    )
}