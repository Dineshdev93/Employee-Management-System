import Employee from "./components/Employee";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Addemp from "./components/Addemp";
// import Navbar from "./components/Navbar";
import Edit from "./components/Edit";
function App() {
  return (
    <main>
      <BrowserRouter>
        <div className="mt-4 ">

          {/* <Navbar /> */}
        </div>
        <div className="mt-4">
          <Routes>
            <Route exact path="/" element={<Employee />} />
            <Route path="/addemp" element={<Addemp />} />
            <Route path="/edit/:id" element={<Edit/>}/>
          </Routes>
        </div>

      </BrowserRouter>


    </main>
  )
}
export default App;
