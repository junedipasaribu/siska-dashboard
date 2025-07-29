import React from "react";
import TiketFilterCards from "./TiketFilterCards.jsx"
import { useState } from "react";
import {Link} from "react-router-dom";

const dataTiket = [
    {
        no: "KFA/3128/A200/0000028704",
        status: "REJECT",
        statusColor: "bg-red-500",
        lastStatus: "Unit Information Technology",
        konfirmasi: "",
        bm: "UNIT BISNIS GORONTALO",
        outlet: "KF-BM GORONTALO",
        kategori: "Application",
        rangkuman: "Perubahan Jam Operasional Apotek"
    },
    {
        no: "KFA/3128/A200/0000035007",
        status: "RESOLVED",
        statusColor: "bg-blue-500",
        lastStatus: "Unit Information Technology",
        konfirmasi: "",
        bm: "UNIT BISNIS GORONTALO",
        outlet: "KF-BM GORONTALO",
        kategori: "Application",
        rangkuman: "Perubahan Jam Operasional Apotek"
    },
    {
        no: "KFA/3128/A200/0000007360",
        status: "IN PROGRESS",
        statusColor: "bg-gray-900",
        lastStatus: "Unit Operation Online Business & Digital Supporting",
        konfirmasi: "",
        bm: "UNIT BISNIS GORONTALO",
        outlet: "KF-BM GORONTALO",
        kategori: "Application",
        rangkuman: "Perubahan Jam Operasional Apotek"
    },
    {
        no: "KFA/3128/A200/0000003185",
        status: "IN PROGRESS",
        statusColor: "bg-gray-900",
        lastStatus: "Unit Operation Excellent & Performance Wilayah II",
        konfirmasi: "",
        bm: "UNIT BISNIS GORONTALO",
        outlet: "KF-BM GORONTALO",
        kategori: "Application",
        rangkuman: "Perubahan Jam Operasional Apotek"
    },
    {
        no: "KFA/3128/A200/0000006369",
        status: "PENDING",
        statusColor: "bg-orange-500",
        lastStatus: "ServiceDesk",
        konfirmasi: "https://scm-kt.buaya.dev/software-engineering/smartstock",
        bm: "UNIT BISNIS GORONTALO",
        outlet: "KF-BM GORONTALO",
        kategori: "Application",
        rangkuman: "Perubahan Jam Operasional Apotek"
    }
];

export default function Ticket() {
    const [filteredData, setFilteredData] = useState(dataTiket);

    const handleFilterChange = (filters) => {
        let filtered = dataTiket;

        if (filters.outlet.length > 0) {
            filtered = filtered.filter((item) => filters.outlet.includes(item.outlet));
        }

        if (filters.status.length > 0) {
            filtered = filtered.filter((item) => filters.status.includes(item.status));
        }

        if (filters.prioritas.length > 0) {
            filtered = filtered.filter((item) =>
                filters.prioritas.includes(item.prioritas || "NORMAL")
            );
        }

        setFilteredData(filtered);
    };
    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl mb-4 flex justify-between">List Tiket</h2>
                <Link to="/ticket/CreateTicket" className="bg-orange-500 text-white px-4 py-2 rounded m-5 shadow-lg shadow-orange-500/35">+ Tiket Baru</Link>
            </div>
            <div>
                <TiketFilterCards onFilterChange={handleFilterChange} />
            </div>
            <div className="mb-4 flex justify-between items-center">
                <button className="bg-gray-100 px-4 py-2 rounded">Show 100 rows ▼</button>
                <button className="bg-orange-500 text-white px-4 py-2 rounded">Excel</button>
            </div>


            <div className="overflow-x-auto + min-w">
                <table className="min-w-[900px] border border-gray-200 text-sm">
                    <thead className="bg-gray-100 text-gray-700">
                    <tr>
                        <th className="px-4 py-2 border">No Tiket</th>
                        <th className="px-4 py-2 border">Aksi</th>
                        <th className="px-4 py-2 border">Last Status</th>
                        <th className="px-4 py-2 border">Konfirmasi</th>
                        <th className="px-4 py-2 border">Nama BM</th>
                        <th className="px-4 py-2 border">Outlet</th>
                        <th className="px-4 py-2 border">Kategori</th>
                        <th className="px-4 py-2 border shadow-xl">Status</th>
                        <th className="px-4 py-2 border">Rangkuman</th>
                        <th className="px-4 py-2 border">Tanggal Ticket</th>
                        <th className="px-4 py-2 border">Assign SU</th>
                        <th className="px-4 py-2 border">Assign Helpdesk</th>
                        <th className="px-4 py-2 border">Assign Group</th>
                        <th className="px-4 py-2 border">Prioritas</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredData.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-200">
                            <td className="border px-4 py-2 whitespace-nowrap">{item.no}</td>
                            <td className="border px-4 py-2 text-center">
                                <button className="bg-blue-600 hover:bg-gray-400 px-2 py-1 rounded text-xs">
                                    ...
                                </button>
                            </td>
                            <td className="border px-4 py-2 whitespace-nowrap">{item.lastStatus}</td>
                            <td className="border px-4 py-2 text-blue-500 underline text-xs break-all">
                                {item.konfirmasi}
                            </td>
                            <td className="border px-4 py-2">{item.bm}</td>
                            <td className="border px-4 py-2">{item.outlet}</td>
                            <td className="border px-4 py-2">{item.kategori}</td>
                            {/*<td className="border px-4 py-2">{item.rangkuman}</td>*/}
                            <td className="border px-4 py-2">
                  <span
                      className={`text-white text-xs px-2 py-1 rounded whitespace-nowrap ${item.statusColor}`}
                  >
                    {item.status}
                  </span>
                            </td>
                            <td className="border px-4 py-2 whitespace-nowrap">{item.rangkuman}</td>
                            <td className="border px-4 py-2 whitespace-nowrap"></td>
                            <td className="border px-4 py-2 whitespace-nowrap"></td>
                            <td className="border px-4 py-2 whitespace-nowrap"></td>
                            <td className="border px-4 py-2 whitespace-nowrap"></td>
                            <td className="border px-4 py-2 whitespace-nowrap"></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-4 flex justify-end">
                <button className="border px-4 py-1 rounded bg-gray-100 hover:bg-gray-200">
                    Previous
                </button>
                <button className="ml-2 border px-4 py-1 rounded bg-blue-500 text-white">
                    1
                </button>
            </div>
        </div>
    );
}
