
import {Outlet, Navigate} from 'react-router-dom'

const Privateroute = () => {
    
    const auth = localStorage.getItem("user")
    return auth ? <Outlet/> : <Navigate to={"/signup"}/>
}
export default Privateroute