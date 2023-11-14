import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

const GetEmp = () => {

    const [emp, setEmp] = useState([])
    const base_url = "http://localhost:8800";

    useEffect(() => {
        const getAllEmp = async () =>{
            try{
                const res = await axios.get(base_url+"/getEmp")
                setEmp(res.data);
                console.log(res)
            }
            catch(err){
                console.log(err)
            }
        }
        getAllEmp(); 
    }, []);

    const handleDelete = async (id) => {
      try{
          await axios.delete(base_url+"/deleteEmp/"+id, emp)
          alert("Deleted Successfully")
          window.location.reload()
      }
      catch(err){
          console.log(err);
      }
  }

    return (
        <div className="">
          <h4 className="mb-4">Employee Info</h4>
          <div className="home">
                <Link to="/home">
                    <button type="button" className="btn btn-secondary">Home</button>
                </Link>
            </div>
          <div className="emp">
            <table className="table table-hover">
              <thead>
                <tr className="thead-light">
                  <th>Id</th>  
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>Role</th>
                  <th>Document</th>
                  <th rowSpan={2} className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {emp.map((emp) => (
                  <tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.mobile}</td>
                    <td>{emp.role}</td>
                    <td>
                      <a href={base_url+`/getEmpDoc/${emp.id}`} target="_blank" rel="noopener noreferrer">
                        View Document
                      </a>
                    </td>
                    <td><Link to={`/update/${emp.id}`}><button class="btn btn-info">Update</button></Link></td>
                    <td><button class="btn btn-danger" onClick={()=>handleDelete(emp.id)}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-center align-items-center">
          <Link to="/add">
            <button type="button" className="btn btn-outline-secondary">Add Employee</button>
          </Link>
          </div>
        </div>
      );
      
    
}

export default GetEmp;