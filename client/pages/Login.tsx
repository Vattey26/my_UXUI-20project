import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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

      {/* Right side - Login form */}
      <div className="w-1/2 flex flex-col items-center justify-center px-12">
        {/* Tab buttons */}
        <div className="flex gap-2 mb-12 self-end mr-8">
          <button className="px-6 py-2 bg-f1-red text-white rounded-l-full font-medium">
            Log in
          </button>
          <Link to="/signup">
            <button className="px-6 py-2 bg-black text-white rounded-r-full font-medium">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Form container */}
        <div className="w-full max-w-sm">
          <h2 className="text-4xl font-bold mb-2 text-black">Log In</h2>
          <p className="text-gray-700 mb-8">Welcome fellow F1 lover</p>

          <form onSubmit={handleSubmit} className="space-y-6">
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
              <div className="text-right mt-2">
                <a
                  href="#"
                  className="text-xs text-gray-700 hover:text-gray-900 underline"
                >
                  Forgot Password
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-f1-red text-white font-medium rounded hover:bg-red-700 transition-colors mt-8"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
