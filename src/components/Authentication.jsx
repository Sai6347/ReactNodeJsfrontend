import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Authentication() {

    const [auth, setAuth] = useState(false);
    const [message, setMessage] =useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8800')
        .then(res => {
            console.log(res);
            if(res.data === "Success") {
                setAuth(true)
                setName(res.data.name);
                console.log("Successs");
                navigate('/get')
            }else{
                setAuth(false)
                setMessage(res.data.Error)
            }
        })
        .catch(err => {
            console.error(err);
        // .then(err => console.log(err))
        });
    }, [navigate])

    const handleLogout = () => {
        
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    
        setAuth(false);
        // setName('');
    };

    return(
        <div className="mb-4">{

            auth ?
            <div>
            <h2>You are Authorised - {name}</h2>
            <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            {/* <div className="home">
                <Link to="/get">
                    <button type="button" className="btn btn-secondary">Get Data</button>
                </Link>
                </div> */}
            </div>
            :
            <div>
                <h3>{message}</h3>
                <h3>Login Now</h3>
                <Link to="/login" className="btn btn-primary"> Login </Link>
            </div>
        }
        </div>
    )
}

export default Authentication;