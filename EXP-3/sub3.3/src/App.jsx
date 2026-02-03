import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

/* ===== DASHBOARD ===== */

const Dashboard = () => (
  <div className="page">
    <h1>Dashboard</h1>

    <div className="card">
      <h2>Skills</h2>
      <ul>
        <li>React & Web Development</li>
        <li>Python Programming</li>
        <li>Machine Learning Basics</li>
        <li>UI/UX Design</li>
        <li>Problem Solving</li>
      </ul>
    </div>

    <div className="card">
      <h2>Projects</h2>
      <ul>
        <li>Policyhub</li>
        <li>Tic-Tac-Toe game</li>
        <li>Disease Prediction Model</li>
      </ul>
    </div>

  </div>
);

/* ===== PROFILE ===== */

const Profile = () => (
  <div className="page">
    <h1>Profile</h1>

    <div className="card profile-card">
      <img
        src="yash.jpg"   /* 👈 your image from public folder */
        alt="profile"
        className="profile-pic"
      />

      <div className="details">
        <h2>Yash Dhingra</h2>
        <p>Computer Science & Engineering Student</p>
        <p>Specialization: AI & ML</p>
        <p>University: Chandigarh University</p>
        <p>Email: yash@gmail.com</p>
        <p>Contact: 98521 05691</p>
      </div>
    </div>
  </div>
);

/* ===== APP ===== */

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className = "Logo">
            <p>MyProfile</p>
        </div>
        <div className="nav-links">
          <Link to="/">Dashboard</Link>
          <Link to="/profile">Profile</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;