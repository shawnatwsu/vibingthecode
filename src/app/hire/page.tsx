import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { createClient } from "../../../supabase/server";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Search, Filter, Code, Star, MapPin, DollarSign } from "lucide-react";
import Link from "next/link";

export default async function Hire() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  // Mock developers data
  const developers = [
    {
      id: 1,
      name: "Alex Johnson",
      username: "pixelmaster",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=pixelmaster",
      location: "San Francisco, CA",
      hourlyRate: 85,
      rating: 4.9,
      skills: ["React", "TypeScript", "Node.js", "Pixel Art"],
      bio: "Full-stack developer specializing in pixel-perfect UI and interactive experiences",
    },
    {
      id: 2,
      name: "Sarah Chen",
      username: "codeartist",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=codeartist",
      location: "New York, NY",
      hourlyRate: 95,
      rating: 5.0,
      skills: ["Vue.js", "Three.js", "WebGL", "Animation"],
      bio: "Creative developer focused on interactive 3D experiences and animations",
    },
    {
      id: 3,
      name: "Marcus Williams",
      username: "gamedev",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=gamedev",
      location: "Austin, TX",
      hourlyRate: 75,
      rating: 4.7,
      skills: ["Unity", "C#", "Game Development", "Pixel Art"],
      bio: "Game developer with a passion for retro-styled games and interactive experiences",
    },
    {
      id: 4,
      name: "Priya Sharma",
      username: "backendwizard",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=backendwizard",
      location: "Remote",
      hourlyRate: 90,
      rating: 4.8,
      skills: ["Python", "Django", "GraphQL", "Database Design"],
      bio: "Backend specialist with expertise in scalable architectures and API design",
    },
    {
      id: 5,
      name: "Jordan Lee",
      username: "uxengineer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=uxengineer",
      location: "Seattle, WA",
      hourlyRate: 80,
      rating: 4.9,
      skills: ["UX Design", "Figma", "React", "Tailwind CSS"],
      bio: "UX engineer bridging the gap between design and development",
    },
    {
      id: 6,
      name: "Taylor Rodriguez",
      username: "devopsmaster",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=devopsmaster",
      location: "Chicago, IL",
      hourlyRate: 100,
      rating: 4.8,
      skills: ["DevOps", "AWS", "Docker", "CI/CD"],
      bio: "DevOps engineer specializing in cloud infrastructure and automation",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Hire a Vibe Coder
          </h1>
        </div>

        {/* Search and Filter */}
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
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search by skill, name, or location..."
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 pl-10 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                />
              </div>
              <Button className="bg-gray-700 text-white border border-gray-600 hover:border-purple-500 hover:bg-gray-600 flex items-center gap-2">
                <Filter className="h-4 w-4" /> Filters
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-2 border-transparent hover:border-white">
                Search
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 text-sm rounded-full bg-gray-700 text-white border border-purple-500">
                All Skills
              </span>
              {[
                "React",
                "TypeScript",
                "Node.js",
                "Python",
                "Game Dev",
                "Pixel Art",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-full bg-gray-700 text-gray-300 hover:border-pink-500 border border-gray-600 cursor-pointer hover:text-white transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Developers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {developers.map((dev) => (
            <Link href={`/profile/${dev.id}`} key={dev.id}>
              <div className="bg-gray-800 rounded-xl border-2 border-pink-500 hover:border-purple-500 transition-all overflow-hidden relative h-full">
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
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={dev.avatar}
                      alt={dev.name}
                      className="w-16 h-16 rounded-lg border-2 border-purple-500"
                    />
                    <div>
                      <h3 className="text-lg font-medium text-white">
                        {dev.name}
                      </h3>
                      <p className="text-gray-400 text-sm">@{dev.username}</p>
                      <div className="flex items-center mt-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="text-gray-300 text-sm ml-1">
                          {dev.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4">{dev.bio}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {dev.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 text-xs rounded-full bg-gray-700 text-purple-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-4 h-4 mr-1 text-gray-500" />
                      {dev.location}
                    </div>
                    <div className="flex items-center text-white font-medium">
                      <DollarSign className="w-4 h-4 mr-1 text-green-500" />$
                      {dev.hourlyRate}/hr
                    </div>
                  </div>

                  <Button className="w-full mt-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-2 border-transparent hover:border-white">
                    View Profile
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
