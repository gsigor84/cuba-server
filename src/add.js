import './App.css';
import axios from 'axios';
import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Form, Input, Divider, message  } from 'antd';
import {API_URL} from './config/index'

function Add (){



  const [exe,setExe]= useState([])
  const navigate = useNavigate();

  
{/* leg dropdown */}

  const [leg,setLeg]= useState({
    attributes:{
      backsquat:{
        name:'',
        link:''
      },
      frontsquat:{
        name:''
      },
      romaniandeadlift:{
        name:''
      },
      walkinglunges:{
        name:''
      },
      legpress:{
        name:''
      },
      legcrul:{
        name:''
      },
      bulgariansplitsquat:{
        name:''
      },
    }
})
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
  
    const [chest,setChest]= useState({
      attributes:{
        f_b_press:{
          name:''
        },
        i_b_press:{
          name:''
        },
        d_b_press:{
          name:''
        },
        m_c_press:{
          name:''
        },
        push_up:{
          name:''
        },
        dip_chest:{
          name:''
        },
        chest_fly:{
          name:''
        },
        machine_fly:{
          name:''
        },
}})

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


{/* leg dropdown */}
const [drop1,setDrop1]= useState();
const [drop2,setDrop2]= useState();
const [drop3,setDrop3]= useState();
const [drop4,setDrop4]= useState();
{/* back dropdown */}
const [Bdrop1,setBdrop1]= useState();
const [Bdrop2,setBdrop2]= useState();
const [Bdrop3,setBdrop3]= useState();
const [Bdrop4,setBdrop4]= useState();
{/* shoulder dropdown */}
const [Sdrop1,setSdrop1]= useState();
const [Sdrop2,setSdrop2]= useState();
const [Sdrop3,setSdrop3]= useState();
const [Sdrop4,setSdrop4]= useState();
{/* chest dropdown */}
const [Cdrop1,setCdrop1]= useState();
const [Cdrop2,setCdrop2]= useState();
const [Cdrop3,setCdrop3]= useState();
const [Cdrop4,setCdrop4]= useState();
{/* arms dropdown */}
const [Adrop1,setAdrop1]= useState();
const [Adrop2,setAdrop2]= useState();
const [Adrop3,setAdrop3]= useState();
const [Adrop4,setAdrop4]= useState();
const [Adrop5,setAdrop5]= useState();
const [Adrop6,setAdrop6]= useState();

{/* core dropdown */}
const [Codrop1,setCodrop1]= useState();
const [Codrop2,setCodrop2]= useState();
const [Codrop3,setCodrop3]= useState();
const [Codrop4,setCodrop4]= useState();

  
  const [data,setData]=useState({
      name:"",
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
{/* shoulder dropdown */}
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

  {/* chest dropdown */}
  const [Cdata,setCdata]=useState({
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
    sets5: "",

    exe6:"",
    reps6:"",
    weight6: "",
    sets6: "",
  
  })

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
  
  const url = `${API_URL}/api/customers`
  const url2 = `${API_URL}/api/leg-exes/1?populate=%2A`
  const urlback = `${API_URL}/api/back-exes/1?populate=%2A`
  const urlshoulder = `${API_URL}/api/shoulders/1?populate=%2A`
  const urlchest = `${API_URL}/api/chest-exes/1?populate=%2A`
  const urlarm = `${API_URL}/api/arm-exes/1?populate=%2A`
  const urlcore = `${API_URL}/api/core-exes/1?populate=%2A`
  
    useEffect(() => {
    async function fetchMyAPI() {
    
      let res = await fetch(url)
    res = await res.json()
    setExe(res.data)
    // console.log(res.data)

    {/* LEG api */}
    let res2 = await fetch(url2)
    res2 = await res2.json()
    setLeg(res2.data)   
    

    {/* BACK api */}
    let resBack = await fetch(urlback)
    resBack = await resBack.json()
    setBack(resBack.data)   

      {/* BACK api */}
      let resShoulder = await fetch(urlshoulder)
      resShoulder  = await resShoulder.json()
      setShoulder(resShoulder.data)

        {/* CHEST api */}
        let resChest = await fetch(urlchest)
        resChest  = await resChest.json()
        setChest(resChest.data)
        

         {/* ARM api */}
         let resArm = await fetch(urlarm)
         resArm  = await resArm.json()
         setArm(resArm.data)
         

                  {/* CORE api */}
                  let resCore = await fetch(urlcore)
                  resCore = await resCore.json()
                  setCore(resCore.data)
                  
         


    }
    
    fetchMyAPI()
    }, [])
    
  function submit(e){
    const success = () => {
      message.success({
        content: 'WORK OUT ADDED',
        className: 'custom-class',
        style: {
          marginTop: '20vh',
        },
      });
    };
    success()

    e.preventDefault();
    axios.post(url,{
  data:{   
    name:data.name,
    legs:{
    exe1:drop1,
    reps1:data.reps1,
    weight1: data.weight1,
    sets1: data.sets1,

    exe2:drop2,
    reps2:data.reps2,
    weight2: data.weight2,
    sets2: data.sets2,

    exe3:drop3,
    reps3:data.reps3,
    weight3: data.weight3,
    sets3: data.sets3,

    exe4:drop4,
    reps4:data.reps4,
    weight4: data.weight4,
    sets4: data.sets4,

    },   back:{
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
        chest:{
          exe1:Cdrop1,
          reps1:Cdata.reps1,
          weight1: Cdata.weight1,
          sets1: Cdata.sets1,
      
          exe2:Cdrop2,
          reps2:Cdata.reps2,
          weight2: Cdata.weight2,
          sets2: Cdata.sets2,
      
          exe3:Cdrop3,
          reps3:Cdata.reps3,
          weight3: Cdata.weight3,
          sets3: Cdata.sets3,
      
          exe4:Cdrop4,
          reps4:Cdata.reps4,
          weight4: Cdata.weight4,
          sets4: Cdata.sets4,
      
          },arm:{
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
  

  } 
  })


  .then(res=>{
    console.log(res.data)
    navigate("/page");
    })



  }
  
  function handle(e){
    const newdata={...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)
  }
  function handle_back(e){
    const newBdata={...Bdata}
    newBdata[e.target.id]=e.target.value
    setBdata(newBdata)
  
  }

  function handle_shoulder(e){
    const newSdata={...Sdata}
    newSdata[e.target.id]=e.target.value
    setSdata(newSdata)
  }

    function handle_chest(e){
      const newCdata={...Cdata}
      newCdata[e.target.id]=e.target.value
      setCdata(newCdata)
  
  }

  function handle_arm(e){
    const newAdata={...Adata}
    newAdata[e.target.id]=e.target.value
    setAdata(newAdata)
  }
    function handle_core(e){
      const newCodata={...Codata}
      newCodata[e.target.id]=e.target.value
      setCodata(newCodata)

}


  return(
    <div>
  <p style={{fontSize:'18px'}}>Add new customer</p>
  
  
  <Form onSubmit={(e)=> submit(e)}>
  <p>customer name : 
    <Input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder='name' type={"text"}></Input></p>

{/* leg form */}

  <h3 className='title'>Legs</h3>
  <Divider />
  
 <p>
  <select className='dropdown' 
   onChange={(e)=> setDrop1(e.target.value)} >
  
        <option value={'nothing'}>-- SELECT --</option>
        <option value={leg.attributes.backsquat.name}>{leg.attributes.backsquat.name}</option>
        <option value={leg.attributes.frontsquat.name}>{leg.attributes.frontsquat.name}</option>
        <option value={leg.attributes.romaniandeadlift.name}>{leg.attributes.romaniandeadlift.name}</option>
        <option value={leg.attributes.walkinglunges.name}>{leg.attributes.walkinglunges.name}</option>
        <option value={leg.attributes.legpress.name}>{leg.attributes.legpress.name}</option>
        <option value={leg.attributes.legcrul.name}>{leg.attributes.legcrul.name}</option>
        <option value={leg.attributes.bulgariansplitsquat.name}>{leg.attributes.bulgariansplitsquat.name}</option>       
        </select>
</p>
<div className='box'> 
  <p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle(e)} id="reps1" value={data.reps}  placeholder='reps1' type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle(e)} id="weight1" value={data.weight}  placeholder='weight1' type={"number"}></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle(e)} id="sets1" value={data.sets}  placeholder='sets1' type={"number"}></Input></p>
 </div>
  <Divider />
  
  <p>
  <select className='dropdown' 
   onChange={(e)=> setDrop2(e.target.value)} >
  
  <option value={'nothing'}>-- SELECT --</option>
        <option value={leg.attributes.backsquat.name}>{leg.attributes.backsquat.name}</option>
        <option value={leg.attributes.frontsquat.name}>{leg.attributes.frontsquat.name}</option>
        <option value={leg.attributes.romaniandeadlift.name}>{leg.attributes.romaniandeadlift.name}</option>
        <option value={leg.attributes.walkinglunges.name}>{leg.attributes.walkinglunges.name}</option>
        <option value={leg.attributes.legpress.name}>{leg.attributes.legpress.name}</option>
        <option value={leg.attributes.legcrul.name}>{leg.attributes.legcrul.name}</option>
        <option value={leg.attributes.bulgariansplitsquat.name}>{leg.attributes.bulgariansplitsquat.name}</option>       
        </select>
</p>
<div className='box'> 
  <p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle(e)} id="reps2" value={data.reps2}  placeholder='reps2' type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle(e)} id="weight2" value={data.weigh2}  placeholder='weight2' type={"number"}></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle(e)} id="sets2" value={data.sets2}  placeholder='sets2' type={"number"}></Input></p>
  
  </div>
  <Divider />

  <p>
  <select className='dropdown'
   onChange={(e)=> setDrop3(e.target.value)} >
  
  <option value={'nothing'}>-- SELECT --</option>
        <option value={leg.attributes.backsquat.name}>{leg.attributes.backsquat.name}</option>
        <option value={leg.attributes.frontsquat.name}>{leg.attributes.frontsquat.name}</option>
        <option value={leg.attributes.romaniandeadlift.name}>{leg.attributes.romaniandeadlift.name}</option>
        <option value={leg.attributes.walkinglunges.name}>{leg.attributes.walkinglunges.name}</option>
        <option value={leg.attributes.legpress.name}>{leg.attributes.legpress.name}</option>
        <option value={leg.attributes.legcrul.name}>{leg.attributes.legcrul.name}</option>
        <option value={leg.attributes.bulgariansplitsquat.name}>{leg.attributes.bulgariansplitsquat.name}</option>       
        </select>
