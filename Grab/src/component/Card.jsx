import React from "react";

const Card = (props) => {
  const handleDelete = async () => {
    if (window.confirm("คุณแน่ใจหรือไม่ว่าต้องการลบร้านนี้?")) {
      try {
        const response = await fetch(`http://localhost:3001/restaurants/${props.id}`, {
          method: "DELETE",
        });

        if (response.ok) {
          alert("ลบร้านอาหารเรียบร้อยแล้ว");
          if (props.onDelete) {
            props.onDelete(props.id);
          }
        } else {
          alert("ไม่สามารถลบร้านอาหารได้");
        }
      } catch (error) {
        console.error("เกิดข้อผิดพลาดขณะลบ:", error);
        alert("เกิดข้อผิดพลาดขณะลบร้านอาหาร");
      }
    }
  };

  const handleEdit = () => {
    window.location.href = `/update-restaurant/${props.id}`;
  };


  return (
    <div className="card bg-base-100 w-96 shadow-md hover:shadow-lg transition duration-200">
      <figure className="h-48 overflow-hidden">
        <img src={props.img} alt={props.title} className="w-full h-full object-cover" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-semibold">
          {props.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-sm text-gray-600">{props.type}</p>
        <div className="card-actions justify-end mt-4 gap-2">
          <button onClick={handleDelete} className="badge badge-outline text-red-500 cursor-pointer px-3 py-1">
            Delete
          </button>
          <button onClick={handleEdit} className="badge badge-outline text-green-600 cursor-pointer px-3 py-1">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;