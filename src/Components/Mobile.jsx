import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import "../Style/Mobile.css"


const Mobile = () => {
    const history=useNavigate()
    const [count,setCount]=useState("")
   
    const HandleChange=()=>{
        if(count.length==0){
            alert("Please fill the mobile number")
        }
         else if(count.length<10 && count.length!=0){
            alert("Mobile Number Shuld be grater than 10 digits")
        }
        else{
          history("/otp")
        }
    }

  return (
    <div className='mobile_Container'>
    <div className='mobile_fill'>
      <div>
        <h3>Please enter your phone number to get started</h3>
        <div className='mobile_box'>
        <img src='https://cdn-icons-png.flaticon.com/512/330/330439.png' alt='india'/>
            <hr/>
            <p>+91</p>
            <input type="number" minLength="10"  onChange={(e)=>setCount(e.target.value)} value={count} className="mobile_input"/ >
        </div>
      </div>
    </div>
    <div className='btn'>
    <button onClick={HandleChange}>Continue</button>
    </div>
    </div>
  );
}

export default Mobile;