</p>

  <p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle(e)} id="reps3" value={data.reps3}  placeholder='reps3' type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle(e)} id="weight3" value={data.weigh3}  placeholder='weight3' type={"number"}></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle(e)} id="sets3" value={data.sets3}  placeholder='sets3' type={"number"}></Input></p>
  <Divider />


  <p>
  <select className='dropdown'
   onChange={(e)=> setDrop4(e.target.value)} >
  
  <option value={'nothing'}>-- SELECT --</option>
        <option value={leg.attributes.backsquat.name}>{leg.attributes.backsquat.name}</option>
        <option value={leg.attributes.frontsquat.name}>{leg.attributes.frontsquat.name}</option>
        <option value={leg.attributes.romaniandeadlift.name}>{leg.attributes.romaniandeadlift.name}</option>
        <option value={leg.attributes.walkinglunges.name}>{leg.attributes.walkinglunges.name}</option>
        <option value={leg.attributes.legpress.name}>{leg.attributes.legpress.name}</option>
        <option value={leg.attributes.legcrul.name}>{leg.attributes.legcrul.name}</option>
        <option value={leg.attributes.bulgariansplitsquat.name}>{leg.attributes.bulgariansplitsquat.name}</option>       
        </select>
</p>
<div className='box'> 
  <p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle(e)} id="reps4" value={data.reps4}  placeholder='reps4' type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle(e)} id="weight4" value={data.weigh4}  placeholder='weight4' type={"number"}></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle(e)} id="sets4" value={data.sets4}  placeholder='sets4' type={"number"}></Input></p>
  </div>
  <Divider />

