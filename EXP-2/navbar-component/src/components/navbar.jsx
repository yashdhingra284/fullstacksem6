import React from "react";

const navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg shadow"
      style={{ background: "linear-gradient(90deg, #667eea, #764ba2)" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand text-white fw-bold fs-4" href="#">
          <i className="bi bi-bootstrap-fill"></i> MySite
        </a>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold" href="#">
                <i className="bi bi-house-fill"></i> Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white fw-semibold" href="#">
                <i className="bi bi-info-circle-fill"></i> About
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white fw-semibold" href="#">
                <i className="bi bi-gear-fill"></i> Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white fw-semibold" href="#">
                <i className="bi bi-envelope-fill"></i> Contact
              </a>
            </li>

            <li className="nav-item ms-3">
              <button className="btn btn-warning fw-bold rounded-pill px-4">
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
