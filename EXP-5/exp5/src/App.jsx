import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { lazy, Suspense, useState, useEffect } from "react";
import "./App.css";

const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));

// Fake loader on every navigation
function PageLoader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [children]);

  return loading ? (
    <div className="loader-container">
      <div className="spinner"></div>
      <p>Loading Page...</p>
    </div>
  ) : (
    children
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <nav className="navbar">
          <NavLink to="/" className="nav-btn">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-btn">
            About
          </NavLink>
          <NavLink to="/contact" className="nav-btn">
            Contact
          </NavLink>
        </nav>

        <div className="card">
          <Suspense fallback={<h2 className="loading">Loading...</h2>}>
            <Routes>
              <Route
                path="/"
                element={
                  <PageLoader>
                    <Home />
                  </PageLoader>
                }
              />
              <Route
                path="/about"
                element={
                  <PageLoader>
                    <About />
                  </PageLoader>
                }
              />
              <Route
                path="/contact"
                element={
                  <PageLoader>
                    <Contact />
                  </PageLoader>
                }
              />
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}