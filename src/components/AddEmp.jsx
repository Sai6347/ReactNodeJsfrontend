import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";

const AddEmp = () => {
    const [user, setEmp] = useState({
        name : "",
        mobile : "",
        role : "",
        password : ""
    });

    const [file, setFile] = useState(null);
    const navigate = useNavigate()

    const handleChange = (e) => {
        setEmp((prev) => ({...prev, [e.target.name]: e.target.value}));
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
            formData.append("name", user.name);
            formData.append("mobile", user.mobile);
            formData.append("role", user.role);
            formData.append("file", file); 
            formData.append("password", user.password);

            await axios.post(base_url+"/addEmp", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
            });

            alert("Registration completed Successfully");
            navigate("/get");
        } catch (err) {
            console.log(err);
        }
    };
    

    console.log(user);
    return(

        <div className="d-flex justify-content-center align-items-center">
            <div className="p-3 rounded w-25">
            <form>
            <h4 className="mb-4">User Registration</h4>
            <div className="home">
                <Link to="/">
                    <button type="button" className="btn btn-secondary">Home</button>
                </Link>
            </div>
            <div className="form-group">
                <input type="text" placeholder="Enter Name" onChange={handleChange} name="name" className="form-control mb-3" required/>
            </div>
            <div className="form-group">
                <input type="text" placeholder="Enter Mobile No" onChange={handleChange} name="mobile" className="form-control mb-3" required/>
            </div>
            <div className="form-group">
                <input type="password" placeholder="Enter Password" onChange={handleChange} name="password" className="form-control mb-3" required/>
            </div>
            <div className="form-group">
                <input type="text" placeholder="Enter Role" onChange={handleChange} name="role" className="form-control mb-3" required/>
            </div>
            <div className="form-group">
                <input type="file" onChange={handleFileChange} name="file" className="form-control mb-3" required/>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <button onClick={handleClick} className="btn btn-primary">Add</button>
            </div>
            </form>
            </div>
        </div>
    )
}

export default AddEmp;