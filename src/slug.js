import './App.css';
import { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BackPage from './page/backpage';
import LegPage from './page/legpage'
import ShoulderPage from './page/shoulderpage';
import ChestPage from './page/chestpage';
import ArmPage from './page/armpage'
import CorePage from './page/corepage'
import {API_URL} from './config/index'
import {useParams} from 'react-router-dom'
import {
  useLocation,
} from 'react-router-dom';



function Slug() {
  const [exe,setExe]= useState({
    attributes:{
      name:"",
    }
})
let {id} = useParams();
const url = `${API_URL}/api/customers/${id}`

useEffect(() => {
  async function fetchMyAPI() {

    let res = await fetch(url)
    res = await res.json()
    setExe(res.data)
    console.log(exe)
    
  }
  fetchMyAPI() 
},[])

  return(
    <>
    
    <p className='menu_font'>{exe.attributes.name} </p>

    <div>

<LegPage cid={id} />
  <BackPage cid={id} />
  <ShoulderPage cid={id} />
  <ChestPage cid={id} />
  <ArmPage cid={id} />
  <CorePage cid={id} />
  </div>
    </>
  )

}

export default Slug;