import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isHovered, setIsHovered] = useState(false);

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
    <div className="flex h-screen bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-200">
      {/* Left side - F1 NEWS branding - Hidden on mobile/tablet */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-black via-gray-900 to-black items-center justify-center relative overflow-hidden">
        {/* Animated background effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-f1-red rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-f1-red rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="text-center relative z-10 animate-fadeInUp">
          <h1 className="text-7xl font-display font-black text-f1-red tracking-tighter drop-shadow-lg">
            F1
            <br />
            NEWS
          </h1>
          <p className="text-gray-400 text-sm mt-4 tracking-widest uppercase font-medium">
            Drama Central
          </p>
        </div>
      </div>

      {/* Right side - Login form - Full width on mobile */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-6 md:px-8 lg:px-16 py-8 md:py-10 lg:py-0 animate-slideInLeft overflow-y-auto">
        {/* Tab buttons */}
        <div className="flex gap-2 mb-8 md:mb-12 lg:mb-16 w-full md:w-auto md:self-end lg:mr-4 bg-white/80 backdrop-blur-md p-1.5 rounded-full shadow-lg order-2 md:order-1">
          <button className="flex-1 md:flex-none px-6 md:px-8 py-2.5 md:py-3 bg-f1-red text-white rounded-full font-semibold text-xs md:text-sm transition-all duration-300 hover:shadow-lg hover:shadow-f1-red/50">
            Log in
          </button>
          <Link to="/signup" className="flex-1 md:flex-none">
            <button className="w-full px-6 md:px-8 py-2.5 md:py-3 bg-transparent text-gray-900 rounded-full font-semibold text-xs md:text-sm hover:bg-gray-100 transition-all duration-300">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Form container */}
        <div className="w-full max-w-md order-1 md:order-2">
          <div className="mb-8 md:mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-black text-gray-900 mb-2 md:mb-3">
              Log In
            </h2>
            <p className="text-gray-600 text-sm md:text-lg">
              Welcome fellow F1 lover
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
            <div className="group">
              <label className="block text-gray-800 font-semibold mb-2 md:mb-3 text-xs md:text-sm tracking-wide">
                USERNAME
              </label>
              <Input
                type="text"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3 md:px-5 py-2.5 md:py-3.5 bg-white border-2 border-gray-300 rounded-lg md:rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-f1-red focus:ring-2 focus:ring-f1-red/30 transition-all duration-300 font-medium text-sm md:text-base"
              />
            </div>

            <div className="group">
              <label className="block text-gray-800 font-semibold mb-2 md:mb-3 text-xs md:text-sm tracking-wide">
                PASSWORD
              </label>
              <Input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 md:px-5 py-2.5 md:py-3.5 bg-white border-2 border-gray-300 rounded-lg md:rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:border-f1-red focus:ring-2 focus:ring-f1-red/30 transition-all duration-300 font-medium text-sm md:text-base"
              />
              <div className="text-right mt-2 md:mt-3">
                <a
                  href="#"
                  className="text-xs font-semibold text-gray-700 hover:text-f1-red transition-colors duration-200 uppercase tracking-widest"
                >
                  Forgot Password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="w-full mt-6 md:mt-10 py-3 md:py-4 bg-gradient-to-r from-f1-red to-red-700 text-white font-display font-bold rounded-lg md:rounded-xl hover:shadow-2xl hover:shadow-f1-red/50 transition-all duration-300 text-base md:text-lg uppercase tracking-wide transform hover:scale-105 active:scale-95"
            >
              Log In
            </button>
          </form>

          <p className="text-center text-gray-600 mt-6 md:mt-8 text-xs md:text-sm">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-f1-red font-semibold hover:underline transition-colors duration-200"
            >
              Sign up now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
