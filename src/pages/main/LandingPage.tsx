import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
    const [location, setLocation] = useState("Hồ Chí Minh");
    const [carType, setCarType] = useState("Xe tự lái");
    const navigate = useNavigate();
    const [startTime, setStartTime] = useState("01/01/2025 08:00");
    const [endTime, setEndTime] = useState("01/01/2025 18:00");

    const handleSearch = () => {
        navigate('/car-list');
    };

    const renderContent = () => {
        if (carType === "Xe tự lái") {
            return (
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="location" className="font-semibold">Địa điểm</label>
                        <select
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="border p-2 rounded"
                        >
                            <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                            <option value="Hà Nội">Hà Nội</option>
                            <option value="Đà Nẵng">Đà Nẵng</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="time" className="font-semibold">Thời gian thuê</label>
                        <input
                            type="text"
                            id="time"
                            value={`${startTime} - ${endTime}`}
                            className="border p-2 rounded"
                            disabled
                        />
                    </div>
                    <button onClick={handleSearch} className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Tìm Xe</button>
                </div>
            );
        } else {
            return (
                <div className="bg-white p-6 rounded-lg shadow-md flex flex-col gap-4">
                    <div className="text-center">
                        <span className="font-medium">Lộ trình</span>
                        <div className="flex justify-center gap-2 mt-2">
                            <button className="border px-4 py-2 rounded text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white">
                                Nội thành
                            </button>
                            <button className="border px-4 py-2 rounded text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white">
                                Liên tỉnh
                            </button>
                            <button className="border px-4 py-2 rounded text-orange-500 border-orange-500 hover:bg-orange-500 hover:text-white">
                                Liên tỉnh (1 chiều)
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="location" className="font-semibold">Địa điểm</label>
                        <select
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="border p-2 rounded"
                        >
                            <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                            <option value="Hà Nội">Hà Nội</option>
                            <option value="Đà Nẵng">Đà Nẵng</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="time" className="font-semibold">Thời gian thuê</label>
                        <input
                            type="text"
                            id="time"
                            value={`${startTime} - ${endTime}`}
                            className="border p-2 rounded"
                            disabled
                        />
                    </div>
                    <button onClick={handleSearch} className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Tìm Xe</button>
                </div>
            );
        }
    };

    return (
        <div className="flex flex-col items-center p-6">
            {/* Banner Section */}
            <section className="w-full h-96 bg-cover bg-center flex items-center justify-center text-white text-center rounded-xl" style={{ backgroundImage: "url('landingpic.jpg')" }}>
                <div className="max-w-lg p-6">
                    <h1 className="text-4xl font-bold mb-4">Muốn Đi Là Có Xe</h1>
                    <p className="text-lg">Thuê xe dễ dàng, đi ngay tức thì với RentConnect!</p>
                </div>
            </section>

            {/* Car Type Selection */}
            <section className="w-full max-w-2xl mt-6">
                <div className="flex justify-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                    <button 
                        className={`px-6 py-2 rounded transition ${carType === "Xe tự lái" ? "bg-orange-500 text-white" : "bg-white text-orange-500 border border-orange-500"}`}
                        onClick={() => setCarType("Xe tự lái")}
                    >
                        Xe tự lái
                    </button>
                    <button 
                        className={`px-6 py-2 rounded transition ${carType === "Xe có tài" ? "bg-orange-500 text-white" : "bg-white text-orange-500 border border-orange-500"}`}
                        onClick={() => setCarType("Xe có tài")}
                    >
                        Xe có tài
                    </button>
                </div>
            </section>

            {/* Form Section */}
            <section className="w-full max-w-2xl mt-6">
                {renderContent()}
            </section>
        </div>
    );
};

export default Landing;