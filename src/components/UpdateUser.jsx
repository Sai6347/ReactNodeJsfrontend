import React, { useState, useEffect  } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";

const UpdateUser = () =>{
    const [file, setFile] = useState(null);
  const [fileContent, setFileContent] = useState(null);

    const [user, setUser] = useState({
        name : "",
        mobile : "",
        password:"",
        role : "",
        file: null,
    })

    const base_url = "http://localhost:8800";
    
    const navigate = useNavigate()
    const location = useLocation()

    const userId = location.pathname.split("/")[2];
    console.log("User Id "+userId)

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(base_url+`/getEmp/${userId}`);
                const data = response.data;
                setUser(data[0]); 
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();
    }, [userId]);

    const handleChange = (e) => {
        setUser((prev) => ({...prev, [e.target.name]: e.target.value}));
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
        formData.append("name", user.name);
        formData.append("mobile", user.mobile);
        formData.append("password", user.password);
        formData.append("role", user.role);
        formData.append("file", file);

        try {
            await axios.put(base_url+"/editUser/" + userId, formData, {
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
        <div className="d-flex justify-content-center align-items-center">
            <div className="p-3 rounded w-25">
            <h4 className="mb-4">Update User</h4>
            <div className="home">
                <Link to="/">
                    <button type="button" className="btn btn-secondary">Home</button>
                </Link>
            </div>
            <div className="form-group">
                <input type="text" value={user.name} onChange={handleChange} name="name" class="form-control mb-3" required/>
            </div>
            <div className="form-group">
                <input type="text" value={user.mobile} onChange={handleChange} name="mobile" class="form-control mb-3" required/>
            </div>
            <div className="form-group">
                <input type="password" value={user.password} onChange={handleChange} name="password" class="form-control mb-3"/>
            </div>
            <div className="form-group">
                <input type="text" value={user.role} onChange={handleChange} name="role" class="form-control mb-3"/>
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
        </div>
    )
}

export default UpdateUser;