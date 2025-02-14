import { SignInButton } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import Header from "../components/Header";

export default function LandingPage() {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center px-6 relative pl-40 pr-40">
      {/* Glassmorphism Background */}
      <div className="absolute inset-0 bg-gray-800/30 backdrop-blur-lg"></div>

      <motion.header
        className="text-center mb-12 relative z-10 font-mono"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        >
        <h1 className="text-5xl text-white">Welcome to SupaDrive</h1>
        <p className="text-lg text-gray-300 mt-2">
          The ultimate AI-powered cloud storage solution
        </p>
      </motion.header>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 relative z-10 font-mono">
        {/* Features Cards */}
        {[
          { icon: "✨", title: "AI-Powered Search", color: "blue", desc: "Find your files instantly with our intelligent search system." },
          { icon: "☁️", title: "Secure Cloud Storage", color: "cyan", desc: "Store your files safely with SupaDrive’s encrypted cloud storage." },
          { icon: "🔒", title: "Advanced Security", color: "teal", desc: "Your data is protected with end-to-end encryption and 2FA." },
          { icon: "🤝", title: "Seamless Collaboration", color: "purple", desc: "Work together in real-time with easy file sharing and collaboration." }
        ].map((feature, index) => (
          <motion.div
          key={index}
          className={`relative bg-gray-800/60 border border-gray-700 p-6 rounded-xl text-center backdrop-blur-md shadow-xl 
            before:absolute before:-inset-1 before:bg-${feature.color}-500/40 before:blur-lg before:rounded-xl before:opacity-50`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            >
            <div className={`text-${feature.color}-400 text-4xl mb-4`}>{feature.icon}</div>
            <h2 className="text-xl font-semibold text-white">{feature.title}</h2>
            <p className="text-gray-300 mt-2">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Get Started Button */}
      <div className="mt-12 relative z-10">
        <SignInButton mode="modal" redirectUrl="/home">
          <motion.button
            className="px-5 font-mono py-2 bg-gray-950 hover:bg-gray-900 border text-white cursor-pointer font-semibold rounded-lg transition-all
            before:absolute before:-inset-1 before:bg-blue-500/40 before:blur-lg before:rounded-lg before:opacity-50
            hover:before:opacity-80 hover:before:scale-110 relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            >
            Get Started
          </motion.button>
        </SignInButton>
      </div>
    </div>
    </>
  );
}
