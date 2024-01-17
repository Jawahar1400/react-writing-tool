import TopBar from './Components/Topbar/TopBar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Register from './Pages/Home/Register/Register';
import Login from './Pages/Home/Login/Login';
import Write from './Pages/Home/Write/Write';
import Settings from './Pages/Home/Settings/Settings';

import Single from './Pages/Home/Single/Single';
import ContactPage from './Components/Contact/Contact';
import AboutPage from './Components/About/About';


function App() {
  const user=true;
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route exact path='/' element={<Home/>} ></Route>
        <Route path='/register' element={user? <Home/> :<Register/>} ></Route>
        <Route path='/login' element={user? <Home/> :<Login/>} ></Route>
        <Route path='/write' element={user? <Write/>:<Register/>} ></Route>
        <Route path='/contact' element={<ContactPage/>}></Route>
        {/* <Route path='/login' element={<Login/>}></Route> */}
        <Route path='/post/:id' element={<Single />}>  </Route>
        <Route path='/write' element={<Write/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/settings' element={user? <Settings/>:<Register/>} ></Route>
        <Route path='/post/:postId' element={<Single/>} ></Route>
        </Routes>
        
    </BrowserRouter>
  );
}

export default App;
