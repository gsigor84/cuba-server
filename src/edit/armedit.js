import '../App.css';
import { useEffect, useState} from 'react';
import axios from 'axios';
import {Form, Input, Divider, message,Breadcrumb  } from 'antd';
import {API_URL} from '../config/index'


function ArmEdit({cid}) {

  
  const muscle = 'arm'
  const urlarm = `${API_URL}/api/arm-exes/1?populate=%2A`
  const arm_url = `${API_URL}/api/customers/${cid}?populate=arm`


  const [exe,setExe]= useState({
    attributes:{
      name:"",
      arm:{
        exe1:''
      }
    }
})

const [Adata,setAdata]=useState({
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
  sets4: "",

  exe5:"",
  reps5:"",
  weight5: "",
  sets5: ""

})
  
  useEffect(() => {

    async function fetchMyAPI() {
 
   let res2 = await fetch(urlarm)
   res2 = await res2.json()
   setArm(res2.data)
  

   let res3 = await fetch(arm_url)
   res3 = await res3.json()
   setExe(res3.data)
   
   


  }
    fetchMyAPI()
  }, [arm_url,cid])


{/* arm dropdown */}

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

const [Adrop1,setAdrop1]= useState();
const [Adrop2,setAdrop2]= useState();
const [Adrop3,setAdrop3]= useState();
const [Adrop4,setAdrop4]= useState();
const [Adrop5,setAdrop5]= useState();
const [Adrop6,setAdrop6]= useState();

function submit(e){
  e.preventDefault();
  axios.put(arm_url,{
    data:{  
      arm:{
        exe1:Adrop1,
        reps1:Adata.reps1,
        weight1: Adata.weight1,
        sets1: Adata.sets1,
    
        exe2:Adrop2,
        reps2:Adata.reps2,
        weight2:Adata.weight2,
        sets2: Adata.sets2,
    
        exe3:Adrop3,
        reps3:Adata.reps3,
        weight3: Adata.weight3,
        sets3: Adata.sets3,
    
        exe4:Adrop4,
        reps4:Adata.reps4,
        weight4: Adata.weight4,
        sets4: Adata.sets4,

        exe5:Adrop5,
        reps5:Adata.reps5,
        weight5: Adata.weight5,
        sets5: Adata.sets5,

        exe6:Adrop6,
        reps6:Adata.reps6,
        weight6: Adata.weight6,
        sets6: Adata.sets6,
    
        },

     }}).then(res=>{
      console.log(res.data)
      })


}

function handle_arm(e){
  const newAdata={...Adata}
  newAdata[e.target.id]=e.target.value
  setAdata(newAdata)
}
 
  return(

    <>
     
    

    <div className='pageBody' >
    <Form onSubmit={(e)=> submit(e)} >

    <h3 className='title'>ARMS</h3>
  

       {/* exe 1. */}
       
       <div>  
    
  <select className='dropdown' 
  
   onChange={(e)=> setAdrop1(e.target.value)} >
    <option value={'nothing'}>-- SELECT --</option>
  
        <option disabled value="" > {exe.attributes[muscle].exe1}</option>
        
        <option value={arm.attributes.i_b_curl.name}>{arm.attributes.i_b_curl.name}</option>
        <option value={arm.attributes.c_curl.name}>{arm.attributes.c_curl.name}</option>
        <option value={arm.attributes.t_d_curl.name}>{arm.attributes.t_d_curl.name}</option>
        <option value={arm.attributes.o_a_t_extension.name}>{arm.attributes.o_a_t_extension.name}</option>
        <option value={arm.attributes.skullcrusher.name}>{arm.attributes.skullcrusher.name}</option>
        <option value={arm.attributes.c_b_press.name}>{arm.attributes.c_b_press.name}</option>
        <option value={arm.attributes.t_dips.name}>{arm.attributes.t_dips.name}</option>
        <option value={arm.attributes.c_t_pressdown.name}>{arm.attributes.c_t_pressdown.name}</option>
        <option value={arm.attributes.s_eb_curl.name}>{arm.attributes.s_eb_curl.name}</option>
        <option value={arm.attributes.c_o_tricep.name}>{arm.attributes.c_o_tricep.name}</option>  </select>

       </div>
       <div className='box'> 
       <p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_arm(e)} id="reps1" value={Adata.reps}  placeholder={exe.attributes[muscle].reps1} type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_arm(e)} id="weight1" value={Adata.weight}  placeholder={exe.attributes[muscle].weight1} ></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_arm(e)} id="sets1" value={Adata.sets}   placeholder={exe.attributes[muscle].sets1} ></Input></p>
 
       </div>

        {/* exe 2. */}
        <Divider/>    
     
       <div>
   
    
    <select className='dropdown' 
    
    onChange={(e)=> setAdrop2(e.target.value)} >
        <option value={'nothing'}>-- SELECT --</option>
          <option disabled value="" > {exe.attributes[muscle].exe2}</option>
      
          <option value={arm.attributes.i_b_curl.name}>{arm.attributes.i_b_curl.name}</option>
        <option value={arm.attributes.c_curl.name}>{arm.attributes.c_curl.name}</option>
        <option value={arm.attributes.t_d_curl.name}>{arm.attributes.t_d_curl.name}</option>
        <option value={arm.attributes.o_a_t_extension.name}>{arm.attributes.o_a_t_extension.name}</option>
        <option value={arm.attributes.skullcrusher.name}>{arm.attributes.skullcrusher.name}</option>
        <option value={arm.attributes.c_b_press.name}>{arm.attributes.c_b_press.name}</option>
        <option value={arm.attributes.t_dips.name}>{arm.attributes.t_dips.name}</option>
        <option value={arm.attributes.c_t_pressdown.name}>{arm.attributes.c_t_pressdown.name}</option>
        <option value={arm.attributes.s_eb_curl.name}>{arm.attributes.s_eb_curl.name}</option>
        <option value={arm.attributes.c_o_tricep.name}>{arm.attributes.c_o_tricep.name}</option>
          </select>

          <div className='box'> 
          <p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_arm(e)} id="reps2" value={Adata.reps2}   placeholder={exe.attributes[muscle].reps2} type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_arm(e)} id="weight2" value={Adata.weigh2}   placeholder={exe.attributes[muscle].weight2} ></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_arm(e)} id="sets2" value={Adata.sets2}  placeholder={exe.attributes[muscle].sets2} ></Input></p>
 </div>
       
           </div>
     
  <Divider />

  <select className='dropdown'
   onChange={(e)=> setAdrop3(e.target.value)} >
  <option value={'nothing'}>-- SELECT --</option>
  <option disabled value="" > {exe.attributes[muscle].exe3}</option>
  <option value={arm.attributes.i_b_curl.name}>{arm.attributes.i_b_curl.name}</option>
        <option value={arm.attributes.c_curl.name}>{arm.attributes.c_curl.name}</option>
        <option value={arm.attributes.t_d_curl.name}>{arm.attributes.t_d_curl.name}</option>
        <option value={arm.attributes.o_a_t_extension.name}>{arm.attributes.o_a_t_extension.name}</option>
        <option value={arm.attributes.skullcrusher.name}>{arm.attributes.skullcrusher.name}</option>
        <option value={arm.attributes.c_b_press.name}>{arm.attributes.c_b_press.name}</option>
        <option value={arm.attributes.t_dips.name}>{arm.attributes.t_dips.name}</option>
        <option value={arm.attributes.c_t_pressdown.name}>{arm.attributes.c_t_pressdown.name}</option>
        <option value={arm.attributes.s_eb_curl.name}>{arm.attributes.s_eb_curl.name}</option>
        <option value={arm.attributes.c_o_tricep.name}>{arm.attributes.c_o_tricep.name}</option>
        </select>
        <div className='box'> 
        <p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_arm(e)} id="reps3" value={Adata.reps3} placeholder={exe.attributes[muscle].reps3} type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_arm(e)} id="weight3" value={Adata.weigh3}  placeholder={exe.attributes[muscle].weight3} ></Input></p>
  <p><label >sets : </label> <Input  style={{ width: '18%' }} onChange={(e)=>handle_arm(e)} id="sets3" value={Adata.sets3} placeholder={exe.attributes[muscle].sets3} ></Input></p>
 </div>
  <Divider/>
  <select className='dropdown'
   onChange={(e)=> setAdrop4(e.target.value)} >
  <option value={'nothing'}>-- SELECT --</option>
  <option disabled value="" > {exe.attributes[muscle].exe4}</option>
  <option value={arm.attributes.i_b_curl.name}>{arm.attributes.i_b_curl.name}</option>
        <option value={arm.attributes.c_curl.name}>{arm.attributes.c_curl.name}</option>
        <option value={arm.attributes.t_d_curl.name}>{arm.attributes.t_d_curl.name}</option>
        <option value={arm.attributes.o_a_t_extension.name}>{arm.attributes.o_a_t_extension.name}</option>
        <option value={arm.attributes.skullcrusher.name}>{arm.attributes.skullcrusher.name}</option>
        <option value={arm.attributes.c_b_press.name}>{arm.attributes.c_b_press.name}</option>
        <option value={arm.attributes.t_dips.name}>{arm.attributes.t_dips.name}</option>
        <option value={arm.attributes.c_t_pressdown.name}>{arm.attributes.c_t_pressdown.name}</option>
        <option value={arm.attributes.s_eb_curl.name}>{arm.attributes.s_eb_curl.name}</option>
        <option value={arm.attributes.c_o_tricep.name}>{arm.attributes.c_o_tricep.name}</option>
        </select>
        <div className='box'> 
        <p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_arm(e)} id="reps4" value={Adata.reps4}  placeholder={exe.attributes[muscle].reps4} type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_arm(e)} id="weight4" value={Adata.weigh4}  placeholder={exe.attributes[muscle].weight4} ></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_arm(e)} id="sets4" value={Adata.sets4}  placeholder={exe.attributes[muscle].sets4} ></Input></p>
  </div>
  <Divider/>
  <select className='dropdown'
   onChange={(e)=> setAdrop5(e.target.value)} >
  <option value={'nothing'}>-- SELECT --</option>
  <option disabled value="" > {exe.attributes[muscle].exe5}</option>
  <option value={arm.attributes.i_b_curl.name}>{arm.attributes.i_b_curl.name}</option>
        <option value={arm.attributes.c_curl.name}>{arm.attributes.c_curl.name}</option>
        <option value={arm.attributes.t_d_curl.name}>{arm.attributes.t_d_curl.name}</option>
        <option value={arm.attributes.o_a_t_extension.name}>{arm.attributes.o_a_t_extension.name}</option>
        <option value={arm.attributes.skullcrusher.name}>{arm.attributes.skullcrusher.name}</option>
        <option value={arm.attributes.c_b_press.name}>{arm.attributes.c_b_press.name}</option>
        <option value={arm.attributes.t_dips.name}>{arm.attributes.t_dips.name}</option>
        <option value={arm.attributes.c_t_pressdown.name}>{arm.attributes.c_t_pressdown.name}</option>
        <option value={arm.attributes.s_eb_curl.name}>{arm.attributes.s_eb_curl.name}</option>
        <option value={arm.attributes.c_o_tricep.name}>{arm.attributes.c_o_tricep.name}</option>
        </select>
        <div className='box'> 
        <p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_arm(e)} id="reps5" value={Adata.reps5}  placeholder={exe.attributes[muscle].reps5} type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_arm(e)} id="weight5" value={Adata.weigh5}  placeholder={exe.attributes[muscle].weight5} ></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_arm(e)} id="sets5" value={Adata.sets5}  placeholder={exe.attributes[muscle].sets5} ></Input></p>
