import { Link } from "react-router-dom";
import TrendChart from "../../pages/dashboard/TrendChart.jsx";
import {
    CheckCircleIcon,
    ChatBubbleBottomCenterTextIcon,
    MinusCircleIcon,
    TicketIcon,
    ArrowTopRightOnSquareIcon,
    XCircleIcon,
} from "@heroicons/react/24/solid";

const StatusCard = ({ title, value, icon, iconBg }) => (
    <div className="flex items-center justify-between p-4 bg-white rounded shadow-md">
        <div>
            <h4 className="text-xl font-semibold text-gray-700">{value}</h4>
            <p className="text-sm text-gray-500">{title}</p>
        </div>
        <div className={`p-2 rounded ${iconBg}`}>{icon}</div>
    </div>
);

const Home = () => {
    const dummyTickets = [
        { id: 1, judul: "Tiket: Tidak Bisa Login", status: "Pending" },
        { id: 2, judul: "Tiket: Aplikasi Error", status: "Resolved" },
        { id: 3, judul: "Tiket: Data Tidak terbentuk", status: "Reject" },
        { id: 4, judul: "Tiket: Mutasi User", status: "In Progress" },
        { id: 5, judul: "Tiket: Salah Faktor Jual", status: "Approval SU" },
    ];

    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
            <h2 className="text-2xl mb-4">Dashboard Superuser</h2>

            {/* Status Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <StatusCard
                    title="Total Tiket"
                    value="159"
                    icon={<TicketIcon className="w-6 h-6 text-yellow-500" />}
                    iconBg="bg-yellow-100"
                />
                <StatusCard
                    title="Persetujuan SU"
                    value="6"
                    icon={<CheckCircleIcon className="w-6 h-6 text-yellow-500" />}
                    iconBg="bg-yellow-100"
                />
                <StatusCard
                    title="Pending Tiket"
                    value="1"
                    icon={<MinusCircleIcon className="w-6 h-6 text-red-500" />}
                    iconBg="bg-red-100"
                />
                <StatusCard
                    title="Dalam Proses"
                    value="6"
                    icon={<ChatBubbleBottomCenterTextIcon className="w-6 h-6 text-indigo-500" />}
                    iconBg="bg-indigo-100"
                />
                <StatusCard
                    title="Terselesaikan"
                    value="2"
                    icon={<ArrowTopRightOnSquareIcon className="w-6 h-6 text-blue-500" />}
                    iconBg="bg-blue-100"
                />
                <StatusCard
                    title="Selesai"
                    value="142"
                    icon={<CheckCircleIcon className="w-6 h-6 text-emerald-500" />}
                    iconBg="bg-emerald-100"
                />
                <StatusCard
                    title="Selesai SU"
                    value="1"
                    icon={<CheckCircleIcon className="w-6 h-6 text-emerald-500" />}
                    iconBg="bg-emerald-100"
                />
                <StatusCard
                    title="Dikembalikan"
                    value="1"
                    icon={<XCircleIcon className="w-6 h-6 text-red-500" />}
                    iconBg="bg-red-100"
                />
            </div>

            {/* List Tiket */}
            <div className="flex justify-between items-center mb-4 p-6 bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
                <h3 className="text-xl font-semibold">Daftar Tiket</h3>
                <Link to="/ticket/CreateTicket" className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">
                    + Tambah Tiket
                </Link>
            </div>

            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5 mb-5">
                {dummyTickets.map((ticket) => (
                    <Link to={`/tiket/detail/${ticket.id}`} key={ticket.id} className="block p-3 border-b hover:bg-gray-100">
                        <div className="flex justify-between">
                            <span className="text-gray-500">{ticket.judul}</span>
                            <span className="text-sm text-gray-500">{ticket.status}</span>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
                <TrendChart />
            </div>
        </div>
    );
};

export default Home;
