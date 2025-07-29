import React, { useState } from "react";

const ListPegawai   = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      npp: "NPP001",
      kodeBM: "BM01",
      namaBM: "Budi",
      kodeOutlet: "OT01",
      namaOutlet: "Outlet A",
      namaPegawai: "Andi",
      noHp: "081234567890",
    },
    {
      id: 2,
      npp: "NPP002",
      kodeBM: "BM02",
      namaBM: "Sari",
      kodeOutlet: "OT02",
      namaOutlet: "Outlet B",
      namaPegawai: "Rina",
      noHp: "082345678901",
    },
  ]);

  const [formData, setFormData] = useState({
    npp: "",
    kodeBM: "",
    namaBM: "",
    kodeOutlet: "",
    namaOutlet: "",
    namaPegawai: "",
    noHp: "",
  });

  const [showAddModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingData, setEditingData] = useState(null);

   
  const handleChange = (e, isEedit = false) => {
    const { name, value } = e.target;
    if (isEedit) {
      setEditingData((prev) => ({ ...prev, [name]: value }));
    }
    else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: Date.now(),
      ...formData,
    };
    setEmployees((prev) => [...prev, newEmployee]);
    setFormData({
      npp: "",
      kodeBM: "",
      namaBM: "",
      kodeOutlet: "",
      namaOutlet: "",
      namaPegawai: "",
      noHp: "",
    });
    setShowModal(false);
  };

  const openEdiModal = (emp) => {
    setEditingData({ ...emp });
    setShowEditModal(true);
  };

  const handleSaveEdit = (e) => {
    e.preventDefault();
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === editingData.id ? editingData : emp))
    );
    setShowEditModal(false);
    setEditingData(null);
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm("Yakin ingin menghapus pegawai ini?");
    if (confirmed) {
      setEmployees((prev) => prev.filter((emp) => emp.id !== id));
    }
  };

  return (
    <div className="p-8 max-w-screen-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">List Pegawai</h1>
      <button
        onClick={() => setShowModal(true)}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      > 
      + Add Data 
        </button>

      {/* Tabel Pegawai */}
      <table className="w-full border border-gray-300 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">NPP</th>
            <th className="border p-2">Kode BM</th>
            <th className="border p-2">Nama BM</th>
            <th className="border p-2">Kode Outlet</th>
            <th className="border p-2">Nama Outlet</th>
            <th className="border p-2">Nama Pegawai</th>
            <th className="border p-2">No. HP</th>
            <th className="border p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id}>
              <td className="border p-2">{emp.npp}</td>
              <td className="border p-2">{emp.kodeBM}</td>
              <td className="border p-2">{emp.namaBM}</td>
              <td className="border p-2">{emp.kodeOutlet}</td>
              <td className="border p-2">{emp.namaOutlet}</td>
              <td className="border p-2">{emp.namaPegawai}</td>
              <td className="border p-2">{emp.noHp}</td>
              <td className="border p-2 flex gap-2">
                <button
                  onClick={() => openEdiModal(emp)}
                    className="bg-yellow-400 text-white px-2 py-1 rounded"
                >
                  Edit
                </button>
                <button
            
                  onClick={() => handleDelete(emp.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
          {employees.length === 0 && (
            <tr>
              <td className="p-4 text-center" colSpan="8">
                Tidak ada data pegawai.
              </td>
            </tr>
          )}
        </tbody>
      </table>
        {showAddModal && (
        <Modal title="Tambah Data Pegawai" onClose={() => setShowAddModal(false)}>
          <PegawaiForm data={formData} onChange={handleChange} onSubmit={handleAdd} />
        </Modal>
      )}

      {/* MODAL EDIT */}
      {showEditModal && editingData && (
        <Modal title="Edit Data Pegawai" onClose={() => setShowEditModal(false)}>
          <PegawaiForm
            data={editingData}
            onChange={(e) => handleChange(e, true)}
            onSubmit={handleSaveEdit}
          />
        </Modal>
      )}
    </div>
  );
};

// Komponen Modal
const Modal = ({ title, onClose, children }) => (
  <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-[600px] max-w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-black text-xl">&times;</button>
      </div>
      {children}
    </div>
  </div>
);

// Komponen Form Reusable
const PegawaiForm = ({ data, onChange, onSubmit }) => (
  <form onSubmit={onSubmit} className="grid grid-cols-2 gap-4">
    <input type="text" name="npp" placeholder="Kode NPP" value={data.npp} onChange={onChange} required className="border p-2 rounded" />
    <input type="text" name="kodeBM" placeholder="Kode BM" value={data.kodeBM} onChange={onChange} required className="border p-2 rounded" />
    <input type="text" name="namaBM" placeholder="Nama BM" value={data.namaBM} onChange={onChange} required className="border p-2 rounded" />
    <input type="text" name="kodeOutlet" placeholder="Kode Outlet" value={data.kodeOutlet} onChange={onChange} required className="border p-2 rounded" />
    <input type="text" name="namaOutlet" placeholder="Nama Outlet" value={data.namaOutlet} onChange={onChange} required className="border p-2 rounded" />
    <input type="text" name="namaPegawai" placeholder="Nama Pegawai" value={data.namaPegawai} onChange={onChange} required className="border p-2 rounded" />
    <input type="text" name="noHp" placeholder="Nomor HP" value={data.noHp} onChange={onChange} required className="border p-2 rounded" />
    <div className="col-span-2 flex justify-end gap-2 mt-4">
      <button type="submit" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
        Simpan
      </button>
    </div>
  </form>
);


export default ListPegawai;
