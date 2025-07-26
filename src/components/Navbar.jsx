import { Link, useLocation } from "react-router-dom";
import { HiMoon, HiSun, HiBell, HiViewGrid, HiArrowsExpand } from "react-icons/hi";
import LogoSiskaPutih from "../assets/siska-main-putih.png";
import LogoSiskaGelap from "../assets/siska-main.png";


const Navbar = ({ isDarkMode, darkMode, setDarkMode }) => {
    const location = useLocation();

    const navItems = [
        { path: "/notifications", name: "Notifications", icon: <HiBell className="text-xl" /> },
        { path: "/apps", name: "Apps", icon: <HiViewGrid className="text-xl" /> },
        { path: "/expand", name: "Expand", icon: <HiArrowsExpand className="text-xl" /> },
    ];

    return (
        <nav className={`${darkMode ? "bg-gray-800 border-b border-gray-700" : "bg-white border-b border-gray-200"} shadow-sm`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Left section - Logo */}
                    <div className="flex-shrink-0 flex">
                        <Link to="/" className="flex" style={{ marginLeft: '-100px' }}>
                            <img
                                src={isDarkMode ? LogoSiskaPutih : LogoSiskaGelap}
                                alt="Logo"
                                className="h-12 w-auto"
                            />
                        </Link>
                    </div>
                    <div className="hidden md:block">
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="hidden md:flex items-center space-x-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`p-2 rounded-md ${darkMode ? "text-gray-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"} ${
                                        location.pathname === item.path ? (darkMode ? "bg-gray-700" : "bg-gray-200") : ""
                                    } transition-colors duration-200`}
                                    title={item.name}
                                >
                                    {item.icon}
                                </Link>
                            ))}
                        </div>

                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`p-2 rounded-full focus:outline-none ${darkMode ? "text-yellow-300 hover:bg-gray-700" : "text-gray-600 hover:bg-gray-100"} transition-colors`}
                            title={darkMode ? "Light mode" : "Dark mode"}
                        >
                            {darkMode ? <HiSun className="text-xl" /> : <HiMoon className="text-xl" />}
                        </button>

                        {/* Mobile menu button (optional) */}
                        <button className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;