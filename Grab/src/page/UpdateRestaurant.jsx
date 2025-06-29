import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';

const UpdateRestaurant = () => {
  const [restaurant, setRestaurant] = useState({
    title: '',
    type: '',
    img: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  // โหลดข้อมูลร้านเมื่อเข้า Edit
  useEffect(() => {
    const fetchRestaurant = async () => {
      try {
        const res = await fetch(`http://localhost:3001/restaurants/${id}`);
        const data = await res.json();
        setRestaurant(data);
      } catch (error) {
        console.error('ไม่สามารถโหลดข้อมูลร้าน:', error);
      }
    };

    fetchRestaurant();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3001/restaurants/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(restaurant),
      });

      if (res.ok) {
        alert('อัปเดตร้านเรียบร้อย');
        navigate('/');
      } else {
        alert('อัปเดตไม่สำเร็จ');
      }
    } catch (error) {
      console.error('เกิดข้อผิดพลาด:', error);
    }
  };

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-10">
        <h1 className="text-4xl font-bold mb-6">Update Restaurant</h1>
        <div className="card w-full max-w-md bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img
              src={restaurant.img || "https://via.placeholder.com/150"}
              alt="Upload"
              className="rounded-xl w-32 h-32 object-cover"
            />
          </figure>
          <div className="card-body items-center text-responsive">
            <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
              <div>
                <label className="label">
                  <span className="label-text font-semibold">Restaurant Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name here"
                  className="input input-bordered w-full"
                  name="title"
                  value={restaurant.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-semibold">Restaurant Details</span>
                </label>
                <input
                  type="text"
                  placeholder="ประเภทอาหาร"
                  className="input input-bordered w-full"
                  name="type"
                  value={restaurant.type}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="label">
                  <span className="label-text font-semibold">Image Restaurant</span>
                </label>
                <input
                  type="text"
                  placeholder="URL รูปภาพ"
                  className="input input-bordered w-full"
                  name="img"
                  value={restaurant.img}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="card-actions justify-end">
                <button type="submit" className="btn btn-primary w-full">
                  Update Restaurant
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateRestaurant;
