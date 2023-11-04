import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import  { faPencil } from "@fortawesome/free-solid-svg-icons";
function Employee() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    getapi();
  }, []);
  const getapi = async () => {
    let empdata = await fetch("http://localhost:4000");
    empdata = await empdata.json();
    setdata(empdata);
  };

  const deltetpost = async (id) => {
    let result = await fetch(`http://localhost:4000/delete/${id}`, {
      method: "delete",
    });
    result = await result.json();
    if (result) {
      getapi();
      alert("Record has been deleted");
    }
  };

  //set image
  const [image, setImage] = React.useState("");
  const setProfile = (e) => {
    setImage(e.target.files[0]);
  };

  const [preview, setPreview] = React.useState("");

  useEffect(() => {
    if (image) {
      setPreview(URL.createObjectURL(image));
    }
  }, [image]);

  return (
    <main>
      <div className="float-right">
        <input type="file" onChange={setProfile} />
        <h4>
          <b>Upload Image</b>
        </h4>
      </div>

      <div className="flex flex-col ml-6">
        <img
          src={preview ? preview : "/man.png"}
          className="w-14 rounded-lg ml-3"alt=""
        />
        <span className="">
          <b className="text-blue-400">Admin Profile</b>
        </span>
      </div>
      <h1 className="text-3xl  font-bold bg-white text-center text-black p-3 mt-3 m-3 border">
        Employee Management system
      </h1>
      <div className="flex flex-col m-2">
        <table className=" text-center border border-separate border-slate-400 mt-2 rounded-sm">
          <thead>
            <tr>
              <td className="border bg-slate-500 text-white font-serif p-2 rounded-sm">
                Sr no.
              </td>

              <td className="border bg-slate-500 text-white font-serif p-2 rounded-sm">
                Date{" "}
              </td>
              <td className="border bg-slate-500 text-white font-serif p-2 rounded-sm">
                Employee{" "}
              </td>
              <td className="border bg-slate-500 text-white font-serif p-2 rounded-sm">
                Level
              </td>
              <td className="border bg-slate-500 text-white font-serif p-2 rounded-sm">
                Post
              </td>

              <td className="border bg-slate-500 text-white font-serif p-2 rounded-sm">
                Email{" "}
              </td>
              <td className="border bg-slate-500 text-white font-serif p-2 rounded-sm">
                Salary
              </td>
              <td className="border bg-slate-500 text-white font-serif p-2 rounded-sm">
                City
              </td>
              <td className="border bg-slate-500 text-white font-serif p-2 rounded-sm">
                Pin No{" "}
              </td>
              <td className="border bg-slate-500 text-white font-serif p-2 rounded-sm">
                Delete
              </td>
              <td className="border bg-slate-500 text-white font-serif p-2 rounded-sm">
                Edit
              </td>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item._id}>
                <td className="border bg-lime-50">{index + 1}</td>
                <td className="border bg-lime-50">{item.date}</td>
                <td className="border bg-lime-50">{item.employee} </td>
                <td className="border bg-lime-50">{item.level}</td>
                <td className="border bg-lime-50">{item.post}</td>
                <td className="border bg-lime-50">{item.email} </td>
                <td className="border bg-lime-50">{item.salary}</td>
                <td className="border bg-lime-50">{item.city}</td>
                <td className="border bg-lime-50">{item.pinno} </td>
                <td className="border bg-slate-300 font-mono">
                  <button onClick={() => deltetpost(item._id)}><i class="fa-solid fa-trash-can"style={{color:'red'}}></i></button>
                </td>
                <td className="border text-cyan font-thin bg-green-300">
                  <Link to={"/edit/" + item._id}><FontAwesomeIcon icon={faPencil} /></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
export default Employee;
