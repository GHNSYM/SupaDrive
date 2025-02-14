import { motion } from "framer-motion";

export default function SearchComponent() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <motion.div
        className="relative w-full max-w-3xl p-1 bg-opacity-10 rounded-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <input
          type="text"
          placeholder="Search your files..."
          className="w-full py-4 px-6 text-xl bg-gray-800 bg-opacity-30 backdrop-blur-md border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-lg"
        />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-30 blur-lg"></div>
      </motion.div>
    </div>
  );
}
