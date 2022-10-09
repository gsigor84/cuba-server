import '../App.css';
import { useEffect, useState} from 'react';
import axios from 'axios';
import {Form, Input, Divider, message,Breadcrumb  } from 'antd';
import {API_URL} from '../config/index'


function BackEdit({cid}) {

  
  const muscle = 'back'
  const urlback = `${API_URL}/api/back-exes/1?populate=%2A`
  const back_url = `${API_URL}/api/customers/${cid}?populate=back`
  


  const [exe,setExe]= useState({
    attributes:{
      name:"",
      back:{
        exe1:''
      }
    }
})

{/* back dropdown */}
const [Bdata,setBdata]=useState({
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
 
   let res2 = await fetch(urlback)
   res2 = await res2.json()
   setBack(res2.data)
   

   let res3 = await fetch(back_url)
   res3 = await res3.json()
   setExe(res3.data)
 


  }
    fetchMyAPI()
  }, [urlback,cid])


{/* back dropdown */}

const [back,setBack]= useState({
  attributes:{
    widepulldown:{
      name:''
    },
    armpulldown:{
      name:''
    },
revgrippulldown:{
name:''
},
bentoverrow:{
name:''
},
singlearmrow:{
name:''
},
tbarrow:{
name:''
},
  }
  })

{/* back dropdown */}
const [Bdrop1,setBdrop1]= useState();
const [Bdrop2,setBdrop2]= useState();
const [Bdrop3,setBdrop3]= useState();
const [Bdrop4,setBdrop4]= useState();

function submit(e){
  e.preventDefault();
  axios.put(back_url,{
    data:{  
      back:{
        exe1:Bdrop1,
        reps1:Bdata.reps1,
        weight1: Bdata.weight1,
        sets1: Bdata.sets1,
    
        exe2:Bdrop2,
        reps2:Bdata.reps2,
        weight2: Bdata.weight2,
        sets2: Bdata.sets2,
    
        exe3:Bdrop3,
        reps3:Bdata.reps3,
        weight3: Bdata.weight3,
        sets3: Bdata.sets3,
    
        exe4:Bdrop4,
        reps4:Bdata.reps4,
        weight4: Bdata.weight4,
        sets4: Bdata.sets4,
    
        },

     }}).then(res=>{
      console.log(res.data)
      })


}

