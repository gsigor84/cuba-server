import '../App.css';
import { useEffect, useState} from 'react';
import axios from 'axios';
import {Form, Input, Divider, message,Breadcrumb  } from 'antd';
import {API_URL} from '../config/index'


function CoreEdit({cid}) {

  
  const muscle = 'core'
  const urlcore = `${API_URL}/api/core-exes/1?populate=%2A`
  const core_url = `${API_URL}/api/customers/${cid}?populate=core`
  


  const [exe,setExe]= useState({
    attributes:{
      name:"",
      core:{
        exe1:''
      }
    }
})



  {/* core dropdown */}
  const [Codata,setCodata]=useState({
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
 
   let res2 = await fetch(urlcore)
   res2 = await res2.json()
   setCore(res2.data)
 

   let res3 = await fetch(core_url)
   res3 = await res3.json()
   setExe(res3.data)
   


  }
    fetchMyAPI()
  }, [urlcore,cid])


{/* core dropdown */}

const [core,setCore]= useState({
  attributes:{
    decline_crunch:{
      name:''
    },
    front_plank:{
      name:''
    },
    s__hip_lift:{
      name:''
    },
    d_su_with_twist:{
      name:''
    },
    r_cable_chop:{
      name:''
    },
    cable_chop:{
      name:''
    },
    heel_touch:{
      name:''
    },
    a_superman:{
      name:''
    },
    k_a_rollout:{
      name:''
    },
    m_b_vup:{
      name:''
    },

}})

{/* core dropdown */}
const [Codrop1,setCodrop1]= useState();
const [Codrop2,setCodrop2]= useState();
const [Codrop3,setCodrop3]= useState();
const [Codrop4,setCodrop4]= useState();

function submit(e){
  e.preventDefault();
  axios.put(core_url,{
    data:{  
      core:{
        exe1:Codrop1,
        reps1:Codata.reps1,
        weight1: Codata.weight1,
        sets1: Codata.sets1,
    
        exe2:Codrop2,
        reps2:Codata.reps2,
        weight2:Codata.weight2,
        sets2: Codata.sets2,
    
        exe3:Codrop3,
        reps3:Codata.reps3,
        weight3:Codata.weight3,
        sets3:Codata.sets3,
    
        exe4:Codrop4,
        reps4:Codata.reps4,
        weight4:Codata.weight4,
        sets4:Codata.sets4,
    
        },

     }}).then(res=>{
      console.log(res.data)
      })


}

