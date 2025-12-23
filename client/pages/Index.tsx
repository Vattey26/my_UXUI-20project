import {
  Heart,
  MessageCircle,
  Share,
  Home,
  Search,
  User,
  LogOut,
  MoreHorizontal,
  Menu,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Post {
  id: number;
  author: string;
  avatar: string;
  title: string;
  image: string;
  content: string;
  likes: number;
  comments: number;
  liked: boolean;
}

interface RecentPost {
  id: number;
  source: string;
  title: string;
  image: string;
}

const mockPosts: Post[] = [
  {
    id: 1,
    author: "F1 Drama 101",
    avatar:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=40&h=40&fit=crop",
    title: "George and Max beef",
    image:
      "https://r.testifier.nl/Acbs8526SDKI/resizing_type:fit/width:3840/height:2560/plain/https://s3-newsifier.ams3.digitaloceanspaces.com/gpblog.com/images/2025-06/george-russell-en-max-verstappen.jpg@webp",
    content:
      "George Russell has accused Max Verstappen of BULLYING other drivers for years.\nTheir feud has rapidly escalated.",
    likes: 2400,
    comments: 127,
    liked: false,
  },
  {
    id: 2,
    author: "Ferrari Depression episod",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop",
    title: "All Ferrari are depressed",
    image:
      "https://scontent.fpnh5-3.fna.fbcdn.net/v/t39.30808-6/485727031_639421669051405_2868409652840885414_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=aa7b47&_nc_eui2=AeHjhyGON9PafKcfGy6rbF0gS3tBOWD8jjpLe0E5YPyOOvNjS7yX-eEwyvARaAh5bzHdJhYnH6elH3mpP8Bykg0w&_nc_ohc=9osR3MpFk7AQ7kNvwEX93RX&_nc_oc=AdlRTZIjGACKWUQIJh1ASpC5B47GY8sqnUWiTmzhdHo4-xPD7ebHvAoog92DBfReKR4&_nc_zt=23&_nc_ht=scontent.fpnh5-3.fna&_nc_gid=yihislaXkelro9u20cuGHw",
    content:
      "Two Ferrari depressed drivers even after a pole. The team's struggles continue as both drivers fail to capitalize on qualifying performance.",
    likes: 1850,
    comments: 342,
    liked: false,
  },
  {
    id: 3,
    author: "Wat is red bull doing?",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop",
    title:
      'Liam Lawson: "I was naive to think I would be given the time to adapt" at Red Bull',
    image:
      "https://manofmany.com/_next/image?url=https%3A%2F%2Fapi.manofmany.com%2Fwp-content%2Fuploads%2F2025%2F03%2FLiam-Lawson-11.jpg&w=1200&q=75",
    content:
      'Red Bull driver Liam Lawson reflects on his challenging adaptation period, expressing disappointment about the lack of patience from the team. "Turbo" struggled to find his rhythm in the competitive Red Bull environment.',
    likes: 3120,
    comments: 567,
    liked: false,
  },
];

const mockRecentPosts: RecentPost[] = [
  {
    id: 1,
    source: "Formula 1 Bank",
    title:
      "Why is pod bank isn't used in F1 anymore and other side notes said in the past weekend?",
    image:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    source: "formulaDank",
    title: "Seriously, WTF is wrong with Ferrari F1 and other dank insights",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    source: "formulaDank",
    title:
      "is a red bull fan, I don't think anyone is wrong but rants from the fans",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=100&h=100&fit=crop",
  },
  {
    id: 4,
    source: "Depressed Ferrari Fan",
    title: "Seriously Chat Why am I doing all of this?",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
];

export default function Index() {
  const [posts, setPosts] = useState(mockPosts);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [following, setFollowing] = useState([
    {
      id: 1,
      name: "F1 Drama 101",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets%2Ff6237c983b1c43f08538628b85b3ee4a%2F51a9358fb129430aa0b84322f8006524?format=webp&width=800",
    },
    {
      id: 2,
      name: "Ferrari Depression episod",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets%2Ff6237c983b1c43f08538628b85b3ee4a%2F11249670dadf435d8b6baa7c977f2a6f?format=webp&width=800",
    },
    {
      id: 3,
      name: "Wat is red bull doing?",
      avatar:
        "https://cdn.builder.io/api/v1/image/assets%2Ff6237c983b1c43f08538628b85b3ee4a%2F72a9f236e9c24963b257496a3b3ec099?format=webp&width=800",
    },
  ]);

  const toggleLike = (postId: number) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked ? post.likes - 1 : post.likes + 1,
            }
          : post,
      ),
    );
  };

  return (
    <div className="flex h-screen bg-dark-bg text-white overflow-hidden">
      {/* Left Sidebar */}
      <div className="w-56 border-r border-gray-800/50 flex flex-col bg-dark-bg backdrop-blur-sm sticky top-0 h-screen animate-fadeIn">
        <div className="p-6 border-b border-gray-800/50">
          <div className="text-2xl font-display font-black bg-gradient-to-r from-f1-red to-red-500 bg-clip-text text-transparent">
            F1
            <br />
            DRAMA
          </div>
        </div>

        <nav className="flex-1 p-6 space-y-8 overflow-y-auto">
          <div className="space-y-4">
            <div className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-gray-900/80 cursor-pointer transition-all duration-300 hover:translate-x-1 group">
              <Home
                size={24}
                className="text-f1-red group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-lg font-semibold group-hover:text-f1-red transition-colors duration-300">
                Home
              </span>
            </div>
            <div className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-gray-900/80 cursor-pointer transition-all duration-300 hover:translate-x-1 group">
              <Search
                size={24}
                className="group-hover:scale-110 transition-transform duration-300"
              />
              <span className="text-lg font-semibold group-hover:text-f1-red transition-colors duration-300">
                Search
              </span>
            </div>
            <Link to="/stream">
              <div className="flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-gray-900/80 cursor-pointer transition-all duration-300 hover:translate-x-1 group">
                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-f1-red to-red-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white text-xs font-bold">▶</span>
                </div>
                <span className="text-lg font-semibold group-hover:text-f1-red transition-colors duration-300">
                  Stream
                </span>
              </div>
            </Link>
          </div>

          <div>
            <div className="px-4 py-2 text-gray-500 text-xs font-black uppercase tracking-widest mb-3">
              Following
            </div>
            <div className="space-y-3">
              {following.map((user, idx) => (
                <div
                  key={user.id}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-900/80 cursor-pointer transition-all duration-300 hover:translate-x-1 group animate-fadeInUp"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full group-hover:ring-2 ring-f1-red transition-all duration-300"
                  />
                  <span className="text-sm font-medium truncate group-hover:text-f1-red transition-colors duration-300">
                    {user.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </nav>

        <div className="p-6 border-t border-gray-800/50 space-y-2">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-900/80 cursor-pointer transition-all duration-300 group">
            <User
              size={24}
              className="group-hover:text-f1-red transition-colors duration-300"
            />
            <span className="font-medium group-hover:text-f1-red transition-colors duration-300">
              Profile
            </span>
          </div>
          <Link to="/login">
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-900/80 cursor-pointer transition-all duration-300 group">
              <LogOut
                size={24}
                className="group-hover:text-f1-red transition-colors duration-300"
              />
              <span className="font-medium group-hover:text-f1-red transition-colors duration-300">
                Log Out
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* Center Feed */}
      <div className="flex-1 max-w-2xl border-r border-gray-800/50 flex flex-col">
        {/* Header */}
        <div className="sticky top-0 bg-dark-bg/90 backdrop-blur-md border-b border-gray-800/50 px-6 py-4 z-10 animate-fadeIn">
          <h2 className="text-2xl font-display font-black text-f1-red">Home</h2>
        </div>

        {/* Post Creation Area */}
        <div className="border-b border-gray-800/50 p-6 animate-fadeInUp">
          <div className="flex gap-4">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=48&h=48&fit=crop"
              alt="Your avatar"
              className="w-12 h-12 rounded-full ring-2 ring-f1-red/20"
            />
            <div className="flex-1">
              <textarea
                placeholder="What's on your mind?"
                className="w-full bg-transparent text-xl text-white placeholder-gray-600 resize-none outline-none font-medium"
                rows={3}
              />
              <div className="flex justify-end mt-4">
                <button className="bg-gradient-to-r from-f1-red to-red-600 text-white px-8 py-2.5 rounded-full font-display font-bold hover:shadow-lg hover:shadow-f1-red/50 transition-all duration-300 transform hover:scale-105 active:scale-95 uppercase tracking-wide text-sm">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Posts */}
        <div className="flex-1 overflow-y-auto">
          {posts.map((post, idx) => (
            <div
              key={post.id}
              className="border-b border-gray-800/50 p-6 hover:bg-gray-900/30 cursor-pointer transition-all duration-300 group animate-fadeInUp"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="flex gap-4">
                <img
                  src={post.avatar}
                  alt={post.author}
                  className="w-12 h-12 rounded-full ring-2 ring-gray-800/50 group-hover:ring-f1-red/50 transition-all duration-300"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 justify-between">
                    <div>
                      <span className="font-display font-bold hover:text-f1-red transition-colors duration-300">
                        {post.author}
                      </span>
                      <span className="text-gray-500 text-sm ml-2">
                        @drama · 2h
                      </span>
                    </div>
                    <button className="opacity-0 group-hover:opacity-100 p-2 hover:bg-gray-900 rounded-full transition-all duration-300">
                      <MoreHorizontal size={18} className="text-gray-500" />
                    </button>
                  </div>

                  <div className="mt-3">
                    <h3 className="font-display font-bold text-lg text-white">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-base mt-2 leading-relaxed">
                      {post.content}
                    </p>

                    {post.image && (
                      <img
                        src={post.image}
                        alt="Post"
                        className="rounded-2xl w-full mt-4 border border-gray-800/50 group-hover:border-gray-700 transition-all duration-300 hover:brightness-110"
                      />
                    )}
                  </div>

                  <div className="flex justify-between mt-4 text-gray-500 max-w-xs">
                    <div className="flex items-center gap-2 hover:text-f1-red cursor-pointer group/btn transition-colors duration-300">
                      <div className="p-2 rounded-full group-hover/btn:bg-f1-red/10 transition-colors duration-300">
                        <MessageCircle size={18} />
                      </div>
                      <span className="text-sm font-medium">
                        {post.comments}
                      </span>
                    </div>
                    <div
                      className="flex items-center gap-2 hover:text-f1-red cursor-pointer group/btn transition-colors duration-300"
                      onClick={() => toggleLike(post.id)}
                    >
                      <div className="p-2 rounded-full group-hover/btn:bg-f1-red/10 transition-colors duration-300">
                        <Heart
                          size={18}
                          fill={post.liked ? "#C30C0C" : "none"}
                          color={post.liked ? "#C30C0C" : "currentColor"}
                          className="transition-all duration-300"
                        />
                      </div>
                      <span className="text-sm font-medium">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-2 hover:text-f1-red cursor-pointer group/btn transition-colors duration-300">
                      <div className="p-2 rounded-full group-hover/btn:bg-f1-red/10 transition-colors duration-300">
                        <Share size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-80 p-6 border-l border-gray-800/50 flex flex-col bg-gradient-to-b from-gray-900/30 to-transparent sticky top-0 h-screen animate-slideInLeft">
        {/* Search Bar */}
        <div className="bg-gray-900/60 backdrop-blur-md rounded-full px-5 py-3 mb-6 flex items-center gap-3 border border-gray-800/50 hover:border-f1-red/30 transition-all duration-300 group">
          <Search
            size={20}
            className="text-gray-500 group-hover:text-f1-red transition-colors duration-300"
          />
          <input
            type="text"
            placeholder="Search drama..."
            className="bg-transparent text-white w-full outline-none placeholder-gray-600 font-medium"
          />
        </div>

        {/* Recent Section */}
        <div className="bg-gradient-to-br from-gray-900/80 to-gray-900/40 backdrop-blur-md rounded-3xl p-6 overflow-hidden border border-gray-800/50 animate-fadeInUp flex-1">
          <h3 className="text-2xl font-display font-black mb-5 text-f1-red">
            Recent
          </h3>

          <div className="space-y-4">
            {mockRecentPosts.map((item, idx) => (
              <div
                key={item.id}
                className="hover:bg-gray-900/80 p-3 rounded-2xl cursor-pointer transition-all duration-300 group/recent hover:translate-x-1 animate-fadeInUp"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded-lg object-cover flex-shrink-0 group-hover/recent:ring-2 ring-f1-red/30 transition-all duration-300"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-f1-red font-black mb-1 uppercase tracking-widest">
                      {item.source}
                    </div>
                    <div className="text-sm font-semibold text-white leading-snug line-clamp-3 group-hover/recent:text-f1-red transition-colors duration-300">
                      {item.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
