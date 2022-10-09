import '../App.css';
import { useEffect, useState} from 'react';
import { Divider, Breadcrumb } from 'antd';
import {API_URL} from '../config/index'



function CorePage({cid}) {

  const muscle = 'core'
  const core_url = `${API_URL}/api/customers/${cid}?populate=core`
  const urlcore = `${API_URL}/api/core-exes/1?populate=%2A`

  const [exe,setExe]= useState({
    attributes:{
      core:{
        exe1:''
      }
    }
})

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

const [co1,setCo1]= useState('')
const [co2,setCo2]= useState('')
const [co3,setCo3]= useState('')
const [co4,setCo4]= useState('')
  
  useEffect(() => {


    async function fetchMyAPI() {
  try{

    {/* core api */}  
      let res2 = await fetch(core_url)
      res2 = await res2.json()
      setExe(res2.data)
      

      let res3 = await fetch(urlcore)
      res3 = await res3.json()
      setCore(res3.data)
      
      
      
  }catch(err){
    console.log(err)
  }

}  
fetchMyAPI()
  }, [core_url])


  useEffect(() => {

    {/* co1 */}  
  if(exe.attributes[muscle].exe1 === 'Decline Crunch'){
    return  setCo1(core.attributes.decline_crunch.link)
  }
  if(exe.attributes[muscle].exe1 === 'Front Plank'){
    return  setCo1(core.attributes.front_plank.link)
  }
  if(exe.attributes[muscle].exe1 === 'Side Plank hip lift'){
    return  setCo1(core.attributes.s__hip_lift.link)
  }
  if(exe.attributes[muscle].exe1 === 'Decline Sit Up with Twist'){
    return  setCo1(core.attributes.d_su_with_twist.link)
  }
  if(exe.attributes[muscle].exe1 === 'Reverse cable chop'){
    return  setCo1(core.attributes.r_cable_chop.link)
  }
  if(exe.attributes[muscle].exe1 === 'Cable chop'){
    return  setCo1(core.attributes.cable_chop.link)
  }
  if(exe.attributes[muscle].exe1 === 'Heel touch'){
    return  setCo1(core.attributes.heel_touch.link)
  }
  if(exe.attributes[muscle].exe1 === 'Alternating Superman'){
    return  setCo1(core.attributes.a_superman.link)
  }
  if(exe.attributes[muscle].exe1 === 'Kneeling Ab Rollout'){
    return  setCo1(core.attributes.k_a_rollout.link)
  }
  if(exe.attributes[muscle].exe1 === 'Medicine Ball V UP'){
    return  setCo1(core.attributes.m_b_vup.link)
  }
})

useEffect(() => {

  {/* co2 */}  
if(exe.attributes[muscle].exe2 === 'Decline Crunch'){
  return  setCo2(core.attributes.decline_crunch.link)
}
if(exe.attributes[muscle].exe2 === 'Front Plank'){
  return  setCo2(core.attributes.front_plank.link)
}
if(exe.attributes[muscle].exe2 === 'Side Plank hip lift'){
  return  setCo2(core.attributes.s__hip_lift.link)
}
if(exe.attributes[muscle].exe2 === 'Decline Sit Up with Twist'){
  return  setCo2(core.attributes.d_su_with_twist.link)
}
if(exe.attributes[muscle].exe2 === 'Reverse cable chop'){
  return  setCo2(core.attributes.r_cable_chop.link)
}
if(exe.attributes[muscle].exe2 === 'Cable chop'){
  return  setCo2(core.attributes.cable_chop.link)
}
if(exe.attributes[muscle].exe2 === 'Heel touch'){
  return  setCo2(core.attributes.heel_touch.link)
}
if(exe.attributes[muscle].exe2 === 'Alternating Superman'){
  return  setCo2(core.attributes.a_superman.link)
}
if(exe.attributes[muscle].exe2 === 'Kneeling Ab Rollout'){
  return  setCo2(core.attributes.k_a_rollout.link)
}
if(exe.attributes[muscle].exe2 === 'Medicine Ball V UP'){
  return  setCo2(core.attributes.m_b_vup.link)
}
})


useEffect(() => {

  {/* co3 */}  
if(exe.attributes[muscle].exe3 === 'Decline Crunch'){
  return  setCo3(core.attributes.decline_crunch.link)
}
if(exe.attributes[muscle].exe3 === 'Front Plank'){
  return  setCo3(core.attributes.front_plank.link)
}
if(exe.attributes[muscle].exe3 === 'Side Plank hip lift'){
  return  setCo3(core.attributes.s__hip_lift.link)
}
if(exe.attributes[muscle].exe3 === 'Decline Sit Up with Twist'){
  return  setCo3(core.attributes.d_su_with_twist.link)
}
if(exe.attributes[muscle].exe3 === 'Reverse cable chop'){
  return  setCo3(core.attributes.r_cable_chop.link)
}
if(exe.attributes[muscle].exe3 === 'Cable chop'){
  return  setCo3(core.attributes.cable_chop.link)
}
if(exe.attributes[muscle].exe3 === 'Heel touch'){
  return  setCo3(core.attributes.heel_touch.link)
}
if(exe.attributes[muscle].exe3 === 'Alternating Superman'){
  return  setCo3(core.attributes.a_superman.link)
}
if(exe.attributes[muscle].exe3 === 'Kneeling Ab Rollout'){
  return  setCo3(core.attributes.k_a_rollout.link)
}
if(exe.attributes[muscle].exe3 === 'Medicine Ball V UP'){
  return  setCo3(core.attributes.m_b_vup.link)
}
})

useEffect(() => {

  {/* co3 */}  
if(exe.attributes[muscle].exe4 === 'Decline Crunch'){
  return  setCo4(core.attributes.decline_crunch.link)
}
if(exe.attributes[muscle].exe4 === 'Front Plank'){
  return  setCo4(core.attributes.front_plank.link)
}
if(exe.attributes[muscle].exe4 === 'Side Plank hip lift'){
  return  setCo4(core.attributes.s__hip_lift.link)
}
if(exe.attributes[muscle].exe4 === 'Decline Sit Up with Twist'){
  return  setCo4(core.attributes.d_su_with_twist.link)
}
if(exe.attributes[muscle].exe4 === 'Reverse cable chop'){
  return  setCo4(core.attributes.r_cable_chop.link)
}
if(exe.attributes[muscle].exe4 === 'Cable chop'){
  return  setCo4(core.attributes.cable_chop.link)
}
if(exe.attributes[muscle].exe4 === 'Heel touch'){
  return  setCo4(core.attributes.heel_touch.link)
}
if(exe.attributes[muscle].exe4 === 'Alternating Superman'){
  return  setCo4(core.attributes.a_superman.link)
}
if(exe.attributes[muscle].exe4 === 'Kneeling Ab Rollout'){
  return  setCo4(core.attributes.k_a_rollout.link)
}
if(exe.attributes[muscle].exe4 === 'Medicine Ball V UP'){
  return  setCo4(core.attributes.m_b_vup.link)
}
})
    
  return(

    <>
    
 
{exe.attributes[muscle].exe1?    
    <div className='pageBody' >

    <h3 className='title'>CORE</h3>

       {/* exe 1. */}
       {exe.attributes[muscle].exe1 ? 
       <div>  
          <Breadcrumb>
   <Breadcrumb.Item><a  href={co1}  target="_blank"> {exe.attributes[muscle].exe1}</a></Breadcrumb.Item>
   <Breadcrumb.Item>sets:{exe.attributes[muscle].sets1}</Breadcrumb.Item>
   <Breadcrumb.Item>reps: {exe.attributes[muscle].reps1}</Breadcrumb.Item>
   <Breadcrumb.Item>weight: {exe.attributes[muscle].weight1}</Breadcrumb.Item>
   </Breadcrumb>
       </div>
       : ''}

        {/* exe 2. */}
          
      {exe.attributes[muscle].exe2 ? 
       <div>
     <Divider/>
     <Breadcrumb>
   <Breadcrumb.Item><a href={co2}  target="_blank"> {exe.attributes[muscle].exe2}</a></Breadcrumb.Item>
   <Breadcrumb.Item>sets:{exe.attributes[muscle].sets2}</Breadcrumb.Item>
   <Breadcrumb.Item>reps: {exe.attributes[muscle].reps2}</Breadcrumb.Item>
   <Breadcrumb.Item>weight: {exe.attributes[muscle].weight2}</Breadcrumb.Item>
   </Breadcrumb>
           </div>
      : ''}


      {exe.attributes[muscle].exe3 ? 
       <div>
     <Divider/>
     <Breadcrumb>
   <Breadcrumb.Item><a href={co3}  target="_blank"> {exe.attributes[muscle].exe3}</a></Breadcrumb.Item>
   <Breadcrumb.Item>sets:{exe.attributes[muscle].sets3}</Breadcrumb.Item>
   <Breadcrumb.Item>reps: {exe.attributes[muscle].reps3}</Breadcrumb.Item>
   <Breadcrumb.Item>weight: {exe.attributes[muscle].weight3}</Breadcrumb.Item>
   </Breadcrumb>
           </div>
      : ''}
 
 {exe.attributes[muscle].exe4 ? 
       <div>
     <Divider/>
     <Breadcrumb>
   <Breadcrumb.Item><a href={co4}  target="_blank"> {exe.attributes[muscle].exe4}</a></Breadcrumb.Item>
   <Breadcrumb.Item>sets:{exe.attributes[muscle].sets4}</Breadcrumb.Item>
   <Breadcrumb.Item>reps: {exe.attributes[muscle].reps4}</Breadcrumb.Item>
   <Breadcrumb.Item>weight: {exe.attributes[muscle].weight4}</Breadcrumb.Item>
   </Breadcrumb>
           </div>
      : ''}
     

    </div>
:''
}

    </>

  );

}
export default CorePage;

