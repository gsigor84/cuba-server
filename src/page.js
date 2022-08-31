import './App.css';
import { useEffect, useState} from 'react';
import { Divider, Breadcrumb } from 'antd';


function Page() {

  const [cid,setCid]= useState('1')
  const [customer,setCustomer]= useState([])

  const url = `http://localhost:1337/api/customers/${cid}`
  const url2 = `http://localhost:1337/api/customers/${cid}?populate=legs`
  const url3 = `http://localhost:1337/api/customers/`
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

<div style={{marginBottom:'10%'}}>
  <form >
    <label style={{paddingRight:'2%',fontSize:'18px'}} >Choose a customer:</label>
    <select id="dropdownDefault" data-dropdown-toggle="dropdown" className="text-white bg-blue-600 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" name="customers" value={customer.id} onChange={handleCustomer}>

    
    {customer.map(customers=>(

      <option  key={customers.id} id="iduser" value={customers.id}> 
  {customers.attributes.name} ID:{customers.id}
      </option>
   
  
  ))} 
  
   </select>
   </form>
  </div>

    <h3> {name.attributes.name} - ID:{cid}</h3>
    <Divider orientation="right"><h3>Moday - Legs</h3></Divider>
  

       {/* exe 1. */}
       {exe.attributes.legs.exe1 ?   
       <div>  
          <Breadcrumb>
   <Breadcrumb.Item><a> {exe.attributes.legs.exe1}</a></Breadcrumb.Item>
   <Breadcrumb.Item>sets:{exe.attributes.legs.sets1}</Breadcrumb.Item>
   <Breadcrumb.Item>reps: {exe.attributes.legs.reps1}</Breadcrumb.Item>
   <Breadcrumb.Item>weight: {exe.attributes.legs.weight1}</Breadcrumb.Item>
   </Breadcrumb>
       </div>
       : ''}

        {/* exe 2. */}
          
      {exe.attributes.legs.exe2 ? 
       <div>
     <Divider/>
     <Breadcrumb>
   <Breadcrumb.Item><a> {exe.attributes.legs.exe2}</a></Breadcrumb.Item>
   <Breadcrumb.Item>sets:{exe.attributes.legs.sets2}</Breadcrumb.Item>
   <Breadcrumb.Item>reps: {exe.attributes.legs.reps2}</Breadcrumb.Item>
   <Breadcrumb.Item>weight: {exe.attributes.legs.weight2}</Breadcrumb.Item>
   </Breadcrumb>
           </div>
      : ''}

 
   
    </div>
  );

}
export default Page;