import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/dashboard/Home.jsx";
import Ticket from "./pages/ticket/Ticket.jsx";
import Settings from "./pages/Settings";
import Allticket from "./pages/Allticket.jsx";
import {HiFastForward} from "react-icons/hi";
import Report from "./pages/Report.jsx";
import Analytics from "./pages/Analytics.jsx";
import ListPegawai from "./pages/ListPegawai.jsx";
import AssetManagement from "./pages/AssetManagement.jsx";
import Faqs from "./pages/Faqs.jsx";
import ListAsset from "./pages/ListAsset.jsx";
import CreateTicket from "./pages/ticket/CreateTicket.jsx";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    return (
            <Router>
                <div className={`min-h-screen bg-gradient-to-br ${darkMode ? "dark from-gray-800 to-gray-900" : "from-blue-50 to-gray-100"}`}>
                    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                    <div className="flex flex-1 min-h-[calc(100vh-64px)]">
                        <Sidebar darkMode={darkMode} />
                        <main className="flex-1 p-8 bg-gray-100 dark:bg-gray-800 dark:text-white overflow-auto">
                            <Routes>
                                <Route path="/Home" element={<Home />} />
                                <Route path="/Ticket" element={<Ticket />} />
                                <Route path="/ticket/CreateTicket" element={<CreateTicket />} />
                                <Route path="/Allticket" element={<Allticket />} />
                                <Route path="/Report" element={<Report />} />
                                <Route path="/Analytics" element={<Analytics />} />
                                <Route path="/ListPegawai" element={<ListPegawai />} />
                                <Route path="/AssetManagement" element={<AssetManagement />} />
                                <Route path="/ListAsset" element={<ListAsset />} />
                                <Route path="/Faqs" element={<Faqs />} />

                            </Routes>
                        </main>
                    </div>
                </div>
            </Router>

    );
}

export default App;