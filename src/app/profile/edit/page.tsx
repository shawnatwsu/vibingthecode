import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function EditProfile() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/profile"
            className="flex items-center text-gray-400 hover:text-purple-400 transition-colors mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Profile
          </Link>

          <div className="bg-gray-800 rounded-xl border-2 border-purple-500 p-8 mb-8 relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="grid grid-cols-[repeat(50,1fr)] grid-rows-[repeat(50,1fr)] h-full w-full">
                {Array.from({ length: 2500 }).map((_, i) => (
                  <div key={i} className="border border-gray-700"></div>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <h1 className="text-2xl font-bold mb-4">
                Profile Editing Coming Soon
              </h1>
              <p className="text-gray-300 mb-6 max-w-lg">
                We're working on making profile editing available to all users.
                This feature will be available soon!
              </p>
              <Link href="/profile">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-2 border-transparent hover:border-white">
                  Return to Profile
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
