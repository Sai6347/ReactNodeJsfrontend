import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home"
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import Login from "./components/Login";
import Authentication from "./components/Authentication";
import AddProperty from "./components/AddProperty";
import 'bootstrap/dist/css/bootstrap.min.css';
import GetUser from "./components/GetUser";
import GetProperty from "./components/GetProperty";

function App() {
  return (
    <div className="App">
      
      <header className="d-flex justify-content-center align-items-center display-4">
        {/* <img src="http://localhost:5173/src/assets/img/logos/logo_white.png" className="logo"
        alt="logo"
        style={{ maxWidth: '250px', maxHeight: 'auto', borderRadius: '10px' }}/> */}
        <h2>Welcome to PMS</h2>
      </header>
      

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/get" element={<GetUser/>}/>
          <Route path="/signup" element={<AddUser/>}/>
          <Route path="/update/:id" element={<UpdateUser/>}/>
          <Route path="/auth" element={<Authentication/>}/>
          <Route path="/addprop" element={<AddProperty/>}/>
          <Route path="/getProp" element={<GetProperty/>}/>
        </Routes>
      </BrowserRouter>

      
      <footer>
        <p>copyright &copy; 2023 Property Management System. All Rights Reserved</p>
      </footer>
      
      
    </div>
  );
}

export default App;
