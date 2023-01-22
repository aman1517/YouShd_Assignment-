import React from 'react';
import "../Style/Welcome.css"
import { useNavigate } from 'react-router-dom';

const Post = () => {
    const hsi=useNavigate()

    const WelcomeHandle=()=>{
     hsi("/earn")
    }
  return (
    <div className='welcomePage'>
      <div>
        <img src='https://app-staging.youshd.com/images/youshd-logo-small.png' alt='logo'/>
        <div className='logo2'>
        <img src='https://res.cloudinary.com/dqsbiaqqj/image/upload/v1669289853/consumer/welcome/Post_1_ubzhyi.png' alt='img' />

        </div>
        <h2>Post!</h2>
        <p>Post fun photos or videos tagging the<br/>brand and us on TikTok or Instagram</p>
        <button className='wlcbtn' onClick={WelcomeHandle}>Continue</button>
      </div>
    </div>
  );
}

export default Post;
