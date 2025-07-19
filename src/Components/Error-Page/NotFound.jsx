// src/Components/NotFound/NotFound.jsx
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#fef2f2] text-center p-8">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-xl mt-4 mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-error text-white">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
