import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddRestaurant from "./pages/AddRestaurant";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-restaurant" element={<AddRestaurant />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
