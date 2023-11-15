import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home"
import GetEmp from "./components/GetEmp";
import AddUser from "./components/AddUser";
import UpdateUser from "./components/UpdateUser";
import Login from "./components/Login";
import Authentication from "./components/Authentication"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div>
      <h2 className="text-center bg-info">Welcome to User Portal</h2>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/get" element={<GetEmp/>}/>
          <Route path="/add" element={<AddUser/>}/>
          <Route path="/update/:id" element={<UpdateUser/>}/>
          <Route path="/auth" element={<Authentication/>}/>
        </Routes>
      </BrowserRouter>
      {/* <div className="footer">
        <p>&copy </p>
      </div> */}
    </div>
  );
}

export default App;
