import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Authentication = () => {

    const [auth, setAuth] = useState(false);
    const [name, setName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuth = async () => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const response = await axios.get('http://localhost:8800', {
                  headers: {
                    Authorization: `Bearer ${token}`,
                  },
                });
      
                if (response.data === "Success") {
                  setAuth(true);
                  setName(response.data.name);
                  navigate('/auth');


                } else {
                  setAuth(false);
                  
                }
              } catch (error) {
                console.error(error);
                setAuth(false);
              }
        } else {
            setAuth(false);
        }
        };  
        checkAuth();
    }, [navigate])

    const handleLogout = () => {
        localStorage.removeItem("token");
        setAuth(false);
        setName('');
    };

    const isTokenExpired = () => {
        const token = localStorage.getItem('token');
    
        if (!token) {
          return true; 
        }
    
        const decodedToken = JSON.parse(atob(token.split('.')[1])); 
    
        return decodedToken.exp * 1000 < Date.now(); 
      };

    return(
        <div className="d-flex justify-content-center align-items-center">
          {auth ? (
            <div>
              <h2>You are Authorized - {name}</h2>
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
              <div className="d-flex justify-content-center align-items-center">
                <Link to="/get">
                    <button type="button" className="btn btn-success ">Get UserData</button>
                </Link>
              </div>
              <div className="addproperty">
                <Link to="/addprop">
                    <button type="button" className="btn btn-success ">Add Property</button>
                </Link>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Link to="/getProp">
                    <button type="button" className="btn btn-success ">Get Property</button>
                </Link>
              </div>

            </div>
          ) : (
            isTokenExpired() && (
              <div>
                <h4>Token Expired...Login Now</h4>
                
                <Link to="/login" className="btn btn-primary">
                  Login
                </Link>
          </div>
        )
      )}
    </div>
    );
};

export default Authentication;