{/* back form */}
<h3 className='title'>Back</h3>

<Divider />

<p>
  <select className='dropdown' 
   onChange={(e)=> setBdrop1(e.target.value)} >
  
        <option value={'nothing'}>-- SELECT --</option>
        <option value={back.attributes.widepulldown.name}>{back.attributes.widepulldown.name}</option>
        <option value={back.attributes.armpulldown.name}>{back.attributes.armpulldown.name}</option>
        <option value={back.attributes.revgrippulldown.name}>{back.attributes.revgrippulldown.name}</option>
        <option value={back.attributes.bentoverrow.name}>{back.attributes.bentoverrow.name}</option>
        <option value={back.attributes.singlearmrow.name}>{back.attributes.singlearmrow.name}</option>
        <option value={back.attributes.tbarrow.name}>{back.attributes.tbarrow.name}</option>
             
        </select>
</p>
<div className='box'> 
<p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_back(e)} id="reps1" value={Bdata.reps}  placeholder='reps1' type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_back(e)} id="weight1" value={Bdata.weight}  placeholder='weight1' type={"number"}></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_back(e)} id="sets1" value={Bdata.sets}  placeholder='sets1' type={"number"}></Input></p>
 </div>
  <Divider />

{/* exe2 */}

<p>
  <select className='dropdown' 
   onChange={(e)=> setBdrop2(e.target.value)} >
  
        <option value={'nothing'}>-- SELECT --</option>
        <option value={back.attributes.widepulldown.name}>{back.attributes.widepulldown.name}</option>
        <option value={back.attributes.armpulldown.name}>{back.attributes.armpulldown.name}</option>
        <option value={back.attributes.revgrippulldown.name}>{back.attributes.revgrippulldown.name}</option>
        <option value={back.attributes.bentoverrow.name}>{back.attributes.bentoverrow.name}</option>
        <option value={back.attributes.singlearmrow.name}>{back.attributes.singlearmrow.name}</option>
        <option value={back.attributes.tbarrow.name}>{back.attributes.tbarrow.name}</option>
             
        </select>
