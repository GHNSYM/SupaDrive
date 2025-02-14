import { SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import LoggedHeader from "../components/LoggedHeader";

export default function HomePage() {
  return (
    <>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-50">
        <LoggedHeader />
      </div>

      <div className=" mx-auto flex h-screen pt-15 font-mono">
        {/* Fixed Sidebar (Dashboard) */}
        <div className="fixed left-0 top-15 w-[20%] h-[calc(100vh)] bg-gray-950 text-white p-6 border-r border-gray-800 rounded-lg overflow-y-auto">
          <h2 className="text-2xl font-semibold">Dashboard</h2>
          <ul className="mt-4 space-y-3">
            <li className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer">Files</li>
            <li className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer">Storage Stats</li>
            <li className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 cursor-pointer">Settings</li>
          </ul>
        </div>

        {/* Scrollable Right Section */}
        <div className="ml-[20%] w-[80%] h-full overflow-y-auto p-5 bg-gray-950 text-white">
          <h1 className="text-4xl font-bold">Welcome to SupaDrive</h1>
          <p className="text-lg text-gray-400 mt-2">Your secure cloud storage</p>
        </div>
      </div>
    </>
  );
}