</div>
<Divider/>
  <select className='dropdown'
   onChange={(e)=> setAdrop6(e.target.value)} >
  <option value={'nothing'}>-- SELECT --</option>
  <option disabled value="" > {exe.attributes[muscle].exe6}</option>
  <option value={arm.attributes.i_b_curl.name}>{arm.attributes.i_b_curl.name}</option>
        <option value={arm.attributes.c_curl.name}>{arm.attributes.c_curl.name}</option>
        <option value={arm.attributes.t_d_curl.name}>{arm.attributes.t_d_curl.name}</option>
        <option value={arm.attributes.o_a_t_extension.name}>{arm.attributes.o_a_t_extension.name}</option>
        <option value={arm.attributes.skullcrusher.name}>{arm.attributes.skullcrusher.name}</option>
        <option value={arm.attributes.c_b_press.name}>{arm.attributes.c_b_press.name}</option>
        <option value={arm.attributes.t_dips.name}>{arm.attributes.t_dips.name}</option>
        <option value={arm.attributes.c_t_pressdown.name}>{arm.attributes.c_t_pressdown.name}</option>
        <option value={arm.attributes.s_eb_curl.name}>{arm.attributes.s_eb_curl.name}</option>
        <option value={arm.attributes.c_o_tricep.name}>{arm.attributes.c_o_tricep.name}</option>
        </select>
        <div className='box'> 
        <p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_arm(e)} id="reps6" value={Adata.reps5}  placeholder={exe.attributes[muscle].reps5} type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_arm(e)} id="weight6" value={Adata.weigh5}  placeholder={exe.attributes[muscle].weight5} ></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_arm(e)} id="sets6" value={Adata.sets5}  placeholder={exe.attributes[muscle].sets5} ></Input></p>
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
export default ArmEdit;