</p>
<div className='box'> 
<p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_back(e)} id="reps2" value={Bdata.reps}  placeholder='reps2' type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_back(e)} id="weight2" value={Bdata.weight}  placeholder='weight2' type={"number"}></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_back(e)} id="sets2" value={Bdata.sets}  placeholder='sets2' type={"number"}></Input></p>
 </div>
  <Divider />

{/* exe3 */}
<p>
  <select className='dropdown' 
   onChange={(e)=> setBdrop3(e.target.value)} >
  
        <option value={'nothing'}>-- SELECT --</option>
        <option value={back.attributes.widepulldown.name}>{back.attributes.widepulldown.name}</option>
        <option value={back.attributes.armpulldown.name}>{back.attributes.armpulldown.name}</option>
        <option value={back.attributes.revgrippulldown.name}>{back.attributes.revgrippulldown.name}</option>
        <option value={back.attributes.bentoverrow.name}>{back.attributes.bentoverrow.name}</option>
        <option value={back.attributes.singlearmrow.name}>{back.attributes.singlearmrow.name}</option>
        <option value={back.attributes.tbarrow.name}>{back.attributes.tbarrow.name}</option>
             
        </select>
</p>
<div className='box'> 
<p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_back(e)} id="reps3" value={Bdata.reps}  placeholder='reps2' type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_back(e)} id="weight3" value={Bdata.weight}  placeholder='weight2' type={"number"}></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_back(e)} id="sets3" value={Bdata.sets}  placeholder='sets2' type={"number"}></Input></p>
 </div>
  <Divider />
  {/* exe4 */}
  <p>
  <select className='dropdown' 
   onChange={(e)=> setBdrop4(e.target.value)} >
  
        <option value={'nothing'}>-- SELECT --</option>
        <option value={back.attributes.widepulldown.name}>{back.attributes.widepulldown.name}</option>
        <option value={back.attributes.armpulldown.name}>{back.attributes.armpulldown.name}</option>
        <option value={back.attributes.revgrippulldown.name}>{back.attributes.revgrippulldown.name}</option>
        <option value={back.attributes.bentoverrow.name}>{back.attributes.bentoverrow.name}</option>
        <option value={back.attributes.singlearmrow.name}>{back.attributes.singlearmrow.name}</option>
        <option value={back.attributes.tbarrow.name}>{back.attributes.tbarrow.name}</option>
             
        </select>
</p>
<div className='box'> 
<p><label >reps : </label> <Input style={{ width: '18%' }} onChange={(e)=>handle_back(e)} id="reps4" value={Bdata.reps}  placeholder='reps2' type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_back(e)} id="weight4" value={Bdata.weight}  placeholder='weight2' type={"number"}></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_back(e)} id="sets4" value={Bdata.sets}  placeholder='sets2' type={"number"}></Input></p>
 </div>
  <Divider />

{/* SHOULDER */}
<h3 className='title'>Shoulder</h3>

<Divider />

<p>
  <select className='dropdown' 
   onChange={(e)=> setSdrop1(e.target.value)} >
  
        <option value={'nothing'}>-- SELECT --</option>
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
</p>

<div className='box'> 
<p><label >reps : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_shoulder(e)} id="reps1" value={Sdata.reps}  placeholder='reps1' type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_shoulder(e)} id="weight1" value={Sdata.weight}  placeholder='weight1' type={"number"}></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_shoulder(e)} id="sets1" value={Sdata.sets}  placeholder='sets1' type={"number"}></Input></p>
 </div>
  <Divider />

