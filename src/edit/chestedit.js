import '../App.css';
import { useEffect, useState} from 'react';
import axios from 'axios';
import {Form, Input, Divider, message,Breadcrumb  } from 'antd';
import {API_URL} from '../config/index'


function ChestEdit({cid}) {

  
  const muscle = 'chest'
  const urlchest = `${API_URL}/api/chest-exes/1?populate=%2A`
  const chest_url = `${API_URL}/api/customers/${cid}?populate=chest`
  


  const [exe,setExe]= useState({
    attributes:{
      name:"",
      chest:{
        exe1:''
      }
    }
})

{/* back dropdown */}

  {/* chest dropdown */}
  const [Cdata,setCdata]=useState({
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
 
   let res2 = await fetch(urlchest)
   res2 = await res2.json()
   setChest(res2.data)
   

   let res3 = await fetch(chest_url)
   res3 = await res3.json()
   setExe(res3.data)
 


  }
    fetchMyAPI()
  }, [urlchest,cid])


{/* back dropdown */}

const [chest,setChest]= useState({
  attributes:{
    f_b_press:{
      name:''
    },
    i_b_press:{
      name:''
    },
    d_b_press:{
      name:''
    },
    m_c_press:{
      name:''
    },
    push_up:{
      name:''
    },
    dip_chest:{
      name:''
    },
    chest_fly:{
      name:''
    },
    machine_fly:{
      name:''
    },
}})

{/* chest dropdown */}
const [Cdrop1,setCdrop1]= useState();
const [Cdrop2,setCdrop2]= useState();
const [Cdrop3,setCdrop3]= useState();
const [Cdrop4,setCdrop4]= useState();

function submit(e){
  e.preventDefault();
  axios.put(chest_url,{
    data:{  
      chest:{
        exe1:Cdrop1,
        reps1:Cdata.reps1,
        weight1: Cdata.weight1,
        sets1: Cdata.sets1,
    
        exe2:Cdrop2,
        reps2:Cdata.reps2,
        weight2: Cdata.weight2,
        sets2: Cdata.sets2,
    
        exe3:Cdrop3,
        reps3:Cdata.reps3,
        weight3: Cdata.weight3,
        sets3: Cdata.sets3,
    
        exe4:Cdrop4,
        reps4:Cdata.reps4,
        weight4: Cdata.weight4,
        sets4: Cdata.sets4,
    
        },

     }}).then(res=>{
      console.log(res.data)
      })


}

