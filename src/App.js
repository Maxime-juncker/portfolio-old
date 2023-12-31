import './App.css';
import './About.css'
import * as React from 'react';
import { Route, Routes, BrowserRouter} from "react-router-dom";
import ScrollToTop from './ScrollToTop';

import Home from './Page/Home';
import NotFound from './Page/NotFound';
import Maximatron from './Page/Maximatron';

const About = () =>
{
  return (
    <div>
      <h1>ABOUT</h1>
    </div>
  );
}



function App() {
  return(
    <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/maximatron" element={<Maximatron/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

