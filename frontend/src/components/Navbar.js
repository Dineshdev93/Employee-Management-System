import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  const userlogedin = localStorage.getItem("user");
  const navigate = useNavigate()
  const logout = () => {
    localStorage.clear()
    navigate("/signup")
  }
  return (
    <div >
      <ul className="  flex flex-wrap bg-slate-900 p-3 w-auto px-6  ">
        <li>
          <Link
            to={"/"}
            className="  p-2 m-3  font-mono text-white border border-seprate rounded-lg"
          >
            <FontAwesomeIcon icon={faHouse} />
          </Link>
        </li>
        <li>
          <Link
            to={"/addemp"}
            className="p-2   m-3  font-mono text-white border border-seprate rounded-lg"
          >
            Add New Employee
          </Link>
        </li>
        <li>{ userlogedin ?
          <Link
            to={"/signup"}
            className="p-2   m-3  font-mono text-white border border-seprate rounded-lg"
            onClick={logout}
          >
            Logout
          </Link> : 
          <> 
            <Link
            to={"/login"}
            className="p-2   m-3  font-mono text-white border border-seprate rounded-lg"
          >
            Log in
          </Link>
          <Link
            to={"/signup"}
            className=" p-2 m-3  font-mono  text-white border border-seprate rounded-lg  "
          >
            Signup
          </Link> </>
            }</li>
      </ul>
    </div>
  );
};

export default Navbar;
