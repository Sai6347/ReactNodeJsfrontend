import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';

const AddProperty = (props) => {
  const [property, setProperty] = useState({
    userId:"",
    propertyType: "",
    propertyDesc: "",
    street: "",
    city:"",
    state:"",
    country:"",
    zipcode:"",
    bedrooms:"",
    bathrooms:"",
    availableDate:"",
    availabilityStatus:"",
    units:"",
    location:""
  });
  const [file, setFile] = useState(null);
  const base_url = "http://localhost:8800";
  const navigate = useNavigate();

  const handleChange = (e) => {
    setProperty((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {

        const formData = new FormData();
        formData.append("userId", property.userId);
        formData.append("propertyType", property.propertyType);
        formData.append("propertyDesc", property.propertyDesc);
        formData.append("street", property.street);
        formData.append("city", property.city);
        formData.append("state", property.state);
        formData.append("country", property.country);
        formData.append("zipcode", property.zipcode);
        formData.append("bedrooms", property.bedrooms);
        formData.append("bathrooms", property.bathrooms);
        formData.append("availableDate", property.availableDate);
        formData.append("availabilityStatus", property.availabilityStatus);
        formData.append("units", property.units);
        formData.append("location", property.location);
        formData.append("file", file); 
        

        await axios.post(base_url+"/addProperty", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
        });

        alert("Property Registered Successfully");
        navigate("/auth");
        } catch (err) {
        console.log(err);
    }
    };
    const handleReset = () => {
        setProperty({
          firstName: ''
        });
      };
    
      

    
  return (
    <div className="d-flex justify-content-center align-items-center bgdProperty">
      <div className="p-5 w-50">
        <div className="backBtn">
            <Link to="/auth">
                <button type="button" className="btn btn-outline-secondary">Back</button>
            </Link>
        </div>
        <form>
            <h4 className="mb-4">Add Property</h4>
            <div className="form-group">
                <input type="text" placeholder="Enter UserId" onChange={handleChange} name="userId" className="form-control mb-3" required />
            </div>
            <label>Property Registration</label>
            <div className="form-group">
                <select onChange={handleChange} name="propertyType" className="form-control mb-3" required>
                <option value=""> Select </option>
                <option value="apartment">Flat or Apartment</option>
                <option value="singleFamily">Single-Family Homes</option>
                <option value="condonium">Condominium</option>
                <option value="duplex">Duplex</option>
                <option value="studentHouse">Student Housing</option>
                <option value="other">Other</option>
                </select>
            </div>
            <div className="form-group">
                <textarea type="text" placeholder="Tell me something about property" onChange={handleChange} name="propertyDesc" className="form-control mb-3" required></textarea>
            </div>
            <div className="address">
                <p>Address</p>
                <div className="form-group">
                <input type="text" placeholder="Street Address" onChange={handleChange} name="street" className="form-control mb-3" required />
                </div>
                <div className="form-group">
                <input type="text" placeholder="City" onChange={handleChange} name="city" className="form-control mb-3" required/>
                </div>
                <div className="form-group">
                <input type="text" placeholder="State" onChange={handleChange} name="state" className="form-control mb-3" required/>
                </div>
                <div className="form-group">
                <input type="text" placeholder="Country" onChange={handleChange} name="country" className="form-control mb-3" required/>
                </div>
                <div className="form-group">
                <input type="text" placeholder="Zip Code" onChange={handleChange} name="zipcode" className="form-control mb-3" required />
                </div>
            </div>
            <div className="form-group">
                <input type="number" placeholder="No of Bedrooms" onChange={handleChange} name="bedrooms" className="form-control mb-3" required />
            </div>
            <div className="form-group">
                <input type="number" placeholder="No of Bathrooms" onChange={handleChange} name="bathrooms" className="form-control mb-3" required />
            </div>
            <label>Availability Date</label>
            <div className="form-group">
                <input
                type="date" onChange={handleChange} name="availableDate" className="form-control mb-3" required />
            </div>
            <label>Availabilty Status</label>
            <div className="form-group">
                <select onChange={handleChange} name="availabilityStatus" className="form-control mb-3" required >
                <option value=""> Select </option>
                <option value="available">Available</option>
                <option value="pending">Pending</option>
                <option value="rented">Rented</option>
                </select>
            </div>
            <div className="form-group">
                <input type="number" placeholder="No of Units" onChange={handleChange} name="units" className="form-control mb-3" required />
            </div>
            <div className="form-group">
                <input type="text" placeholder="Location (latitude & longitude)" onChange={handleChange} name="location" className="form-control mb-3" required />
                <p></p>
            </div>
            <div className="form-group">
                <input type="file" onChange={handleFileChange} name="file" className="form-control mb-3" required multiple/>
                </div>
            <div className="d-flex justify-content-center align-items-center">
                <button onClick={handleClick} className="btn btn-success">Add</button>
                <button type="reset" className="btn btn-secondary btn-reset" onClick={handleReset}>Reset</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
