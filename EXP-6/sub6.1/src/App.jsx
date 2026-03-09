import React, { useState } from "react";
import "./App.css";

function App() {

  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const fname = data.get("fname");
    const lname = data.get("lname");
    const address = data.get("address");
    const dob = data.get("dob");
    const skills = data.getAll("skills");

    alert(
`First Name: ${fname}
Last Name: ${lname}
Gender: ${gender}
Address: ${address}
DOB: ${dob}
Skills: ${skills.join(", ")}`
    );

    form.reset();
    setGender("");
  };

  const handleClear = () => {
    document.querySelector("form").reset();
    setGender("");
  };

  return (
    <div className="form1">

      <div className="heads">
        <h1>FORM</h1>
      </div>

      <form onSubmit={handleSubmit}>

        {/* Name Section */}
        <div className="name">

          <div className="fname">
            <label htmlFor="fnamein">First Name:</label>
            <input
              type="text"
              id="fnamein"
              name="fname"
              placeholder="Enter your First name"
              required
            />
          </div>

          <div className="lname">
            <label htmlFor="lnamein">Last Name:</label>
            <input
              type="text"
              id="lnamein"
              name="lname"
              placeholder="Enter your Last name"
              required
            />
          </div>

        </div>


        {/* Gender Section */}
        <div className="gender">

          <p id="gendertitle">Gender:</p>

          <div className="genderval">

            <label>
              <input
                type="radio"
                name="genderval"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>

            <label>
              <input
                type="radio"
                name="genderval"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>

          </div>

        </div>


        {/* Address Section */}
        <div className="Address">
          <label>Address:</label>
          <textarea name="address" placeholder="Enter your address"></textarea>
        </div>


        {/* DOB Section */}
        <div className="DOB">
          <label>Date of Birth:</label>
          <input type="date" name="dob" max="2026-02-24" />
        </div>


        {/* Skills Section */}
        <div className="skills">

          <p id="skilltitle">Skills</p>

          <div className="skillflex">

            <label>
              <input type="checkbox" name="skills" value="Java" />
              Java
            </label>

            <label>
              <input type="checkbox" name="skills" value="Python" />
              Python
            </label>

            <label>
              <input type="checkbox" name="skills" value="DSA" />
              DSA
            </label>

            <label>
              <input type="checkbox" name="skills" value="EDA" />
              EDA
            </label>

          </div>

        </div>


        {/* Buttons */}
        <div className="buttons">

          <button type="submit">Submit</button>

          <button type="button" onClick={handleClear}>
            Clear Form
          </button>

        </div>

      </form>

    </div>
  );
}

export default App;