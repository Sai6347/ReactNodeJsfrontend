import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Home"
import GetEmp from "./components/GetEmp";
import AddEmp from "./components/AddEmp";
import UpdateEmp from "./components/UpdateEmp";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h2 className="text-center bg-info">Welcome to Employee Portal</h2>

      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/get" element={<GetEmp/>}/>
          <Route path="/add" element={<AddEmp/>}/>
          <Route path="/update/:id" element={<UpdateEmp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
