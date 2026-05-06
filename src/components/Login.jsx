import { useState } from "react";
import "./Login.css";

function LoginPage() {
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
      
      {/* LEFT SIDE - LOGIN */}
      <form onSubmit={handleSubmit} className="loginForm">

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

      {/* RIGHT SIDE - CHAT BOX */}
      <div className="chatBox">
        <h3>Chat Box</h3>

        <div className="chatMessages">
          <p className="bot">Hello 👋 How can I help you?</p>
        </div>

        <div className="chatInput">
          <input type="text" placeholder="Type a message..." />
          <button>Send</button>
        </div>
      </div>

    </section>
  );
}

export default LoginPage;