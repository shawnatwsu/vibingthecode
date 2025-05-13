import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { createClient } from "../../../supabase/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Code, Users, Clock, PlusCircle, Search, Zap } from "lucide-react";

export default async function CodeRoom() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  // Mock active coding sessions
  const activeSessions = [
    {
      id: 1,
      title: "Building a Pixel Art Editor",
      participants: [
        {
          name: "pixelmaster",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=pixelmaster",
        },
        {
          name: "artcoder",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=artcoder",
        },
      ],
      language: "JavaScript",
      startedAt: "45 minutes ago",
      tags: ["Canvas", "Pixel Art", "Frontend"],
    },
    {
      id: 2,
      title: "Optimizing React Performance",
      participants: [
        {
          name: "reactninja",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=reactninja",
        },
      ],
      language: "TypeScript",
      startedAt: "2 hours ago",
      tags: ["React", "Performance", "Hooks"],
    },
    {
      id: 3,
      title: "Building a Retro Game with Phaser",
      participants: [
        {
          name: "gamedev",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=gamedev",
        },
        {
          name: "pixelartist",
          avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=pixelartist",
        },
      ],
      language: "JavaScript",
      startedAt: "30 minutes ago",
      tags: ["Phaser", "Game Dev", "Canvas"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Code Room
          </h1>
          <div className="flex gap-4">
            <Button className="bg-gray-800 text-white border border-purple-500 hover:border-pink-500 hover:bg-gray-700">
              <Search className="mr-2 h-4 w-4" /> Find Room
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-2 border-transparent hover:border-white">
              <PlusCircle className="mr-2 h-4 w-4" /> New Room
            </Button>
          </div>
        </div>

        {/* Match Queue */}
        <div className="bg-gray-800 rounded-xl border-2 border-purple-500 p-6 mb-8 relative overflow-hidden">
          {/* Pixel art grid overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="grid grid-cols-[repeat(50,1fr)] grid-rows-[repeat(50,1fr)] h-full w-full">
              {Array.from({ length: 2500 }).map((_, i) => (
                <div key={i} className="border border-gray-700"></div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Zap className="w-5 h-5 mr-2 text-purple-500" />
              Quick Match
            </h2>

            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              <p className="text-gray-300">
                Join the match queue to find a coding partner. Our system will
                match you with someone based on your skills and interests.
              </p>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-2 border-transparent hover:border-white min-w-[200px]">
                Join Queue
              </Button>
            </div>
          </div>
        </div>

        {/* Active Sessions */}
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Code className="w-6 h-6 mr-2 text-pink-500" />
          Active Coding Sessions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeSessions.map((session) => (
            <div
              key={session.id}
              className="bg-gray-800 rounded-xl border-2 border-pink-500 hover:border-purple-500 transition-all overflow-hidden relative"
            >
              {/* Pixel art scanlines */}
              <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-px bg-white opacity-5 w-full"
                    style={{ top: `${i * 10}px` }}
                  ></div>
                ))}
              </div>

              <div className="relative z-10 p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-medium text-white">
                    {session.title}
                  </h3>
                  <span className="px-2 py-1 text-xs rounded-full bg-gray-700 text-purple-300">
                    {session.language}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {session.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-full bg-gray-700 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {session.participants.map((participant) => (
                      <img
                        key={participant.name}
                        src={participant.avatar}
                        alt={participant.name}
                        className="w-8 h-8 rounded-full border border-gray-800"
                        title={participant.name}
                      />
                    ))}
                    <div className="w-8 h-8 rounded-full bg-gray-700 border border-gray-800 flex items-center justify-center text-xs text-gray-300">
                      +
                    </div>
                  </div>

                  <div className="flex items-center text-xs text-gray-400">
                    <Clock className="w-3 h-3 mr-1" />
                    {session.startedAt}
                  </div>
                </div>

                <Button className="w-full mt-4 bg-gray-700 hover:bg-gray-600 text-white border border-pink-500">
                  Join Session
                </Button>
              </div>
            </div>
          ))}

          {/* Create New Session Card */}
          <div className="bg-gray-800 rounded-xl border-2 border-dashed border-gray-600 hover:border-purple-500 transition-all p-6 flex flex-col items-center justify-center text-center h-[250px]">
            <PlusCircle className="w-12 h-12 text-gray-600 mb-4" />
            <h3 className="text-lg font-medium text-gray-400 mb-2">
              Create New Session
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              Start a new coding room and invite others to join
            </p>
            <Button className="bg-gray-700 hover:bg-gray-600 text-white border border-gray-600 hover:border-purple-500">
              Create Room
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
