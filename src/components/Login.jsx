import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [emp, setEmp] = useState({
        mobile : "",
        password : ""
    });
    
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const base_url = "http://localhost:8800";
    const navigate = useNavigate()


    // const handleLogin = async () => {
    //     try {
    //     const response = await fetch(base_url+'/login', {
    //         method: 'POST',
    //         headers: {
    //         'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({ mobile, password }),
    //     });

    //     if (response.ok) {
    //         console.log("Successfully loggedin");
    //         alert('Login successful');
    //         navigate("/get");
    //     } else {
    //         alert('Invalid credentials');
    //     }
    //     } catch (error) {
    //     console.error('Error during login:', error.message);
    //     }
    // };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
    
            const formData = new FormData();
            formData.append("mobile", emp.mobile);
            formData.append("password", emp.password);

            await axios.post(base_url+"/login", formData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log("Successfully loggedin");
            // alert('Login successful');
            navigate("/get");
        } catch (err) {
            console.log(err);
        }
    };
    

    return(
        <div className="form">
            <form>
            <h3 className="mb-4">Login</h3>
            <div className="home">
                <Link to="/home">
                    <button type="button" className="btn btn-secondary">Home</button>
                </Link>
            </div>
            <div className="form-group">
                <input type="text" placeholder="Enter Mobile No" onChange={(e) => setMobile(e.target.value)} name="mobile" className="form-control mb-3" required/>
            </div>
            <div className="form-group">
                <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} name="password" className="form-control mb-3" required/>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <button onClick={handleLogin} className="btn btn-primary">Login</button>
            </div>
            </form>
        </div>
    //     <div className="form">
    //     <h2>Login</h2>
    //     <form>
    //       <div className="form-group">
    //         <label>Mobile:</label>
    //         <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
    //       </div>
    //       <div className="form-group">
    //         <label>Password:</label>
    //         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    //       </div>
    //       <button type="button" onClick={handleLogin}>
    //         Login
    //       </button>
    //     </form>
    //   </div>
    );

}

export default Login;