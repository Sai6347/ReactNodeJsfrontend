import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { eye, eyeOff } from 'react-icons-kit/feather';
import { Icon } from 'react-icons-kit';

const Login = () => {
    const [user, setUser] = useState({mobile:'', password: '', showPassword: false });

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
                // console.log("token : "+token);
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
    

    const handleTogglePassword = () => {
        setUser((prevUser) => ({ ...prevUser, showPassword: !prevUser.showPassword }));
    };

    return (
        <div className="d-flex justify-content-center bgdLogin ">
            <div className="p-3 rounded w-25 login">
            <div className="backBtn">
                <Link to="/">
                    <button type="button" className="btn btn-outline-secondary">Back</button>
                </Link>
            </div>
            <form>
                <h3 className="">Login</h3>
                {/* <div className="home">
                    <Link to="/">
                        <button type="button" className="btn btn-secondary">Home</button>
                    </Link>
                </div> */}
                <div className="form-group">
                    <input type="text" placeholder="Enter Mobile No" onChange={(e) => setUser({ ...user, mobile: e.target.value })} name="mobile" className="form-control mb-3" required />
                </div>
                <div className="form-group">
                <div className="password-input-wrapper">
                    <input type={user.showPassword ? 'text' : 'password'} placeholder="Enter Password" onChange={(e) => setUser({ ...user, password: e.target.value })} name="password" className="form-control mb-3" required />
                    <Icon
                        icon={user.showPassword ? eyeOff : eye}
                        onClick={handleTogglePassword}
                        className="password-toggle-icon"
                    />
                </div>
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
