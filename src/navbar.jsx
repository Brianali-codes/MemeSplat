import { motion } from "framer-motion";
import logo from './assets/mud.png';
import { ToggleSwitch } from "flowbite-react";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [switch1, setSwitch1] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setSwitch1(true);  // Set the toggle state to true if dark mode
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleDarkMode = () => {
        const html = document.documentElement;
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
    };

    const handleToggleChange = () => {
        setSwitch1(!switch1);  // Update the toggle state
        toggleDarkMode();      // Call the toggle dark mode function
    };

    return (
        <div className="NVB bg-white dark:bg-black flex justify-between items-center flex-row p-5">

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}>
                <img src={logo} alt="Logo" />
            </motion.div>

            <p className="TITLE text-black dark:text-white">
                {["T", "h", "e", "M", "e", "m", "e", "S", "p", "l", "a", "t", "."].map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 + index * 0.2 }}
                    >
                        {char}
                    </motion.span>
                ))}
            </p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3.5 }}>
                <ToggleSwitch checked={switch1} onChange={handleToggleChange} />
            </motion.div>
        </div>
    );
}
