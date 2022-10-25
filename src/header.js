import {useLocation, Link,useParams } from 'react-router-dom';
import { useEffect, useState} from 'react';
import {
  HomeOutlined,FileDoneOutlined,EditOutlined,HeartOutlined 
} from '@ant-design/icons';

function Header() {
  
  const location = useLocation();
  const [id,setId]= useState()

  useEffect(() => {
    async function Local() {
      setId(location.pathname)
      console.log(location.pathname);

    }
    Local()
  },[location])


return(
  <> 

  
{location.pathname.indexOf("/customers/") === 0 ? <span className='menu_font'>////////////////////</span> :
  

  <div className='wrapper'>
<div className='first'>
<Link to="/"> 
<HomeOutlined className='icon' style={{color:'#1A56DB'}} /> 
</Link>
</div>

<div className='second'>
<Link to="/"> 
<span className='menu_font'>Home</span>
</Link>
</div>

<div className='second'>
<Link to="/page"> 
<FileDoneOutlined className='icon' style={{color:'#1A56DB'}} /> 
</Link>
</div>

<div className='second'>

   <Link to="/page"><span className='menu_font'>PAGE</span></Link>
   </div>


   <div className='second'>
<Link to="/edit"> 
<EditOutlined className='icon' style={{color:'#1A56DB'}} /> 
</Link>
</div>

   <div className='second'>
   <Link to="/edit"><span className='menu_font'>EDIT</span></Link>
   </div>

   <div className='second'>
<Link to="/cardio"> 
<HeartOutlined className='icon' style={{color:'#1A56DB'}} /> 
</Link>
</div>

   <div className='second'>
   <Link to="/cardio"><span className='menu_font'>CARDIO</span></Link>
   </div>



   </div>

}
</>
)
}
export default Header;