import { BrowserRouter, Routes, Route } from "react-router-dom";

// Home Component
function Home() {
  return <h1>Home</h1>;
}

// About Component
function About() {
  return <h1>About</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <div style={containerStyle}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}

// Styling
const containerStyle = {
  backgroundColor: "grey",
  color: "white",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "40px",
};

export default App;
