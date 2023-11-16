import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
// import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [user, setUser] = useState({
        mobile: "",
        password: ""
    });

    const base_url = "http://localhost:8800";
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${base_url}/login`, user,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (response.data.status === "Success") {
                console.log("Success. Response Data: ", response.data);
                const token = response.data.token;
                console.log("token : "+token);
                localStorage.setItem("token", token);
                console.log("Successfully logged in");  
                navigate("/auth");
                
              } else {

                console.error("Login failed", response.data.message);
              }
        } catch (err) {
            console.log(err);
            alert('Please enter Valid Credentials');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="p-3 rounded w-25">
            <form>
                <h3 className="d-flex justify-content-center align-items-center">Login</h3>
                {/* <div className="home">
                    <Link to="/">
                        <button type="button" className="btn btn-secondary">Home</button>
                    </Link>
                </div> */}
                <div className="form-group">
                    <input type="text" placeholder="Enter Mobile No" onChange={(e) => setUser({ ...user, mobile: e.target.value })} name="mobile" className="form-control mb-3" required />
                </div>
                <div className="form-group">
                    <input type="password" placeholder="Enter Password" onChange={(e) => setUser({ ...user, password: e.target.value })} name="password" className="form-control mb-3" required />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <button onClick={handleLogin} className="btn btn-primary">Login</button>
                </div>
            </form>
            </div>
        </div>
    );
}

export default Login;
