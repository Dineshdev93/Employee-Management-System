import React from "react";
import Loginlogo from "../images/mern.png";
import {useNavigate}  from 'react-router-dom'
export default function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const navigate = useNavigate()
  const handlelogin =async () => {
  
    if (email.length === 0 || password.length === 0) {
      setError(true);
    }
    else {
       let result = await fetch("http://localhost:4000/login",{
        method : "Post",
        body : JSON.stringify({email,password}),
        headers : {
          "content-type" : "application/json"
        }
       })
       result = await result.json()
       console.log(result);
       localStorage.setItem("user",JSON.stringify(result))
      
        navigate("/")
       
    }
  };
     const userlogedin = localStorage.getItem("user")
      React.useEffect(()=>{
        if(userlogedin){
          navigate("/")
        }
      })

  return (
    <main className="flex flex-wrap px-40">
      <section className="mt-14">
        <img src={Loginlogo} alt="logo" className="w-96 rounded-lg mt-10 " />
      </section>

      <section className=" flex flex-col flex-wrap  border border-separate ml-40 mt-12 p-10  rounded-lg">
        <h1 className="text-2xl font-bold text-center font-serif">Log in</h1>
        {error && email.length <= 0 ? (
          <label htmlFor="email" className=" text-red-700 font-mono">
            Please enter email
          </label>
        ) : (
          ""
        )}
        <input
          type="email"
          placeholder="Enter email"
          className="border border-separate py-2 w-72 rounded-lg mt-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && password.length <= 0 ? (
          <label htmlFor="password" className="font-mono text-red-700">
            Please enter password
          </label>
        ) : (
          ""
        )}
        <input
          type="text"
          placeholder="Enter Password"
          className="border border-separate py-2 w-72 rounded-lg mt-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="border border-separate bg-blue-500 text-white mt-3 rounded-lg p-1 font-thin"
          onClick={handlelogin}
        >
          Login
        </button>
      </section>
    </main>
  );
}
