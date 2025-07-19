import { FaEye, FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function CoffeeCard({ coffeData, onDelete }) {
  const { _id, name, chef, supplier, taste, category, details, photo } =
    coffeData;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your coffee has been deleted.", "success");
              // ✅ Call onDelete to remove from UI
              if (onDelete) {
                onDelete(_id);
              }
            }
          });
      }
    });
  };

  return (
    <div className="flex bg-[#F4F3F0] rounded-xl p-4 md:p-6 shadow-md items-center">
      <img
        src={photo}
        alt={name}
        className="w-28 h-32 object-contain mr-6 rounded-md border"
      />
      <div className="flex-1 space-y-1 text-sm md:text-base">
        <p>
          <span className="font-semibold">Name:</span> {name}
        </p>
        <p>
          <span className="font-semibold">Chef:</span> {chef}
        </p>
        <p>
          <span className="font-semibold">Supplier:</span> {supplier}
        </p>
        <p>
          <span className="font-semibold">Taste:</span> {taste}
        </p>
        <p>
          <span className="font-semibold">Category:</span> {category}
        </p>
        <p>
          <span className="font-semibold">Details:</span> {details}
        </p>
      </div>
      <div className="space-y-2 flex flex-col items-center ml-4">
        <button className="bg-[#D2B48C] p-2 rounded-full hover:bg-[#c9a76d]">
          <FaEye size={16} />
        </button>
        <Link to={`/updateCoffee/${_id}`}>
        <button className="bg-green-400 p-2 rounded-full text-white hover:bg-gray-800">
          <FaPencilAlt size={16} />
        </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-red-500 p-2 rounded-full text-white hover:bg-red-600"
        >
          <FaTrashAlt size={16} />
        </button>
      </div>
    </div>
  );
}

// ✅ prop types definition
CoffeeCard.propTypes = {
  coffeData: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    chef: PropTypes.string.isRequired,
    supplier: PropTypes.string,
    taste: PropTypes.string,
    category: PropTypes.string,
    details: PropTypes.string,
    photo: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func, // ✅ optional but recommended
};
