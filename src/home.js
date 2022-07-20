import './App.css';
import axios from 'axios';
import { useEffect, useState} from 'react';
import Page from './page';
import { Link} from 'react-router-dom';



function App() {
  const url = 'https://cuba-server.herokuapp.com/api/customers/'
  const [exe,setExe]= useState([])
  
  
  const [data,setData]=useState({
      name:"",
      exe1:"",
      reps1:"",
      weight1: "",
      sets1: ""
    
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
    sets1: data.sets1
    }
    
  }
    })
    .then(res=>{
      console.log(res.data)
    })
   
  }
  
  function handle(e){
    const newdata={...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
    
  
  }
  

    return (
      <div >

  <h2>Add new customer</h2>
  
  
  <form onSubmit={(e)=> submit(e)}>
  <h3>Moday - Legs</h3>
  <label >customer name :</label> 
  <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder='name' type={"text"}></input>
  <p><label >exercise 1 :</label> </p>
    <input onChange={(e)=>handle(e)} id="exe1" value={data.exe1}  placeholder='exe1' type={"text"}></input>
    <input onChange={(e)=>handle(e)} id="reps1" value={data.reps}  placeholder='reps1' type={"number"}></input>
    <input onChange={(e)=>handle(e)} id="weight1" value={data.weight}  placeholder='weight' type={"number"}></input>
    <input onChange={(e)=>handle(e)} id="sets1" value={data.sets}  placeholder='sets' type={"number"}></input>
  <p><button onClick={submit}>SUBMIT</button></p>
  </form>
 
  </div>
    );
  }
  
  export default App;
  