function handle_core(e){
  const newCodata={...Codata}
  newCodata[e.target.id]=e.target.value
  setCodata(newCodata)

}
 
  return(

    <>
     
    

    <div className='pageBody' >
    <Form onSubmit={(e)=> submit(e)} >

    <h3 className='title'>CORE</h3>
  

       {/* exe 1. */}
       
       <div>  
    
  <select className='dropdown' 
  
   onChange={(e)=> setCodrop1(e.target.value)} >
    <option value={'nothing'}>-- SELECT --</option>
  
        <option disabled value="" > {exe.attributes[muscle].exe1}</option>
        
        <option value={core.attributes.front_plank.name}>{core.attributes.front_plank.name}</option>
        <option value={core.attributes.s__hip_lift.name}>{core.attributes.s__hip_lift .name}</option>
        <option value={core.attributes.d_su_with_twist.name}>{core.attributes.d_su_with_twist.name}</option>
        <option value={core.attributes.r_cable_chop.name}>{core.attributes.r_cable_chop.name}</option>
        <option value={core.attributes.cable_chop.name}>{core.attributes.cable_chop.name}</option>
        <option value={core.attributes.heel_touch.name}>{core.attributes.heel_touch.name}</option>
        <option value={core.attributes.a_superman.name}>{core.attributes.a_superman.name}</option>
        <option value={core.attributes.k_a_rollout.name}>{core.attributes.k_a_rollout.name}</option>
        <option value={core.attributes.m_b_vup.name}>{core.attributes.m_b_vup.name}</option>
       
        
         </select>

       </div>
       <div className='box'> 
       <p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_core(e)} id="reps1" value={Codata.reps}  placeholder={exe.attributes[muscle].reps1} type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_core(e)} id="weight1" value={Codata.weight}  placeholder={exe.attributes[muscle].weight1} ></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_core(e)} id="sets1" value={Codata.sets}   placeholder={exe.attributes[muscle].sets1} ></Input></p>
 </div>
       

        {/* exe 2. */}
        <Divider/>    
     
       <div>
   
    
    <select className='dropdown' 
    
    onChange={(e)=> setCodrop2(e.target.value)} >
        <option value={'nothing'}>-- SELECT --</option>
        <option value={core.attributes.front_plank.name}>{core.attributes.front_plank.name}</option>
        <option value={core.attributes.s__hip_lift.name}>{core.attributes.s__hip_lift .name}</option>
        <option value={core.attributes.d_su_with_twist.name}>{core.attributes.d_su_with_twist.name}</option>
        <option value={core.attributes.r_cable_chop.name}>{core.attributes.r_cable_chop.name}</option>
        <option value={core.attributes.cable_chop.name}>{core.attributes.cable_chop.name}</option>
        <option value={core.attributes.heel_touch.name}>{core.attributes.heel_touch.name}</option>
        <option value={core.attributes.a_superman.name}>{core.attributes.a_superman.name}</option>
        <option value={core.attributes.k_a_rollout.name}>{core.attributes.k_a_rollout.name}</option>
        <option value={core.attributes.m_b_vup.name}>{core.attributes.m_b_vup.name}</option>
          </select>
          <div className='box'> 

          <p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_core(e)} id="reps2" value={Codata.reps2}   placeholder={exe.attributes[muscle].reps2} type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_core(e)} id="weight2" value={Codata.weigh2}   placeholder={exe.attributes[muscle].weight2} ></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_core(e)} id="sets2" value={Codata.sets2}  placeholder={exe.attributes[muscle].sets2} ></Input></p>
 </div>
       
           </div>
     
  <Divider />

  <select className='dropdown'
   onChange={(e)=> setCodrop3(e.target.value)} >
  <option value={'nothing'}>-- SELECT --</option>
  <option value={core.attributes.front_plank.name}>{core.attributes.front_plank.name}</option>
        <option value={core.attributes.s__hip_lift.name}>{core.attributes.s__hip_lift .name}</option>
        <option value={core.attributes.d_su_with_twist.name}>{core.attributes.d_su_with_twist.name}</option>
        <option value={core.attributes.r_cable_chop.name}>{core.attributes.r_cable_chop.name}</option>
        <option value={core.attributes.cable_chop.name}>{core.attributes.cable_chop.name}</option>
        <option value={core.attributes.heel_touch.name}>{core.attributes.heel_touch.name}</option>
        <option value={core.attributes.a_superman.name}>{core.attributes.a_superman.name}</option>
        <option value={core.attributes.k_a_rollout.name}>{core.attributes.k_a_rollout.name}</option>
        <option value={core.attributes.m_b_vup.name}>{core.attributes.m_b_vup.name}</option>
     
        </select>
        <div className='box'> 
        <p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_core(e)} id="reps3" value={Codata.reps3} placeholder={exe.attributes[muscle].reps3} type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_core(e)} id="weight3" value={Codata.weigh3}  placeholder={exe.attributes[muscle].weight3} ></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_core(e)} id="sets3" value={Codata.sets3} placeholder={exe.attributes[muscle].sets3} ></Input></p>
 </div>
  <Divider/>
  <select className='dropdown'
   onChange={(e)=> setCodrop4(e.target.value)} >
  <option value={'nothing'}>-- SELECT --</option>
  <option value={core.attributes.front_plank.name}>{core.attributes.front_plank.name}</option>
        <option value={core.attributes.s__hip_lift.name}>{core.attributes.s__hip_lift .name}</option>
        <option value={core.attributes.d_su_with_twist.name}>{core.attributes.d_su_with_twist.name}</option>
        <option value={core.attributes.r_cable_chop.name}>{core.attributes.r_cable_chop.name}</option>
        <option value={core.attributes.cable_chop.name}>{core.attributes.cable_chop.name}</option>
        <option value={core.attributes.heel_touch.name}>{core.attributes.heel_touch.name}</option>
        <option value={core.attributes.a_superman.name}>{core.attributes.a_superman.name}</option>
        <option value={core.attributes.k_a_rollout.name}>{core.attributes.k_a_rollout.name}</option>
        <option value={core.attributes.m_b_vup.name}>{core.attributes.m_b_vup.name}</option>
        </select>
        <div className='box'> 
        <p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_core(e)} id="reps4" value={Codata.reps4}  placeholder={exe.attributes[muscle].reps4} type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_core(e)} id="weight4" value={Codata.weigh4}  placeholder={exe.attributes[muscle].weight4} ></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_core(e)} id="sets4" value={Codata.sets4}  placeholder={exe.attributes[muscle].sets4} ></Input></p>
</div>
<p>
  <button type="button" 
className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" 
onClick={submit}>
  Edit Core</button></p> 
       
       </Form>

    </div>


    
   
    </>

  );

}
export default CoreEdit;