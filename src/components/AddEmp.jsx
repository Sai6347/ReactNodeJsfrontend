import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";

const AddEmp = () => {
    const [emp, setEmp] = useState({
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


    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const base_url = "http://localhost:8800";
    
    const handleClick = async (e) => {
        e.preventDefault();
        try {
    
            const formData = new FormData();
            formData.append("name", emp.name);
            formData.append("mobile", emp.mobile);
            formData.append("role", emp.role);
            formData.append("file", file); 
            formData.append("password", emp.password);

            await axios.post(base_url+"/addEmp", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            alert("Registration completed Successfully");
            navigate("/get");
        } catch (err) {
            console.log(err);
        }
    };
    

    console.log(emp);
    return(

        <div className="form">
            <form>
            <h4 className="mb-4">Add Employee</h4>
            <div className="home">
                <Link to="/home">
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
    )
}

export default AddEmp;