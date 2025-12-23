import { ArrowLeft, Share, Heart, MessageCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Stream() {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [chatOpen, setChatOpen] = useState(true);

  return (
    <div className="min-h-screen bg-dark-bg text-white flex flex-col">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-dark-bg/90 backdrop-blur-md border-b border-gray-800/50 px-4 md:px-6 py-3 md:py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 md:gap-3 hover:text-f1-red transition-colors duration-300 group"
          >
            <ArrowLeft
              size={20}
              className="md:w-6 md:h-6 group-hover:scale-110 transition-transform duration-300"
            />
            <span className="font-semibold text-sm md:text-lg hidden sm:inline">
              Back
            </span>
          </button>

          <div className="flex-1 flex justify-center">
            <h1 className="text-xl md:text-2xl font-display font-black text-f1-red">
              F1 LIVE
            </h1>
          </div>

          <div className="w-16 md:w-24"></div>
        </div>
      </div>

      <div className="flex-1 max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 h-full">
          {/* Main Video Section */}
          <div className="lg:col-span-2 space-y-4 md:space-y-6 animate-fadeInUp">
            {/* Video Container */}
            <div className="relative w-full bg-black rounded-xl md:rounded-2xl overflow-hidden border border-gray-800/50 shadow-2xl group">
              <div
                className="relative w-full"
                style={{ paddingBottom: "56.25%" }}
              >
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/daWr9xnkKS4?autoplay=0&modestbranding=1&rel=0"
                  title="F1 Race Stream"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            {/* Video Info */}
            <div
              className="space-y-3 md:space-y-4 animate-fadeInUp"
              style={{ animationDelay: "100ms" }}
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-black text-white mb-1 md:mb-2">
                  British Grand Prix 2025
                </h2>
                <p className="text-gray-400 text-sm md:text-lg">
                  Watch the full race at Silverstone Circuit. Drama, speed, and
                  intense competition!
                </p>
              </div>

              {/* Stats and Actions */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 items-start sm:items-center py-3 md:py-4 border-t border-b border-gray-800/50">
                <div className="flex items-center gap-2">
                  <div className="w-10 md:w-12 h-10 md:h-12 rounded-full bg-gradient-to-br from-f1-red to-red-700 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xs md:text-sm">
                      F1
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base">F1 TV</p>
                    <p className="text-xs text-gray-500">Official Stream</p>
                  </div>
                </div>

                <div className="flex-1"></div>

                <div className="flex items-center gap-2 md:gap-3">
                  <button
                    onClick={() => setLiked(!liked)}
                    className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full hover:bg-gray-900/80 transition-all duration-300 group text-sm md:text-base"
                  >
                    <Heart
                      size={18}
                      className="md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300"
                      fill={liked ? "#C30C0C" : "none"}
                      color={liked ? "#C30C0C" : "currentColor"}
                    />
                    <span className="font-semibold hidden sm:inline">
                      {liked ? "1.2K" : "1.1K"}
                    </span>
                  </button>

                  <button className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full hover:bg-gray-900/80 transition-all duration-300 group text-sm md:text-base">
                    <MessageCircle
                      size={18}
                      className="md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300"
                    />
                    <span className="font-semibold hidden sm:inline">234</span>
                  </button>

                  <button className="flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full hover:bg-gray-900/80 transition-all duration-300 group text-sm md:text-base">
                    <Share
                      size={18}
                      className="md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300"
                    />
                  </button>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2 md:space-y-3">
                <h3 className="font-display font-bold text-lg md:text-xl">
                  Race Highlights
                </h3>
                <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                  Experience the intensity of the 2025 British Grand Prix at
                  Silverstone. Watch as teams battle for supremacy on one of
                  F1's most iconic circuits. From qualifying drama to race day
                  action, catch all the moments that matter.
                </p>
                <button className="text-f1-red font-semibold hover:text-red-400 transition-colors duration-300 text-xs md:text-sm">
                  Show more
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar - Chat/Comments - Hidden on mobile, visible on lg */}
          <div className="hidden lg:block lg:col-span-1 animate-slideInLeft">
            <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-md rounded-2xl p-5 md:p-6 border border-gray-800/50 h-96 lg:max-h-full flex flex-col sticky top-24">
              <h3 className="text-lg md:text-xl font-display font-black text-f1-red mb-3 md:mb-4">
                Live Chat
              </h3>

              <div className="flex-1 overflow-y-auto space-y-3 mb-3 md:mb-4 pr-2">
                {[
                  {
                    name: "Max Fan",
                    message: "Let's go Max! 🔴",
                    color: "from-blue-600 to-blue-700",
                  },
                  {
                    name: "Ferrari Forever",
                    message: "Come on Ferrari! 🏁",
                    color: "from-red-700 to-red-800",
                  },
                  {
                    name: "F1 Drama 101",
                    message: "This is INSANE!",
                    color: "from-f1-red to-red-600",
                  },
                  {
                    name: "GP Enthusiast",
                    message: "Best race of the season 🎯",
                    color: "from-purple-600 to-purple-700",
                  },
                ].map((chat, idx) => (
                  <div
                    key={idx}
                    className="hover:bg-gray-800/50 p-2 md:p-3 rounded-lg transition-colors duration-300 animate-fadeInUp"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div className="flex items-start gap-2">
                      <div
                        className={`w-7 md:w-8 h-7 md:h-8 rounded-full bg-gradient-to-br ${chat.color} flex-shrink-0`}
                      ></div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-xs md:text-sm">
                          {chat.name}
                        </p>
                        <p className="text-gray-300 text-xs md:text-sm">
                          {chat.message}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 mt-auto pt-3 md:pt-4 border-t border-gray-800/50">
                <input
                  type="text"
                  placeholder="Send a message..."
                  className="flex-1 bg-gray-800/50 rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm outline-none focus:ring-2 focus:ring-f1-red/50 transition-all duration-300 placeholder-gray-600"
                />
                <button className="bg-f1-red text-white rounded-full p-1.5 md:p-2 hover:bg-red-700 transition-colors duration-300 hover:scale-110 transform flex-shrink-0">
                  <svg
                    className="w-4 md:w-5 h-4 md:h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.9429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,3.09584225 C3.34915502,2.93614488 2.40734225,3.04619305 1.77946707,3.5174851 C0.994623095,4.13399899 0.837654304,5.06028324 1.15159189,5.84775891 L3.03521743,12.2887519 C3.03521743,12.4744748 3.19218622,12.4744748 3.50612381,12.4744748 L16.6915026,13.2599618 C16.6915026,13.2599618 17.1624089,13.2599618 17.1624089,12.7886697 L17.1624089,12.7886697 C17.1624089,12.3173775 16.6915026,12.4744748 16.6915026,12.4744748 Z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
