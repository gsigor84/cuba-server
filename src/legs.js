import './App.css';
import axios from 'axios';
import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Input, Divider  } from 'antd';


function Legs (){

  const url = 'http://localhost:1337/api/customers'
  const [exe,setExe]= useState([])
  const navigate = useNavigate();
  
  const [data,setData]=useState({
      name:"",
      exe1:"",
      reps1:"",
      weight1: "",
      sets1: "",

      exe2:"",
      reps2:"",
      weight2: "",
      sets2: ""
    
    
  })
  
  
    useEffect(() => {
    async function fetchMyAPI() {
    let res = await fetch(url)
    res = await res.json()
    setExe(res.data)
    // console.log(res.data)
    }
    fetchMyAPI()
    }, [])
    
  function submit(e){
    e.preventDefault();
    axios.post(url,{
  data:{   
    name:data.name,
    legs:{
    exe1:data.exe1,
    reps1:data.reps1,
    weight1: data.weight1,
    sets1: data.sets1,

    exe2:data.exe2,
    reps2:data.reps2,
    weight2: data.weight2,
    sets2: data.sets2,
    },
  
    
  }
    })
    .then(res=>{
      console.log(res.data)
      navigate("/page");
    })
   
  }
  
  function handle(e){
    const newdata={...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
    
  
  }
  
  return(
    <div>
  <p style={{fontSize:'18px'}}>Add new customer</p>
  
  
  <Form onSubmit={(e)=> submit(e)}>
  <p>customer name : <Input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder='name' type={"text"}></Input></p>
  
  <h3>Moday - Legs</h3>
  <Divider />
  <p><label >exercise 1 : </label> <Input onChange={(e)=>handle(e)} id="exe1" value={data.exe1}  placeholder='exe1' type={"text"}></Input></p>
  <p><label >reps : </label> <Input onChange={(e)=>handle(e)} id="reps1" value={data.reps}  placeholder='reps1' type={"number"}></Input></p>
  <p><label >weight : </label> <Input onChange={(e)=>handle(e)} id="weight1" value={data.weight}  placeholder='weight1' type={"number"}></Input></p>
  <p><label >sets : </label> <Input onChange={(e)=>handle(e)} id="sets1" value={data.sets}  placeholder='sets1' type={"number"}></Input></p>
 
  <Divider />
  <p><label >exercise 2 : </label> <Input onChange={(e)=>handle(e)} id="exe2" value={data.exe2}  placeholder='exe2' type={"text"}></Input></p>
  <p><label >reps : </label> <Input onChange={(e)=>handle(e)} id="reps2" value={data.reps2}  placeholder='reps2' type={"number"}></Input></p>
  <p><label >weight : </label> <Input onChange={(e)=>handle(e)} id="weight2" value={data.weigh2}  placeholder='weight2' type={"number"}></Input></p>
  <p><label >sets : </label> <Input onChange={(e)=>handle(e)} id="sets2" value={data.sets2}  placeholder='sets2' type={"number"}></Input></p>
  <Divider />

  <div className='right'> <p>

<button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="primary" onClick={submit}>SUBMIT</button></p> </div>
 
  </Form>
 
    </div>
  )
}

export default Legs;