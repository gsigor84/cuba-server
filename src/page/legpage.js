import '../App.css';
import { useEffect, useState} from 'react';
import { Divider, Breadcrumb } from 'antd';
import {API_URL} from '../config/index'


function LegPage({cid}) {

  const muscle = 'legs'
  const leg_url = `${API_URL}/api/customers/${cid}?populate=legs`
const url2 = `${API_URL}/api/leg-exes/1?populate=%2A`

  const [exe,setExe]= useState({
    attributes:{
      name:"",
      legs:{
        exe1:''
      }
    }
})

const [leg,setLeg]= useState({
  attributes:{
    backsquat:{
      name:'',
      link:''
    },
    frontsquat:{
      name:'',
      link:''
    },
    romaniandeadlift:{
      name:'',
      link:''
    },
    walkinglunges:{
      name:'',
      link:''
    },
    legpress:{
      name:'',
      link:''
    },
    legcrul:{
      name:'',
      link:''
    },
    bulgariansplitsquat:{
      name:'',
      link:''
    },
  }
})
const [l1,setL1]= useState('')
const [l2,setL2]= useState('')
const [l3,setL3]= useState('')
const [l4,setL4]= useState('')

  
  useEffect(() => {

    async function fetchMyAPI() {

{/* leg api */}  
      let res2 = await fetch(leg_url)
      res2 = await res2.json()
      setExe(res2.data) 
      
    

      {/* leg api */}  
      let res3 = await fetch(url2)
      res3 = await res3.json()
      setLeg(res3.data) 
      
  }

    fetchMyAPI()
  

  }, [leg_url])
  
  
  useEffect(() => {
    
    {/* l1 */}  
if(exe.attributes[muscle].exe1 === 'Front squat'){
  return  setL1(leg.attributes.frontsquat.link)
}

if(exe.attributes[muscle].exe1 === 'Back squat'){
  return  setL1(leg.attributes.backsquat.link)
}

if(exe.attributes[muscle].exe1 === 'Romanian deadlift'){
  return  setL1(leg.attributes.romaniandeadlift.link)
}

if(exe.attributes[muscle].exe1 === 'Walking lunges'){
  return  setL1(leg.attributes.walkinglunges.link)
}
if(exe.attributes[muscle].exe1 === 'Leg press'){
  return  setL1(leg.attributes.legpress.link)
}

if(exe.attributes[muscle].exe1 === 'Leg curl'){
  return  setL1(leg.attributes.legcrul.link)
}

if(exe.attributes[muscle].exe1 === 'Bulgarian split squat'){
  return  setL1(leg.attributes.bulgariansplitsquat.link)
}


  })

  useEffect(() => {
 {/* l2 */}  
 if(exe.attributes[muscle].exe2 === 'Front squat'){
  return  setL2(leg.attributes.frontsquat.link)
}

if(exe.attributes[muscle].exe2 === 'Back squat'){
  return  setL2(leg.attributes.backsquat.link)
}

if(exe.attributes[muscle].exe2 === 'Romanian deadlift'){
  return  setL2(leg.attributes.romaniandeadlift.link)
}

if(exe.attributes[muscle].exe2 === 'Walking lunges'){
  return  setL2(leg.attributes.walkinglunges.link)
}
if(exe.attributes[muscle].exe2 === 'Leg press'){
  return  setL2(leg.attributes.legpress.link)
}

if(exe.attributes[muscle].exe2 === 'Leg curl'){
  return  setL2(leg.attributes.legcrul.link)
}

if(exe.attributes[muscle].exe2 === 'Bulgarian split squat'){
  return  setL2(leg.attributes.bulgariansplitsquat.link)
}
})

useEffect(() => {
  {/* l3 */}  
  if(exe.attributes[muscle].exe3 === 'Front squat'){
   return  setL3(leg.attributes.frontsquat.link)
 }
 
 if(exe.attributes[muscle].exe3 === 'Back squat'){
   return  setL3(leg.attributes.backsquat.link)
 }
 
 if(exe.attributes[muscle].exe3 === 'Romanian deadlift'){
   return  setL3(leg.attributes.romaniandeadlift.link)
 }
 
 if(exe.attributes[muscle].exe3 === 'Walking lunges'){
   return  setL3(leg.attributes.walkinglunges.link)
 }
 if(exe.attributes[muscle].exe3 === 'Leg press'){
   return  setL3(leg.attributes.legpress.link)
 }
 
 if(exe.attributes[muscle].exe3 === 'Leg curl'){
   return  setL3(leg.attributes.legcrul.link)
 }
 
 if(exe.attributes[muscle].exe3 === 'Bulgarian split squat'){
   return  setL3(leg.attributes.bulgariansplitsquat.link)
 }

  })


useEffect(() => {
  {/* l4 */}  
  if(exe.attributes[muscle].exe4 === 'Front squat'){
   return  setL4(leg.attributes.frontsquat.link)
 }
 
 if(exe.attributes[muscle].exe4 === 'Back squat'){
   return  setL4(leg.attributes.backsquat.link)
 }
 
 if(exe.attributes[muscle].exe4 === 'Romanian deadlift'){
   return  setL4(leg.attributes.romaniandeadlift.link)
 }
 
 if(exe.attributes[muscle].exe4 === 'Walking lunges'){
   return  setL4(leg.attributes.walkinglunges.link)
 }
 if(exe.attributes[muscle].exe4 === 'Leg press'){
   return  setL4(leg.attributes.legpress.link)
 }
 
 if(exe.attributes[muscle].exe4 === 'Leg curl'){
   return  setL4(leg.attributes.legcrul.link)
 }
 
 if(exe.attributes[muscle].exe3 === 'Bulgarian split squat'){
   return  setL3(leg.attributes.bulgariansplitsquat.link)
 }

  })
 
  return(

    <>



     {exe.attributes[muscle].exe1?  

    <div className='pageBody' >


<div style={{marginBottom:'10%'}}>
  
  </div>

    <h3 className='title'>Legs</h3>
  

       {/* exe 1. */}
       {exe.attributes[muscle].exe1 ?   
       <div>  
          <Breadcrumb>
   <Breadcrumb.Item><a href={l1}  target="_blank"><span className='page_font'>{exe.attributes[muscle].exe1} </span> </a></Breadcrumb.Item>
   <Breadcrumb.Item><span className='page_font'>sets:{exe.attributes[muscle].sets1}</span> </Breadcrumb.Item>
   <Breadcrumb.Item><span className='page_font'>reps: {exe.attributes[muscle].reps1}</span> </Breadcrumb.Item>
   <Breadcrumb.Item><span className='page_font'>weight: {exe.attributes[muscle].weight1}</span> </Breadcrumb.Item>
   </Breadcrumb>
       </div>
       : ''}

        {/* exe 2. */}
          
      {exe.attributes[muscle].exe2 ? 
       <div>
     <Divider/>
     <Breadcrumb>
   <Breadcrumb.Item><a href={l2}  target="_blank"> <span className='page_font'>{exe.attributes[muscle].exe2}</span> </a></Breadcrumb.Item>
   <Breadcrumb.Item><span className='page_font'>sets:{exe.attributes[muscle].sets2}</span> </Breadcrumb.Item>
   <Breadcrumb.Item><span className='page_font'>reps: {exe.attributes[muscle].reps2}</span> </Breadcrumb.Item>
   <Breadcrumb.Item><span className='page_font'>weight: {exe.attributes[muscle].weight2}</span> </Breadcrumb.Item>
   </Breadcrumb>
           </div>
      : ''}


      {exe.attributes[muscle].exe3 ? 
       <div>
     <Divider/>
     <Breadcrumb>
   <Breadcrumb.Item><a href={l3}  target="_blank"><span className='page_font'> {exe.attributes[muscle].exe3}</span></a></Breadcrumb.Item>
   <Breadcrumb.Item><span className='page_font'>sets:{exe.attributes[muscle].sets3}</span></Breadcrumb.Item>
   <Breadcrumb.Item><span className='page_font'>reps: {exe.attributes[muscle].reps3}</span></Breadcrumb.Item>
   <Breadcrumb.Item><span className='page_font'>weight: {exe.attributes[muscle].weight3}</span></Breadcrumb.Item>
   </Breadcrumb>
           </div>
      : ''}
 
 {exe.attributes[muscle].exe4 ? 
       <div>
     <Divider/>
     <Breadcrumb>
   <Breadcrumb.Item><a href={l4}  target="_blank"> <span className='page_font'>{exe.attributes[muscle].exe4}</span></a></Breadcrumb.Item>
   <Breadcrumb.Item><span className='page_font'>sets:{exe.attributes[muscle].sets4}</span></Breadcrumb.Item>
   <Breadcrumb.Item><span className='page_font'>reps: {exe.attributes[muscle].reps4}</span></Breadcrumb.Item>
   <Breadcrumb.Item><span className='page_font'>weight: {exe.attributes[muscle].weight4}</span></Breadcrumb.Item>
   </Breadcrumb>
           </div>
      : ''}
     

    </div>

:''
}
    
   
    </>

  );

}
export default LegPage;