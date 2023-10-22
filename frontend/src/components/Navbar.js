import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-slate-900 p-3'>
            <Link to={'/'}className='  p-2 m-3  font-mono text-white border border-seprate rounded-lg'>Home Page</Link>
            <Link to={'/addemp'} className='  p-2 m-3  font-mono text-white border border-seprate rounded-lg'>Add New Employee</Link>
            <Link to={'/signup'} className='  font-mono py-0 text-white  rounded-lg float-right mr-5'>Signup</Link>

        </div>
    )
}

export default Navbar