import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.some((u) => u.email === email)) {
      alert("Email already registered!");
      return;
    }
    const newUser = { name, email, password };
    localStorage.setItem("users", JSON.stringify([...users, newUser]));
    alert("Registration successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2 className="register-title">Create Account</h2>
        <p className="register-subtitle">Fill in the details to get started</p>

        <form onSubmit={handleRegister}>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="form-control mb-4"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-success w-100 register-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
