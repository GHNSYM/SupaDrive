import { SignedIn, SignedOut, SignInButton } from "@clerk/clerk-react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className=" mx-auto bg-gray-900 py-4 flex justify-between items-center px-6 font-mono">
      {/* Animated Logo */}
      <motion.h1
        className="text-3xl font-bold text-white tracking-wide"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="relative ml-30 inline-block text-cyan-400">Supa</span>
        <span className="text-gray-300">Drive
            <span className=" -right-1 top-0 text-gray-300 animate-pulse">🚀</span>
        </span>
      </motion.h1>

      {/* Sign-In Button */}
      <SignedOut>
      <SignInButton mode="modal" redirectUrl="/home">
        <motion.button
          className="px-5 mr-30 py-2 bg-gray-950 hover:bg-gray-900 border text-white  cursor-pointer font-semibold rounded-lg transition-all
          before:absolute before:-inset-1 before:bg-blue-500/40 before:blur-lg before:rounded-lg before:opacity-50
          hover:before:opacity-80 hover:before:scale-110 relative"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign In
        </motion.button>
      </SignInButton>
      </SignedOut>
    </header>
  );
}
