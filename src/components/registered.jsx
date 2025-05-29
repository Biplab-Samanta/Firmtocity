import { useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [category, setCategory] = useState("Farmer");
    const navigate = useNavigate();

    // Google Auth Provider
    const provider = new GoogleAuthProvider();

    const handleRegister = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            console.log("User Registered:", userCredential.user);
            console.log("Category:", category); // Here you could save it to Firestore later
            navigate("/dashboard");
        } catch (error) {
            alert(error.message);
        }
    };

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log("Google User:", result.user);
            navigate("/dashboard");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="section">
            <div className="abc">
                <h2>Register</h2>

                <select
                    className="form-select mb-3"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="Farmer">Farmer</option>
                    <option value="Admin">Admin</option>
                    <option value="Consumer">Consumer</option>
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

                <button className="btn mb-2" onClick={handleRegister}>Register</button>

                <div className="text-center mt-3">
                    <p>or</p>
                    <button className="btn mb-3" onClick={handleGoogleLogin}>
                        Sign up with Google
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Register;
