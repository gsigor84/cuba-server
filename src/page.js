import './App.css';
import { useEffect, useState} from 'react';



function Page() {

  const [cid,setCid]= useState('1')
  const [customer,setCustomer]= useState([])

  const url = `https://cuba-server.herokuapp.com/api/customers/${cid}`
  const url2 = `https://cuba-server.herokuapp.com/api/customers/${cid}?populate=legs`
  const url3 = `https://cuba-server.herokuapp.com/api/customers`
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

  
      let res2 = await fetch(url2)
      res2 = await res2.json()
      setExe(res2.data)    
      
      let res3 = await fetch(url3)
      res3 = await res3.json()
      setCustomer(res3.data)  
     
  
  }
    fetchMyAPI()
  }, [url])

    
  function handleCustomer(e){
    e.preventDefault();
    const newcustomer=[e.target.id]=e.target.value
    setCid(newcustomer)
     // console.log(setCid)
  }
  
 

 
  return(
    <div className='pageBody' >

<div>
  <form >
    <label >Choose a customer:</label>
    <select name="customers" value={customer.id} onChange={handleCustomer}>
    
    {customer.map(customers=>(
   
      <option  key={customers.id} id="iduser" value={customers.id}> 
  {customers.attributes.name} ID:{customers.id}
      </option>
   
  
  ))} 
  
   </select>
   </form>
  </div>


    <h2> {name.attributes.name} - ID:{cid}</h2>

  
   
            <ul>
            <li><a>{exe.attributes.legs.exe1}</a></li>
            <li><a>sets: {exe.attributes.legs.sets1}</a></li>
            <li><a>reps: {exe.attributes.legs.reps1}</a></li>
            <li><a>weight: {exe.attributes.legs.weight1}</a></li>
           </ul>
         
      
    
   
    </div>
  );

}
export default Page;