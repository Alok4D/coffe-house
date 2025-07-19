import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!email || !password) {
      return setError("Email and password are required.");
    }

    try {
      const result = await createUser(email, password);
      const createdAt = result.user?.metadata?.creationTime;
      const user = { email, createdAt };

      const res = await fetch("http://localhost:5000/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await res.json();
      if (data.insertedId) {
        console.log("✅ User inserted");
      }
    } catch (err) {
      setError("Login failed. Please try again.");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f3e7d7] to-[#fdfaf6] font-serif px-4 py-10 animate-fade-in">
      <div className="max-w-md mx-auto bg-white shadow-xl rounded-xl p-8 md:p-10">
        <h2 className="text-3xl font-bold text-center text-[#6f4e37] mb-6">Welcome Back</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative z-0">
            <input
              type="email"
              name="email"
              id="email"
              required
              placeholder=" "
              className="peer block w-full appearance-none border-0 border-b-2 border-[#b08968] bg-transparent py-2.5 px-0 text-[#4b3832] focus:border-[#6f4e37] focus:outline-none focus:ring-0"
            />
            <label
              htmlFor="email"
              className="absolute top-3 left-0 text-[#7b5e57] text-sm transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#a98c74] peer-focus:top-3 peer-focus:text-sm peer-focus:text-[#6f4e37]"
            >
              Email address
            </label>
          </div>

          <div className="relative z-0">
            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder=" "
              className="peer block w-full appearance-none border-0 border-b-2 border-[#b08968] bg-transparent py-2.5 px-0 text-[#4b3832] focus:border-[#6f4e37] focus:outline-none focus:ring-0"
            />
            <label
              htmlFor="password"
              className="absolute top-3 left-0 text-[#7b5e57] text-sm transition-all duration-300 peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-[#a98c74] peer-focus:top-3 peer-focus:text-sm peer-focus:text-[#6f4e37]"
            >
              Password
            </label>
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <div className="flex justify-between items-center text-sm">
            <Link to="#" className="text-[#b08968] hover:underline">
              Forgot password?
            </Link>
            <Link to="/register" className="text-[#b08968] hover:underline">
              Create account
            </Link>
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-[#6f4e37] text-white rounded-lg shadow hover:bg-[#42210b] transition-all duration-300"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
