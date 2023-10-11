import { useState, useEffect } from 'react'
function App() {
  const [data, setdata] = useState([])

  useEffect(() => {
    getapi()
  }, [])
   
  const getapi = async () => {
    let empdata = await fetch("http://localhost:4000")
    empdata = await empdata.json();
    setdata(empdata)
  }
  console.warn( data );
  return (
    <>
      <h1 className='text-3xl font-bold bg-black text-center text-white mt-1'>Employee Management system</h1>
    <div className="flex flex-col m-2" >
      <table className=' text-center border border-separate border-slate-400 mt-2 rounded-sm'>
        <thead>
          <tr >
            <td className='border bg-slate-500 text-white font-serif p-2 rounded-sm'>id </td>
            <td className='border bg-slate-500 text-white font-serif p-2 rounded-sm'>Employee </td>
            <td className='border bg-slate-500 text-white font-serif p-2 rounded-sm'>Level</td>
            <td className='border bg-slate-500 text-white font-serif p-2 rounded-sm'>Email </td>
            <td className='border bg-slate-500 text-white font-serif p-2 rounded-sm'>Salary</td>
            <td className='border bg-slate-500 text-white font-serif p-2 rounded-sm'>City</td>
            <td className='border bg-slate-500 text-white font-serif p-2 rounded-sm'>Pin No </td>
          </tr>
        </thead>
        <tbody>
          {data.map((item,_id) => (
          <tr key={_id}>
              <td className='border bg-lime-50' >{item._id}</td>
              <td className='border bg-lime-50' >{item.employee} </td>
              <td className='border bg-lime-50'>{item.level}</td>
              <td className='border bg-lime-50'>{item.email} </td>
              <td className='border bg-lime-50'>{item.salary}</td>
              <td className='border bg-lime-50'>{item.city}</td>
              <td className='border bg-lime-50'>{item.Pinno} </td>
            </tr> ))}
        </tbody>
      </table>

    </div>
    </>
  );
}
export default App;
