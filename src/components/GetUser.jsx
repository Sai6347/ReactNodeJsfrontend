import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import Login from "./Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

const GetUser = () => {

    const [user, setUser] = useState([])

    const base_url = "http://localhost:8800";

    useEffect(() => {
        const getAllUser = async () =>{
            try{
                const res = await axios.get(base_url+"/getUser")
                setUser(res.data);
                console.log(res)
            }
            catch(err){
                console.log(err)
            }
        }
        getAllUser(); 
    }, []);

  /*}  const handleDelete = async (id) => {
      try{
          await axios.delete(base_url+"/deleteEmp/"+id, user)
          alert("Deleted Successfully")
          window.location.reload()
      }
      catch(err){
          console.log(err);
      }
  }*/

    return (
        <div className="justify-content-center align-items-center">
          <div className="backBtnget">
                <Link to="/auth">
                    <button type="button" className="btn btn-outline-secondary">Back</button>
                </Link>
            </div>
          <h4 className="mb-4">User Information</h4>
          <div className="">
            <table className="table table-hover">
              <thead>
                <tr className="thead-light">
                  <th>Id</th>  
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Social Media</th>
                  <th>Role</th>
                  <th>Registered Date</th>
                  <th>Profile Picture</th>
                  {/* <th rowSpan={2} className="text-center">Actions</th> */}
                </tr>
              </thead>
              <tbody>
                {user.map((user) => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.email}</td>
                    <td>{user.mobile_number}</td>
                    <td>{user.social_media_account}</td>
                    <td>{user.register_date}</td>
                    <td>{user.role}</td>
                    <td>
                      {/* <a href={base_url+`/getUserDoc/${user.id}`} target="_blank" rel="noopener noreferrer">
                        View Image
                      </a> */}
                      <a href={base_url+`/getUserDoc/${user.id}`} target="_blank" rel="noopener noreferrer">
                    <img
                        src={base_url + `/getUserDoc/${user.id}`}
                        alt={`Property ${user.id}`}
                        style={{ maxWidth: '50px', maxHeight: '50px', borderRadius: '50%' }}
                    />
                    </a>
                    </td>
                    {/* <td><Link to={`/update/${user.id}`}><button class="btn btn-info">Update</button></Link></td>
                    <td><button class="btn btn-danger" onClick={()=>handleDelete(user.id)}>Delete</button></td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-center align-items-center">
          <Link to="/signup">
            <button type="button" className="btn btn-outline-secondary">Add User</button>
          </Link>
          </div>
        </div>
      );
      
    
}

export default GetUser;