import { HiMenuAlt2 } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

import ThemeButton from "./ThemeButton";

const NavBar = () => {
    return (
        <div className="fixed top-0 w-full shadow-sm z-50 bg-white dark:bg-black text-black dark:text-white">
            <header className="flex items-center justify-between px-4 py-3 lg:py-5">
                <div className="flex items-center space-x-4">
                    <button className="cursor-pointer">
                        <HiMenuAlt2 size={30} />
                    </button>
                    <nav className="hidden md:flex space-x-8 z-10">
                        <a
                            href="#"
                            className="cursor-pointer hover:text-gray-300 dark:hover:text-gray-300 inline-block py-1"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            className="cursor-pointer hover:text-gray-300 dark:hover:text-gray-300 inline-block py-1"
                        >
                            Collections
                        </a>
                        <a
                            href="#"
                            className="cursor-pointer hover:text-gray-300 dark:hover:text-gray-300 inline-block py-1"
                        >
                            New
                        </a>
                    </nav>
                </div>
                <div className="flex justify-center">
                    <ThemeButton />
                </div>
                <div className="flex items-center space-x-4">
                    <button className="p-2 border-2 border-gray-500 dark:border-gray-700 rounded-full hover:border-gray-300 dark:hover:border-gray-300">
                        <FaHeart size={20} />
                    </button>
                    <button className="p-2 border-2 border-gray-500 dark:border-gray-700 rounded-full hover:border-gray-300 dark:hover:border-gray-300">
                        <IoCart size={20} />
                    </button>
                    <button className="p-2 border-2 border-gray-500 dark:border-gray-700 rounded-full hover:border-gray-300 dark:hover:border-gray-300">
                        <FaUser size={20} />
                    </button>
                </div>
            </header>
        </div>
    );
};

export default NavBar;
