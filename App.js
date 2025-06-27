import { useState } from "react";
import axios from "axios";

function App() {
  const [product] = useState({
    name: "Sterling Silver Necklace",
    price: 5000,
    currency: "usd",
  });

  const handleBuy = async () => {
    const res = await axios.post("http://localhost:5000/create-checkout-session", {
      product
    });
    window.location.href = res.data.url;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-8">
      <div className="bg-white p-6 rounded-2xl shadow-md text-center max-w-sm">
        <img src="/necklace.jpg" alt="Jewellery" className="rounded-lg mb-4" />
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="text-lg text-gray-700 mb-4">$50.00</p>
        <button
          onClick={handleBuy}
          className="bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default App;
