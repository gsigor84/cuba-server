import './App.css';
import Home from './home'
import Page from './page'
import Test from './test'
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import { useEffect, useState} from 'react';

function App() {

return(
  <Router>
    
<ul>
  <li><a><Link to="/">Home</Link></a></li>
  <li><a><Link to="/page">Page</Link></a></li>
</ul>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/page" element={<Page/>} />
    </Routes>
  </Router>

   
)
}

export default App;
