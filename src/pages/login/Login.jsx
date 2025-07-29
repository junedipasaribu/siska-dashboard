import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoKF from "../../assets/logo-kimiafarma.png";
import logoBUMN from "../../assets/logo-bumn.png";
import loginBg from "../../assets/siska-main.png";
import logKF from "../../assets/login-bg.png";
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();
    const [username, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);


    const handleLogin = async () => {
        setIsLoading(true);
        setError("");

        // Validasi input
        if (!username || !password) {
            setError("Email and password are required");
            setIsLoading(false);
            return;
        }

        try {
            const response = await axios.post(
                "http://localhost:8081/auth/login",
                { username, password },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log("Response:", response.data); // Debug response

            // data token
            localStorage.setItem("token", response.data.token || response.data.accessToken);
            localStorage.setItem("user", JSON.stringify({
                username: response.data.username,
                role: response.data.role
            }));

            console.log("/Home", response.data);

            navigate("/Home");
        } catch (err) {
            if (err.response) {
                console.error("Server Error:", err.response.data);
                setError(err.response.data.message || "Login failed");
            } else if (err.request) {
                console.error("No response:", err.request);
                setError("Network error. Server not responding.");
            } else {
                console.error("Error:", err.message);
                setError("Failed to send request. Please try again.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-300 px-4">
            <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row max-w-5xl w-full overflow-hidden">
                <div className="md:w-1/2 h-96 md:h-auto">
                    <img
                        src={logoKF}
                        alt="Kimia Farma"
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="md:w-1/2 p-8 md:p-10">
                    <div className="flex justify-center mb-2">
                        <img src={loginBg} alt="Logo" className="h-12" />
                    </div>
                    <h2 className="text-xl font-bold text-center text-gray-700 mb-1">
                        Selamat Datang !
                    </h2>
                    <p className="text-sm text-center text-gray-500 mb-6">
                        Silahkan masuk untuk melanjutkan.
                    </p>

                    <form onSubmit={(e) => {
                        e.preventDefault();
                        handleLogin();
                    }} className="space-y-4">
                        <div>
                            <label className="text-sm font-medium">Email</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>
                        <div>
                            <label className="text-sm font-medium flex justify-between">
                                <span>Password</span>
                                <span className="text-blue-600 text-xs cursor-pointer hover:underline">
                  Lupa Sandi?
                </span>
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
                                required
                            />
                        </div>
                        {error && (
                            <div className="text-red-500 text-sm">{error}</div>
                        )}
                        <button
                            type="submit"
                            className={`w-full bg-blue-900 hover:bg-blue-800 text-white py-2 rounded font-semibold ${
                                isLoading ? "opacity-70 cursor-not-allowed" : ""
                            }`}
                            disabled={isLoading}
                        >
                            {isLoading ? "Processing..." : "Sign In"}
                        </button>
                    </form>

                    <div className="mt-8 flex justify-center gap-4">
                        <img src={logoBUMN} alt="BUMN" className="h-6" />
                        <img src={logKF} alt="Kimia Farma" className="h-8" />
                    </div>

                    <p className="text-center text-xs text-gray-400 mt-6">
                        © 2025 PT. Kimia Farma Apotek
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
