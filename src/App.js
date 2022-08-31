import './App.css';
import Home from './home'
import Page from './page'
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';

import { Card, Space } from 'antd';

function App() {

return(
  <Router>
  
<Space>
  <div className='menu_div'>
<Link to="/"><span className='menu_font'>Home /</span></Link>
</div>
<div className='menu_div'>
  <Link to="/page"><span className='menu_font'>Page</span></Link>
</div>

</Space>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/page" element={<Page/>} />
    </Routes>

      
  </Router>

 
)
}

export default App;
