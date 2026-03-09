import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  
  const users = [
    { email: "user@gmail.com", password: "Pass@123" },
    { email: "user@yahoo.co.in", password: "Pass@123" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    
const emailPattern = /^[a-zA-Z0-9]+@(gmail\.com|yahoo\.co\.in)$/;

if (!emailPattern.test(email)) {
  alert(
    "Email must contain only letters/numbers before @ and use gmail.com or yahoo.co.in"
  );
  return;
}


    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    if (!passwordPattern.test(password)) {
      alert(
        "Password must contain:\n" +
        "• Minimum 8 characters\n" +
        "• One uppercase letter\n" +
        "• One lowercase letter\n" +
        "• One number\n" +
        "• One special character"
      );
      return;
    }

   
    const validUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (validUser) {
      navigate("/loggedin");
    } else {
      alert("Incorrect Gmail or Password");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <label>Email:</label><br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />

        <label>Password:</label><br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /><br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;