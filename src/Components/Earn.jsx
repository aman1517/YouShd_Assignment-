import React from 'react';
import "../Style/Welcome.css"
import { useNavigate } from 'react-router-dom';

const Earn = () => {
    const hsi=useNavigate()

    const WelcomeHandle=()=>{
     hsi("/auth")
    }
  return (
    <div className='welcomePage'>
      <div>
        <img src='https://app-staging.youshd.com/images/youshd-logo-small.png' alt='logo'/>
        <div className='logo2'>
        <img src='https://res.cloudinary.com/dqsbiaqqj/image/upload/v1669289853/consumer/welcome/IMG-1305_1_xdvh6k.png' alt='img' />

        </div>
        <h2>Earn!</h2>
        <p>Earn unlimited cashbacks and rewards!</p>
        <button className='wlcbtn' onClick={WelcomeHandle}>Continue</button>
      </div>
    </div>
  );
}

export default Earn;
