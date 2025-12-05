import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-neutral-100">
      {/* Left side - F1 NEWS branding */}
      <div className="w-1/2 bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-f1-red tracking-wide">
            F1 NEWS
          </h1>
        </div>
      </div>

      {/* Right side - Signup form */}
      <div className="w-1/2 flex flex-col items-center justify-center px-12">
        {/* Tab buttons */}
        <div className="flex gap-2 mb-12 self-end mr-8">
          <Link to="/login">
            <button className="px-6 py-2 bg-black text-white rounded-l-full font-medium">
              Log in
            </button>
          </Link>
          <button className="px-6 py-2 bg-f1-red text-white rounded-r-full font-medium">
            Sign Up
          </button>
        </div>

        {/* Form container */}
        <div className="w-full max-w-sm">
          <h2 className="text-4xl font-bold mb-2 text-black">Sign Up</h2>
          <p className="text-gray-700 mb-8">Welcome to the world of F1 drama</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-800 font-medium mb-2">
                Email
              </label>
              <Input
                type="email"
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-300 border-0 rounded text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-f1-red"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-2">
                Username
              </label>
              <Input
                type="text"
                name="username"
                placeholder="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-300 border-0 rounded text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-f1-red"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-2">
                Password
              </label>
              <Input
                type="password"
                name="password"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-300 border-0 rounded text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-f1-red"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-2">
                Re-enter Password
              </label>
              <Input
                type="password"
                name="confirmPassword"
                placeholder="confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-gray-300 border-0 rounded text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-f1-red"
              />
            </div>

            <div className="flex items-center gap-3 py-2">
              <Checkbox
                id="terms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="border-gray-400"
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-700 cursor-pointer"
              >
                Accept Terms & Conditions
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-f1-red text-white font-medium rounded hover:bg-red-700 transition-colors mt-8"
            >
              Next →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
