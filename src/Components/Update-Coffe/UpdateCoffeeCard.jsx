import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const UpdateCoffeeCard = () => {
  const updatedCoffeData = useLoaderData();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const { _id, name, chef, supplier, taste, category, details, photo } = updatedCoffeData;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;

    const updatedCoffee = {
      name: form.name.value,
      chef: form.chef.value,
      supplier: form.supplier.value,
      taste: form.taste.value,
      category: form.category.value,
      details: form.details.value,
      photo: form.photo.value,
    };

    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Updated!", "Coffee has been updated.", "success");
        } else {
          Swal.fire("No change", "No data was updated.", "info");
        }
      })
      .catch((err) => {
        console.error("Update failed:", err);
        Swal.fire("Error", "Something went wrong!", "error");
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fef7f0] to-[#e7d7c9] flex flex-col items-center justify-center px-4">
      <h1
        data-aos="fade-down"
        className="text-3xl md:text-4xl font-serif font-bold text-[#4b3621] mb-3"
      >
        Update Coffee Info ☕
      </h1>
      <p
        data-aos="fade-up"
        className="text-center text-gray-600 max-w-2xl mb-10 text-sm md:text-base italic"
      >
        Update any detail of your coffee product here. Fields are editable and changes are saved immediately upon submission.
      </p>

      <form
        onSubmit={handleUpdateCoffee}
        className="w-full max-w-4xl bg-white p-6 md:p-10 rounded-lg shadow-xl space-y-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: "Name", name: "name", defaultValue: name, placeholder: "Enter coffee name" },
            { label: "Chef", name: "chef", defaultValue: chef, placeholder: "Enter coffee chef" },
            { label: "Supplier", name: "supplier", defaultValue: supplier, placeholder: "Enter supplier" },
            { label: "Taste", name: "taste", defaultValue: taste, placeholder: "Enter taste" },
            { label: "Category", name: "category", defaultValue: category, placeholder: "Enter category" },
            { label: "Details", name: "details", defaultValue: details, placeholder: "Enter details" },
          ].map((field, idx) => (
            <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <label className="block mb-1 font-semibold text-gray-700">{field.label}</label>
              <input
                name={field.name}
                type="text"
                defaultValue={field.defaultValue}
                placeholder={field.placeholder}
                className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8c6239] transition hover:shadow-md"
              />
            </div>
          ))}
        </div>

        <div data-aos="fade-up" data-aos-delay="600">
          <label className="block mb-1 font-semibold text-gray-700">Photo URL</label>
          <input
            name="photo"
            type="text"
            defaultValue={photo}
            placeholder="Enter photo URL"
            className="w-full px-4 py-2 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8c6239] transition hover:shadow-md"
          />
        </div>

        <button
          type="submit"
          data-aos="zoom-in"
          data-aos-delay="200"
          className="w-full py-3 rounded-lg bg-[#8c6239] text-white font-bold text-lg hover:bg-[#6f4e2f] transition-all duration-500 shadow-md hover:shadow-xl"
        >
          Update Coffee Details
        </button>
      </form>
    </div>
  );
};

export default UpdateCoffeeCard;
