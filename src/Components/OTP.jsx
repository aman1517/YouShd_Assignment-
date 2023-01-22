import React,{useState} from 'react';
import "../Style/Otp.css"
import { useNavigate } from 'react-router-dom';

const OTP = () => {
    const his=useNavigate()
    const [count1,setCount1]=useState("")
    const [count2,setCount2]=useState("")
    const [count3,setCount3]=useState("")
    const [count4,setCount4]=useState("")
    const [count5,setCount5]=useState("")
    const [count6,setCount6]=useState("")

   
  const OptHandle=()=>{
    if(count1=="1" && count2=="2" && count3=="3" && count4=="4" && count5=="5" && count6=="6"){
        his("/auth")
      }
      else{
        alert("Wrong OTP plese fill correct OTP")
        setCount1("")
        setCount2("")
        setCount3("")
        setCount4("")
        setCount5("")
        setCount6("")

      }
  }

  return (
    <div className='otp_con'>
      <div>
       <h3>Please enter verification code sent on Mobile number</h3>
       <div className='otp_box'>
        <input maxLength="1" value={count1} onChange={(e)=>setCount1(e.target.value)}/>
        <input maxLength="1" value={count2} onChange={(e)=>setCount2(e.target.value)}/>
        <input maxLength="1" value={count3} onChange={(e)=>setCount3(e.target.value)}/>
        <input maxLength="1" value={count4} onChange={(e)=>setCount4(e.target.value)}/>
        <input maxLength="1" value={count5} onChange={(e)=>setCount5(e.target.value)}/>
        <input maxLength="1" value={count6} onChange={(e)=>setCount6(e.target.value)}/>
       </div>
       <p>The verification code expires in 2 minutes</p>
      </div>
      <button className='optBtn' onClick={OptHandle}>Continue</button>
    </div>
  );
}

export default OTP;
