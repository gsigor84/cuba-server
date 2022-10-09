import '../App.css';
import { useEffect, useState} from 'react';
import axios from 'axios';
import {Form, Input, Divider, message,Breadcrumb  } from 'antd';
import {API_URL} from '../config/index'


function LegEdit({cid}) {

  
  const muscle = 'legs'
  const url2 = `${API_URL}/api/leg-exes/1?populate=%2A`
  const leg_url = `${API_URL}/api/customers/${cid}?populate=legs`


  const [exe,setExe]= useState({
    attributes:{
      name:"",
      legs:{
        exe1:''
      }
    }
})

const [data,setData]=useState({
  name:"",
  exe1:"",
  reps1:"",
  weight1: "",
  sets1: "",

  exe2:"",
  reps2:"",
  weight2: "",
  sets2: "",


  exe3:"",
  reps3:"",
  weight3: "",
  sets3: "",


  exe4:"",
  reps4:"",
  weight4: "",
  sets4: ""

})
  
  useEffect(() => {


    async function fetchMyAPI() {
   {/* LEG api */}
   let res2 = await fetch(url2)
   res2 = await res2.json()
   setLeg(res2.data)  
   let res3 = await fetch(leg_url)
   res3 = await res3.json()
   setExe(res3.data) 
  

  }
    fetchMyAPI()
  }, [url2,cid])


{/* leg dropdown */}

const [leg,setLeg]= useState({
  attributes:{
    backsquat:{
      name:''
    },
    frontsquat:{
      name:''
    },
    romaniandeadlift:{
      name:''
    },
    walkinglunges:{
      name:''
    },
    legpress:{
      name:''
    },
    legcrul:{
      name:''
    },
    bulgariansplitsquat:{
      name:''
    },
  }
})

const [drop1,setDrop1]= useState();
const [drop2,setDrop2]= useState();
const [drop3,setDrop3]= useState();
const [drop4,setDrop4]= useState();

function submit(e){
  e.preventDefault();
  axios.put(leg_url,{
    data:{  
      legs:{
        exe1:drop1,
        reps1:data.reps1,
        weight1: data.weight1,
        sets1: data.sets1,
    
        exe2:drop2,
        reps2:data.reps2,
        weight2: data.weight2,
        sets2: data.sets2,
    
        exe3:drop3,
        reps3:data.reps3,
        weight3: data.weight3,
        sets3: data.sets3,
    
        exe4:drop4,
        reps4:data.reps4,
        weight4: data.weight4,
        sets4: data.sets4,
    
        }

     }}).then(res=>{
      console.log(res.data)
      })


}
function handle(e){
  const newdata={...data}
  newdata[e.target.id]=e.target.value
  setData(newdata)
}
 
  return(

    <>
     
    

    <div className='pageBody' >
    <Form onSubmit={(e)=> submit(e)} >

    <h3 className='title'>LEGS</h3>
  

       {/* exe 1. */}
       
       <div>  
    
  <select className='dropdown' 
  
   onChange={(e)=> setDrop1(e.target.value)} >
    <option value={'nothing'}>-- SELECT --</option>
  
        <option disabled value="" > {exe.attributes[muscle].exe1}</option>
        
        <option value={leg.attributes.backsquat.name}>{leg.attributes.backsquat.name}</option>
        <option value={leg.attributes.frontsquat.name}>{leg.attributes.frontsquat.name}</option>
        <option value={leg.attributes.romaniandeadlift.name}>{leg.attributes.romaniandeadlift.name}</option>
        <option value={leg.attributes.walkinglunges.name}>{leg.attributes.walkinglunges.name}</option>
        <option value={leg.attributes.legpress.name}>{leg.attributes.legpress.name}</option>
        <option value={leg.attributes.legcrul.name}>{leg.attributes.legcrul.name}</option>
        <option value={leg.attributes.bulgariansplitsquat.name}>{leg.attributes.bulgariansplitsquat.name}</option>       
        </select>

       </div>
<div className='box'> 
       <p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle(e)} id="reps1" value={data.reps}  placeholder={exe.attributes[muscle].reps1} type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle(e)} id="weight1" value={data.weight}  placeholder={exe.attributes[muscle].weight1} ></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle(e)} id="sets1" value={data.sets}   placeholder={exe.attributes[muscle].sets1} ></Input></p>
 
       </div>

        {/* exe 2. */}
        <Divider/>    
     
       <div>
   
    
    <select className='dropdown' 
    
    onChange={(e)=> setDrop2(e.target.value)} >
        <option value={'nothing'}>-- SELECT --</option>
          <option disabled value="" > {exe.attributes[muscle].exe2}</option>
      
          <option value={leg.attributes.backsquat.name}>{leg.attributes.backsquat.name}</option>
          <option value={leg.attributes.frontsquat.name}>{leg.attributes.frontsquat.name}</option>
          <option value={leg.attributes.romaniandeadlift.name}>{leg.attributes.romaniandeadlift.name}</option>
          <option value={leg.attributes.walkinglunges.name}>{leg.attributes.walkinglunges.name}</option>
          <option value={leg.attributes.legpress.name}>{leg.attributes.legpress.name}</option>
          <option value={leg.attributes.legcrul.name}>{leg.attributes.legcrul.name}</option>
          <option value={leg.attributes.bulgariansplitsquat.name}>{leg.attributes.bulgariansplitsquat.name}</option>       
          </select>

          <div className='box'> 
          <p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle(e)} id="reps2" value={data.reps2}   placeholder={exe.attributes[muscle].reps2} type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle(e)} id="weight2" value={data.weigh2}   placeholder={exe.attributes[muscle].weight2} ></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle(e)} id="sets2" value={data.sets2}  placeholder={exe.attributes[muscle].sets2} ></Input></p>
 
  </div>
           </div>
     
  <Divider />

  <select className='dropdown'
   onChange={(e)=> setDrop3(e.target.value)} >
  <option value={'nothing'}>-- SELECT --</option>
  <option disabled value="" > {exe.attributes[muscle].exe3}</option>
        <option value={leg.attributes.backsquat.name}>{leg.attributes.backsquat.name}</option>
        <option value={leg.attributes.frontsquat.name}>{leg.attributes.frontsquat.name}</option>
        <option value={leg.attributes.romaniandeadlift.name}>{leg.attributes.romaniandeadlift.name}</option>
        <option value={leg.attributes.walkinglunges.name}>{leg.attributes.walkinglunges.name}</option>
        <option value={leg.attributes.legpress.name}>{leg.attributes.legpress.name}</option>
        <option value={leg.attributes.legcrul.name}>{leg.attributes.legcrul.name}</option>
        <option value={leg.attributes.bulgariansplitsquat.name}>{leg.attributes.bulgariansplitsquat.name}</option>       
        </select>
        <div className='box'> 
        <p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle(e)} id="reps3" value={data.reps3} placeholder={exe.attributes[muscle].reps3} type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle(e)} id="weight3" value={data.weigh3}  placeholder={exe.attributes[muscle].weight3} ></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle(e)} id="sets3" value={data.sets3} placeholder={exe.attributes[muscle].sets3} ></Input></p>
 </div>
  <Divider/>
  <select className='dropdown'
   onChange={(e)=> setDrop4(e.target.value)} >
  <option value={'nothing'}>-- SELECT --</option>
  <option disabled value="" > {exe.attributes[muscle].exe4}</option>
        <option value={leg.attributes.backsquat.name}>{leg.attributes.backsquat.name}</option>
        <option value={leg.attributes.frontsquat.name}>{leg.attributes.frontsquat.name}</option>
        <option value={leg.attributes.romaniandeadlift.name}>{leg.attributes.romaniandeadlift.name}</option>
        <option value={leg.attributes.walkinglunges.name}>{leg.attributes.walkinglunges.name}</option>
        <option value={leg.attributes.legpress.name}>{leg.attributes.legpress.name}</option>
        <option value={leg.attributes.legcrul.name}>{leg.attributes.legcrul.name}</option>
        <option value={leg.attributes.bulgariansplitsquat.name}>{leg.attributes.bulgariansplitsquat.name}</option>       
        </select>
        <div className='box'> 
        <p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle(e)} id="reps4" value={data.reps4}  placeholder={exe.attributes[muscle].reps4} type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle(e)} id="weight4" value={data.weigh4}  placeholder={exe.attributes[muscle].weight4} ></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle(e)} id="sets4" value={data.sets4}  placeholder={exe.attributes[muscle].sets4} ></Input></p>
</div>
<p>
  
  <button type="button" 
className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" 
onClick={submit}>
  Edit Leg</button></p> 
       
       </Form>

    </div>


    
   
    </>

  );

}
export default LegEdit;