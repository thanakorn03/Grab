import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import AddRestaurant from "../page/AddRestaurant";
import UpdateRestaurant from "../page/UpdateRestaurant";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, 
  },
  {
    path: "/add",
    element: <AddRestaurant />, 
  },
  {
    path: "/update-restaurant/:id",
    element: <UpdateRestaurant />,
  },
]);

export default router;