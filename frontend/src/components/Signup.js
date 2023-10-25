import React from "react";
import signup from "../images/signup.jpg";
import { useNavigate,NavLink} from 'react-router-dom'
const Signup = () => {
  const navigate = useNavigate()
  const [name, setName] = React.useState("");
  const [surname, setSurname] = React.useState("");
  const [mobileno, setMobileno] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const register = async () => {
    if (
      name.length === 0 ||
      surname.length === 0 ||
      mobileno.length === 0 || 
      email.length === 0 ||
      password.length === 0
    ) {
      setError(true);
    } else {
      let data = await fetch("http://localhost:4000/signup", {
        method: "Post",
        body: JSON.stringify({ name, surname, mobileno, email, password }),
        headers: {
          "content-type": "application/json",
        },
      });
      data = await data.json();
      alert("Your regestration is succesfully done !");
      localStorage.setItem("user",JSON.stringify(data))
      console.log(data);
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
    <main className="flex flex-wrap ">
      <section>
        <img
          src={signup}
          alt="logo"
          className="max-w-lg ml-20 mt-10 border rounded-lg"
        />
      </section>
      <section className="flex flex-col flex-wrap  border border-separate w-96 px-12 m-6 py-10 ml-40 rounded-lg ">
        <h1 className="text-2xl font-bold text-center font-serif  ">
          Register Details
        </h1>

        {error && name.length <= 0 ? (
          <label htmlFor="name" className="font-serif text-red-700">
            first name can not be empty !
          </label>
        ) : (
          ""
        )}
        <input
          type="text"
          placeholder="Enater your name"
          className="border border-separate py-2 w-72 rounded-lg mt-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {error && surname.length <= 0 ? (
          <label htmlfor="surname" className="font-serif text-red-700">
            Surname can not be empty
          </label>
        ) : (
          ""
        )}
        <input
          type="text"
          placeholder="Enater your  surname"
          className="border border-separate  py-2 w-72 rounded-lg mt-2"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
        {error && mobileno.length <= 0 ? (
          <label htmlfor="mobileno" className="font-serif text-red-700">
            Mobile No can't be empty
          </label>
        ) : (
          ""
        )}
        <input
          type="text"
          placeholder="Enater your mobileno"
          className="border border-separate py-2 w-72 rounded-lg mt-2"
          value={mobileno}
          onChange={(e) => setMobileno(e.target.value)}
        />
        { error && email.length<= 0 ?
        <label htmlfor="email" className="font-serif text-red-700">
          Email can't be empty
        </label > : "" }
        <input
          type="email"
          placeholder="Enater your email"
          required="@"
          className="border border-separate py-2 w-72 rounded-lg mt-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && password.length<=0 ?
        <label htmlfor="password" className="font-serif text-red-700">
          Password can't be empty
        </label>:"" }
        <input
          type="text"
          placeholder="Enter your password"
          className="border border-separate py-2 w-72 rounded-lg mt-2"
          value={password}
          onChange={(e) =>setPassword(e.target.value)} 
        />
       
        <button
          className="border border-separate bg-blue-500 text-white mt-3 rounded-lg p-1 font-thin"
          onClick={register}
        >
          Signup
        </button>
        <span className={"text-blue-500  font-thin mt-2"}><NavLink to={"/login"} > Already have an account,Plz login </NavLink></span>
      </section>
    </main>
  );
};

export default Signup;