function handle_back(e){
  const newBdata={...Bdata}
  newBdata[e.target.id]=e.target.value
  setBdata(newBdata)

}
 
  return(

    <>
     
    

    <div className='pageBody' >
    <Form onSubmit={(e)=> submit(e)} >

    <h3 className='title'>BACK</h3>
  

       {/* exe 1. */}
       
       <div>  
    
  <select className='dropdown' 
  
   onChange={(e)=> setBdrop1(e.target.value)} >
    <option value={'nothing'}>-- SELECT --</option>
  
        <option disabled value="" > {exe.attributes[muscle].exe1}</option>
        
        <option value={back.attributes.widepulldown.name}>{back.attributes.widepulldown.name}</option>
        <option value={back.attributes.armpulldown.name}>{back.attributes.armpulldown.name}</option>
        <option value={back.attributes.revgrippulldown.name}>{back.attributes.revgrippulldown.name}</option>
        <option value={back.attributes.bentoverrow.name}>{back.attributes.bentoverrow.name}</option>
        <option value={back.attributes.singlearmrow.name}>{back.attributes.singlearmrow.name}</option>
        <option value={back.attributes.tbarrow.name}>{back.attributes.tbarrow.name}</option>
             
        
         </select>

       </div>
       <div className='box'> 
       <p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_back(e)} id="reps1" value={Bdata.reps}  placeholder={exe.attributes[muscle].reps1} type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_back(e)} id="weight1" value={Bdata.weight}  placeholder={exe.attributes[muscle].weight1} ></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_back(e)} id="sets1" value={Bdata.sets}   placeholder={exe.attributes[muscle].sets1} ></Input></p>
 
       </div>

        {/* exe 2. */}
        <Divider/>    
     
       <div>
   
    
    <select className='dropdown' 
    
    onChange={(e)=> setBdrop2(e.target.value)} >
        <option value={'nothing'}>-- SELECT --</option>
          <option disabled value="" > {exe.attributes[muscle].exe2}</option>
      
          <option value={back.attributes.widepulldown.name}>{back.attributes.widepulldown.name}</option>
        <option value={back.attributes.armpulldown.name}>{back.attributes.armpulldown.name}</option>
        <option value={back.attributes.revgrippulldown.name}>{back.attributes.revgrippulldown.name}</option>
        <option value={back.attributes.bentoverrow.name}>{back.attributes.bentoverrow.name}</option>
        <option value={back.attributes.singlearmrow.name}>{back.attributes.singlearmrow.name}</option>
        <option value={back.attributes.tbarrow.name}>{back.attributes.tbarrow.name}</option>
             
          </select>
          <div className='box'> 

          <p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_back(e)} id="reps2" value={Bdata.reps2}   placeholder={exe.attributes[muscle].reps2} type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_back(e)} id="weight2" value={Bdata.weigh2}   placeholder={exe.attributes[muscle].weight2} ></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_back(e)} id="sets2" value={Bdata.sets2}  placeholder={exe.attributes[muscle].sets2} ></Input></p>
 </div>
       
           </div>
     
  <Divider />

  <select className='dropdown'
   onChange={(e)=> setBdrop3(e.target.value)} >
  <option value={'nothing'}>-- SELECT --</option>
  <option disabled value="" > {exe.attributes[muscle].exe3}</option>
  <option value={back.attributes.widepulldown.name}>{back.attributes.widepulldown.name}</option>
        <option value={back.attributes.armpulldown.name}>{back.attributes.armpulldown.name}</option>
        <option value={back.attributes.revgrippulldown.name}>{back.attributes.revgrippulldown.name}</option>
        <option value={back.attributes.bentoverrow.name}>{back.attributes.bentoverrow.name}</option>
        <option value={back.attributes.singlearmrow.name}>{back.attributes.singlearmrow.name}</option>
        <option value={back.attributes.tbarrow.name}>{back.attributes.tbarrow.name}</option>
             
        </select>
        <div className='box'> 
        <p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_back(e)} id="reps3" value={Bdata.reps3} placeholder={exe.attributes[muscle].reps3} type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_back(e)} id="weight3" value={Bdata.weigh3}  placeholder={exe.attributes[muscle].weight3} ></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_back(e)} id="sets3" value={Bdata.sets3} placeholder={exe.attributes[muscle].sets3} ></Input></p>
 </div>
  <Divider/>
  <select className='dropdown'
   onChange={(e)=> setBdrop4(e.target.value)} >
  <option value={'nothing'}>-- SELECT --</option>
  <option disabled value="" > {exe.attributes[muscle].exe4}</option>
  <option value={back.attributes.widepulldown.name}>{back.attributes.widepulldown.name}</option>
        <option value={back.attributes.armpulldown.name}>{back.attributes.armpulldown.name}</option>
        <option value={back.attributes.revgrippulldown.name}>{back.attributes.revgrippulldown.name}</option>
        <option value={back.attributes.bentoverrow.name}>{back.attributes.bentoverrow.name}</option>
        <option value={back.attributes.singlearmrow.name}>{back.attributes.singlearmrow.name}</option>
        <option value={back.attributes.tbarrow.name}>{back.attributes.tbarrow.name}</option>
             
        </select>
        <div className='box'> 
        <p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_back(e)} id="reps4" value={Bdata.reps4}  placeholder={exe.attributes[muscle].reps4} type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_back(e)} id="weight4" value={Bdata.weigh4}  placeholder={exe.attributes[muscle].weight4} ></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_back(e)} id="sets4" value={Bdata.sets4}  placeholder={exe.attributes[muscle].sets4} ></Input></p>

</div>
<p>
  <button type="button" 
className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" 
onClick={submit}>
  Edit Arm</button></p> 
       
       </Form>

    </div>


    
   
    </>

  );

}
export default BackEdit;