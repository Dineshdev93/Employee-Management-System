import { useState } from "react";
import emp from "../images/tech.avif";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Addemp() {
  const [date, setDate] = useState("");
  const [employee, setEmployee] = useState("");
  const [level, setLevel] = useState("");
  const [post, setPost] = useState("");
  const [salary, setSalary] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [pinno, setPinno] = useState("");
  const navigate = useNavigate();
  const Save = async () => {
    if (date.length === 0) {
      toast.error("Required date");
    } else if (employee.length === 0) {
      toast.error("Required Name");
    } else if (level.length === 0) {
      toast.error("Plz enter employee level");
    } else if (post.length === 0) {
      toast.error("Plz enter employee post");
    } else if (salary.length === 0) {
      toast.error("Plz enter employee salary");
    } else if (!email) {
      toast.error("Plz enter employee email");
    } else if (!city) {
      toast.error("Plz enter employee city");
    } else if (!pinno) {
      toast.error("Plz enter city pin no");
    } else {
      let data = await fetch("http://localhost:4000/post",{
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
  };
  return (
    <main className="flex flex-wrap  ">
      <section className="flex flex-col mt-4 ml-28 border  border-gray-400 border-separate p-4 rounded-lg">
        <h1 className="text-center text-2xl font-mono">Employee Details</h1>
        <input
          type="date"
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
        <button
          className="mt-2 text-white  p-2  border-separate border bg-blue-400 rounded-lg"
          onClick={Save}
        >
          <i class="fa-regular fa-plus"></i> Add Employee
        </button>
        <ToastContainer position="top-center" />
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