function handle_chest(e){
  const newCdata={...Cdata}
  newCdata[e.target.id]=e.target.value
  setCdata(newCdata)

}
 
  return(

    <>
     
    

    <div className='pageBody' >
    <Form onSubmit={(e)=> submit(e)} >

    <h3 className='title'>CHEST</h3>
  

       {/* exe 1. */}
       
       <div>  
    
  <select className='dropdown' 
  
   onChange={(e)=> setCdrop1(e.target.value)} >
    <option value={'nothing'}>-- SELECT --</option>
  
        <option disabled value="" > {exe.attributes[muscle].exe1}</option>
        
        <option value={chest.attributes.f_b_press.name}>{chest.attributes. f_b_press.name}</option>
        <option value={chest.attributes.i_b_press.name}>{chest.attributes.i_b_press.name}</option>
        <option value={chest.attributes.d_b_press.name}>{chest.attributes.d_b_press.name}</option>
        <option value={chest.attributes.d_b_press.name}>{chest.attributes.d_b_press.name}</option>
        <option value={chest.attributes.push_up.name}>{chest.attributes.push_up.name}</option>
        <option value={chest.attributes.dip_chest.name}>{chest.attributes.dip_chest.name}</option>
        <option value={chest.attributes.chest_fly.name}>{chest.attributes.chest_fly.name}</option>
        <option value={chest.attributes.machine_fly.name}>{chest.attributes.machine_fly.name}</option>
             
        
         </select>

       </div>
       <div className='box'> 
       <p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_chest(e)} id="reps1" value={Cdata.reps}  placeholder={exe.attributes[muscle].reps1} type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_chest(e)} id="weight1" value={Cdata.weight}  placeholder={exe.attributes[muscle].weight1} ></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_chest(e)} id="sets1" value={Cdata.sets}   placeholder={exe.attributes[muscle].sets1} ></Input></p>
 </div>
       

        {/* exe 2. */}
        <Divider/>    
     
       <div>
   
    
    <select className='dropdown' 
    
    onChange={(e)=> setCdrop2(e.target.value)} >
        <option value={'nothing'}>-- SELECT --</option>
          <option disabled value="" > {exe.attributes[muscle].exe2}</option>
      
          <option value={chest.attributes.f_b_press.name}>{chest.attributes. f_b_press.name}</option>
        <option value={chest.attributes.i_b_press.name}>{chest.attributes.i_b_press.name}</option>
        <option value={chest.attributes.d_b_press.name}>{chest.attributes.d_b_press.name}</option>
        <option value={chest.attributes.d_b_press.name}>{chest.attributes.d_b_press.name}</option>
        <option value={chest.attributes.push_up.name}>{chest.attributes.push_up.name}</option>
        <option value={chest.attributes.dip_chest.name}>{chest.attributes.dip_chest.name}</option>
        <option value={chest.attributes.chest_fly.name}>{chest.attributes.chest_fly.name}</option>
        <option value={chest.attributes.machine_fly.name}>{chest.attributes.machine_fly.name}</option>
          </select>

          <div className='box'> 
          <p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_chest(e)} id="reps2" value={Cdata.reps2}   placeholder={exe.attributes[muscle].reps2} type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_chest(e)} id="weight2" value={Cdata.weigh2}   placeholder={exe.attributes[muscle].weight2} ></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_chest(e)} id="sets2" value={Cdata.sets2}  placeholder={exe.attributes[muscle].sets2} ></Input></p>
 </div>
       
           </div>
     
  <Divider />

  <select className='dropdown'
   onChange={(e)=> setCdrop3(e.target.value)} >
  <option value={'nothing'}>-- SELECT --</option>
  <option disabled value="" > {exe.attributes[muscle].exe3}</option>
  <option value={chest.attributes.f_b_press.name}>{chest.attributes. f_b_press.name}</option>
        <option value={chest.attributes.i_b_press.name}>{chest.attributes.i_b_press.name}</option>
        <option value={chest.attributes.d_b_press.name}>{chest.attributes.d_b_press.name}</option>
        <option value={chest.attributes.d_b_press.name}>{chest.attributes.d_b_press.name}</option>
        <option value={chest.attributes.push_up.name}>{chest.attributes.push_up.name}</option>
        <option value={chest.attributes.dip_chest.name}>{chest.attributes.dip_chest.name}</option>
        <option value={chest.attributes.chest_fly.name}>{chest.attributes.chest_fly.name}</option>
        <option value={chest.attributes.machine_fly.name}>{chest.attributes.machine_fly.name}</option>
             
        </select>
        <div className='box'> 
        <p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_chest(e)} id="reps3" value={Cdata.reps3} placeholder={exe.attributes[muscle].reps3} type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_chest(e)} id="weight3" value={Cdata.weigh3}  placeholder={exe.attributes[muscle].weight3} ></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_chest(e)} id="sets3" value={Cdata.sets3} placeholder={exe.attributes[muscle].sets3} ></Input></p>
 </div>
  <Divider/>
  <select className='dropdown'
   onChange={(e)=> setCdrop4(e.target.value)} >
  <option value={'nothing'}>-- SELECT --</option>
  <option disabled value="" > {exe.attributes[muscle].exe4}</option>
  <option value={chest.attributes.f_b_press.name}>{chest.attributes. f_b_press.name}</option>
        <option value={chest.attributes.i_b_press.name}>{chest.attributes.i_b_press.name}</option>
        <option value={chest.attributes.d_b_press.name}>{chest.attributes.d_b_press.name}</option>
        <option value={chest.attributes.d_b_press.name}>{chest.attributes.d_b_press.name}</option>
        <option value={chest.attributes.push_up.name}>{chest.attributes.push_up.name}</option>
        <option value={chest.attributes.dip_chest.name}>{chest.attributes.dip_chest.name}</option>
        <option value={chest.attributes.chest_fly.name}>{chest.attributes.chest_fly.name}</option>
        <option value={chest.attributes.machine_fly.name}>{chest.attributes.machine_fly.name}</option>
             
        </select>
        <div className='box'> 
        <p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_chest(e)} id="reps4" value={Cdata.reps4}  placeholder={exe.attributes[muscle].reps4} type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_chest(e)} id="weight4" value={Cdata.weigh4}  placeholder={exe.attributes[muscle].weight4} ></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_chest(e)} id="sets4" value={Cdata.sets4}  placeholder={exe.attributes[muscle].sets4} ></Input></p>
</div>
<p>
  <button type="button" 
className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" 
onClick={submit}>
  Edit Chest</button></p> 
       
       </Form>

    </div>


    
   
    </>

  );

}
export default ChestEdit;