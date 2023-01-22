import React from 'react';
import "../Style/Welcome.css"
import { useNavigate } from 'react-router-dom';

const Shop = () => {
    const hsi=useNavigate()

    const WelcomeHandle=()=>{
     hsi("/post")
    }
  return (
    <div className='welcomePage'>
      <div>
        <img src='https://app-staging.youshd.com/images/youshd-logo-small.png' alt='logo'/>
        <div className='logo2'>
        <img src='https://res.cloudinary.com/dqsbiaqqj/image/upload/v1669289853/consumer/welcome/IMG-1302_1_yzaore.png' alt='img' />

        </div>
        <h2>Shop!</h2>
        <p>Shop from our partner brands and you <br/> will receive a text from us on delivery</p>
        <button className='wlcbtn' onClick={WelcomeHandle}>Continue</button>
      </div>
    </div>
  );
}

export default Shop;
