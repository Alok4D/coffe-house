import { useEffect } from "react";
import { FiUser, FiMail, FiImage, FiCoffee, FiClipboard, FiPackage } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const AddCoffee = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = { name, chef, supplier, taste, category, details, photo };
    console.log(newCoffee);

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Coffee data posted successfully!");
          form.reset();
        }
      });
  };

  return (
    <div className="min-h-screen bg-[#f4f1ee] flex flex-col items-center justify-center px-4 py-12">
      <h1
        data-aos="fade-down"
        className="text-3xl font-serif italic font-semibold text-[#42210B] mb-3 drop-shadow-md"
      >
        Add New Coffee
      </h1>
      <p
        data-aos="fade-up"
        className="text-center text-gray-600 max-w-2xl mb-10"
      >
        Fill in the fields below to add a new coffee to our collection. Make sure all details are correct.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-lg space-y-6"
        data-aos="zoom-in-up"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <label className="block mb-1 font-medium text-gray-700 flex items-center gap-1">
              <FiCoffee /> Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter coffee name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8c6239] transition-all"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700 flex items-center gap-1">
              <FiUser /> Chef
            </label>
            <input
              type="text"
              name="chef"
              placeholder="Enter coffee chef"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8c6239] transition-all"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700 flex items-center gap-1">
              <FiClipboard /> Supplier
            </label>
            <input
              type="text"
              name="supplier"
              placeholder="Enter coffee supplier"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8c6239] transition-all"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700 flex items-center gap-1">
              <FiPackage /> Taste
            </label>
            <input
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8c6239] transition-all"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700 flex items-center gap-1">
              ☕ Category
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter coffee category"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8c6239] transition-all"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700 flex items-center gap-1">
              📝 Details
            </label>
            <input
              type="text"
              name="details"
              placeholder="Enter coffee details"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8c6239] transition-all"
              required
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700 flex items-center gap-1">
            <FiImage /> Photo URL
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Enter photo URL"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#8c6239] transition-all"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-md bg-[#c89f72] text-white font-semibold hover:bg-[#a7793e] hover:scale-105 transition-transform duration-300"
        >
          ➕ Add Coffee
        </button>
      </form>
    </div>
  );
};

export default AddCoffee;
