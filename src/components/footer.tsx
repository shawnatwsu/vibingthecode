import Link from "next/link";
import { Twitter, Linkedin, Github, Gamepad2, Code } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 border-t border-gray-700 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Product Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#features"
                  className="text-gray-400 hover:text-purple-400"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-gray-400 hover:text-purple-400"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-400 hover:text-purple-400"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/code-room"
                  className="text-gray-400 hover:text-purple-400"
                >
                  Code Room
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/forum"
                  className="text-gray-400 hover:text-purple-400"
                >
                  Forum
                </Link>
              </li>
              <li>
                <Link
                  href="/hire"
                  className="text-gray-400 hover:text-purple-400"
                >
                  Hire Coders
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="text-gray-400 hover:text-purple-400"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-400">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-400">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-400">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-400">
                  Community
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-400">
                  Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-400">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-400">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-400">
                  Security
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-purple-400">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-700">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-8 h-8 relative mr-2">
              <Gamepad2 className="w-8 h-8 text-purple-500" />
              <Code className="w-4 h-4 text-pink-500 absolute bottom-0 right-0" />
            </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 font-bold">
              VibingTheCode
            </span>
            <span className="text-gray-400 ml-2">
              © {currentYear} All rights reserved.
            </span>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-purple-400">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400">
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
