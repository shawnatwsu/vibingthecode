import Link from "next/link";
import { createClient } from "../../supabase/server";
import { Button } from "./ui/button";
import { User, UserCircle, Gamepad2, Code } from "lucide-react";
import UserProfile from "./user-profile";

export default async function Navbar() {
  const supabase = createClient();

  const {
    data: { user },
  } = await (await supabase).auth.getUser();

  return (
    <nav className="w-full border-b border-gray-800 bg-gray-900 py-4 text-white">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" prefetch className="text-xl font-bold flex items-center">
          <div className="w-8 h-8 relative mr-2">
            <Gamepad2 className="w-8 h-8 text-purple-500" />
            <Code className="w-4 h-4 text-pink-500 absolute bottom-0 right-0" />
          </div>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            VibingTheCode
          </span>
        </Link>
        <div className="hidden md:flex gap-6 items-center">
          <Link
            href="/forum"
            className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Forum
          </Link>
          <Link
            href="/code-room"
            className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Code Room
          </Link>
          <Link
            href="/profile"
            className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Profile
          </Link>
          <Link
            href="/hire"
            className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Hire
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-md hover:from-purple-500 hover:to-pink-500 transition-colors"
              >
                Dashboard
              </Link>
              <UserProfile />
            </>
          ) : (
            <>
              <Link
                href="/sign-in"
                className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/sign-up"
                className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-md hover:from-purple-500 hover:to-pink-500 transition-colors"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
