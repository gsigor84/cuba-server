import '../App.css';
import { useEffect, useState} from 'react';
import { Divider, Breadcrumb } from 'antd';
import {API_URL} from '../config/index'


function BackPage({cid}) {

  const muscle = 'back'
  const back_url = `${API_URL}/api/customers/${cid}?populate=back`
  const urlback = `${API_URL}/api/back-exes/1?populate=%2A`


  const [exe,setExe]= useState({
    attributes:{
      name:"",
      back:{
        exe1:''
      }
    }
})

const [back,setBack]= useState({
  attributes:{
    widepulldown:{
      name:'',
      link:''
    },
    armpulldown:{
      name:'',
      link:''
    },
revgrippulldown:{
name:'',
link:''
},
bentoverrow:{
name:'',
link:''
},
singlearmrow:{
name:'',
link:''
},
tbarrow:{
name:'',
link:''
},
  }
  })

  const [b1,setB1]= useState('')
const [b2,setB2]= useState('')
const [b3,setB3]= useState('')
const [b4,setB4]= useState('')
  
  useEffect(() => {


    async function fetchMyAPI() {


{/* leg api */}  
      let res2 = await fetch(back_url)
      res2 = await res2.json()
      setExe(res2.data) 

            {/* back api */}  
            let res3 = await fetch(urlback)
            res3 = await res3.json()
            setBack(res3.data) 
            
     

  }
    fetchMyAPI()
  }, [back_url])

  useEffect(() => {
  {/* b1 */}  
  if(exe.attributes[muscle].exe1 === 'Wide-Grip Lat Pulldown'){
    return  setB1(back.attributes.widepulldown.link)
  }
  if(exe.attributes[muscle].exe1 === 'Straight-Arm Pulldown'){
    return  setB1(back.attributes.armpulldown.link)
  }
  if(exe.attributes[muscle].exe1 === 'Reverse Grip Lat Pull Down'){
    return  setB1(back.attributes.revgrippulldown.link)
  }


  if(exe.attributes[muscle].exe1 === 'Bent Over Row'){
    return  setB1(back.attributes.bentoverrow.link)
  }

  if(exe.attributes[muscle].exe1 === 'One-Arm Dumbbell Row'){
    return  setB1(back.attributes.singlearmrow.link)
  }

  if(exe.attributes[muscle].exe1 === 'T-Bar Row'){
    return  setB1(back.attributes.tbarrow.link)
  }
}
  )

  useEffect(() => {
    {/* b2 */}  
    if(exe.attributes[muscle].exe2 === 'Wide-Grip Lat Pulldown'){
      return  setB2(back.attributes.widepulldown.link)
    }
    if(exe.attributes[muscle].exe2 === 'Straight-Arm Pulldown'){
      return  setB2(back.attributes.armpulldown.link)
    }
    if(exe.attributes[muscle].exe2 === 'Reverse Grip Lat Pull Down'){
      return  setB2(back.attributes.revgrippulldown.link)
    }
  
  
    if(exe.attributes[muscle].exe2 === 'Bent Over Row'){
      return  setB2(back.attributes.bentoverrow.link)
    }
  
    if(exe.attributes[muscle].exe2 === 'One-Arm Dumbbell Row'){
      return  setB2(back.attributes.singlearmrow.link)
    }
  
    if(exe.attributes[muscle].exe2 === 'T-Bar Row'){
      return  setB2(back.attributes.tbarrow.link)
    }

  })


  useEffect(() => {
    {/* b3 */}  
    if(exe.attributes[muscle].exe3 === 'Wide-Grip Lat Pulldown'){
      return  setB3(back.attributes.widepulldown.link)
    }
    if(exe.attributes[muscle].exe3 === 'Straight-Arm Pulldown'){
      return  setB3(back.attributes.armpulldown.link)
    }
    if(exe.attributes[muscle].exe3 === 'Reverse Grip Lat Pull Down'){
      return  setB3(back.attributes.revgrippulldown.link)
    }
  
  
    if(exe.attributes[muscle].exe3 === 'Bent Over Row'){
      return  setB3(back.attributes.bentoverrow.link)
    }
  
    if(exe.attributes[muscle].exe3 === 'One-Arm Dumbbell Row'){
      return  setB3(back.attributes.singlearmrow.link)
    }
  
    if(exe.attributes[muscle].exe3 === 'T-Bar Row'){
      return  setB3(back.attributes.tbarrow.link)
    }

  })

  useEffect(() => {
    {/* b4 */}  
    if(exe.attributes[muscle].exe4 === 'Wide-Grip Lat Pulldown'){
      return  setB4(back.attributes.widepulldown.link)
    }
    if(exe.attributes[muscle].exe4 === 'Straight-Arm Pulldown'){
      return  setB4(back.attributes.armpulldown.link)
    }
    if(exe.attributes[muscle].exe4 === 'Reverse Grip Lat Pull Down'){
      return  setB4(back.attributes.revgrippulldown.link)
    }
  
    if(exe.attributes[muscle].exe4 === 'Bent Over Row'){
      return  setB4(back.attributes.bentoverrow.link)
    }
  
    if(exe.attributes[muscle].exe4 === 'One-Arm Dumbbell Row'){
      return  setB4(back.attributes.singlearmrow.link)
    }
  
    if(exe.attributes[muscle].exe4 === 'T-Bar Row'){
      return  setB4(back.attributes.tbarrow.link)
    }

  })
    
  return(

    <>

   
 {exe.attributes[muscle].exe1?  

    <div className='pageBody' >

   <h3 className='title'>Back</h3>
  

       {/* exe 1. */}
       {exe.attributes[muscle].exe1 ?   
       <div>  
          <Breadcrumb>
   <Breadcrumb.Item><a href={b1}  target="_blank"> {exe.attributes[muscle].exe1}</a></Breadcrumb.Item>
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
   <Breadcrumb.Item><a href={b2}  target="_blank"> {exe.attributes[muscle].exe2}</a></Breadcrumb.Item>
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
   <Breadcrumb.Item><a href={b3}  target="_blank"> {exe.attributes[muscle].exe3}</a></Breadcrumb.Item>
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
   <Breadcrumb.Item><a href={b4}  target="_blank"> {exe.attributes[muscle].exe4}</a></Breadcrumb.Item>
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
export default BackPage;

