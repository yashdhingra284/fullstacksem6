import React, { useState } from "react";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark" : "light"}>
      <div className="box">
        <h1>Theme Toggle SPA</h1>
        <p>The current theme is <b>{dark ? "Dark" : "Light"}</b></p>

        <button onClick={() => setDark(!dark)}>
          Switch to {dark ? "Light" : "Dark"} Mode
        </button>
      </div>
    </div>
  );
}

export default App;