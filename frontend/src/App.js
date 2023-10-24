import Employee from "./components/Employee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addemp from "./components/Addemp";
import Navbar from "./components/Navbar";
import Edit from "./components/Edit";
import Signup from "./components/Signup";
import Privateroute from "./components/Privateroute";
import Login from "./components/Login"
import React from "react";
function App() {
  return (
    <main>
      <BrowserRouter>
        <div className="mt-4 ">
          <Navbar />
        </div>
        <div className="mt-4">
          <Routes>

            {/* Privateroute Element that controls child element */}
            
            <Route element={<Privateroute />}>
              <Route exact path="/" element={<Employee />} />
              <Route path="/addemp" element={<Addemp />} />
              <Route path="/edit/:id" element={<Edit />} />
            </Route>

            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup />} />
            
          </Routes>
        </div>
      </BrowserRouter>
    </main>
  );
}
export default App;
