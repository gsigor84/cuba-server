import '../App.css';
import { useEffect, useState} from 'react';
import axios from 'axios';
import {Form, Input, Divider, message,Breadcrumb  } from 'antd';
import {API_URL} from '../config/index'

function ShoulderEdit({cid}) {

  
  const muscle = 'shoulders'
  const url2 = `${API_URL}/api/shoulders/1?populate=%2A`
  const shoulders_url = `${API_URL}/api/customers/${cid}?populate=shoulders`


  const [exe,setExe]= useState({
    attributes:{
      name:"",
      shoulders:{
        exe1:''
      }
    }
})

const [Sdata,setSdata]=useState({
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
   setShoulder(res2.data)  
   console.log(res2)

   let res3 = await fetch(shoulders_url)
   res3 = await res3.json()
   setExe(res3.data) 
  

  }
    fetchMyAPI()
  }, [url2,cid])

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

{/* shoulder dropdown */}
const [Sdrop1,setSdrop1]= useState();
const [Sdrop2,setSdrop2]= useState();
const [Sdrop3,setSdrop3]= useState();
const [Sdrop4,setSdrop4]= useState();

function submit(e){
  e.preventDefault();
  axios.put(shoulders_url,{
    data:{  
      shoulders:{
        exe1:Sdrop1,
        reps1:Sdata.reps1,
        weight1: Sdata.weight1,
        sets1: Sdata.sets1,
    
        exe2:Sdrop2,
        reps2:Sdata.reps2,
        weight2: Sdata.weight2,
        sets2: Sdata.sets2,
    
        exe3:Sdrop3,
        reps3:Sdata.reps3,
        weight3: Sdata.weight3,
        sets3: Sdata.sets3,
    
        exe4:Sdrop4,
        reps4:Sdata.reps4,
        weight4: Sdata.weight4,
        sets4: Sdata.sets4,
    
        },

     }}).then(res=>{
      console.log(res.data)
      })


}
function handle_shoulder(e){
  const newSdata={...Sdata}
  newSdata[e.target.id]=e.target.value
  setSdata(newSdata)
}
 
  return(

    <>
     
    

    <div className='pageBody' >
    <Form onSubmit={(e)=> submit(e)} >

    <h3 className='title'>SHOULDERS</h3>
  

       {/* exe 1. */}
       
       <div>  
    
  <select className='dropdown' 
  
   onChange={(e)=> setSdrop1(e.target.value)} >
    <option value={'nothing'}>-- SELECT --</option>
  
        <option disabled value="" > {exe.attributes[muscle].exe1}</option>
        <option value={shoulder.attributes.front_raise.name}>{shoulder.attributes.front_raise.name}</option>
        <option value={shoulder.attributes.r_p_deck_fly.name}>{shoulder.attributes.r_p_deck_fly.name}</option>
        <option value={shoulder.attributes.o_c_lateral_raise.name}>{shoulder.attributes.o_c_lateral_raise.name}</option>
        <option value={shoulder.attributes.c_face_pull.name}>{shoulder.attributes.c_face_pull.name}</option>
        <option value={shoulder.attributes.military_press.name}>{shoulder.attributes.military_press.name}</option>
        <option value={shoulder.attributes.s_barrell_press.name}>{shoulder.attributes.s_barrell_press.name}</option>
        <option value={shoulder.attributes.upright_row.name}>{shoulder.attributes.upright_row.name}</option>
        <option value={shoulder.attributes.arnold_press.name}>{shoulder.attributes.arnold_press.name}</option>
        <option value={shoulder.attributes.rear_delt_fly.name}>{shoulder.attributes.rear_delt_fly.name}</option>
             
        </select>

       </div>
<div className='box'> 
       <p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_shoulder(e)} id="reps1" value={Sdata.reps}  placeholder={exe.attributes[muscle].reps1} type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_shoulder(e)} id="weight1" value={Sdata.weight}  placeholder={exe.attributes[muscle].weight1} ></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_shoulder(e)} id="sets1" value={Sdata.sets}   placeholder={exe.attributes[muscle].sets1} ></Input></p>
 
       </div>

        {/* exe 2. */}
        <Divider/>    
     
       <div>
   
    
    <select className='dropdown' 
    
    onChange={(e)=> setSdrop2(e.target.value)} >
        <option value={'nothing'}>-- SELECT --</option>
          <option disabled value="" > {exe.attributes[muscle].exe2}</option>
      
          <option value={shoulder.attributes.front_raise.name}>{shoulder.attributes.front_raise.name}</option>
        <option value={shoulder.attributes.r_p_deck_fly.name}>{shoulder.attributes.r_p_deck_fly.name}</option>
        <option value={shoulder.attributes.o_c_lateral_raise.name}>{shoulder.attributes.o_c_lateral_raise.name}</option>
        <option value={shoulder.attributes.c_face_pull.name}>{shoulder.attributes.c_face_pull.name}</option>
        <option value={shoulder.attributes.military_press.name}>{shoulder.attributes.military_press.name}</option>
        <option value={shoulder.attributes.s_barrell_press.name}>{shoulder.attributes.s_barrell_press.name}</option>
        <option value={shoulder.attributes.upright_row.name}>{shoulder.attributes.upright_row.name}</option>
        <option value={shoulder.attributes.arnold_press.name}>{shoulder.attributes.arnold_press.name}</option>
        <option value={shoulder.attributes.rear_delt_fly.name}>{shoulder.attributes.rear_delt_fly.name}</option>
             
          </select>

          <div className='box'> 
          <p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_shoulder(e)} id="reps2" value={Sdata.reps2}   placeholder={exe.attributes[muscle].reps2} type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_shoulder(e)} id="weight2" value={Sdata.weigh2}   placeholder={exe.attributes[muscle].weight2} ></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_shoulder(e)} id="sets2" value={Sdata.sets2}  placeholder={exe.attributes[muscle].sets2} ></Input></p>
 
  </div>
           </div>
     
  <Divider />

  <select className='dropdown'
   onChange={(e)=> setSdrop3(e.target.value)} >
  <option value={'nothing'}>-- SELECT --</option>
  <option disabled value="" > {exe.attributes[muscle].exe3}</option>
  <option value={shoulder.attributes.s_d_shoulder_press.name}>{shoulder.attributes.s_d_shoulder_press.name}</option>
        <option value={shoulder.attributes.front_raise.name}>{shoulder.attributes.front_raise.name}</option>
        <option value={shoulder.attributes.r_p_deck_fly.name}>{shoulder.attributes.r_p_deck_fly.name}</option>
        <option value={shoulder.attributes.o_c_lateral_raise.name}>{shoulder.attributes.o_c_lateral_raise.name}</option>
        <option value={shoulder.attributes.c_face_pull.name}>{shoulder.attributes.c_face_pull.name}</option>
        <option value={shoulder.attributes.military_press.name}>{shoulder.attributes.military_press.name}</option>
        <option value={shoulder.attributes.s_barrell_press.name}>{shoulder.attributes.s_barrell_press.name}</option>
        <option value={shoulder.attributes.upright_row.name}>{shoulder.attributes.upright_row.name}</option>
        <option value={shoulder.attributes.arnold_press.name}>{shoulder.attributes.arnold_press.name}</option>
        <option value={shoulder.attributes.rear_delt_fly.name}>{shoulder.attributes.rear_delt_fly.name}</option>
             
        </select>
        <div className='box'> 
        <p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_shoulder(e)} id="reps3" value={Sdata.reps3} placeholder={exe.attributes[muscle].reps3} type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_shoulder(e)} id="weight3" value={Sdata.weigh3}  placeholder={exe.attributes[muscle].weight3} ></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_shoulder(e)} id="sets3" value={Sdata.sets3} placeholder={exe.attributes[muscle].sets3} ></Input></p>
 </div>
  <Divider/>
  <select className='dropdown'
   onChange={(e)=> setSdrop4(e.target.value)} >
  <option value={'nothing'}>-- SELECT --</option>
  <option disabled value="" > {exe.attributes[muscle].exe4}</option>
  <option value={shoulder.attributes.s_d_shoulder_press.name}>{shoulder.attributes.s_d_shoulder_press.name}</option>
        <option value={shoulder.attributes.front_raise.name}>{shoulder.attributes.front_raise.name}</option>
        <option value={shoulder.attributes.r_p_deck_fly.name}>{shoulder.attributes.r_p_deck_fly.name}</option>
        <option value={shoulder.attributes.o_c_lateral_raise.name}>{shoulder.attributes.o_c_lateral_raise.name}</option>
        <option value={shoulder.attributes.c_face_pull.name}>{shoulder.attributes.c_face_pull.name}</option>
        <option value={shoulder.attributes.military_press.name}>{shoulder.attributes.military_press.name}</option>
        <option value={shoulder.attributes.s_barrell_press.name}>{shoulder.attributes.s_barrell_press.name}</option>
        <option value={shoulder.attributes.upright_row.name}>{shoulder.attributes.upright_row.name}</option>
        <option value={shoulder.attributes.arnold_press.name}>{shoulder.attributes.arnold_press.name}</option>
        <option value={shoulder.attributes.rear_delt_fly.name}>{shoulder.attributes.rear_delt_fly.name}</option>
             
        </select>
        <div className='box'> 
        <p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_shoulder(e)} id="reps4" value={Sdata.reps4}  placeholder={exe.attributes[muscle].reps4} type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_shoulder(e)} id="weight4" value={Sdata.weigh4}  placeholder={exe.attributes[muscle].weight4} ></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_shoulder(e)} id="sets4" value={Sdata.sets4}  placeholder={exe.attributes[muscle].sets4} ></Input></p>
</div>
<p>
  
  <button type="button" 
className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" 
onClick={submit}>
  Edit Shoulder</button></p> 
       
       </Form>

    </div>


    
   
    </>

  );

}
export default ShoulderEdit;