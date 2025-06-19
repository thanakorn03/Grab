import React, { useEffect, useState } from "react";
import Card from "./Card";

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
      .catch((err) => console.error("โหลดข้อมูลไม่สำเร็จ:", err));
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {restaurants.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          type={item.type}
          img={item.img}
        />
      ))}
    </div>
  );
};

export default Restaurants;
