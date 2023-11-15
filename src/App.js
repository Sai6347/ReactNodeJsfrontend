import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home"
import GetEmp from "./components/GetEmp";
import AddEmp from "./components/AddEmp";
import UpdateEmp from "./components/UpdateEmp";
import Login from "./components/Login";
import Authentication from "./components/Authentication"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div>
      <h2 className="text-center bg-info">Welcome to Employee Portal</h2>
      </div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/get" element={<GetEmp/>}/>
          <Route path="/add" element={<AddEmp/>}/>
          <Route path="/update/:id" element={<UpdateEmp/>}/>
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
