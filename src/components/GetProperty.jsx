import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

const Getproperty = () => {

    const [property, setProperty] = useState([])

    const base_url = "http://localhost:8800";

    useEffect(() => {
        const getAllProperty = async () =>{
            try{
                const res = await axios.get(base_url+"/getProperty")
                setProperty(res.data);
                console.log(res)
            }
            catch(err){
                console.log(err)
            }
        }
        getAllProperty(); 
    }, []);

   /* const handleDelete = async (id) => {
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
          <h4 className="mb-4">Property Information</h4>
          <div className="">
            <table className="table table-hover">
              <thead>
                <tr className="thead-light">
                  <th>Id</th>
                  <th>User Id</th>  
                  <th>Property Type</th>
                  <th>Property Desc</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Zipcode</th>
                  <th>Availability Status</th>
                  <th>Available From</th>
                  <th>Location</th>
                  <th>Image</th>
                  {/* <th rowSpan={2} className="text-center">Actions</th> */}
                </tr>
              </thead>
              <tbody>
                {property.map((property) => (
                  <tr key={property.id}>
                    <td>{property.id}</td>
                    <td>{property.user_id}</td>
                    <td>{property.property_type}</td>
                    <td>{property.property_desc}</td>
                    <td>{property.street_address}</td>
                    <td>{property.city}</td>
                    <td>{property.state}</td>
                    <td>{property.zipcode}</td>
                    <td>{property.availability_status}</td>
                    <td>{property.available_date_from}</td>
                    <td>{property.location}</td>
                    <td>
                    <a href={base_url+`/getPropertyImg/${property.property_images}`} target="_blank" rel="noopener noreferrer">
                    <img src={base_url + `/getPropertyImg/${property.property_images}`}
                        alt={`Property ${property.property_images}`}
                        style={{ maxWidth: '85px', maxHeight: '55px', borderRadius: '10px' }}
                    />
                    </a>
                    </td>
                    {/*<td>
                      <a href={base_url+`/getPropertyImg/${property.id}`} target="_blank" rel="noopener noreferrer">
                        View Image
                      </a>
                    </td>
                     <td><Link to={`/update/${user.id}`}><button class="btn btn-info">Update</button></Link></td>
                    <td><button class="btn btn-danger" onClick={()=>handleDelete(user.id)}>Delete</button></td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
      
    
}

export default Getproperty;