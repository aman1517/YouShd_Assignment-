import React from 'react';
import "../Style/Home.css"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Home = () => {
   


  return (
    <div className='HomeContainer'>
      <div>
      <div>
      <img src='https://app-staging.youshd.com/images/logo.png' alt='background_img'/>
      </div>
      <div className='span_text'>
        <span>Shop.</span>
        <span>Post.</span>
        <span>Earn.</span>
      </div>
      <div className='logoYoushd'>
      <img src='https://app-staging.youshd.com/images/loginDog.png' alt='logoYoushd'/>
      </div>
      <Link to="/mobile"><button >Login/Sign Up</button></Link>
      <p>By continuing, you agree to our <a href='https://www.youshd.com/privacy'>YouShd Privacy Policy</a> and <a href='https://www.youshd.com/terms-and-services'> Terms of service</a>.</p>
      
      </div>
    </div>
  );
}

export default Home;
