import DashboardNavbar from "@/components/dashboard-navbar";
import { createClient } from "../../../supabase/server";
import {
  InfoIcon,
  UserCircle,
  MessageSquare,
  Code,
  Zap,
  Users,
} from "lucide-react";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Footer from "@/components/footer";

export default async function Dashboard() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <DashboardNavbar />
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <header className="flex flex-col gap-4 mb-8">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Dashboard
          </h1>
          <div className="bg-gray-800/50 text-sm p-3 px-4 rounded-lg text-gray-300 flex gap-2 items-center border border-purple-500">
            <InfoIcon size="14" className="text-purple-400" />
            <span>
              Welcome to VibingTheCode! Your pixel-themed coding community
              awaits.
            </span>
          </div>
        </header>

        {/* Quick Actions */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Zap className="mr-2 h-5 w-5 text-pink-500" /> Quick Actions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Link href="/forum">
              <div className="bg-gray-800 p-4 rounded-xl border border-purple-500 hover:border-pink-500 transition-all hover:shadow-[0_0_10px_rgba(168,85,247,0.3)]">
                <MessageSquare className="h-6 w-6 text-purple-500 mb-2" />
                <h3 className="font-medium">Community Forum</h3>
                <p className="text-sm text-gray-400">Join discussions</p>
              </div>
            </Link>
            <Link href="/code-room">
              <div className="bg-gray-800 p-4 rounded-xl border border-pink-500 hover:border-purple-500 transition-all hover:shadow-[0_0_10px_rgba(236,72,153,0.3)]">
                <Code className="h-6 w-6 text-pink-500 mb-2" />
                <h3 className="font-medium">Code Room</h3>
                <p className="text-sm text-gray-400">Find coding partners</p>
              </div>
            </Link>
            <Link href="/profile">
              <div className="bg-gray-800 p-4 rounded-xl border border-red-500 hover:border-pink-500 transition-all hover:shadow-[0_0_10px_rgba(239,68,68,0.3)]">
                <UserCircle className="h-6 w-6 text-red-500 mb-2" />
                <h3 className="font-medium">My Profile</h3>
                <p className="text-sm text-gray-400">Edit your profile</p>
              </div>
            </Link>
            <Link href="/hire">
              <div className="bg-gray-800 p-4 rounded-xl border border-orange-500 hover:border-pink-500 transition-all hover:shadow-[0_0_10px_rgba(249,115,22,0.3)]">
                <Users className="h-6 w-6 text-orange-500 mb-2" />
                <h3 className="font-medium">Hire Coders</h3>
                <p className="text-sm text-gray-400">Find talent</p>
              </div>
            </Link>
          </div>
        </section>

        {/* User Profile Section */}
        <section className="bg-gray-800 rounded-xl p-6 border border-purple-500 shadow-sm mb-8 relative overflow-hidden">
          {/* Pixel art grid overlay */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="grid grid-cols-[repeat(50,1fr)] grid-rows-[repeat(50,1fr)] h-full w-full">
              {Array.from({ length: 2500 }).map((_, i) => (
                <div key={i} className="border border-gray-700"></div>
              ))}
            </div>
          </div>

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-lg border-2 border-purple-500 overflow-hidden bg-gray-700">
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.id}`}
                  alt="Avatar"
                  className="w-full h-full"
                />
              </div>
              <div>
                <h2 className="font-semibold text-xl">
                  {user.user_metadata?.full_name || "Pixel Coder"}
                </h2>
                <p className="text-sm text-gray-400">{user.email}</p>
              </div>
              <div className="ml-auto">
                <Link href="/profile">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-2 border-transparent hover:border-white">
                    Edit Profile
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-lg p-4 overflow-hidden">
              <h3 className="text-sm font-medium mb-2 text-gray-300">
                Account Information
              </h3>
              <pre className="text-xs font-mono max-h-48 overflow-auto text-gray-400">
                {JSON.stringify(user, null, 2)}
              </pre>
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Users className="mr-2 h-5 w-5 text-pink-500" /> Community Stats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800 p-4 rounded-xl border border-purple-500">
              <div className="text-3xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                500+
              </div>
              <div className="text-sm text-gray-400">Active Coders</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl border border-pink-500">
              <div className="text-3xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-500">
                1,000+
              </div>
              <div className="text-sm text-gray-400">Coding Sessions</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-xl border border-red-500">
              <div className="text-3xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
                24/7
              </div>
              <div className="text-sm text-gray-400">Community Support</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
