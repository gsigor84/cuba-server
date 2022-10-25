import './App.css';
import axios from 'axios';
import { useEffect, useState} from 'react';
import {Form, Input, Divider, message  } from 'antd';
import {API_URL} from './config/index'

function Cardio() {
  const [cid,setCid]= useState(null)
  const [customer,setCustomer]= useState([])
  const [Cadata,setCadata]=useState({
    treadmill:"",
  xtrainer:"",
  bike:"",
  rower:"",
  stairmaster:""

  })
  const [name,setName]= useState({
    attributes:{
      name:""
    }
})

  const url = `${API_URL}/api/customers/${cid}`
  const url3 = `${API_URL}/api/customers/`
  const cardio_url = `${API_URL}/api/customers/${cid}?populate=cardio`

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

  function submit(e){
    e.preventDefault();
    axios.put(cardio_url,{
      data:{      
cardio:{
  treadmill:Cadata.treadmill,
  xtrainer:Cadata.xtrainer,
  bike:Cadata.bike,
  rower:Cadata.rower,
  stairmaster:Cadata.stairmaster
}
      }
    }) .then(res=>{
      console.log(res.data)
      })
  }

  function handleCustomer(e){
    e.preventDefault();
    const newcustomer=[e.target.id]=e.target.value
    setCid(newcustomer)
     // console.log(setCid)
  }

  function handle_cario(e){
    const newCadata={...Cadata}
    newCadata[e.target.id]=e.target.value
    setCadata(newCadata)
  }

  return(
    <div className='box' > 
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
   <div className='box' > 
   <Form onSubmit={(e)=> submit(e)} >

   <p><label >Treadmill : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_cario(e)} value={Cadata.treadmill}  id="treadmill"  placeholder='Time 1' type={"number"}></Input></p>
   <p><label >X-trainer : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_cario(e)} value={Cadata.xtrainer} id="xtrainer"  placeholder='Time 2' type={"number"}></Input></p>
   <p><label >Bike : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_cario(e)} value={Cadata.bike}  id="bike"  placeholder='Time 3' type={"number"}></Input></p>
   <p><label >Rower : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_cario(e)} value={Cadata.rower}  id="rower"  placeholder='Time 4' type={"number"}></Input></p>
   <p><label >Stairmaster Machine : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_cario(e)} value={Cadata.stairmaster}  id="stairmaster"  placeholder='Time 5' type={"number"}></Input></p>
   
   <button type="button" 
className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" 
onClick={submit}>
  Add Cardio</button>

   </Form>
   
   </div>

    </div>
  )

}
export default Cardio;