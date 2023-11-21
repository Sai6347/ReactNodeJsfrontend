import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./style.css";

const AddUser = () => {
    const [user, setUser] = useState({
        firstName : "",
        lastName : "",
        email : "",
        mobile : "",
        password : "",
        socialmedia : ""
    });

    const [file, setFile] = useState(null);
    const navigate = useNavigate()

    const handleChange = (e) => {
        setUser((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    axios.defaults.withCredentials = true;
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const base_url = "http://localhost:8800";
    
    const handleClick = async (e) => {
        e.preventDefault();
        try {
    
            const formData = new FormData();
            formData.append("firstName", user.firstName);
            formData.append("lastName", user.lastName);
            formData.append("email", user.email);
            formData.append("mobile", user.mobile);
            formData.append("password", user.password);
            formData.append("socialmedia", user.socialmedia);
            formData.append("file", file); 
        
            await axios.post(base_url+"/addUser", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
            });

            alert("Registration completed Successfully");
            navigate("/login");
        } catch (err) {
            console.log(err);
        }
    };

    const handleReset = () => {
        setUser({
          firstName: '',
          lastName: '',
          email: '',
          mobile: '',
          password: '',
          socialmedia: '',
        });
      };
    

    // console.log(user);
    return(

        <div className="d-flex justify-content-center align-items-center ">
            <div className="p-3 rounded w-25 bgd1">
            <form>
            <h4 className="mb-4">User Signup</h4>
            <div className="form-group">
                <input type="text" placeholder=" First Name " onChange={handleChange} name="firstName" className="form-control mb-3" required/>
            </div>
            <div className="form-group">
                <input type="text" placeholder=" Last Name " onChange={handleChange} name="lastName" className="form-control mb-3" required/>
            </div>
            <div className="form-group">
                <input type="email" placeholder=" Email " onChange={handleChange} name="email" className="form-control mb-3" required/>
            </div>
            <div className="form-group">
                <input type="text" placeholder=" Mobile No " onChange={handleChange} name="mobile" className="form-control mb-3" required/>
            </div>
            <div className="form-group">
                <input type="password" placeholder="Enter Password" onChange={handleChange} name="password" className="form-control mb-3" required/>
            </div>
            <div className="form-group">
                <input type="text" placeholder=" Social Media Account " onChange={handleChange} name="socialmedia" className="form-control mb-3" />
            </div>
            <div className="form-group">
                <input type="file" onChange={handleFileChange} name="file" className="form-control mb-3" required multiple/>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <button onClick={handleClick} className="btn btn-primary">Add</button>
                <button type="reset" className="btn btn-secondary btn-reset" onClick={handleReset}>Reset</button>
            </div>

            </form>
            </div>
        </div>
    )
}

export default AddUser;