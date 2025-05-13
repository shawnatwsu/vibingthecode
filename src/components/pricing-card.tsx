"use client";

import { User } from "@supabase/supabase-js";
import { Button } from "./ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { supabase } from "../../supabase/supabase";
import { Check, Sparkles } from "lucide-react";

export default function PricingCard({
  item,
  user,
}: {
  item: any;
  user: User | null;
}) {
  // Handle checkout process
  const handleCheckout = async (priceId: string) => {
    if (!user) {
      // Redirect to login if user is not authenticated
      window.location.href = "/sign-in?redirect=pricing";
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke(
        "supabase-functions-create-checkout",
        {
          body: {
            price_id: priceId,
            user_id: user.id,
            return_url: `${window.location.origin}/dashboard`,
          },
          headers: {
            "X-Customer-Email": user.email || "",
          },
        },
      );

      if (error) {
        throw error;
      }

      // Redirect to Stripe checkout
      if (data?.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL returned");
      }
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  return (
    <Card className="w-[350px] relative overflow-hidden bg-gray-800 border-2 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.5)]">
      {/* Pixel art background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="grid grid-cols-[repeat(20,1fr)] grid-rows-[repeat(20,1fr)] h-full w-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div key={i} className="border border-gray-700"></div>
          ))}
        </div>
      </div>

      <CardHeader className="relative">
        <div className="px-4 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full w-fit mb-4 flex items-center">
          <Sparkles className="w-4 h-4 mr-1" />
          Lifetime Deal
        </div>
        <CardTitle className="text-2xl font-bold tracking-tight text-white">
          {item.name}
        </CardTitle>
        <CardDescription className="flex items-baseline gap-2 mt-2">
          <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            ${item?.amount / 100}
          </span>
          <span className="text-gray-400">one-time payment</span>
        </CardDescription>

        <div className="mt-6 space-y-3">
          {[
            "Lifetime access to all features",
            "Forum participation",
            "Pair programming matching",
            "GPT-4.1-mini assistance",
            "Custom pixel avatar",
            "Developer profile page",
          ].map((feature, index) => (
            <div key={index} className="flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-2" />
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
      </CardHeader>
      <CardFooter className="relative">
        <Button
          onClick={async () => {
            await handleCheckout(item.id);
          }}
          className="w-full py-6 text-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white border-2 border-transparent hover:border-white"
        >
          Join VibingTheCode
        </Button>
      </CardFooter>
    </Card>
  );
}
