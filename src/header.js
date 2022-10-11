import {useLocation, Link,useParams } from 'react-router-dom';
import { useEffect, useState} from 'react';

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
  <ul>
  <li>
 <Link to="/"><span className='menu_font'>Home /</span></Link>
 </li>
 <li >
   <Link to="/page"><span className='menu_font'>Page /</span></Link>
 </li>
 <li >
   <Link to="/edit"><span className='menu_font'>Edit</span></Link>
 </li>
 </ul>


}
</>
)
}
export default Header;