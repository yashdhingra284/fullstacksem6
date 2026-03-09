import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import LoggedIn from "./components/Loggedin";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/loggedin" element={<LoggedIn />} />
    </Routes>
  );
}

export default App;