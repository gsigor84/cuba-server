import '../App.css';
import { useEffect, useState} from 'react';
import { Divider, Breadcrumb } from 'antd';
import {API_URL} from '../config/index'

function CardioPage({cid}) {

  const muscle = 'cardio'
  const cardio_url = `${API_URL}/api/customers/${cid}?populate=cardio`

  const [exe,setExe]= useState({
    attributes:{
      cardio:{
        treadmill:'',
        xtrainer:'',
        bike:'',
        rower:'',
        stairmaster:''
      }
    }
})

useEffect(() => {

  async function fetchMyAPI() {

{/* arm api */}  
    let res2 = await fetch(cardio_url)
    res2 = await res2.json()
    setExe(res2.data)

}
  fetchMyAPI()
  console.log(exe)
}, [cardio_url])
  

return(
  <>
  <div className='pageBody' >

<h3 className='title'>Cardio</h3>

<p><span className='page_font'>Treadmill : {exe.attributes[muscle].treadmill} min</span> </p>
<p><span className='page_font'>X-trainer :{exe.attributes[muscle].xtraine} min</span> </p>
<p><span className='page_font'>Bike : {exe.attributes[muscle].bike} min</span></p>
<p><span className='page_font'>Rower :{exe.attributes[muscle].rower} min</span> </p>
<p><span className='page_font'>Stairmaster Machine :{exe.attributes[muscle].stairmaster} min</span> </p>

</div>
  </>
)

}

export default CardioPage;