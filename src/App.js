
import './App.css';
import Home from './Components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Mobile from './Components/Mobile';
import OTP from './Components/OTP';
import Auth from './Components/Auth';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/mobile' element={<Mobile/>}/>
      <Route path='/otp' element={<OTP/>}/>
      <Route path='auth' element={<Auth/>}/>
     </Routes>
    </div>
  );
}

export default App;
