import { useLoaderData, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import "./App.css";
import CoffeeCard from "./Components/Add-Coffe/CoffeeCard";
import CoffeeGellary from "./Components/coffee-Gellary/CoffeeGellary";
import Banner from "./Components/Banner/Banner";

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const loadedCoffees = useLoaderData(); // initial data
  const [coffees, setCoffees] = useState(loadedCoffees); // ✅ add this line

  // 🔁 UI থেকে রিমুভ করার জন্য ফাংশন
  const handleRemoveFromUI = (deletedId) => {
    const updatedList = coffees.filter((coffee) => coffee._id !== deletedId);
    setCoffees(updatedList);
  };

  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

  return (
    <>
     <Banner></Banner>
      <div className="min-h-screen bg-white py-12 px-4 md:px-20">
        <h3 className="text-center text-sm text-gray-500 mb-2">
          --- Sip & Savor ---
        </h3>
        <h1 className="text-center text-3xl md:text-4xl font-bold text-brown-900 mb-6">
          Our Popular Products
        </h1>

        <div className="flex justify-center mb-10">
          <Link to="/addCoffe">
            <button className="bg-[#E3B577] text-white font-medium px-6 py-2 rounded-md flex items-center gap-2 hover:bg-[#c89c5b] transition">
              <FaPlus className="w-4 h-4" />Add Coffee
            </button>
          </Link>
        </div>

        {coffees.length === 0 ? (
          <p className="text-center text-gray-500">
            No coffee items available.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coffees.map((coffeData) => (
              <CoffeeCard
                key={coffeData._id}
                coffeData={coffeData}
                onDelete={handleRemoveFromUI}
              />
            ))}
          </div>
        )}
      </div>
      <div>
        <CoffeeGellary></CoffeeGellary>
      </div>
    </>
  );
}

export default App;
