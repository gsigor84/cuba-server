import './App.css';
import { useEffect, useState} from 'react';
import BackEdit from './edit/backedit';
import LegEdit from './edit/legedit'
import ShoulderEdit from './edit/shoulderedit';
import ChestEdit from './edit/chestedit';
import ArmEdit from './edit/armedit'
import CoreEdit from './edit/coreedit'
import {API_URL} from './config/index'


function Edit() {

  const [cid,setCid]= useState(null)
  const [customer,setCustomer]= useState([])
  const url = `${API_URL}/api/customers/${cid}`
  const url3 = `${API_URL}/api/customers/`
  const [name,setName]= useState({
      attributes:{
        name:""
      }
  })

  const [exe,setExe]= useState({
    attributes:{
      name:"",
      legs:{
        exe1:''
      }
    }
})
  
  useEffect(() => {


    async function fetchMyAPI() {

    let res = await fetch(url)
    res = await res.json()
    setName(res.data)

  {/* customer api */}   
      let res1 = await fetch(url3)
      res1 = await res1.json()
      setCustomer(res1.data)  
  
  }
    fetchMyAPI()
  }, [url,cid])

    
  function handleCustomer(e){
    e.preventDefault();
    const newcustomer=[e.target.id]=e.target.value
    setCid(newcustomer)
     // console.log(setCid)
  }
  


  return(
    <>
{cid}
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
  
   </select>
   </form>

<>
    {cid != null ?    

    <div className='pageBody' >


<div style={{marginBottom:'10%'}}>
 
  </div>

      <LegEdit cid={cid} />
    <ArmEdit cid={cid} />
    <BackEdit cid={cid} />
    <ChestEdit cid={cid} />
    <ShoulderEdit cid={cid} />
    <CoreEdit cid={cid} />

    </div>



: <h1>PLEASE SELECT</h1>

    }

    
    </>
    </>
  )

}
export default Edit;