import React from "react";
import { useState ,useEffect } from "react";
import mern from "../images/mern.png";
import {useParams,useNavigate } from 'react-router-dom'
export default function Edit() {
  const [date, setDate] = useState("");
  const [employee, setEmployee] = useState("");
  const [level, setLevel] = useState("");
  const [post, setPost] = useState("");
  const [salary, setSalary] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [pinno, setPinno] = useState("");
  const param = useParams()
  const navigate = useNavigate()

  useEffect(()=>{
   getdata()
  },[])

  const getdata =async () => {
    let result = await fetch(`http://54.162.174.22:4000/getone/${param.id}`)
    result = await result.json();
    setDate(result.date)
    setEmployee(result.employee)
    setLevel(result.level)
    setPost(result.post)
    setSalary(result.salary)
    setEmail(result.email)
    setCity(result.city)
    setPinno(result.pinno)
  }

  const edit =async()=>{
   let result = await fetch(`http://54.162.174.22:4000/edit/${param.id}`,{
    method : 'Put',
    body : JSON.stringify({date,employee,level,post,salary,email,city,pinno}),
    headers : {
      "content-type" : "application/json"
    }
   })
   result = await result.json()
   console.warn(result);
   navigate("/")
  }

  return (
    <div>
      <main className="flex flex-wrap  ">
        <section className="flex flex-col mt-4 ml-28 border  border-gray-400 border-separate p-4 rounded-lg">
          <h1 className="text-center text-2xl font-mono">Employee Details</h1>
          <input
            type="text"
            className=" border border-separate p-2 w-80  "
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="text"
            placeholder="Employee Name"
            className=" border border-separate p-2 w-80 mt-2  "
            value={employee}
            onChange={(e) => setEmployee(e.target.value)}
          />
          <input
            type="text"
            placeholder="Employee Level"
            className="mt-2 border border-separate p-2 w-80  "
            value={level}
            onChange={(e) => setLevel(e.target.value)}
          />
          <input
            type="text"
            placeholder="Employee Post"
            className="mt-2 border border-separate p-2 w-80  "
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
          <input
            type="text"
            placeholder="Employee Salary"
            className="mt-2 border border-separate p-2 w-80  "
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
          <input
            type="text"
            placeholder="Employee Email"
            className="mt-2 border border-separate p-2 w-80  "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Employee City"
            className="mt-2 border border-separate p-2 w-80  "
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Employee Pin no"
            className="mt-2 border border-separate p-2 w-80  "
            value={pinno}
            onChange={(e) => setPinno(e.target.value)}
          />
          <button className="mt-2 text-white   p-2 text-sm border-separate border bg-blue-400 rounded-lg"
             onClick={edit}
          >
            Update
          </button>
        </section>

        <section className="mt-10 ml-24">
          <img
            src={mern}
            alt="logo"
            className="mt-10 ml-24 h-auto max-w-lg transition-all duration-300 rounded-lg cursor-pointer  "
          />
        </section>
      </main>
    </div>
  );
}
