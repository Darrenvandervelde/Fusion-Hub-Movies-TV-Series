import { useState } from "react";
import "./Login.css";


/* Username and Password */
const [username,setUsername] = useState("");
const [password, setPassword] = useState("");

/* Submit button */
const handleSubmit = (e) => {
    e.preventDefault();

    console.log ("Username:", username);
    console.log ("Password:", password);
}

/* Basic Validation */
if (!username || !password) {
    alert("Please fill out the fields")
    return;
}

function LoginPage() {}
    return( 
        <>
            <section id="LoginContainer" className="LoginContainer">
                <form onSubmit={handleSubmit}>

                    {/* Username */}
                    <label htmlFor="Username">Username</label>
                    <input 
                    id="Username"
                    name="Username"
                    type="Text" 
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} // targets password usestate const {username}
                    />

                    {/* Password */}
                    <label htmlFor="Password">Password</label>
                    <input
                    id="Password"
                    type="Password" 
                    placeholder="Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // targets password usestate const {password}
                    />

                    <button type="submit">Login</button>
                </form>
            </section>
        </>
    )
}

export default LoginPage;