import { useState } from "react";
import emp from "../images/tech.avif";
import {useNavigate} from "react-router-dom"
function Addemp() {
    const [date , setDate] = useState("")
    const [employee ,setEmployee] = useState("")
    const [level , setLevel] = useState("")
    const [post ,setPost] = useState("")
    const [salary, setSalary] = useState("")
    const [email ,setEmail] = useState("")
    const [city , setCity] = useState("")
    const [pinno , setPinno] = useState("")
      const navigate = useNavigate()
    const Save = async() => {
        console.log({employee,level,salary,email,city,pinno});
        let data = await fetch("http://54.162.174.22:4000/post",{
           method : "Post",
           body : JSON.stringify({date,employee,level,post,salary,email,city,pinno}),
            headers : {
                "content-type" : "application/json"
            }
        })
         data = await data.json()
        
         navigate("/")
         console.log(data);
    }
  return (
    <main className="flex flex-wrap  ">
      <section className="flex flex-col mt-4 ml-28 border  border-gray-400 border-separate p-4 rounded-lg">
        <h1 className="text-center text-2xl font-mono">Employee Details</h1>
        <input type="date"
           className=" border border-separate p-2 w-80  "
           value={date} onChange={(e)=>setDate(e.target.value)}
        />
        <input
          type="text"
          placeholder="Employee Name"
          className=" border border-separate p-2 w-80 mt-2  "
          value={employee} onChange={(e)=>setEmployee(e.target.value)}
        />
        <input
          type="text"
          placeholder="Employee Level"
          className="mt-2 border border-separate p-2 w-80  "
          value={level} onChange={(e)=>setLevel(e.target.value)}

        />
        <input
          type="text"
          placeholder="Employee Post"
          className="mt-2 border border-separate p-2 w-80  "
          value={post} onChange={(e)=>setPost(e.target.value)}

        />
        <input
          type="text"
          placeholder="Employee Salary"
          className="mt-2 border border-separate p-2 w-80  "
          value={salary} onChange={(e)=>setSalary(e.target.value)}

        />
        <input
          type="text"
          placeholder="Employee Email"
          className="mt-2 border border-separate p-2 w-80  "
          value={email} onChange={(e)=>setEmail(e.target.value)}

        />
        <input
          type="text"
          placeholder="Employee City"
          className="mt-2 border border-separate p-2 w-80  "
          value={city} onChange={(e)=>setCity(e.target.value)}

        />
        <input
          type="text"
          placeholder="Employee Pin no"
          className="mt-2 border border-separate p-2 w-80  "
          value={pinno} onChange={(e)=>setPinno(e.target.value)}

        />
        <button className="mt-2 text-white  p-2 text-sm border-separate border bg-blue-400 rounded-lg"
           onClick={Save}
        >
          Add Employee
        </button>
      </section>
      <section className="mt-10 ml-24">
        <img
          src={emp}
          alt="logo"
          className=" h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer  "
        />
      </section>
    </main>
  );
}
export default Addemp;
