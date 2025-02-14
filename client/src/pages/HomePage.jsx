import { SignedOut, RedirectToSignIn, useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import LoggedHeader from "../components/LoggedHeader";
import SearchComponent from "../components/SearchComponent";
// import { Outlet } from "react-router-dom";
import FilesPage from "./FilesPage.jsx";
import SearchPage from "./SearchPage.jsx";
import StatsPage from "./StatsPage.jsx";
import SettingsPage from "./SettingsPage.jsx";

export default function HomePage() {
  const { user } = useUser();
  const [isFirstLogin, setIsFirstLogin] = useState(false);
  const [selectedPage, setSelectedPage] = useState("SearchPage"); // Default to SearchComponent

  useEffect(() => {
    const firstTime = localStorage.getItem(`firstLogin-${user?.id}`);
    if (!firstTime) {
      setIsFirstLogin(true);
      localStorage.setItem(`firstLogin-${user?.id}`, "true");
    }
  }, [user]);

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
            <li className={`p-3 border text-gray-400 rounded-xl cursor-pointer flex justify-between items-center relative
  transition-all duration-300 ease-in-out 
  ${
    selectedPage === "SearchPage"
      ? "text-gray bg-gradient-to-r from-blue-950 to-purple-950 shadow-[0_0_10px_2px_rgba(96,165,250,0.5)] border-gray-500"
      : "bg-gray-900 border-gray-700 hover:text-white hover:bg-gradient-to-r from-blue-950 to-purple-950 hover:shadow-[0_0_10px_2px_rgba(96,165,250,0.3)] hover:border-gray-400"
  }
`}
              onClick={() => setSelectedPage("SearchPage")}
            >
              AI Search
              <span>🔎</span>
            </li>
            <li className={`p-3 border text-gray-400 rounded-xl cursor-pointer flex justify-between items-center relative
  transition-all duration-300 ease-in-out 
  ${
    selectedPage === "FilesPage"
      ? " bg-gradient-to-r from-blue-950 to-purple-950 shadow-[0_0_10px_2px_rgba(96,165,250,0.5)] border-gray-500"
      : "bg-gray-900 border-gray-700 hover:text-white hover:bg-gradient-to-r from-blue-950 to-purple-950 hover:shadow-[0_0_10px_2px_rgba(96,165,250,0.3)] hover:border-gray-400"
  }
`}onClick={() => setSelectedPage("FilesPage")}
            >
              Files
              <span>📁</span>
            </li>
            <li className={`p-3 border text-gray-400 rounded-xl cursor-pointer flex justify-between items-center relative
  transition-all duration-300 ease-in-out 
  ${
    selectedPage === "StatsPage"
      ? "text-gray bg-gradient-to-r from-blue-950 to-purple-950 shadow-[0_0_10px_2px_rgba(96,165,250,0.5)] border-gray-500"
      : "bg-gray-900 border-gray-700 hover:text-white hover:bg-gradient-to-r from-blue-950 to-purple-950 hover:shadow-[0_0_10px_2px_rgba(96,165,250,0.3)] hover:border-gray-400"
  }
`}onClick={() => setSelectedPage("StatsPage")}
            >
              Storage Stats
              <span>📊</span>
            </li>
            <li className={`p-3 border text-gray-400 rounded-xl cursor-pointer flex justify-between items-center relative
  transition-all duration-300 ease-in-out 
  ${
    selectedPage === "SettingsPage"
      ? "text-gray bg-gradient-to-r from-blue-950 to-purple-950 shadow-[0_0_10px_2px_rgba(96,165,250,0.5)] border-gray-500"
      : "bg-gray-900 border-gray-700 hover:text-white hover:bg-gradient-to-r from-blue-950 to-purple-950 hover:shadow-[0_0_10px_2px_rgba(96,165,250,0.3)] hover:border-gray-400"
  }
`}onClick={() => setSelectedPage("SettingsPage")}
            >
              Settings
              <span>⚙️</span>
            </li>
          </ul>
        </div>

        {/* Right Section: Scrollable Content */}
        <div className="ml-[20%] w-[80%] h-full overflow-y-auto bg-gray-950 text-white">
          {isFirstLogin ? (
            <div className="text-center">
              <h1 className="text-4xl font-bold">Welcome to SupaDrive</h1>
              <p className="text-lg text-gray-400 mt-2">
                Your secure cloud storage
              </p>
            </div>
          ) : // Dynamically render the correct component
          selectedPage === "FilesPage" ? (
            <FilesPage />
          ) : selectedPage === "SearchPage" ? (
            <SearchPage />
          ) : selectedPage === "StatsPage" ? (
            <StatsPage />
          ) : selectedPage === "SettingsPage" ? (
            <SettingsPage />
          ) : (
            <div className="text-gray-400">Page not found</div>
          ) // Default case
          }
        </div>
      </div>
    </>
  );
}
