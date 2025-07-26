import React, { useEffect } from "react";

const FilterCard = ({ title, options, selected, setSelected }) => {
    const handleToggle = (value) => {
        if (selected.includes(value)) {
            setSelected(selected.filter((item) => item !== value));
        } else {
            setSelected([...selected, value]);
        }
    };

    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
            <h3 className="text-md font-semibold mb-2">{title}</h3>
            <div className="flex flex-wrap gap-2 ">
                {options.map((option) => (
                    <button
                        key={option}
                        onClick={() => handleToggle(option)}
                        className={`px-3 py-1 rounded-full text-sm border ${
                            selected.includes(option)
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default function TiketFilterCards({ onFilterChange }) {
    const [selectedOutlet, setSelectedOutlet] = React.useState([]);
    const [selectedStatus, setSelectedStatus] = React.useState([]);
    const [selectedPrioritas, setSelectedPrioritas] = React.useState([]);

    useEffect(() => {
        onFilterChange({
            outlet: selectedOutlet,
            status: selectedStatus,
            prioritas: selectedPrioritas,
        });
    }, [selectedOutlet, selectedStatus, selectedPrioritas]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <FilterCard
                title="Outlet / Apotek"
                options={["KF-BM GORONTALO", "KF-CIKARANG", "KF-JAKARTA"]}
                selected={selectedOutlet}
                setSelected={setSelectedOutlet}
            />
            <FilterCard
                title="Status Tiket"
                options={["IN PROGRESS", "RESOLVED", "PENDING", "REJECT"]}
                selected={selectedStatus}
                setSelected={setSelectedStatus}
            />
            <FilterCard
                title="Prioritas"
                options={["URGENT", "NORMAL"]}
                selected={selectedPrioritas}
                setSelected={setSelectedPrioritas}
            />
        </div>
    );
}
