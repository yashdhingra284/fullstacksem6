import React from 'react';

function App() {
  return (
    <div className="container mt-4">

      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark mb-4">
        <span className="navbar-brand mb-0 h1">
          Bootstrap React UI
        </span>
      </nav>

      {/* Card */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Welcome</h5>
          <p className="card-text">
            This is a simple UI designed using Bootstrap components in React.
          </p>
          <button className="btn btn-primary">Click Me</button>
        </div>
      </div>

      {/* Form */}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Login Form</h5>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" />
          </div>

          <button className="btn btn-success">Login</button>
        </div>
      </div>

    </div>
  );
}

export default App;
