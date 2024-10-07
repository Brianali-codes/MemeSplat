import { motion } from "framer-motion"
import logo from './assets/mud.png'
import menu from './assets/menu-burger.png'


export default function Navbar() {

    return (
        <div className="bg-white flex justify-between items-center flex-row p-5">

            <motion.div
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}>
                <img src={logo} alt="" />
            </motion.div>

            <p className="TITLE text-black">

                <motion.span
                    initial={{ opacity: 0, y: 20, }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    T
                </motion.span>
                <motion.span
                    initial={{ opacity: 0, y: 20, }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    h
                </motion.span>
                <motion.span
                    initial={{ opacity: 0, y: 20, }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                >
                    e
                </motion.span>
                <motion.span
                    initial={{ opacity: 0, y: 20, }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1 }}
                >
                    M
                </motion.span>
                <motion.span
                    initial={{ opacity: 0, y: 20, }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.3 }}
                >
                    e
                </motion.span>
                <motion.span
                    initial={{ opacity: 0, y: 20, }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                >
                    m
                </motion.span>
                <motion.span
                    initial={{ opacity: 0, y: 20, }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.7 }}
                >
                    e
                </motion.span>
                <motion.span
                    initial={{ opacity: 0, y: 20, }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.9 }}
                >
                    S
                </motion.span>
                <motion.span
                    initial={{ opacity: 0, y: 20, }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.1 }}
                >
                    p
                </motion.span>
                <motion.span
                    initial={{ opacity: 0, y: 20, }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.4 }}
                >
                    l
                </motion.span>
                <motion.span
                    initial={{ opacity: 0, y: 20, }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.6 }}
                >
                    a
                </motion.span>
                <motion.span
                    initial={{ opacity: 0, y: 20, }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2.8 }}
                >
                    t
                </motion.span>
                <motion.span
                    initial={{ opacity: 0, y: 20, }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 3.0 }}
                >
                    .
                </motion.span>



            </p>

            <motion.div
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, }}
                transition={{ duration: 3.5 }} >
                <img src={menu} alt="" />
            </motion.div>
        </div>
    )



}