{/* exe2 */}

<p>
  <select className='dropdown' 
   onChange={(e)=> setSdrop2(e.target.value)} >
  
  <option value={'nothing'}>-- SELECT --</option>
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
</p>
<div className='box'> 
<p><label >reps : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_shoulder(e)} id="reps2" value={Sdata.reps}  placeholder='reps2' type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_shoulder(e)} id="weight2" value={Sdata.weight}  placeholder='weight2' type={"number"}></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_shoulder(e)} id="sets2" value={Sdata.sets}  placeholder='sets2' type={"number"}></Input></p>
 </div>
  <Divider />

{/* exe3 */}
<p>
  <select className='dropdown' 
   onChange={(e)=> setSdrop3(e.target.value)} >
  
  <option value={'nothing'}>-- SELECT --</option>
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
</p>
<div className='box'> 
<p><label >reps : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_shoulder(e)} id="reps3" value={Sdata.reps}  placeholder='reps2' type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_shoulder(e)} id="weight3" value={Sdata.weight}  placeholder='weight2' type={"number"}></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_shoulder(e)} id="sets3" value={Sdata.sets}  placeholder='sets2' type={"number"}></Input></p>
 </div>
  <Divider />
  {/* exe4 */}
  <p>
  <select className='dropdown' 
   onChange={(e)=> setSdrop4(e.target.value)} >
  
  <option value={'nothing'}>-- SELECT --</option>
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
</p>
<div className='box'> 
<p><label >reps : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_shoulder(e)} id="reps4" value={Sdata.reps}  placeholder='reps2' type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_shoulder(e)} id="weight4" value={Sdata.weight}  placeholder='weight2' type={"number"}></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_shoulder(e)} id="sets4" value={Sdata.sets}  placeholder='sets2' type={"number"}></Input></p>
 </div>
  <Divider />

  <h3 className='title'>Chest</h3>

<Divider />

<p>
  <select className='dropdown' 
   onChange={(e)=> setCdrop1(e.target.value)} >
  
        <option value={'nothing'}>-- SELECT --</option>
        <option value={chest.attributes.f_b_press.name}>{chest.attributes. f_b_press.name}</option>
        <option value={chest.attributes.i_b_press.name}>{chest.attributes.i_b_press.name}</option>
        <option value={chest.attributes.d_b_press.name}>{chest.attributes.d_b_press.name}</option>
        <option value={chest.attributes.d_b_press.name}>{chest.attributes.d_b_press.name}</option>
        <option value={chest.attributes.push_up.name}>{chest.attributes.push_up.name}</option>
        <option value={chest.attributes.dip_chest.name}>{chest.attributes.dip_chest.name}</option>
        <option value={chest.attributes.chest_fly.name}>{chest.attributes.chest_fly.name}</option>
        <option value={chest.attributes.machine_fly.name}>{chest.attributes.machine_fly.name}</option>

             
        </select>
</p>
<div className='box'> 
<p><label >reps : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_chest(e)} id="reps1" value={Cdata.reps}  placeholder='reps1' type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_chest(e)} id="weight1" value={Cdata.weight}  placeholder='weight1' type={"number"}></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_chest(e)} id="sets1" value={Cdata.sets}  placeholder='sets1' type={"number"}></Input></p>
 </div>
  <Divider />

  <p>
  <select className='dropdown' 
   onChange={(e)=> setCdrop2(e.target.value)} >
  
        <option value={'nothing'}>-- SELECT --</option>
        <option value={chest.attributes. f_b_press.name}>{chest.attributes. f_b_press.name}</option>
        <option value={chest.attributes.i_b_press.name}>{chest.attributes.i_b_press.name}</option>
        <option value={chest.attributes.d_b_press.name}>{chest.attributes.d_b_press.name}</option>
        <option value={chest.attributes.d_b_press.name}>{chest.attributes.d_b_press.name}</option>
        <option value={chest.attributes.push_up.name}>{chest.attributes.push_up.name}</option>
        <option value={chest.attributes.dip_chest.name}>{chest.attributes.dip_chest.name}</option>
        <option value={chest.attributes.chest_fly.name}>{chest.attributes.chest_fly.name}</option>
        <option value={chest.attributes.machine_fly.name}>{chest.attributes.machine_fly.name}</option>

             
        </select>
