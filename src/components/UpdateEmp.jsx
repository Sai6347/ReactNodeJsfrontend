import React, { useState, useEffect  } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";

const UpdateEmp = () =>{
    const [file, setFile] = useState(null);
  const [fileContent, setFileContent] = useState(null);

    const [emp, setEmp] = useState({
        name : "",
        mobile : "",
        password:"",
        role : "",
        file: null,
    })

    const base_url = "http://localhost:8800";
    
    const navigate = useNavigate()
    const location = useLocation()

    const empId = location.pathname.split("/")[2];
    console.log("emp Id "+empId)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(base_url+`/getEmp/${empId}`);
                const data = response.data;
                setEmp(data[0]); 
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();
    }, [empId]);

    const handleChange = (e) => {
        setEmp((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    
        const reader = new FileReader();
        reader.onload = (event) => {
          
          setFileContent(event.target.result);
        };
        
        reader.readAsText(selectedFile);
      };

    const handleClick = async (id) => {
        
        const formData = new FormData();
        formData.append("name", emp.name);
        formData.append("mobile", emp.mobile);
        formData.append("password", emp.password);
        formData.append("role", emp.role);
        formData.append("file", file);

        try {
            await axios.put(base_url+"/editEmp/" + empId, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            alert("Details Updated Successfully");
            navigate("/get");
        } catch (err) {
            console.log(err);
        }
    }


    return(
        <div className="form">
            <h4 className="mb-4">Edit Employee</h4>
            <div className="home">
                <Link to="/home">
                    <button type="button" className="btn btn-secondary">Home</button>
                </Link>
            </div>
            <div className="form-group">
                <input type="text" value={emp.name} onChange={handleChange} name="name" class="form-control mb-3" required/>
            </div>
            <div className="form-group">
                <input type="text" value={emp.mobile} onChange={handleChange} name="mobile" class="form-control mb-3" required/>
            </div>
            <div className="form-group">
                <input type="password" value={emp.password} onChange={handleChange} name="password" class="form-control mb-3"/>
            </div>
            <div className="form-group">
                <input type="text" value={emp.role} onChange={handleChange} name="role" class="form-control mb-3"/>
            </div>
            <div className="form-group">
                <input type="file" onChange={handleFileChange} name="file" class="form-control mb-3"/>
            </div>
            {/* <div className="form-group">
                {file && (
                    <img src={URL.createObjectURL(file)} alt="Selected File" width="200" height="200" />
                )}
            </div> */}
            <div className="d-flex justify-content-center align-items-center">
                <button onClick={handleClick} className="btn btn-primary">Update</button>
            </div>
        </div>
    )
}

export default UpdateEmp;