import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-slate-500 p-3'>
            <Link to={'/'}className='  p-3 m-3 bg-slate-500 font-mono'>Home Page</Link>
            <Link to={'/addemp'} className='  p-3 m-3 bg-slate-500 font-mono'>Add New Employee</Link>
            

        </div>
    )
}

export default Navbar
