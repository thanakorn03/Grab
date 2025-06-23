import React from "react";
import Card from "./Card";

const Restaurant = ({ restaurants }) => {
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

export default Restaurant;
