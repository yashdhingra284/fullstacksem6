import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const courses = [
  {
    id: 1,
    title: "React Basics",
    desc: "Learn React fundamentals",
    duration: "4 Weeks",
  },
  {
    id: 2,
    title: "Python for Data Science",
    desc: "Python for data analysis",
    duration: "6 Weeks",
  },
  {
    id: 3,
    title: "Machine Learning",
    desc: "Introduction to ML concepts",
    duration: "8 Weeks",
  },
];

function App() {
  return (
    <BrowserRouter>
      {/* VIEWPORT MARGIN WRAPPER */}
      <div className="app-wrapper">

        {/* NAVBAR */}

{/* NAVBAR */}
<nav className="app-navbar shadow-sm mb-4">
  <div className="container-fluid navbar-row">

    {/* LEFT: BRAND */}
    <div className="navbar-brand-text">
      Course Portal
    </div>

    {/* CENTER: NAV LINKS */}
    <div className="nav-center">
      <Link to="/" className="nav-link-custom">
        Home
      </Link>
      <Link to="/my-courses" className="nav-link-custom">
        My Courses
      </Link>
      <Link to="/feedback" className="nav-link-custom">
        Feedback
      </Link>
    </div>

    {/* RIGHT: ACTION BUTTONS */}
    <div className="nav-right">
      <Button variant="contained">
        Login
      </Button>
      <Button variant="outlined">
        Register
      </Button>
    </div>

  </div>
</nav>



        {/* ROUTES */}
        <Routes>

          {/* HOME / VIEW COURSES */}
          <Route
            path="/"
            element={
              <div className="section">
                <h2 className="fw-bold mb-4">
                  Available Courses
                </h2>

                <div className="container-fluid">
                  <div className="row g-4">
                    {courses.map(course => (
<div className="col-12 col-md-6 col-lg-4 mb-4" key={course.id}>
  <Card className="h-100 shadow-sm">

                          <CardContent className="p-4">
                            <Typography variant="h6" gutterBottom>
                              {course.title}
                            </Typography>

                            <Typography color="text.secondary">
                              {course.desc}
                            </Typography>

                            <Typography className="mt-2 text-muted">
                              Duration: {course.duration}
                            </Typography>

                            <Button
                              variant="contained"
                              size="large"
                              fullWidth
                              className="mt-4"
                            >
                              Enroll
                            </Button>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            }
          />

          {/* PLACEHOLDER ROUTES */}
          <Route
            path="/my-courses"
            element={
              <h2 className="section text-center">
                My Courses
              </h2>
            }
          />

          <Route
            path="/feedback"
            element={
              <h2 className="section text-center">
                Feedback
              </h2>
            }
          />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
