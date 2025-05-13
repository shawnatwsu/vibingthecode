import Link from "next/link";
import { ArrowUpRight, Check, Code, Gamepad2 } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gray-900 py-20">
      {/* Pixel art grid background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="grid grid-cols-[repeat(50,1fr)] grid-rows-[repeat(50,1fr)] h-full w-full">
          {Array.from({ length: 2500 }).map((_, i) => (
            <div key={i} className="border border-gray-700"></div>
          ))}
        </div>
      </div>

      {/* Neon glow effects */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-purple-600 opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-pink-600 opacity-20 blur-3xl"></div>

      <div className="relative pt-24 pb-32 sm:pt-32 sm:pb-40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Pixel art icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 relative">
                <Gamepad2 className="w-16 h-16 text-purple-500" />
                <Code className="w-8 h-8 text-pink-500 absolute bottom-0 right-0" />
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-8 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                VibingTheCode
              </span>
              <br />
              <span className="text-3xl sm:text-4xl">
                Pixel-Themed Coding Community
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join our retro-styled community where developers connect, code
              together, and level up their skills in a vibrant pixel-art
              environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/sign-up"
                className="inline-flex items-center px-8 py-4 text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-500 hover:to-pink-500 transition-colors text-lg font-medium border-2 border-transparent hover:border-white shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]"
              >
                Join for $99 Lifetime
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                href="#pricing"
                className="inline-flex items-center px-8 py-4 text-white bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors text-lg font-medium border-2 border-purple-500 hover:border-pink-500"
              >
                Learn More
              </Link>
            </div>

            <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>One-time payment</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Lifetime access</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>GPT-4.1-mini assistance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
