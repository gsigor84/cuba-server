import '../App.css';
import { useEffect, useState} from 'react';
import { Divider, Breadcrumb } from 'antd';
import {API_URL} from '../config/index'


function ChestPage({cid}) {

  const muscle = 'chest'
  const chest_url = `${API_URL}/api/customers/${cid}?populate=chest`
  const urlchest = `${API_URL}/api/chest-exes/1?populate=%2A`


  const [exe,setExe]= useState({
    attributes:{
      name:"",
      chest:{
        exe1:''
      }
    }
})

const [chest,setChest]= useState({
  attributes:{
    f_b_press:{
      name:'',
      link:''
    },
    i_b_press:{
      name:'',
      link:''
    },
    d_b_press:{
      name:'',
      link:''
    },
    m_c_press:{
      name:'',
      link:''
    },
    push_up:{
      name:'',
      link:''
    },
    dip_chest:{
      name:'',
      link:''
    },
    chest_fly:{
      name:''
    },
    machine_fly:{
      name:'',
      link:''
    },
}})



const [c1,setC1]= useState('')
const [c2,setC2]= useState('')
const [c3,setC3]= useState('')
const [c4,setC4]= useState('')
  
  useEffect(() => {


    async function fetchMyAPI() {


{/* chest api */}  
      let res2 = await fetch(chest_url)
      res2 = await res2.json()
      setExe(res2.data) 

      let res3 = await fetch(urlchest)
      res3 = await res3.json()
      setChest(res3.data) 
      
     

  }
    fetchMyAPI()
  }, [chest_url])


  useEffect(() => {

 {/* c1 */}  
 if(exe.attributes[muscle].exe1 === 'Flat bench press'){
  return  setC1(chest.attributes.f_b_press.link)
}
if(exe.attributes[muscle].exe1 === 'Incline Bench Press'){
  return  setC1(chest.attributes.i_b_press.link)
}
if(exe.attributes[muscle].exe1 === 'Decline Press'){
  return  setC1(chest.attributes.d_b_press.link)
}
if(exe.attributes[muscle].exe1 === 'Machine Chest Press'){
  return  setC1(chest.attributes.m_c_press.link)
}
if(exe.attributes[muscle].exe1 === 'Push-Up'){
  return  setC1(chest.attributes.push_up.link)
}
if(exe.attributes[muscle].exe1 === 'Chest Fly'){
  return  setC1(chest.attributes.chest_fly.link)
}

if(exe.attributes[muscle].exe1 === 'Machine Fly'){
  return  setC1(chest.attributes.machine_fly.link)
}
if(exe.attributes[muscle].exe1 === 'Dip'){
  return  setC1(chest.attributes.dip_chest.link)
}

  })

  useEffect(() => {

    {/* c2 */}  
    if(exe.attributes[muscle].exe2 === 'Flat bench press'){
     return  setC2(chest.attributes.f_b_press.link)
   }
   if(exe.attributes[muscle].exe2 === 'Incline Bench Press'){
     return  setC2(chest.attributes.i_b_press.link)
   }
   if(exe.attributes[muscle].exe2 === 'Decline Press'){
     return  setC2(chest.attributes.d_b_press.link)
   }
   if(exe.attributes[muscle].exe2 === 'Machine Chest Press'){
     return  setC2(chest.attributes.m_c_press.link)
   }
   if(exe.attributes[muscle].exe2 === 'Push-Up'){
     return  setC2(chest.attributes.push_up.link)
   }
   if(exe.attributes[muscle].exe2 === 'Chest Fly'){
     return  setC2(chest.attributes.chest_fly.link)
   }
   
   if(exe.attributes[muscle].exe2 === 'Machine Fly'){
     return  setC2(chest.attributes.machine_fly.link)
   }
   if(exe.attributes[muscle].exe2 === 'Dip'){
     return  setC2(chest.attributes.dip_chest.link)
   }
   
     })


     useEffect(() => {

      {/* c3 */}  
      if(exe.attributes[muscle].exe3 === 'Flat bench press'){
       return  setC3(chest.attributes.f_b_press.link)
     }
     if(exe.attributes[muscle].exe3 === 'Incline Bench Press'){
       return  setC3(chest.attributes.i_b_press.link)
     }
     if(exe.attributes[muscle].exe3 === 'Decline Press'){
       return  setC3(chest.attributes.d_b_press.link)
     }
     if(exe.attributes[muscle].exe3 === 'Machine Chest Press'){
       return  setC3(chest.attributes.m_c_press.link)
     }
     if(exe.attributes[muscle].exe3 === 'Push-Up'){
       return  setC3(chest.attributes.push_up.link)
     }
     if(exe.attributes[muscle].exe3 === 'Chest Fly'){
       return  setC3(chest.attributes.chest_fly.link)
     }
     
     if(exe.attributes[muscle].exe3 === 'Machine Fly'){
       return  setC3(chest.attributes.machine_fly.link)
     }
     if(exe.attributes[muscle].exe3 === 'Dip'){
       return  setC3(chest.attributes.dip_chest.link)
     }
     
       })

       useEffect(() => {

        {/* c4 */}  
        if(exe.attributes[muscle].exe4 === 'Flat bench press'){
         return  setC4(chest.attributes.f_b_press.link)
       }
       if(exe.attributes[muscle].exe4 === 'Incline Bench Press'){
         return  setC4(chest.attributes.i_b_press.link)
       }
       if(exe.attributes[muscle].exe4 === 'Decline Press'){
         return  setC4(chest.attributes.d_b_press.link)
       }
       if(exe.attributes[muscle].exe4 === 'Machine Chest Press'){
         return  setC4(chest.attributes.m_c_press.link)
       }
       if(exe.attributes[muscle].exe4 === 'Push-Up'){
         return  setC4(chest.attributes.push_up.link)
       }
       if(exe.attributes[muscle].exe4 === 'Chest Fly'){
         return  setC4(chest.attributes.chest_fly.link)
       }
       
       if(exe.attributes[muscle].exe4 === 'Machine Fly'){
         return  setC4(chest.attributes.machine_fly.link)
       }
       if(exe.attributes[muscle].exe4 === 'Dip'){
         return  setC4(chest.attributes.dip_chest.link)
       }
       
         })
     
  return(

    <>
  
    {exe.attributes[muscle].exe1?  

    <div className='pageBody' >

   <h3 className='title'>Chest</h3>
  

       {/* exe 1. */}
       {exe.attributes[muscle].exe1 ?   
       <div>  
          <Breadcrumb>
   <Breadcrumb.Item><a href={c1}  target="_blank"> {exe.attributes[muscle].exe1}</a></Breadcrumb.Item>
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
   <Breadcrumb.Item><a href={c2}  target="_blank"> {exe.attributes[muscle].exe2}</a></Breadcrumb.Item>
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
   <Breadcrumb.Item><a href={c3}  target="_blank"> {exe.attributes[muscle].exe3}</a></Breadcrumb.Item>
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
   <Breadcrumb.Item><a href={c4}  target="_blank"> {exe.attributes[muscle].exe4}</a></Breadcrumb.Item>
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
export default ChestPage;

