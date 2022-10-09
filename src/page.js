import './App.css';
import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BackPage from './page/backpage';
import LegPage from './page/legpage'
import ShoulderPage from './page/shoulderpage';
import ChestPage from './page/chestpage';
import ArmPage from './page/armpage'
import CorePage from './page/corepage'
import {API_URL} from './config/index'


function Page() {

  const navigate = useNavigate();
  const [cid,setCid]= useState(null)
  const [customer,setCustomer]= useState([])
 

  const url = `${API_URL}/api/customers/${cid}`
  const url2 = `${API_URL}/api/customers/`
  const url3 = `${API_URL}/api/customers?populate=%2A`

  const [name,setName]= useState({
      attributes:{
        name:""
      }
  })

  
  useEffect(() => {


    async function fetchMyAPI() {
      

    let res = await fetch(url)
    res = await res.json()
    setName(res.data)
    

  {/* customer api */}   
      let res1 = await fetch(url2)
      res1 = await res1.json()
      setCustomer(res1.data)
      
  console.log(cid)
  }
    fetchMyAPI()
  }, [url,setCid])

    
  function handleCustomer(e){
    e.preventDefault();
    const newcustomer=[e.target.id]=e.target.value
    setCid(newcustomer)
     console.log(setCid)
  }
  
  function submit(e){
    e.preventDefault();
    axios.delete(url,{
      data:{
        id:cid
      }
    })  .then(res=>{
      console.log(res.data)
      navigate("/");
      })

  }


 
  return(

    <>

    

    <div className='pageBody' >


<div >
  <form >
    <label style={{paddingRight:'2%',fontSize:'18px'}} >Choose a customer:</label>
    <select id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-white bg-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" name="customers" 
    value={customer.id} onChange={handleCustomer}>

    <option >--- SELECT --- </option>
    {customer.map(customers=>(

 
      <option  key={customers.id} id="iduser" value={customers.id}> 
  {customers.attributes.name} ID:{customers.id}
      </option>

  ))} 

   </select> <button type="button" onClick={submit}
   style={{ marginInline: "2%"}}
   className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800" 
  >Delete</button>
   </form>
  
    
  </div>

  {cid != null ?  
  
  <div>

  <LegPage cid={cid} />
    <BackPage cid={cid} />
    <ShoulderPage cid={cid} />
    <ChestPage cid={cid} />
    <ArmPage cid={cid} />
    <CorePage cid={cid} />
    </div>

 : <h1 className='menu_font'>SELECT THE CUSTOMER</h1>


     }
   

   
</div>

    </>

  );

}
export default Page;