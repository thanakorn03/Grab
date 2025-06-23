import React, { useState, useEffect } from "react";
import Navbar from "../component/Navbar";

const AddRestaurant = () => {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    img: "",
  });

  const [success, setSuccess] = useState(false);
  const [restaurants, setRestaurants] = useState([]); // ⬅️ เก็บข้อมูลทั้งหมดเพื่อหา id

  // โหลดร้านทั้งหมดเมื่อ component เริ่มทำงาน
  useEffect(() => {
    fetch("http://localhost:3001/restaurants")
      .then((res) => res.json())
      .then((data) => setRestaurants(data))
      .catch((err) => console.error("โหลดข้อมูลร้านไม่สำเร็จ:", err));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // หา max id
    const maxId = restaurants.length > 0 ? Math.max(...restaurants.map((r) => r.id)) : 0;
    const newId = maxId + 1;

    const newRestaurant = {
      id: newId,
      ...formData,
    };

    fetch("http://localhost:3001/restaurants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRestaurant),
    })
      .then((res) => {
        if (res.ok) {
          setSuccess(true);
          setFormData({ title: "", type: "", img: "" });

          // เพิ่มร้านใหม่เข้า array (อัปเดต state เผื่ออนาคตจะใช้)
          setRestaurants([...restaurants, newRestaurant]);
        }
      })
      .catch((err) => {
        console.error("เกิดข้อผิดพลาดในการเพิ่มร้าน:", err);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <h1 className="text-2xl text-center font-bold mb-4">เพิ่มร้านอาหารใหม่</h1>

      {success && (
        <div className="alert alert-success mb-4">
          ✅ เพิ่มร้านเรียบร้อยแล้ว
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
        <input
          type="text"
          name="title"
          placeholder="ชื่อร้าน"
          value={formData.title}
          onChange={handleChange}
          required
          className="input input-bordered w-full"
        />

        <input
          type="text"
          name="type"
          placeholder="ประเภท (เช่น ชาไข่มุก, ของหวาน, ของคาว)"
          value={formData.type}
          onChange={handleChange}
          required
          className="input input-bordered w-full"
        />

        <input
          type="text"
          name="img"
          placeholder="URL รูปภาพ"
          value={formData.img}
          onChange={handleChange}
          required
          className="input input-bordered w-full"
        />

        <button type="submit" className="btn btn-primary w-full">
          เพิ่มร้าน
        </button>
      </form>
    </div>
  );
};

export default AddRestaurant;
