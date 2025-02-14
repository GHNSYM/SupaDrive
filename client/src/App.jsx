import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";

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
