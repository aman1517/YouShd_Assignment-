import React from 'react';
import "../Style/Auth.css"

const Dashboard= () => {
  return (
    <div className='authpage'>
    <div>
       
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
       <div className='dashborad'>
         <h5>Total earnings withdrawn</h5>
         <h2>$0</h2>
         <div>
         <h4>$0</h4>
         <p>Current Blance !</p>
         </div>
         <div>
         <h4>$0</h4>
         <p>Available to withdraw !</p>
         </div>
       </div>
       
    </div>
      
    </div>
  );
}

export default Dashboard;
