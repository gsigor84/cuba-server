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
import CardioPage from './page/cardiopage';
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

  function goto(e){
    e.preventDefault();
   
    navigate(`/customers/${cid}`);

  

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
    <select id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-white font-sm rounded-lg text-sm px-3 text-center inline-flex items-center" style={{backgroundColor:'#214fc6',border: 'none'}}type="button" name="customers" 
    value={customer.id} onChange={handleCustomer}>

    <option >--- SELECT --- </option>
    {customer.map(customers=>(

 
      <option  key={customers.id} id="iduser" value={customers.id}> 
  {customers.attributes.name} ID:{customers.id}
      </option>

  ))} 

   </select>
   <button type="button" onClick={goto}
  
   className="text-white focus:ring-4  font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2  focus:outline-none" style={{backgroundColor:'#1da19c',border: 'none',marginInline: "2%"}}
  >Go to</button>
   <button type="button" onClick={submit}
   
   className="text-white  font-medium rounded-lg text-sm px-4 py-2 mr-2 mb-2 focus:outline-none" style={{backgroundColor:'#ff4500',border: 'none',marginInline: "2%"}}
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
    <CardioPage cid={cid} />
    </div>

 : <h1 className='menu_font'>SELECT THE CUSTOMER</h1>


     }
   

   
</div>

    </>

  );

}
export default Page;