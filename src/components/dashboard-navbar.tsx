"use client";

import Link from "next/link";
import { createClient } from "../../supabase/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import {
  UserCircle,
  Home,
  Gamepad2,
  Code,
  MessageSquare,
  Users,
  Briefcase,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function DashboardNavbar() {
  const supabase = createClient();
  const router = useRouter();

  return (
    <nav className="w-full border-b border-gray-800 bg-gray-900 py-4 text-white">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            prefetch
            className="text-xl font-bold flex items-center"
          >
            <div className="w-8 h-8 relative mr-2">
              <Gamepad2 className="w-8 h-8 text-purple-500" />
              <Code className="w-4 h-4 text-pink-500 absolute bottom-0 right-0" />
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              VibingTheCode
            </span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/forum"
            className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
          >
            <MessageSquare className="w-4 h-4" /> Forum
          </Link>
          <Link
            href="/code-room"
            className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
          >
            <Code className="w-4 h-4" /> Code Room
          </Link>
          <Link
            href="/profile"
            className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
          >
            <UserCircle className="w-4 h-4" /> Profile
          </Link>
          <Link
            href="/hire"
            className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
          >
            <Briefcase className="w-4 h-4" /> Hire
          </Link>
        </div>
        <div className="flex gap-4 items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-gray-800"
              >
                <UserCircle className="h-6 w-6" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-gray-800 border-gray-700 text-white"
            >
              <DropdownMenuItem
                onClick={async () => {
                  await supabase.auth.signOut();
                  router.push("/");
                }}
                className="hover:bg-gray-700 cursor-pointer"
              >
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
