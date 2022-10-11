import './App.css';
import Home from './home';
import Page from './page';
import Edit from './edit';
import Slug from './slug';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Card, Space } from 'antd';
import Header from './header'


function App() {
return(
  <Router>
 
<Space>
<Header />

</Space>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/page" element={<Page/>} />
    <Route path="/edit" element={<Edit/>} />
    <Route path="/customers/:id" element={<Slug/>} />
    </Routes>

      
  </Router>

 
)
}

export default App;
