import { useState } from "react";
import "./Login.css";

function LoginPage() {
  /* UseState For Password and Username */
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!username.trim() || !password.trim()) {
        alert("Please fill in all fields");
        return;
    }
    
    console.log("Username:", username);
    console.log("Password:", password);

  };

  return (
    <section className="LoginContainer">
        <form onSubmit={handleSubmit}>
            
            <h2 className="logo">FusionHub</h2>
            <p className="subtitle">Sign in to your account</p>

            <label htmlFor="username">Username</label>
            <input
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="password">Password</label>
            <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">Login</button>

            <div className="login-links">
            <a href="#">Forgot password?</a>
            </div>

        </form>
    </section>
  );
}

export default LoginPage;