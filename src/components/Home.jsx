import React from "react";
import "./style.css";
// import styled from 'styled-components';
 import { Link } from "react-router-dom";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Home = () =>{

    // const BackgroundImage = styled.div`
    //     background-image: url('https://wallpaper-house.com/data/out/7/wallpaper2you_171801.jpg') ;
    //     background-size:cover ;
    //     width:100%;
    //     height:100vh;
    //     background-repeat: no-repeat ;
    // `;

    // const [emp, setEmp] = useState({
    //     mobile : "",
    //     password : ""
    // });

    // const navigate = useNavigate()

    // const handleChange = (e) => {
    //     setEmp((prev) => ({...prev, [e.target.name]: e.target.value}));
    // };

    // const handleClick = async (e) => {
    //     e.preventDefault();
    //     try {
    
    //         const formData = new FormData();
    //         formData.append("mobile", emp.mobile);
    //         formData.append("password", emp.password);

    //         await axios.get("http://localhost:8800/login", formData, {
        
    //         });

    //         alert("Logged In Successfully");
    //         navigate("/get");
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    return(
        // <BackgroundImage>
        <div className="bgd">
            <h4>Home Page</h4>
            <div className="">
                <div className="addbutton">
                    <Link to="/add">
                        <button type="button" className="btn btn-success ">Add Employee</button>
                    </Link>
                </div>
                <div className="getbutton">
                    <Link to="/get">
                        <button type="button" className="btn btn-light">Get Employee</button>
                    </Link>
                </div>
            </div>
            
            {/* <div class="form">
                <form>
                <h4 class="heading">Enter Your Details</h4>
                <div class="form-group">
                    <input type="text" placeholder="Enter Mobile No" onChange={handleChange} name="mobile" class="mb-3" required/>
                </div>
                <div class="form-group">
                    <input type="password" placeholder="Enter Password" onChange={handleChange} name="password" class="mb-3" required/>
                </div>
                <div class="d-flex justify-content-center align-items-center">
                <button onClick={handleClick} class="btn btn-primary">Login</button>
                </div>
                </form>
            </div> */}
            <footer>
            
            </footer>
        </div>
        
        /* </BackgroundImage> */
        );
}

export default Home;