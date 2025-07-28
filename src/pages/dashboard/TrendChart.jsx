// src/components/TrendChart.jsx
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Dot
} from "recharts";

const data = [
    { month: "2024-03", total: 5 },
    { month: "2024-04", total: 2 },
    { month: "2024-05", total: 11 },
    { month: "2024-06", total: 13 },
    { month: "2024-07", total: 23 },
    { month: "2024-08", total: 12 },
    { month: "2024-09", total: 5 },
    { month: "2024-10", total: 6 },
    { month: "2024-11", total: 6 },
    { month: "2024-12", total: 20 },
    { month: "2025-01", total: 9 },
    { month: "2025-02", total: 4 },
    { month: "2025-03", total: 28 },
    { month: "2025-04", total: 2 },
    { month: "2025-05", total: 13 },
    { month: "2025-06", total: 3 }
];

const TrendChart = () => {
    return (
        <div className="bg-white rounded-lg shadow p-4 flex flex-col lg:flex-row gap-4">
            {/* Grafik */}
            <div className="w-full lg:w-3/4">
                <h2 className="text-lg font-semibold mb-2">Grafik Tiket PerBulan</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line
                            type="monotone"
                            dataKey="total"
                            stroke="#1e40af"
                            strokeWidth={2}
                            activeDot={{ r: 8 }}
                            dot={({ cx, cy, payload }) => (
                                <Dot cx={cx} cy={cy} r={5} fill={
                                    payload.total >= 20 ? '#ef4444' : payload.total >= 10 ? '#f59e0b' : '#10b981'
                                } />
                            )}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Info Panel */}
            <div className="w-full lg:w-1/4 border-l border-gray-200 pl-4">
                <h3 className="text-md font-bold mb-2">🎯 Trend Tiket</h3>
                <p className="text-sm mb-2 text-gray-600">
                    Seluruh tiket yang telah dibuat akan terus bergerak sesuai dengan kebutuhan masing-masing apotek dan kasus yang terjadi.
                </p>

                <div className="text-2xl font-bold text-blue-900 mb-4">
                    🎟️ 159 TICKETS
                </div>

                <div className="flex flex-col gap-2">
                    <div className="border rounded p-2">
                        <p className="text-sm font-semibold text-red-600">System Error</p>
                        <p className="text-lg font-bold text-gray-800">82.39%</p>
                    </div>
                    <div className="border rounded p-2">
                        <p className="text-sm font-semibold text-yellow-600">Human Error</p>
                        <p className="text-lg font-bold text-gray-800">7.04%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendChart;
