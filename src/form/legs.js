import '../App.css';
import axios from 'axios';
import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Form, Input, Divider, message  } from 'antd';


function Legs (props){

  const [exe,setExe]= useState()

  const [leg,setLeg]= useState({
    attributes:{
      backsquat:{
        name:''
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

const [drop1,setDrop1]= useState();
const url2 = `http://localhost:1337/api/leg-exes/3?populate=%2A`

useEffect(() => {
  async function fetchMyAPI() {
  
  {/* LEG api */}
  let res2 = await fetch(url2)
  res2 = await res2.json()
  setLeg(res2.data)   

  }
  
  fetchMyAPI()
  }, [])

props.func(exe)

return(
  <>
{exe}
<Form >
  <select className='dropdown' 
   onChange={(e)=> setExe(e.target.value)} >
  
        <option value={'nothing'}>-- SELECT --</option>
        <option value={leg.attributes.backsquat.name}>{leg.attributes.backsquat.name}</option>
        <option value={leg.attributes.frontsquat.name}>{leg.attributes.frontsquat.name}</option>
        <option value={leg.attributes.romaniandeadlift.name}>{leg.attributes.romaniandeadlift.name}</option>
        <option value={leg.attributes.walkinglunges.name}>{leg.attributes.walkinglunges.name}</option>
        <option value={leg.attributes.legpress.name}>{leg.attributes.legpress.name}</option>
        <option value={leg.attributes.legcrul.name}>{leg.attributes.legcrul.name}</option>
        <option value={leg.attributes.bulgariansplitsquat.name}>{leg.attributes.bulgariansplitsquat.name}</option>       
        </select>

        <button type="button" 
></button>
</Form>
  </>

  )
}

export default Legs;