import React from "react";
import Card from "./Card";

const Restaurant = ({ restaurants, onRefresh }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      {restaurants.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          type={item.type}
          img={item.img}
          onDelete={onRefresh}
        />
      ))}
    </div>
  );
};

export default Restaurant;