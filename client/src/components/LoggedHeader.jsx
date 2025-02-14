import { SignedIn, UserButton } from "@clerk/clerk-react";
import { motion } from "framer-motion";

export default function LoggedHeader() {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-950 py-4 flex justify-between items-center px-6 font-mono border-b border-gray-800 text-white z-50">
      {/* Animated Logo */}
      <motion.h1
        className="text-3xl font-bold text-white tracking-wide"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="relative inline-block text-cyan-400">Supa</span>
        <span className="text-gray-300">
          Drive<span className="-right-1 top-0 text-gray-300 animate-pulse">🚀</span>
        </span>
      </motion.h1>

      {/* User Profile Button */}
      <SignedIn>
        <div className="border text-white rounded-xl">
          <UserButton afterSignOutUrl="/" />
        </div>
      </SignedIn>
    </header>
  );
}
