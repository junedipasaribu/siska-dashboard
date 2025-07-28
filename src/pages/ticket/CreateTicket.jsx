import React, { useState } from "react";

const CreateTicket = () => {
    const [formData, setFormData] = useState({
        outlet: "KF.BM GORONTALO",
        namaPelapor: "",
        noHpPelapor: "",
        judul: "",
        file: null,
        keterangan: "",
        idSap: "",
        namaLengkap: "",
        showForm7S: false,
        email: ""
    });

    const handleChange = (e) => {
        const { name, value, type, files, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "file" ? files[0] : type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form dikirim:", formData);
    };

    return (
        <div className="p-6 bg-white dark:bg-gray-800 rounded-lg px-6 py-8 ring shadow-xl ring-gray-900/5">
            <h2 className="text-xl font-bold mb-4">Detail Tiket</h2>

            <form onSubmit={handleSubmit} className="space-y-4">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <label className="block font-medium">Group / Outlet</label>
                        <select
                            name="outlet"
                            value={formData.outlet}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        >
                            <option>KF.BM GORONTALO</option>
                            <option>KF.BM JAKARTA</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-medium">Nama Pelapor</label>
                        <input
                            name="namaPelapor"
                            type="text"
                            placeholder="Contoh: Agus"
                            value={formData.namaPelapor}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                    </div>
                    <div>
                        <label className="block font-medium">No HP Pelapor</label>
                        <input
                            name="noHpPelapor"
                            type="text"
                            placeholder="Contoh: 08131000232"
                            value={formData.noHpPelapor}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                        />
                    </div>
                </div>


                <div>
                    <label className="block font-medium">Judul Permasalahan</label>
                    <input
                        name="judul"
                        type="text"
                        placeholder="Contoh: Saldo transaksi tidak terpotong"
                        value={formData.judul}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>


                <div>
                    <label className="block font-medium">Upload File <span className="text-red-500 text-sm">(image only)</span></label>
                    <input
                        name="file"
                        type="file"
                        accept="image/*"
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>

                <div className="flex items-center space-x-2">
                    <label className="block font-medium">Tampilkan Form User Request akun 7S?</label>
                    <label className="flex items-center cursor-pointer">
                        <div className="relative">
                            <input
                                type="checkbox"
                                name="showForm7S"
                                checked={formData.showForm7S}
                                onChange={handleChange}
                                className="sr-only"
                            />
                            <div className="w-10 h-4 bg-gray-300 rounded-full shadow-inner"></div>
                            <div className={`dot absolute left-1 top-[-3px] w-5 h-5 bg-blue-500 rounded-full transition ${formData.showForm7S ? "translate-x-5" : ""}`}></div>
                        </div>
                        <span className="ml-3 text-sm font-medium">Switch Button</span>
                    </label>
                </div>

                {/* Keterangan */}
                {/*<div>*/}
                {/*    <label className="block font-medium mb-1">Keterangan</label>*/}
                {/*    <ReactQuill*/}
                {/*        value={formData.keterangan}*/}
                {/*        onChange={(val) => setFormData({ ...formData, keterangan: val })}*/}
                {/*        theme="snow"*/}
                {/*    />*/}
                {/*</div>*/}

                {/* Form Mutasi User */}
                {formData.showForm7S && (
                    <div className="grid grid-rows-1 md:grid-rows-2 gap-4">
                        <div>
                            <label className="block font-medium mb-1">ID SAP</label>
                            <input
                                name="idSap"
                                type="text"
                                value={formData.idSap}
                                onChange={handleChange}
                                placeholder="19990610A"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Nama Lengkap</label>
                            <input
                                name="namaLengkap"
                                type="text"
                                value={formData.namaLengkap}
                                onChange={handleChange}
                                placeholder="Farly Cahyadi Lumula"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Email</label>
                            <input
                                name="email"
                                type="text"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="antek.lumula@gmail.com"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Username</label>
                            <p className="text-red-500 mb-2">(Kosongkan jika pengajuan user baru)</p>
                            <input
                                name="username"
                                type="text"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Username"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Nomor HP</label>
                            <input
                                name="noHp"
                                type="text"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Nomor Hp"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Permintaan</label>
                            <input
                                name="permintaan"
                                type="text"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Permintaan"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Type Akun</label>
                            <input
                                name="typeakun"
                                type="text"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Type akun"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Role Akun</label>
                            <input
                                name="roleakun"
                                type="text"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Role Akun"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Outlet Asal</label>
                            <input
                                name="outletasal"
                                type="text"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Outlet Asal"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Outlet Baru</label>
                            <input
                                name="outletbaru"
                                type="text"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Outlet Baru"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                        <div>
                            <label className="block font-medium mb-1">Catatan</label>
                            <input
                                name="catatan"
                                type="text"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Catatan"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                        </div>
                    </div>
                )}


                <button
                    type="submit"
                    className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700"
                >
                    Kirim Tiket
                </button>
            </form>
        </div>
    );
};

export default CreateTicket;
