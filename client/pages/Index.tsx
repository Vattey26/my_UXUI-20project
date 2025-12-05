import { Heart, MessageCircle, Share, Home, Search, User, LogOut } from "lucide-react";
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
      "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=500&h=300&fit=crop",
    content:
      "George Russell has accused Max Verstappen of BULLYING other drivers for years.\nTheir feud has rapidly escalated.",
    likes: 2400,
    comments: 127,
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
    title: "is a red bull fan, I don't think anyone is wrong but rants from the fans",
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
  const [following, setFollowing] = useState([
    {
      id: 1,
      name: "F1 Drama 101",
      avatar:
        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=48&h=48&fit=crop",
    },
    {
      id: 2,
      name: "Ferrari Depression episod",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop",
    },
    {
      id: 3,
      name: "Wat is red bull doing?",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop",
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
          : post
      )
    );
  };

  return (
    <div className="flex h-screen bg-dark-bg text-white">
      {/* Left Sidebar */}
      <div className="w-48 border-r border-gray-700 flex flex-col bg-dark-bg">
        <div className="p-4 border-b border-gray-700">
          <div className="text-2xl font-bold text-f1-red">
            F1
            <span className="text-xl">
              DRAMA
            </span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4 px-4 py-2 rounded-full hover:bg-gray-900 cursor-pointer">
              <Home size={24} />
              <span className="text-xl">Home</span>
            </div>
            <div className="flex items-center gap-4 px-4 py-2 rounded-full hover:bg-gray-900 cursor-pointer">
              <Search size={24} />
              <span className="text-xl">Search</span>
            </div>
          </div>

          <div>
            <div className="px-4 py-2 text-gray-500 text-sm font-bold">
              Following
            </div>
            <div className="space-y-3 mt-3">
              {following.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center gap-3 px-4 py-2 rounded-full hover:bg-gray-900 cursor-pointer"
                >
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="text-sm truncate">{user.name}</span>
                </div>
              ))}
            </div>
          </div>
        </nav>

        <div className="p-4 border-t border-gray-700">
          <div className="flex items-center gap-3 px-4 py-2 rounded-full hover:bg-gray-900 cursor-pointer">
            <User size={24} />
            <span>Profile</span>
          </div>
          <Link to="/login">
            <div className="flex items-center gap-3 px-4 py-2 rounded-full hover:bg-gray-900 cursor-pointer mt-2">
              <LogOut size={24} />
              <span>Log Out</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Center Feed */}
      <div className="flex-1 max-w-2xl border-r border-gray-700">
        {/* Header */}
        <div className="sticky top-0 bg-dark-bg/95 backdrop-blur border-b border-gray-700 px-4 py-3 z-10">
          <h2 className="text-xl font-bold">Home</h2>
        </div>

        {/* Post Creation Area */}
        <div className="border-b border-gray-700 p-4">
          <div className="flex gap-4">
            <img
              src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=48&h=48&fit=crop"
              alt="Your avatar"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex-1">
              <textarea
                placeholder="What's on your mind?"
                className="w-full bg-transparent text-xl text-white placeholder-gray-600 resize-none outline-none"
                rows={3}
              />
              <div className="flex justify-end mt-4">
                <button className="bg-f1-red text-white px-6 py-2 rounded-full font-bold hover:bg-red-700">
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Posts */}
        {posts.map((post) => (
          <div
            key={post.id}
            className="border-b border-gray-700 p-4 hover:bg-gray-950/50 cursor-pointer transition"
          >
            <div className="flex gap-3">
              <img
                src={post.avatar}
                alt={post.author}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold hover:underline">{post.author}</span>
                  <span className="text-gray-500">@drama · 2h</span>
                </div>

                <div className="mt-3">
                  <h3 className="font-bold text-base">{post.title}</h3>
                  <p className="text-white text-base mt-2 leading-normal">
                    {post.content}
                  </p>

                  {post.image && (
                    <img
                      src={post.image}
                      alt="Post"
                      className="rounded-2xl w-full mt-3 border border-gray-700"
                    />
                  )}
                </div>

                <div className="flex justify-between mt-3 text-gray-500 max-w-xs">
                  <div className="flex items-center gap-2 hover:text-f1-red cursor-pointer">
                    <MessageCircle size={18} />
                    <span className="text-sm">{post.comments}</span>
                  </div>
                  <div
                    className="flex items-center gap-2 hover:text-f1-red cursor-pointer"
                    onClick={() => toggleLike(post.id)}
                  >
                    <Heart
                      size={18}
                      fill={post.liked ? "#C30C0C" : "none"}
                      color={post.liked ? "#C30C0C" : "currentColor"}
                    />
                    <span className="text-sm">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-2 hover:text-f1-red cursor-pointer">
                    <Share size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right Sidebar */}
      <div className="w-80 p-4">
        {/* Search Bar */}
        <div className="bg-gray-900 rounded-full px-4 py-3 mb-6 flex items-center gap-2">
          <Search size={20} className="text-gray-600" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent text-white w-full outline-none placeholder-gray-600"
          />
        </div>

        {/* Recent Section */}
        <div className="bg-gray-900 rounded-3xl p-4 overflow-hidden">
          <h3 className="text-xl font-bold mb-4">Recent</h3>

          <div className="space-y-4">
            {mockRecentPosts.map((item) => (
              <div
                key={item.id}
                className="hover:bg-gray-800 p-2 rounded cursor-pointer transition"
              >
                <div className="flex gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 rounded object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs text-gray-500 font-bold mb-1">
                      {item.source}
                    </div>
                    <div className="text-sm font-bold text-white leading-snug line-clamp-3">
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
