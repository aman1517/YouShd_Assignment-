import React from 'react';
import "../Style/Welcome.css"
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const hsi=useNavigate()

    const WelcomeHandle=()=>{
     hsi("/shop")
    }
  return (
    <div className='welcomePage'>
      <div>
        <img src='https://app-staging.youshd.com/images/youshd-logo-small.png' alt='logo'/>
        <div className='logo2'>
        <img src='https://res.cloudinary.com/dqsbiaqqj/image/upload/v1669289853/consumer/welcome/Welcome-Page_1_q4okms.png' alt='img' />

        </div>
        <h2>Welcome!</h2>
        <p>Your audience size doesn't matter, earn unlimited cashback on posting about your favorite purchases!</p>
        <button className='wlcbtn' onClick={WelcomeHandle}>Continue</button>
      </div>
    </div>
  );
}

export default Welcome;
