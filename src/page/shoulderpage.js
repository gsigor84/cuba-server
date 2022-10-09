import '../App.css';
import { useEffect, useState} from 'react';
import { Divider, Breadcrumb } from 'antd';
import {API_URL} from '../config/index'


function ShoulderPage({cid}) {

  const muscle = 'shoulders'
  const shoulders_url = `${API_URL}/api/customers/${cid}?populate=shoulders`
  const urlshoulder = `${API_URL}/api/shoulders/1?populate=%2A`

  const [exe,setExe]= useState({
    attributes:{
      name:"",
      shoulders:{
        exe1:''
      }
    }
})

{/* shoulder dropdown */}

const [shoulder,setShoulder]= useState({
  attributes:{
    s_d_shoulder_press:{
      name:''
    },
    front_raise:{
      name:''
    },
    r_p_deck_fly:{
name:''
},
r_p_deck_fly:{
name:''
},
c_face_pull:{
name:''
},
military_press:{
name:''
},
s_barrell_press:{
  name:''
  },
  upright_row:{
    name:''
    },
    arnold_press:{
      name:''
      },
      rear_delt_fly:{
        name:''
        },
        o_c_lateral_raise:{
          name:''
          },
  }
  })
  const [s1,setS1]= useState('')
  const [s2,setS2]= useState('')
  const [s3,setS3]= useState('')
  const [s4,setS4]= useState('')
  
  useEffect(() => {

    {/* s1 */}  
  if(exe.attributes[muscle].exe1 === 'Seated Dumbbell Shoulder Press'){
    return  setS1(shoulder.attributes.s_d_shoulder_press.link)
  }
  if(exe.attributes[muscle].exe1 === 'Front Raise'){
    return  setS1(shoulder.attributes.front_raise.link)
  }
  if(exe.attributes[muscle].exe1 === 'Reverse Pec Deck Fly'){
    return  setS1(shoulder.attributes.r_p_deck_fly.link)
  }
  if(exe.attributes[muscle].exe1 === 'One-Arm Cable Lateral Raise'){
    return  setS1(shoulder.attributes.o_c_lateral_raise.link)
  }
  if(exe.attributes[muscle].exe1 === 'Cable Face Pulls'){
    return  setS1(shoulder.attributes.c_face_pull.link)
  }
  if(exe.attributes[muscle].exe1 === 'Military Press'){
    return  setS1(shoulder.attributes.military_press.link)
  }
  if(exe.attributes[muscle].exe1 === 'Seated Barbell Press'){
    return  setS1(shoulder.attributes.s_barrell_press.link)
  }
  if(exe.attributes[muscle].exe1 === 'Upright Row'){
    return  setS1(shoulder.attributes.upright_row.link)
  }
  if(exe.attributes[muscle].exe1 === 'Arnold Press'){
    return  setS1(shoulder.attributes.arnold_press.link)
  }
  if(exe.attributes[muscle].exe1 === 'Rear Delt Fly'){
    return  setS1(shoulder.attributes.rear_delt_fly.link)
  }

  })

  useEffect(() => {

    {/* s2 */}  
  if(exe.attributes[muscle].exe2 === 'Seated Dumbbell Shoulder Press'){
    return  setS2(shoulder.attributes.s_d_shoulder_press.link)
  }
  if(exe.attributes[muscle].exe2 === 'Front Raise'){
    return  setS2(shoulder.attributes.front_raise.link)
  }
  if(exe.attributes[muscle].exe2 === 'Reverse Pec Deck Fly'){
    return  setS2(shoulder.attributes.r_p_deck_fly.link)
  }
  if(exe.attributes[muscle].exe2 === 'One-Arm Cable Lateral Raise'){
    return  setS2(shoulder.attributes.o_c_lateral_raise.link)
  }
  if(exe.attributes[muscle].exe2 === 'Cable Face Pulls'){
    return  setS2(shoulder.attributes.c_face_pull.link)
  }
  if(exe.attributes[muscle].exe2 === 'Military Press'){
    return  setS2(shoulder.attributes.military_press.link)
  }
  if(exe.attributes[muscle].exe2 === 'Seated Barbell Press'){
    return  setS2(shoulder.attributes.s_barrell_press.link)
  }
  if(exe.attributes[muscle].exe2 === 'Upright Row'){
    return  setS2(shoulder.attributes.upright_row.link)
  }
  if(exe.attributes[muscle].exe2 === 'Arnold Press'){
    return  setS2(shoulder.attributes.arnold_press.link)
  }
  if(exe.attributes[muscle].exe2 === 'Rear Delt Fly'){
    return  setS2(shoulder.attributes.rear_delt_fly.link)
  }

  })

  useEffect(() => {

    {/* s3 */}  
  if(exe.attributes[muscle].exe3 === 'Seated Dumbbell Shoulder Press'){
    return  setS3(shoulder.attributes.s_d_shoulder_press.link)
  }
  if(exe.attributes[muscle].exe3 === 'Front Raise'){
    return  setS3(shoulder.attributes.front_raise.link)
  }
  if(exe.attributes[muscle].exe3 === 'Reverse Pec Deck Fly'){
    return  setS3(shoulder.attributes.r_p_deck_fly.link)
  }
  if(exe.attributes[muscle].exe3 === 'One-Arm Cable Lateral Raise'){
    return  setS3(shoulder.attributes.o_c_lateral_raise.link)
  }
  if(exe.attributes[muscle].exe3 === 'Cable Face Pulls'){
    return  setS3(shoulder.attributes.c_face_pull.link)
  }
  if(exe.attributes[muscle].exe3 === 'Military Press'){
    return  setS3(shoulder.attributes.military_press.link)
  }
  if(exe.attributes[muscle].exe3 === 'Seated Barbell Press'){
    return  setS3(shoulder.attributes.s_barrell_press.link)
  }
  if(exe.attributes[muscle].exe3 === 'Upright Row'){
    return  setS3(shoulder.attributes.upright_row.link)
  }
  if(exe.attributes[muscle].exe3 === 'Arnold Press'){
    return  setS3(shoulder.attributes.arnold_press.link)
  }
  if(exe.attributes[muscle].exe3 === 'Rear Delt Fly'){
    return  setS3(shoulder.attributes.rear_delt_fly.link)
  }

  })

  useEffect(() => {

    {/* s4 */}  
  if(exe.attributes[muscle].exe4 === 'Seated Dumbbell Shoulder Press'){
    return  setS4(shoulder.attributes.s_d_shoulder_press.link)
  }
  if(exe.attributes[muscle].exe4 === 'Front Raise'){
    return  setS4(shoulder.attributes.front_raise.link)
  }
  if(exe.attributes[muscle].exe4 === 'Reverse Pec Deck Fly'){
    return  setS4(shoulder.attributes.r_p_deck_fly.link)
  }
  if(exe.attributes[muscle].exe4 === 'One-Arm Cable Lateral Raise'){
    return  setS4(shoulder.attributes.o_c_lateral_raise.link)
  }
  if(exe.attributes[muscle].exe4 === 'Cable Face Pulls'){
    return  setS4(shoulder.attributes.c_face_pull.link)
  }
  if(exe.attributes[muscle].exe4 === 'Military Press'){
    return  setS4(shoulder.attributes.military_press.link)
  }
  if(exe.attributes[muscle].exe4 === 'Seated Barbell Press'){
    return  setS4(shoulder.attributes.s_barrell_press.link)
  }
  if(exe.attributes[muscle].exe4 === 'Upright Row'){
    return  setS4(shoulder.attributes.upright_row.link)
  }
  if(exe.attributes[muscle].exe4 === 'Arnold Press'){
    return  setS4(shoulder.attributes.arnold_press.link)
  }
  if(exe.attributes[muscle].exe4 === 'Rear Delt Fly'){
    return  setS4(shoulder.attributes.rear_delt_fly.link)
  }

  })
  
  useEffect(() => {


    async function fetchMyAPI() {


{/* shoulder api */}  
      let res2 = await fetch(shoulders_url)
      res2 = await res2.json()
      setExe(res2.data)
      
      {/* shoulder api */}  
      let res3 = await fetch(urlshoulder)
      res3 = await res3.json()
      setShoulder(res3.data)
      
     
     

  }
    fetchMyAPI()
  }, [shoulders_url])


    
  return(

    <>

 {exe.attributes[muscle].exe1?  
    <div className='pageBody' >

    <h3 className='title'>Shoulder</h3>

    

       {/* exe 1. */}
       {exe.attributes[muscle].exe1 ?   
       <div>  
          <Breadcrumb>
   <Breadcrumb.Item><a  href={s1}  target="_blank"> {exe.attributes[muscle].exe1}</a></Breadcrumb.Item>
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
   <Breadcrumb.Item><a href={s2}  target="_blank"> {exe.attributes[muscle].exe2}</a></Breadcrumb.Item>
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
   <Breadcrumb.Item><a href={s3}  target="_blank"> {exe.attributes[muscle].exe3}</a></Breadcrumb.Item>
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
   <Breadcrumb.Item><a href={s4}  target="_blank"> {exe.attributes[muscle].exe4}</a></Breadcrumb.Item>
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
export default ShoulderPage;

