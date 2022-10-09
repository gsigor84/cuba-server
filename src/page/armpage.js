import '../App.css';
import { useEffect, useState} from 'react';
import { Divider, Breadcrumb } from 'antd';
import {API_URL} from '../config/index'


function BackPage({cid}) {

  const muscle = 'arm'
  const arm_url = `${API_URL}/api/customers/${cid}?populate=arm`
  const urlarm = `${API_URL}/api/arm-exes/1?populate=%2A`


  const [exe,setExe]= useState({
    attributes:{
      name:"",
      arm:{
        exe1:''
      }
    }
})

const [arm,setArm]= useState({
  attributes:{
    i_b_curl:{
      name:''
    },
    c_curl:{
      name:''
    },
    t_d_curl:{
      name:''
    },
    o_a_t_extension:{
      name:''
    },
    skullcrusher:{
      name:''
    },
    c_b_press:{
      name:''
    },
    t_dips:{
      name:''
    },
    c_t_pressdown:{
      name:''
    },
    s_eb_curl:{
      name:''
    },
    c_o_tricep:{
      name:''
    },
}})

const [a1,setA1]= useState('')
const [a2,setA2]= useState('')
const [a3,setA3]= useState('')
const [a4,setA4]= useState('')
const [a5,setA5]= useState('')
const [a6,setA6]= useState('')
  
  useEffect(() => {

    async function fetchMyAPI() {

{/* arm api */}  
      let res2 = await fetch(arm_url)
      res2 = await res2.json()
      setExe(res2.data)
 
      let res3 = await fetch(urlarm)
      res3 = await res3.json()
      setArm(res3.data)


  }
    fetchMyAPI()
  }, [arm_url])

  useEffect(() => {

    {/* a1 */}  
  if(exe.attributes[muscle].exe1 === 'Incline Bicep Curl'){
    return  setA1(arm.attributes.i_b_curl.link)
  }
  if(exe.attributes[muscle].exe1 === 'Concentration Curl'){
    return  setA1(arm.attributes.c_curl.link)
  }
  if(exe.attributes[muscle].exe1 === 'Twisting Dumbbell Curl'){
    return  setA1(arm.attributes.t_d_curl.link)
  }
  if(exe.attributes[muscle].exe1 === 'One Arm Tricep Extension'){
    return  setA1(arm.attributes.o_a_t_extension.link)
  }
  if(exe.attributes[muscle].exe1 === 'Skullcrusher'){
    return  setA1(arm.attributes.skullcrusher.link)
  }
  if(exe.attributes[muscle].exe1 === 'Close-grip Bench Press'){
    return  setA1(arm.attributes.c_b_press.link)
  }
  if(exe.attributes[muscle].exe1 === 'Tricep Dips'){
    return  setA1(arm.attributes.t_dips.link)
  }
  if(exe.attributes[muscle].exe1 === 'Cable triceps press-down'){
    return  setA1(arm.attributes.c_t_pressdown.link)
  }
  if(exe.attributes[muscle].exe1 === 'Standing EZ Bar Cable Curl'){
    return  setA1(arm.attributes.s_eb_curl.link)
  }
  if(exe.attributes[muscle].exe1 === 'Cable Overhead Tricep Extension'){
    return  setA1(arm.attributes.c_o_tricep.link)
  }
  
})

  useEffect(() => {

    {/* a2 */}  
  if(exe.attributes[muscle].exe2 === 'Incline Bicep Curl'){
    return  setA2(arm.attributes.i_b_curl.link)
  }
  if(exe.attributes[muscle].exe2 === 'Concentration Curl'){
    return  setA2(arm.attributes.c_curl.link)
  }
  if(exe.attributes[muscle].exe2 === 'Twisting Dumbbell Curl'){
    return  setA2(arm.attributes.t_d_curl.link)
  }
  if(exe.attributes[muscle].exe2 === 'One Arm Tricep Extension'){
    return  setA2(arm.attributes.o_a_t_extension.link)
  }
  if(exe.attributes[muscle].exe2 === 'Skullcrusher'){
    return  setA2(arm.attributes.skullcrusher.link)
  }
  if(exe.attributes[muscle].exe2 === 'Close-grip Bench Press'){
    return  setA2(arm.attributes.c_b_press.link)
  }
  if(exe.attributes[muscle].exe2 === 'Tricep Dips'){
    return  setA2(arm.attributes.t_dips.link)
  }
  if(exe.attributes[muscle].exe2 === 'Cable triceps press-down'){
    return  setA2(arm.attributes.c_t_pressdown.link)
  }
  if(exe.attributes[muscle].exe2 === 'Standing EZ Bar Cable Curl'){
    return  setA2(arm.attributes.s_eb_curl.link)
  }
  if(exe.attributes[muscle].exe2 === 'Cable Overhead Tricep Extension'){
    return  setA2(arm.attributes.c_o_tricep.link)
  }

  })

  useEffect(() => {

    {/* a3 */}  
  if(exe.attributes[muscle].exe3 === 'Incline Bicep Curl'){
    return  setA3(arm.attributes.i_b_curl.link)
  }
  if(exe.attributes[muscle].exe3 === 'Concentration Curl'){
    return  setA3(arm.attributes.c_curl.link)
  }
  if(exe.attributes[muscle].exe3 === 'Twisting Dumbbell Curl'){
    return  setA3(arm.attributes.t_d_curl.link)
  }
  if(exe.attributes[muscle].exe3 === 'One Arm Tricep Extension'){
    return  setA3(arm.attributes.o_a_t_extension.link)
  }
  if(exe.attributes[muscle].exe3 === 'Skullcrusher'){
    return  setA3(arm.attributes.skullcrusher.link)
  }
  if(exe.attributes[muscle].exe3 === 'Close-grip Bench Press'){
    return  setA3(arm.attributes.c_b_press.link)
  }
  if(exe.attributes[muscle].exe3 === 'Tricep Dips'){
    return  setA3(arm.attributes.t_dips.link)
  }
  if(exe.attributes[muscle].exe3 === 'Cable triceps press-down'){
    return  setA3(arm.attributes.c_t_pressdown.link)
  }
  if(exe.attributes[muscle].exe3 === 'Standing EZ Bar Cable Curl'){
    return  setA3(arm.attributes.s_eb_curl.link)
  }
  if(exe.attributes[muscle].exe3 === 'Cable Overhead Tricep Extension'){
    return  setA3(arm.attributes.c_o_tricep.link)
  }

  })
  useEffect(() => {

    {/* a4 */}  
  if(exe.attributes[muscle].exe4 === 'Incline Bicep Curl'){
    return  setA4(arm.attributes.i_b_curl.link)
  }
  if(exe.attributes[muscle].exe4 === 'Concentration Curl'){
    return  setA4(arm.attributes.c_curl.link)
  }
  if(exe.attributes[muscle].exe4 === 'Twisting Dumbbell Curl'){
    return  setA4(arm.attributes.t_d_curl.link)
  }
  if(exe.attributes[muscle].exe4 === 'One Arm Tricep Extension'){
    return  setA4(arm.attributes.o_a_t_extension.link)
  }
  if(exe.attributes[muscle].exe4 === 'Skullcrusher'){
    return  setA4(arm.attributes.skullcrusher.link)
  }
  if(exe.attributes[muscle].exe4 === 'Close-grip Bench Press'){
    return  setA4(arm.attributes.c_b_press.link)
  }
  if(exe.attributes[muscle].exe4 === 'Tricep Dips'){
    return  setA4(arm.attributes.t_dips.link)
  }
  if(exe.attributes[muscle].exe4 === 'Cable triceps press-down'){
    return  setA4(arm.attributes.c_t_pressdown.link)
  }
  if(exe.attributes[muscle].exe4 === 'Standing EZ Bar Cable Curl'){
    return  setA4(arm.attributes.s_eb_curl.link)
  }
  if(exe.attributes[muscle].exe4 === 'Cable Overhead Tricep Extension'){
    return  setA4(arm.attributes.c_o_tricep.link)
  }

  })
  useEffect(() => {

    {/* a5 */}  
  if(exe.attributes[muscle].exe5 === 'Incline Bicep Curl'){
    return  setA5(arm.attributes.i_b_curl.link)
  }
  if(exe.attributes[muscle].exe5 === 'Concentration Curl'){
    return  setA5(arm.attributes.c_curl.link)
  }
  if(exe.attributes[muscle].exe5 === 'Twisting Dumbbell Curl'){
    return  setA5(arm.attributes.t_d_curl.link)
  }
  if(exe.attributes[muscle].exe5 === 'One Arm Tricep Extension'){
    return  setA5(arm.attributes.o_a_t_extension.link)
  }
  if(exe.attributes[muscle].exe5 === 'Skullcrusher'){
    return  setA5(arm.attributes.skullcrusher.link)
  }
  if(exe.attributes[muscle].exe5 === 'Close-grip Bench Press'){
    return  setA5(arm.attributes.c_b_press.link)
  }
  if(exe.attributes[muscle].exe5 === 'Tricep Dips'){
    return  setA5(arm.attributes.t_dips.link)
  }
  if(exe.attributes[muscle].exe5 === 'Cable triceps press-down'){
    return  setA5(arm.attributes.c_t_pressdown.link)
  }
  if(exe.attributes[muscle].exe5 === 'Standing EZ Bar Cable Curl'){
    return  setA5(arm.attributes.s_eb_curl.link)
  }
  if(exe.attributes[muscle].exe5 === 'Cable Overhead Tricep Extension'){
    return  setA5(arm.attributes.c_o_tricep.link)
  }

  })
  useEffect(() => {

    {/* a6 */}  
  if(exe.attributes[muscle].exe6 === 'Incline Bicep Curl'){
    return  setA6(arm.attributes.i_b_curl.link)
  }
  if(exe.attributes[muscle].exe6 === 'Concentration Curl'){
    return  setA6(arm.attributes.c_curl.link)
  }
  if(exe.attributes[muscle].exe6 === 'Twisting Dumbbell Curl'){
    return  setA6(arm.attributes.t_d_curl.link)
  }
  if(exe.attributes[muscle].exe6 === 'One Arm Tricep Extension'){
    return  setA6(arm.attributes.o_a_t_extension.link)
  }
  if(exe.attributes[muscle].exe6 === 'Skullcrusher'){
    return  setA6(arm.attributes.skullcrusher.link)
  }
  if(exe.attributes[muscle].exe6 === 'Close-grip Bench Press'){
    return  setA6(arm.attributes.c_b_press.link)
  }
  if(exe.attributes[muscle].exe6 === 'Tricep Dips'){
    return  setA6(arm.attributes.t_dips.link)
  }
  if(exe.attributes[muscle].exe6 === 'Cable triceps press-down'){
    return  setA6(arm.attributes.c_t_pressdown.link)
  }
  if(exe.attributes[muscle].exe6 === 'Standing EZ Bar Cable Curl'){
    return  setA6(arm.attributes.s_eb_curl.link)
  }
  if(exe.attributes[muscle].exe6 === 'Cable Overhead Tricep Extension'){
    return  setA6(arm.attributes.c_o_tricep.link)
  }

  })

    
  return(

    <>
     { exe.attributes[muscle].exe1?  

    <div className='pageBody' >

    <h3 className='title'>ARM</h3>
  

       {/* exe 1. */}
       {exe.attributes[muscle].exe1 ?   
       <div>  
          <Divider/>
          <Breadcrumb>
   <Breadcrumb.Item><a href={a1}  target="_blank">{exe.attributes[muscle].exe1}</a></Breadcrumb.Item>
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
   <Breadcrumb.Item><a href={a2}  target="_blank"> {exe.attributes[muscle].exe2}</a></Breadcrumb.Item>
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
   <Breadcrumb.Item><a href={a3}  target="_blank"> {exe.attributes[muscle].exe3}</a></Breadcrumb.Item>
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
   <Breadcrumb.Item><a href={a4}  target="_blank"> {exe.attributes[muscle].exe4}</a></Breadcrumb.Item>
   <Breadcrumb.Item>sets:{exe.attributes[muscle].sets4}</Breadcrumb.Item>
   <Breadcrumb.Item>reps: {exe.attributes[muscle].reps4}</Breadcrumb.Item>
   <Breadcrumb.Item>weight: {exe.attributes[muscle].weight4}</Breadcrumb.Item>
   </Breadcrumb>
           </div>
      : ''}
     

     {exe.attributes[muscle].exe5 ? 
       <div>
     <Divider/>
     <Breadcrumb>
   <Breadcrumb.Item><a href={a5}  target="_blank"> {exe.attributes[muscle].exe5}</a></Breadcrumb.Item>
   <Breadcrumb.Item>sets:{exe.attributes[muscle].sets5}</Breadcrumb.Item>
   <Breadcrumb.Item>reps: {exe.attributes[muscle].reps5}</Breadcrumb.Item>
   <Breadcrumb.Item>weight: {exe.attributes[muscle].weight5}</Breadcrumb.Item>
   </Breadcrumb>
           </div>
      : ''}
     {exe.attributes[muscle].exe6 ? 
       <div>
     <Divider/>
     <Breadcrumb>
   <Breadcrumb.Item><a href={a6}  target="_blank"> {exe.attributes[muscle].exe6}</a></Breadcrumb.Item>
   <Breadcrumb.Item>sets:{exe.attributes[muscle].sets6}</Breadcrumb.Item>
   <Breadcrumb.Item>reps: {exe.attributes[muscle].reps6}</Breadcrumb.Item>
   <Breadcrumb.Item>weight: {exe.attributes[muscle].weight6}</Breadcrumb.Item>
   </Breadcrumb>
           </div>
      : ''}

    </div>

: ''}


   
    </>

  );

}
export default BackPage;

