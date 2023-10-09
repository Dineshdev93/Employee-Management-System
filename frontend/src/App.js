import {useState,useEffect} from 'react'
function App() {  
  const [data,setdata] = useState([])

   useEffect(()=>{
      getapi()
   },[])

   const getapi = async() =>{
    let empdata =await fetch("http://localhost:5000")
    empdata = await empdata.json();
    setdata(empdata)
     return true;
   }
    console.warn({result : data});
   return (
    < >
      <h1 className='text-3xl font-bold bg-slate-200 text-center mt-3 p-2 '>Employee Management system</h1>
    </>
  );
}
export default App;
