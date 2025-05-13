import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { createClient } from "../../../supabase/server";
import { redirect } from "next/navigation";
import { MessageSquare, Users, Clock, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Forum() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  // Mock forum threads data
  const forumThreads = [
    {
      id: 1,
      title: "Best practices for pixel-perfect CSS",
      author: "pixelmaster",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=pixelmaster",
      replies: 24,
      views: 156,
      lastActive: "2 hours ago",
      tags: ["CSS", "Design", "Frontend"],
    },
    {
      id: 2,
      title: "Looking for React pair programming partner",
      author: "reactninja",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=reactninja",
      replies: 18,
      views: 89,
      lastActive: "5 hours ago",
      tags: ["React", "Pair Programming", "JavaScript"],
    },
    {
      id: 3,
      title: "GPT-4.1-mini tips and tricks for coding",
      author: "aiwhisperer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=aiwhisperer",
      replies: 42,
      views: 230,
      lastActive: "1 day ago",
      tags: ["AI", "GPT", "Productivity"],
    },
    {
      id: 4,
      title: "Show off your pixel art portfolio websites",
      author: "pixelartist",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=pixelartist",
      replies: 36,
      views: 178,
      lastActive: "3 days ago",
      tags: ["Portfolio", "Pixel Art", "Showcase"],
    },
    {
      id: 5,
      title: "Backend optimization techniques for game servers",
      author: "servermaster",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=servermaster",
      replies: 15,
      views: 102,
      lastActive: "4 days ago",
      tags: ["Backend", "Gaming", "Performance"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Community Forum
          </h1>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-2 border-transparent hover:border-white">
            <PlusCircle className="mr-2 h-4 w-4" /> New Thread
          </Button>
        </div>

        {/* Forum categories */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { name: "General", count: 156 },
            { name: "Pair Programming", count: 89 },
            { name: "Projects", count: 124 },
            { name: "Job Board", count: 47 },
          ].map((category, index) => (
            <div
              key={index}
              className="p-4 bg-gray-800 rounded-lg border border-purple-500 hover:border-pink-500 transition-all cursor-pointer"
            >
              <div className="font-medium text-white">{category.name}</div>
              <div className="text-sm text-gray-400">
                {category.count} threads
              </div>
            </div>
          ))}
        </div>

        {/* Forum threads */}
        <div className="bg-gray-800 rounded-xl border-2 border-purple-500 overflow-hidden relative">
          {/* Pixel art grid overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="grid grid-cols-[repeat(50,1fr)] grid-rows-[repeat(50,1fr)] h-full w-full">
              {Array.from({ length: 2500 }).map((_, i) => (
                <div key={i} className="border border-gray-700"></div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            {forumThreads.map((thread, index) => (
              <Link href={`/forum/${thread.id}`} key={thread.id}>
                <div
                  className={`p-6 hover:bg-gray-700/30 transition-colors ${index !== forumThreads.length - 1 ? "border-b border-gray-700" : ""}`}
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={thread.avatar}
                      alt={thread.author}
                      className="w-10 h-10 rounded-lg border border-purple-500"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-white mb-1">
                        {thread.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {thread.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs rounded-full bg-gray-700 text-purple-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-sm text-gray-400">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" /> {thread.author}
                        </span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center">
                          <MessageSquare className="w-4 h-4 mr-1" />{" "}
                          {thread.replies} replies
                        </span>
                        <span className="mx-2">•</span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" /> {thread.lastActive}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
