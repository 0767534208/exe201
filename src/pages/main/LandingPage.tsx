import { useState } from 'react';
import './Landing.css'; // Import CSS
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
            <div className="car-modal">
              <div className="form-group">
                <label htmlFor="location">Địa điểm</label>
                <select
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="form-input"
                >
                  <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                  <option value="Hà Nội">Hà Nội</option>
                  <option value="Đà Nẵng">Đà Nẵng</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="time">Thời gian thuê</label>
                <input
                  type="text"
                  id="time"
                  value={`${startTime} - ${endTime}`}
                  className="form-input"
                  disabled
                />
              </div>
              <button onClick={handleSearch} className="search-btn">Tìm Xe</button>
            </div>
          );
        } else {
          return (
            <div className="car-modal">
                <div className='trip-type-container'>
                <div className="trip-type">
                <span>Lộ trình</span>
                <div className="trip-options">
                  <button className="trip-option">Nội thành</button>
                  <button className="trip-option">Liên tỉnh</button>
                  <button className="trip-option">Liên tỉnh (1 chiều)</button>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="location">Địa điểm</label>
                <select
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="form-input"
                >
                  <option value="Hồ Chí Minh">Hồ Chí Minh</option>
                  <option value="Hà Nội">Hà Nội</option>
                  <option value="Đà Nẵng">Đà Nẵng</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="time">Thời gian thuê</label>
                <input
                  type="text"
                  id="time"
                  value={`${startTime} - ${endTime}`}
                  className="form-input"
                  disabled
                />
              </div>
               </div>
           
               <button onClick={handleSearch} className="search-btn">Tìm Xe</button>
            </div>
          );
        }
      };

  return (
    <div className="landing-container">
      {/* Banner Section */}
      <section className="banner">
        <div className="banner-content">
          <h1 className="banner-title">Muốn Đi Là Có Xe</h1>
          <p className="banner-subtitle">Thuê xe dễ dàng, đi ngay tức thì với RentConnect!</p>
        </div>
      </section>

      {/* Car Type Selection */}
        <section className="car-selection">
        <div className="car-options">
          <button 
            className={carType === "Xe tự lái" ? "car-option active" : "car-option"}
            onClick={() => setCarType("Xe tự lái")}
          >
            Xe tự lái
          </button>
          <button 
            className={carType === "Xe có tài" ? "car-option active" : "car-option"}
            onClick={() => setCarType("Xe có tài")}
          >
            Xe có tài
          </button>
        </div>

        {renderContent()}
      </section>

      <section>
        
      </section>
    </div>
  );
};

export default Landing;
