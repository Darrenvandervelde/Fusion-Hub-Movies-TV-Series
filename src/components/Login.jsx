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

    if(username.length < 3) {
        alert("Username needs to be at least 3 letters");
        return;
    }

    if(password.length < 3) {
        alert("Password needs to be at least 3 letters");
        return;
    }
    
    console.log("Username:", username);
    console.log("Password:", password);

  };

  return (
    <section className="LoginContainer">
      <form onSubmit={handleSubmit}>
        
        {/* Username */}
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {/* Password */}
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
    </section>
  );
}

export default LoginPage;