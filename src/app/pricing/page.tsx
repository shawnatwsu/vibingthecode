import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { createClient } from "../../../supabase/server";
import Link from "next/link";
import { ArrowUpRight, Code, MessageSquare, UserPlus, Zap } from "lucide-react";

export default async function Pricing() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Welcome to VibingTheCode
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Your pixel-perfect coding community awaits
          </p>
        </div>

        {/* Main Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Community Forum",
              description: "Join discussions with fellow coders",
              icon: <MessageSquare className="w-8 h-8 text-pink-500" />,
              href: "/forum",
              color:
                "border-purple-500 hover:border-pink-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]",
            },
            {
              title: "Create Profile",
              description: "Customize your pixel avatar and skills",
              icon: <UserPlus className="w-8 h-8 text-pink-500" />,
              href: "/profile",
              color:
                "border-pink-500 hover:border-purple-500 shadow-[0_0_15px_rgba(236,72,153,0.5)]",
            },
            {
              title: "Pair Programming",
              description: "Find coding partners and level up",
              icon: <Code className="w-8 h-8 text-pink-500" />,
              href: "/code-room",
              color:
                "border-red-500 hover:border-pink-500 shadow-[0_0_15px_rgba(239,68,68,0.5)]",
            },
            {
              title: "Hire a Vibe Coder",
              description: "Find talented developers for your project",
              icon: <Zap className="w-8 h-8 text-pink-500" />,
              href: "/hire",
              color:
                "border-orange-500 hover:border-pink-500 shadow-[0_0_15px_rgba(249,115,22,0.5)]",
            },
          ].map((item, index) => (
            <Link href={item.href} key={index}>
              <div
                className={`p-8 bg-gray-800 rounded-xl border-2 ${item.color} transition-all hover:shadow-[0_0_20px_rgba(236,72,153,0.6)] h-full relative overflow-hidden`}
              >
                {/* Pixel art background */}
                <div className="absolute inset-0 opacity-5 pointer-events-none">
                  <div className="grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] h-full w-full">
                    {Array.from({ length: 400 }).map((_, i) => (
                      <div key={i} className="border border-gray-700"></div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{item.description}</p>
                  <div className="flex items-center text-purple-400 hover:text-pink-400 transition-colors">
                    <span>Explore</span>
                    <ArrowUpRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Ready to start coding?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join our vibrant community of developers today and level up your
            coding journey.
          </p>
          <Link href="/dashboard">
            <Button className="px-8 py-6 text-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-2 border-transparent hover:border-white shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]">
              Go to Dashboard
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
