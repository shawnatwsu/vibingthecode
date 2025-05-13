import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-800 rounded-xl border-2 border-purple-500 p-8 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="grid grid-cols-[repeat(50,1fr)] grid-rows-[repeat(50,1fr)] h-full w-full">
                {Array.from({ length: 2500 }).map((_, i) => (
                  <div key={i} className="border border-gray-700"></div>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <h1 className="text-3xl font-bold mb-4">Profile Coming Soon</h1>
              <p className="text-gray-300 mb-6 max-w-lg">
                We're working on making user profiles accessible to everyone.
                Check back soon for updates!
              </p>
              <Link href="/">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-2 border-transparent hover:border-white">
                  Return to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
