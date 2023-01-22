
import './App.css';
import Home from './Components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Mobile from './Components/Mobile';
import OTP from './Components/OTP';
import Auth from './Components/Auth';
import Welcome from './Components/Welcome';
import Shop from './Components/Shop';
import Post from './Components/Post';
import Earn from './Components/Earn';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/mobile' element={<Mobile/>}/>
      <Route path='/otp' element={<OTP/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/welcome' element={<Welcome/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/post' element={<Post/>}/>
      <Route  path='/earn' element={<Earn/>}/>
    
     </Routes>
    </div>
  );
}

export default App;
