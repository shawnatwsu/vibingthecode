"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { UserCircle } from "lucide-react";
import { createClient } from "../../supabase/client";
import { useRouter } from "next/navigation";

export default function UserProfile() {
  const supabase = createClient();
  const router = useRouter();

  return (
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
  );
}