</p>
<div className='box'> 
<p><label >reps : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_chest(e)} id="reps2" value={Cdata.reps}  placeholder='reps1' type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_chest(e)} id="weight2" value={Cdata.weight}  placeholder='weight1' type={"number"}></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_chest(e)} id="sets2" value={Cdata.sets}  placeholder='sets1' type={"number"}></Input></p>
 </div>
 <Divider />
  <p>
  <select className='dropdown' 
   onChange={(e)=> setCdrop3(e.target.value)} >
  
        <option value={'nothing'}>-- SELECT --</option>
        <option value={chest.attributes. f_b_press.name}>{chest.attributes. f_b_press.name}</option>
        <option value={chest.attributes.i_b_press.name}>{chest.attributes.i_b_press.name}</option>
        <option value={chest.attributes.d_b_press.name}>{chest.attributes.d_b_press.name}</option>
        <option value={chest.attributes.d_b_press.name}>{chest.attributes.d_b_press.name}</option>
        <option value={chest.attributes.push_up.name}>{chest.attributes.push_up.name}</option>
        <option value={chest.attributes.dip_chest.name}>{chest.attributes.dip_chest.name}</option>
        <option value={chest.attributes.chest_fly.name}>{chest.attributes.chest_fly.name}</option>
        <option value={chest.attributes.machine_fly.name}>{chest.attributes.machine_fly.name}</option>

             
        </select>
</p>
<div className='box'> 
<p><label >reps : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_chest(e)} id="reps3" value={Cdata.reps}  placeholder='reps1' type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_chest(e)} id="weight3" value={Cdata.weight}  placeholder='weight1' type={"number"}></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_chest(e)} id="sets3" value={Cdata.sets}  placeholder='sets1' type={"number"}></Input></p>
 </div>
  <Divider />
  <p>
  <select className='dropdown' 
   onChange={(e)=> setCdrop4(e.target.value)} >
  
        <option value={'nothing'}>-- SELECT --</option>
        <option value={chest.attributes. f_b_press.name}>{chest.attributes. f_b_press.name}</option>
        <option value={chest.attributes.i_b_press.name}>{chest.attributes.i_b_press.name}</option>
        <option value={chest.attributes.d_b_press.name}>{chest.attributes.d_b_press.name}</option>
        <option value={chest.attributes.d_b_press.name}>{chest.attributes.d_b_press.name}</option>
        <option value={chest.attributes.push_up.name}>{chest.attributes.push_up.name}</option>
        <option value={chest.attributes.dip_chest.name}>{chest.attributes.dip_chest.name}</option>
        <option value={chest.attributes.chest_fly.name}>{chest.attributes.chest_fly.name}</option>
        <option value={chest.attributes.machine_fly.name}>{chest.attributes.machine_fly.name}</option>

             
        </select>
</p>
<div className='box'> 
<p><label >reps : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_chest(e)} id="reps4" value={Cdata.reps}  placeholder='reps1' type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_chest(e)} id="weight4" value={Cdata.weight}  placeholder='weight1' type={"number"}></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_chest(e)} id="sets4" value={Cdata.sets}  placeholder='sets1' type={"number"}></Input></p>
 </div>
  <Divider />

  {/* ARM */}

  <h3 className='title'>ARM</h3>

<Divider />

