import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate, Link } from "react-router-dom";
import './style.css';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [category, setCategory] = useState("Farmer");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert(`Logged in as ${category}`);
            navigate("/dashboard");
        } catch (error) {
            alert(error.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            alert(`Logged in with Google as ${category}`);
            navigate("/dashboard");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="section">
            <div className="abc">
                <h2>Login</h2>

                <label>Select Category:</label>
                <select
                    className="form-select mb-3"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option>Farmer</option>
                    <option>Admin</option>
                    <option>Consumer</option>
                </select>

                <input
                    className="form-control mb-3"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />

                <input
                    className="form-control mb-3"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />

                <button className="btn w-100 mb-2" onClick={handleLogin}>Login</button>
                <button className="btn w-100 mb-2" onClick={handleGoogleLogin}>Login with Google</button>

                <p className="mt-3">New user? <Link to="/register">Register here</Link></p>
            </div>
        </div>
    );
}
export default Login;
