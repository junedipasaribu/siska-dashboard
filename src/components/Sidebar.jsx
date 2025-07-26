import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import {
    HiCreditCard,
    HiDocumentText,
    HiIdentification,
    HiCube,
    HiExclamationCircle,
    HiChevronDown,
    HiChevronUp
} from "react-icons/hi";
import { LuLayoutDashboard,LuChevronsLeft, LuChevronsRight, LuChevronsLeftRightEllipsis  } from "react-icons/lu";

const Sidebar = ({ darkMode }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const location = useLocation();

    const menuItems = [
        {
            path: "/Home",
            name: "Dashboard",
            icon: <LuLayoutDashboard />,
            exact: true
        },
        {
            path: "/ticket",
            name: "Ticket",
            icon: <HiCreditCard />,
            submenu: [
                { path: "/Ticket", name: "Proses Ticket"},
                { path: "/AllTicket", name: "All Ticket" }
            ]
        },
        {
            path: "/laporan",
            name: "Laporan",
            icon: <HiDocumentText />,
            submenu: [
                { path: "/Report", name: "Laporan Ticket" },
                { path: "/Analytics", name: "Analytics" }
            ]
        },
        {
            name: "Master Pegawai & Assets",
            icon: <HiIdentification />,
            submenu: [
                { path: "/ListPegawai", name: "List Pegawai" },
                { path: "/ListAsset", name: "List Assets" }
            ]
        },
        {
            path: "/AssetManagement",
            name: "Assets Management",
            icon: <HiCube />
        },
        {
            path: "/Faqs",
            name: "FAQs",
            icon: <HiExclamationCircle />
        }
    ];

    const toggleSubmenu = (index) => {
        setOpenSubmenu(openSubmenu === index ? null : index);
    };

    const isActive = (path, exact = false) => {
        return exact
            ? location.pathname === path
            : location.pathname.startsWith(path);
    };

    return (
        <div className={`${darkMode ? "bg-gray-800 shadow-xl ring-gray-900/5" : "bg-blue-50"} ${
            isOpen ? "w-64" : "w-20"
        } min-h-screen transition-all duration-300 border-r ${
            darkMode ? "border-gray-700" : "border-blue-100"
        }`}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-4 w-full flex ${
                    isOpen ? "justify-end" : "justify-center"
                } ${
                    darkMode
                        ? "text-white hover:bg-gray-700"
                        : "text-blue-800 hover:bg-blue-100"
                } transition-colors`}
            >
                {isOpen ? <LuChevronsLeft /> : <LuChevronsRight />}
            </button>

            <nav className="mt-2">
                {menuItems.map((item, index) => (
                    <div key={item.path || item.name}>
                        {item.submenu ? (
                            <>
                                <button
                                    onClick={() => toggleSubmenu(index)}
                                    className={`flex items-center w-full p-3 mx-2 rounded-lg ${
                                        isOpen ? "px-4" : "px-2 justify-center"
                                    } ${
                                        darkMode
                                            ? "text-gray-300 hover:bg-gray-700"
                                            : "text-blue-800 hover:bg-blue-100"
                                    } transition-colors duration-200 mb-1`}
                                >
                  <span className="text-lg">
                    {item.icon}
                  </span>
                                    {isOpen && (
                                        <>
                      <span className="ml-3 flex-1 text-left">
                        {item.name}
                      </span>
                                            {openSubmenu === index ? (
                                                <HiChevronUp className="ml-2" />
                                            ) : (
                                                <HiChevronDown className="ml-2" />
                                            )}
                                        </>
                                    )}
                                </button>

                                {isOpen && openSubmenu === index && (
                                    <div
                                        className={`ml-6 ${
                                            darkMode ? "bg-gray-700" : "bg-blue-100"
                                        } rounded-lg p-1 mb-1`}
                                    >
                                        {item.submenu.map((subItem) => (
                                            <Link
                                                key={subItem.path}
                                                to={subItem.path}
                                                className={`block p-2 rounded-md ${
                                                    isActive(subItem.path)
                                                        ? darkMode
                                                            ? "bg-gray-600 text-white"
                                                            : "bg-blue-200 text-blue-800"
                                                        : darkMode
                                                            ? "text-gray-300 hover:bg-gray-600"
                                                            : "text-blue-800 hover:bg-blue-200"
                                                } transition-colors duration-200`}
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </>
                        ) : (
                            <Link
                                to={item.path}
                                className={`flex items-center p-3 mx-2 rounded-lg ${
                                    isOpen ? "px-4" : "px-2 justify-center"
                                } ${
                                    isActive(item.path, item.exact)
                                        ? darkMode
                                            ? "bg-blue-600 text-white"
                                            : "bg-blue-500 text-white"
                                        : darkMode
                                            ? "text-gray-300 hover:bg-gray-700"
                                            : "text-blue-800 hover:bg-blue-100"
                                } transition-colors duration-200 mb-1`}
                            >
                <span
                    className={`text-lg ${
                        isActive(item.path, item.exact)
                            ? "text-white"
                            : darkMode
                                ? "text-blue-400"
                                : "text-blue-600"
                    }`}
                >
                  {item.icon}
                </span>
                                {isOpen && <span className="ml-3">{item.name}</span>}
                            </Link>
                        )}
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default Sidebar;