<p>
  <select className='dropdown' 
   onChange={(e)=> setAdrop1(e.target.value)} >
  
        <option value={'nothing'}>-- SELECT --</option>
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
</p>
<div className='box'> 
<p><label >reps : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_arm(e)} id="reps1" value={Adata.reps}  placeholder='reps1' type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_arm(e)} id="weight1" value={Adata.weight}  placeholder='weight1' type={"number"}></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_arm(e)} id="sets1" value={Adata.sets}  placeholder='sets1' type={"number"}></Input></p>
 </div>
  <Divider />
  
  <p>
  <select className='dropdown' 
   onChange={(e)=> setAdrop2(e.target.value)} >
  
        <option value={'nothing'}>-- SELECT --</option>
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
</p>
<div className='box'> 
<p><label >reps : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_arm(e)} id="reps2" value={Adata.reps}  placeholder='reps1' type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_arm(e)} id="weight2" value={Adata.weight}  placeholder='weight1' type={"number"}></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_arm(e)} id="sets2" value={Adata.sets}  placeholder='sets1' type={"number"}></Input></p>
  </div>
  <Divider />
  
  <p>
  <select className='dropdown' 
   onChange={(e)=> setAdrop3(e.target.value)} >
  
        <option value={'nothing'}>-- SELECT --</option>
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
</p>
<div className='box'> 
<p><label >reps : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_arm(e)} id="reps3" value={Adata.reps}  placeholder='reps1' type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_arm(e)} id="weight3" value={Adata.weight}  placeholder='weight1' type={"number"}></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_arm(e)} id="sets3" value={Adata.sets}  placeholder='sets1' type={"number"}></Input></p>
 </div>
  <Divider />
  
  <p>
  <select className='dropdown' 
   onChange={(e)=> setAdrop4(e.target.value)} >
  
        <option value={'nothing'}>-- SELECT --</option>
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
</p>
<div className='box'> 
<p><label >reps : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_arm(e)} id="reps4" value={Adata.reps}  placeholder='reps1' type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_arm(e)} id="weight4" value={Adata.weight}  placeholder='weight1' type={"number"}></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_arm(e)} id="sets4" value={Adata.sets}  placeholder='sets1' type={"number"}></Input></p>
 </div>
  <Divider />
  

  <p>
  <select className='dropdown' 
   onChange={(e)=> setAdrop5(e.target.value)} >
  
        <option value={'nothing'}>-- SELECT --</option>
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
</p>
<div className='box'> 
<p><label >reps : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_arm(e)} id="reps5" value={Adata.reps}  placeholder='reps1' type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_arm(e)} id="weight5" value={Adata.weight}  placeholder='weight1' type={"number"}></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_arm(e)} id="sets5" value={Adata.sets}  placeholder='sets1' type={"number"}></Input></p>
 </div>
  <Divider />
  <p>
  <select className='dropdown' 
   onChange={(e)=> setAdrop6(e.target.value)} >
  
        <option value={'nothing'}>-- SELECT --</option>
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
</p>
<div className='box'> 
<p><label >reps : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_arm(e)} id="reps6" value={Adata.reps}  placeholder='reps6' type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_arm(e)} id="weight6" value={Adata.weight}  placeholder='weight6' type={"number"}></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_arm(e)} id="sets6" value={Adata.sets}  placeholder='sets6' type={"number"}></Input></p>
 </div>
  <Divider />


   {/* CORE */}

   <h3 className='title'>CORE</h3>

<Divider />

<p>
  <select className='dropdown' 
   onChange={(e)=> setCodrop1(e.target.value)} >
  
        <option value={'nothing'}>-- SELECT --</option>
        <option value={core.attributes.decline_crunch.name}>{core.attributes.decline_crunch.name}</option>
        <option value={core.attributes.front_plank.name}>{core.attributes.front_plank.name}</option>
        <option value={core.attributes.s__hip_lift .name}>{core.attributes.s__hip_lift .name}</option>
        <option value={core.attributes.d_su_with_twist .name}>{core.attributes.d_su_with_twist.name}</option>
        <option value={core.attributes.r_cable_chop.name}>{core.attributes.r_cable_chop.name}</option>
        <option value={core.attributes.cable_chop.name}>{core.attributes.cable_chop.name}</option>
        <option value={core.attributes.heel_touch.name}>{core.attributes.heel_touch.name}</option>
        <option value={core.attributes.a_superman.name}>{core.attributes.a_superman.name}</option>
        <option value={core.attributes.k_a_rollout.name}>{core.attributes.k_a_rollout.name}</option>
        <option value={core.attributes.m_b_vup.name}>{core.attributes.m_b_vup.name}</option>
     

             
        </select>
</p>
<div className='box'> 
<p><label >reps : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_core(e)} id="reps1" value={Codata.reps}  placeholder='reps1' type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_core(e)} id="weight1" value={Codata.weight}  placeholder='weight1' type={"number"}></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_core(e)} id="sets1" value={Codata.sets}  placeholder='sets1' type={"number"}></Input></p>
 </div>
  <Divider />

  <p>
  <select className='dropdown' 
   onChange={(e)=> setCodrop2(e.target.value)} >
  
  <option value={'nothing'}>-- SELECT --</option>
  <option value={core.attributes.decline_crunch.name}>{core.attributes.decline_crunch.name}</option>
        <option value={core.attributes.front_plank.name}>{core.attributes.front_plank.name}</option>
        <option value={core.attributes.s__hip_lift .name}>{core.attributes.s__hip_lift .name}</option>
        <option value={core.attributes.d_su_with_twist .name}>{core.attributes.d_su_with_twist.name}</option>
        <option value={core.attributes.r_cable_chop.name}>{core.attributes.r_cable_chop.name}</option>
        <option value={core.attributes.cable_chop.name}>{core.attributes.cable_chop.name}</option>
        <option value={core.attributes.heel_touch.name}>{core.attributes.heel_touch.name}</option>
        <option value={core.attributes.a_superman.name}>{core.attributes.a_superman.name}</option>
        <option value={core.attributes.k_a_rollout.name}>{core.attributes.k_a_rollout.name}</option>
        <option value={core.attributes.m_b_vup.name}>{core.attributes.m_b_vup.name}</option>
     
             
        </select>
