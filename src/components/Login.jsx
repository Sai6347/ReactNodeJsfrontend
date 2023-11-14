import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [emp, setEmp] = useState({
        mobile: "",
        password: ""
    });

    const base_url = "http://localhost:8800";
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${base_url}/login`, emp,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            console.log("Successfully logged in");  
            navigate("/get");
        } catch (err) {
            console.log(err);
            alert('Please enter Valid Credentials');
        }
    };

    return (
        <div className="form">
            <form>
                <h3 className="mb-4">Login</h3>
                <div className="home">
                    <Link to="/home">
                        <button type="button" className="btn btn-secondary">Home</button>
                    </Link>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Enter Mobile No" onChange={(e) => setEmp({ ...emp, mobile: e.target.value })} name="mobile" className="form-control mb-3" required />
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Enter Password" onChange={(e) => setEmp({ ...emp, password: e.target.value })} name="password" className="form-control mb-3" required />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={handleLogin} className="btn btn-primary">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
