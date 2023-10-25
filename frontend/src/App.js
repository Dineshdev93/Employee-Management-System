import React from "react";
import Employee from "./components/Employee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addemp from "./components/Addemp";
import Navbar from "./components/Navbar";
import Edit from "./components/Edit";
import Signup from "./components/Signup";
import Privateroute from "./components/Privateroute";
import Login from "./components/Login"
import Notify from "./components/Notify";
function App() {
  return (
    <main>
      <Notify/>
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
