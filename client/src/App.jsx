import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
// import SearchPage from "./pages/SearchPage";
// import SettingsPage from "./pages/SettingsPage";
// import StatsPage from "./pages/StatsPage";
// import FilesPage from "./pages/FilesPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page for Signed Out Users */}
        <Route
          path="/"
          element={
            <>
              <SignedIn>
                <Navigate to="/home" />
              </SignedIn>
              <SignedOut>
                <LandingPage />
              </SignedOut>
            </>
          }
        />
        {/* <Route path="/search" element={<SearchPage />} />
        <Route path="/files" element={<FilesPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/settings" element={<SettingsPage />} /> */}
        {/* Home Page for Signed In Users */}
        <Route
          path="/home"
          element={
            <SignedIn>
              <HomePage />
            </SignedIn>
          }
        />

        {/* Redirect unknown routes to Sign In */}
        <Route path="*" element={<RedirectToSignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
