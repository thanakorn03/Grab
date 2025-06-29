import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Restaurant from "../component/Restaurant";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("ทั้งหมด");
  const [loading, setLoading] = useState(true);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch("http://localhost:3001/restaurants");
      const data = await response.json();
      setRestaurants(data);
      setLoading(false);
    } catch (error) {
      console.error("โหลดข้อมูลไม่สำเร็จ:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const handleRefresh = () => {
    setLoading(true);
    fetchRestaurants();
  };

  const filteredRestaurants = restaurants.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchType = filterType === "ทั้งหมด" || item.type === filterType;
    return matchSearch && matchType;
  });

  const uniqueTypes = ["ทั้งหมด", ...new Set(restaurants.map((r) => r.type))];

  return (
    <div className="container mx-auto">
      <Navbar />

      <div className="title justify-center items-center flex flex-col mt-10">
        <h1 className="text-4xl font-bold mb-4">Grab Restaurant</h1>
        <button onClick={handleRefresh} className="btn btn-outline btn-sm mt-2">
          🔄 โหลดใหม่
        </button>
      </div>

      <div className="mb-5 flex justify-center mt-8">
        <label className="input flex items-center gap-2 w-96">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            placeholder="ค้นหาร้าน..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </label>
      </div>

      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {uniqueTypes.map((type) => (
          <button
            key={type}
            className={`badge badge-outline ${filterType === type ? "badge-accent" : ""}`}
            onClick={() => setFilterType(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center text-gray-400 mt-8">
          กำลังโหลดร้านอาหาร... <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : (
        <Restaurant restaurants={filteredRestaurants} onRefresh={handleRefresh} />
      )}
    </div>
  );
};

export default Home;