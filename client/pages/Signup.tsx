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
  const [focusedField, setFocusedField] = useState<string | null>(null);

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
    <div className="flex h-screen bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-200">
      {/* Left side - F1 NEWS branding */}
      <div className="w-1/2 bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
        {/* Animated background effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-f1-red rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-f1-red rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="text-center relative z-10 animate-fadeInUp">
          <h1 className="text-7xl font-display font-black text-f1-red tracking-tighter drop-shadow-lg">
            F1<br />NEWS
          </h1>
          <p className="text-gray-400 text-sm mt-4 tracking-widest uppercase font-medium">Drama Central</p>
        </div>
      </div>

      {/* Right side - Signup form */}
      <div className="w-1/2 flex flex-col items-center justify-center px-16 animate-slideInLeft overflow-y-auto py-10">
        {/* Tab buttons */}
        <div className="flex gap-2 mb-12 self-end mr-4 bg-white/80 backdrop-blur-md p-1.5 rounded-full shadow-lg">
          <Link to="/login">
            <button className="px-8 py-3 bg-transparent text-gray-900 rounded-full font-semibold text-sm hover:bg-gray-100 transition-all duration-300">
              Log in
            </button>
          </Link>
          <button className="px-8 py-3 bg-f1-red text-white rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-f1-red/50">
            Sign Up
          </button>
        </div>

        {/* Form container */}
        <div className="w-full max-w-md">
          <div className="mb-10">
            <h2 className="text-5xl font-display font-black text-gray-900 mb-3">Sign Up</h2>
            <p className="text-gray-600 text-lg">Welcome to the world of F1 drama</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="group">
              <label className="block text-gray-800 font-semibold mb-3 text-sm tracking-wide">
                EMAIL
              </label>
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className="w-full px-5 py-3.5 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-f1-red focus:ring-2 focus:ring-f1-red/30 transition-all duration-300 font-medium"
              />
            </div>

            <div className="group">
              <label className="block text-gray-800 font-semibold mb-3 text-sm tracking-wide">
                USERNAME
              </label>
              <Input
                type="text"
                name="username"
                placeholder="Choose your username"
                value={formData.username}
                onChange={handleChange}
                onFocus={() => setFocusedField("username")}
                onBlur={() => setFocusedField(null)}
                className="w-full px-5 py-3.5 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-f1-red focus:ring-2 focus:ring-f1-red/30 transition-all duration-300 font-medium"
              />
            </div>

            <div className="group">
              <label className="block text-gray-800 font-semibold mb-3 text-sm tracking-wide">
                PASSWORD
              </label>
              <Input
                type="password"
                name="password"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={handleChange}
                onFocus={() => setFocusedField("password")}
                onBlur={() => setFocusedField(null)}
                className="w-full px-5 py-3.5 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-f1-red focus:ring-2 focus:ring-f1-red/30 transition-all duration-300 font-medium"
              />
            </div>

            <div className="group">
              <label className="block text-gray-800 font-semibold mb-3 text-sm tracking-wide">
                CONFIRM PASSWORD
              </label>
              <Input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
                onFocus={() => setFocusedField("confirmPassword")}
                onBlur={() => setFocusedField(null)}
                className="w-full px-5 py-3.5 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-f1-red focus:ring-2 focus:ring-f1-red/30 transition-all duration-300 font-medium"
              />
            </div>

            <div className="flex items-center gap-3 py-2 mt-6">
              <Checkbox
                id="terms"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="border-2 border-gray-300 rounded w-5 h-5 cursor-pointer accent-f1-red transition-all duration-300"
              />
              <label
                htmlFor="terms"
                className="text-sm text-gray-700 cursor-pointer hover:text-gray-900 transition-colors duration-200 font-medium"
              >
                I agree to the Terms & Conditions
              </label>
            </div>

            <button
              type="submit"
              className="w-full mt-10 py-4 bg-gradient-to-r from-f1-red to-red-700 text-white font-display font-bold rounded-xl hover:shadow-2xl hover:shadow-f1-red/50 transition-all duration-300 text-lg uppercase tracking-wide transform hover:scale-105 active:scale-95"
            >
              Next →
            </button>
          </form>

          <p className="text-center text-gray-600 mt-8 text-sm">
            Already have an account?{" "}
            <Link to="/login" className="text-f1-red font-semibold hover:underline transition-colors duration-200">
              Log in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
