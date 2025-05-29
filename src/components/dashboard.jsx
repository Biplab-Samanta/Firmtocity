import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth);
        navigate("/");
    };

    return (
        <div className="container mt-5">
            <h2>Welcome to Firm2City Dashboard!</h2>
            <button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button>
        </div>
    );
}

export default Dashboard;
