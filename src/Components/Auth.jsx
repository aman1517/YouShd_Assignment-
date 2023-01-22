import React from 'react';
import "../Style/Auth.css"

const Auth = () => {
  return (
    <div className='authpage'>
    <div>
        <h2 className='titletxt'>
        Verify your social<br/>media accounts
        </h2>
        <div className='socialMeidabox'>
        <div>
            <img src='https://app-staging.youshd.com/static/media/instagram%20special.ea0349366f4e3e613be6.svg' alt='instalogo'/>
            <h4 className='sociltext'>Instagram</h4>
            <span className='spanLogo'>{`<`}</span>
        </div>
        <div>
        <img src='https://app-staging.youshd.com/static/media/tik%20tok%20special.367695f3836dbae2517d.svg' alt='tiktoklogo'/>
            <h4 className='sociltext'>TikTok</h4>
            <span className='spanLogo'>{`<`}</span>
        </div>
        </div>
        <div className='bothbtn'>
        <button>Skip for Now</button>
        <button className='inactivebtn'>Continue</button>
        </div>
    </div>
      
    </div>
  );
}

export default Auth;
