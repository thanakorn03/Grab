import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Restaurant from "../component/Restaurant";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("ทั้งหมด");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3001/restaurants")
      .then((res) => res.json())
      .then((data) => {
        setRestaurants(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("โหลดข้อมูลไม่สำเร็จ:", err);
        setLoading(false);
      });
  }, []);

  const filteredRestaurants = restaurants.filter((item) => {
    const matchSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchType = filterType === "ทั้งหมด" || item.type === filterType;
    return matchSearch && matchType;
  });

  const uniqueTypes = ["ทั้งหมด", ...new Set(restaurants.map((r) => r.type))];

  return (
    <div className="container mx-auto">
      <Navbar />
      <h1 className="text-3xl text-center m-5">Grab Restaurant</h1>

      <div className="mb-5 flex justify-center">
        <label className="input flex items-center gap-2 w-96">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
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
        <div className="text-center text-gray-400 mt-8">กำลังโหลดข้อมูล...</div>
      ) : (
        <Restaurant restaurants={filteredRestaurants} />
      )}
    </div>
  );
};

export default Home;