</p>
<div className='box'> 
<p><label >reps : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_core(e)} id="reps2" value={Codata.reps}  placeholder='reps1' type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_core(e)} id="weight2" value={Codata.weight}  placeholder='weight1' type={"number"}></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_core(e)} id="sets2" value={Codata.sets}  placeholder='sets1' type={"number"}></Input></p>
  </div>
  <Divider />
  <p>
  <select className='dropdown' 
   onChange={(e)=> setCodrop3(e.target.value)} >
  
    
  <option value={'nothing'}>-- SELECT --</option>
  <option value={core.attributes.decline_crunch.name}>{core.attributes.decline_crunch.name}</option>
        <option value={core.attributes.front_plank.name}>{core.attributes.front_plank.name}</option>
        <option value={core.attributes.s__hip_lift .name}>{core.attributes.s__hip_lift .name}</option>
        <option value={core.attributes.d_su_with_twist .name}>{core.attributes.d_su_with_twist.name}</option>
        <option value={core.attributes.r_cable_chop.name}>{core.attributes.r_cable_chop.name}</option>
        <option value={core.attributes.cable_chop.name}>{core.attributes.cable_chop.name}</option>
        <option value={core.attributes.heel_touch.name}>{core.attributes.heel_touch.name}</option>
        <option value={core.attributes.a_superman.name}>{core.attributes.a_superman.name}</option>
        <option value={core.attributes.k_a_rollout.name}>{core.attributes.k_a_rollout.name}</option>
        <option value={core.attributes.m_b_vup.name}>{core.attributes.m_b_vup.name}</option>
     

             
        </select>
</p>

<div className='box'> 
<p><label >reps : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_core(e)} id="reps3" value={Codata.reps}  placeholder='reps1' type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_core(e)} id="weight3" value={Codata.weight}  placeholder='weight1' type={"number"}></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_core(e)} id="sets3" value={Codata.sets}  placeholder='sets1' type={"number"}></Input></p>
 </div>
  <Divider />
  <p>
  <select className='dropdown' 
   onChange={(e)=> setCodrop4(e.target.value)} >
  
      
  <option value={'nothing'}>-- SELECT --</option>
  <option value={core.attributes.decline_crunch.name}>{core.attributes.decline_crunch.name}</option>
        <option value={core.attributes.front_plank.name}>{core.attributes.front_plank.name}</option>
        <option value={core.attributes.s__hip_lift .name}>{core.attributes.s__hip_lift .name}</option>
        <option value={core.attributes.d_su_with_twist .name}>{core.attributes.d_su_with_twist.name}</option>
        <option value={core.attributes.r_cable_chop.name}>{core.attributes.r_cable_chop.name}</option>
        <option value={core.attributes.cable_chop.name}>{core.attributes.cable_chop.name}</option>
        <option value={core.attributes.heel_touch.name}>{core.attributes.heel_touch.name}</option>
        <option value={core.attributes.a_superman.name}>{core.attributes.a_superman.name}</option>
        <option value={core.attributes.k_a_rollout.name}>{core.attributes.k_a_rollout.name}</option>
        <option value={core.attributes.m_b_vup.name}>{core.attributes.m_b_vup.name}</option>
     

             
        </select>
</p>
<div className='box'> 
<p><label >reps : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_core(e)} id="reps4" value={Codata.reps}  placeholder='reps1' type={"number"}></Input></p>
  <p><label >weight : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_core(e)} id="weight4" value={Codata.weight}  placeholder='weight1' type={"number"}></Input></p>
  <p><label >sets : </label> <Input style={{ width: '18%' }}  onChange={(e)=>handle_core(e)} id="sets4" value={Codata.sets}  placeholder='sets1' type={"number"}></Input></p>
 </div>
  <Divider />

{/* submit */}
  <div className='right'> <p>

<button type="button" 
className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" 
onClick={submit}>
  Add WorkOut</button></p> </div>
 
  </Form>
 
    </div>
  )
}

export default Add;