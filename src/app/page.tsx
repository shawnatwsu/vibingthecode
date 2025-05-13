import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PricingCard from "@/components/pricing-card";
import Footer from "@/components/footer";
import { createClient } from "../../supabase/server";
import {
  ArrowUpRight,
  CheckCircle2,
  Zap,
  Shield,
  Users,
  Code,
  MessageSquare,
  UserPlus,
} from "lucide-react";

export default async function Home() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Try to fetch plans, but handle errors gracefully
  let plans = [];
  try {
    const { data, error } = await supabase.functions.invoke(
      "supabase-functions-get-plans",
    );
    if (data && !error) {
      plans = data;
    }
  } catch (e) {
    // Silently handle the error to prevent 500 errors
    console.error("Error fetching plans:", e);
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />

      {/* Features Section */}
      <section className="py-24 bg-gray-800 relative overflow-hidden">
        {/* Pixel art grid overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="grid grid-cols-[repeat(50,1fr)] grid-rows-[repeat(50,1fr)] h-full w-full">
            {Array.from({ length: 2500 }).map((_, i) => (
              <div key={i} className="border border-gray-700"></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Level Up Your Coding
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Join our pixel-perfect community of developers who are changing
              the game.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-6 h-6" />,
                title: "Pair Programming",
                description: "Find coding partners and level up together",
              },
              {
                icon: <MessageSquare className="w-6 h-6" />,
                title: "Community Forum",
                description: "Share knowledge in our retro-styled forums",
              },
              {
                icon: <UserPlus className="w-6 h-6" />,
                title: "Networking",
                description: "Connect with like-minded developers",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "GPT Assistance",
                description: "AI-powered coding help when you need it",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Secure Platform",
                description: "Your code and data stays private",
              },
              {
                icon: <Users className="w-6 h-6" />,
                title: "Hire & Get Hired",
                description: "Showcase your skills to potential clients",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-900 rounded-xl border-2 border-purple-500 hover:border-pink-500 transition-all shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:shadow-[0_0_20px_rgba(236,72,153,0.6)]"
              >
                <div className="text-pink-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-pink-900 to-red-900 text-white relative overflow-hidden">
        {/* Pixel art scanlines */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="h-px bg-white opacity-5 w-full"
              style={{ top: `${i * 10}px` }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-gray-800 bg-opacity-50 rounded-xl border border-purple-500">
              <div className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                500+
              </div>
              <div className="text-purple-200">Active Coders</div>
            </div>
            <div className="p-6 bg-gray-800 bg-opacity-50 rounded-xl border border-pink-500">
              <div className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-500">
                1,000+
              </div>
              <div className="text-pink-200">Coding Sessions</div>
            </div>
            <div className="p-6 bg-gray-800 bg-opacity-50 rounded-xl border border-red-500">
              <div className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-500">
                24/7
              </div>
              <div className="text-red-200">Community Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gray-900 relative" id="pricing">
        {/* Pixel art grid background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="grid grid-cols-[repeat(50,1fr)] grid-rows-[repeat(50,1fr)] h-full w-full">
            {Array.from({ length: 2500 }).map((_, i) => (
              <div key={i} className="border border-gray-700"></div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              One-Time Payment, Lifetime Access
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              No subscriptions. No recurring fees. Just one payment for
              unlimited access.
            </p>
          </div>
          <div className="flex justify-center">
            <PricingCard
              item={{
                id: plans?.[0]?.id || "price_lifetime",
                name: "Lifetime Membership",
                amount: 9900,
                interval: "lifetime",
                popular: true,
              }}
              user={user}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800 relative overflow-hidden">
        {/* Pixel art scanlines */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="h-px bg-white opacity-5 w-full"
              style={{ top: `${i * 10}px` }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Ready to Join the Community?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Level up your coding journey with our vibrant community of
            developers.
          </p>
          <a
            href="/dashboard"
            className="inline-flex items-center px-6 py-3 text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-500 hover:to-pink-500 transition-colors border-2 border-transparent hover:border-white"
          >
            Join VibingTheCode
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
