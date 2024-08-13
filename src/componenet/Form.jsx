import { useState } from "react"


const Form=()=>{
    const [emailPhone,setEmailPhone]=useState("")
    const [password,setPassword]=useState("")
    const [toggel,setToggel]=useState(true);
   
    return (
    
    
    <div className="form-container">

   
        <div className="form">
            <h1>{!toggel?"Sign Up":"Log in"}</h1>
            <input type="text" placeholder="Email address or phone number" value={emailPhone} onChange={(e)=>{setEmailPhone(e.target.value)}}/>
            {(!toggel&&(
                <div className="usename">
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Surname"/>
                </div>
            ))}
            {(!toggel&&(<input type="text" placeholder="Enter Mobile Number"/>))}
            <input type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
            {(toggel&&(<>
                <button className="login">Log in</button>
                <p className="forget">forget password?</p>
            </>))}
            <button className="craete" onClick={()=>{setToggel(!toggel)}}>{!toggel?"Submit":"Create new account"}</button>
            
        </div>
        {!toggel?<p className="text"><span onClick={()=>{setToggel(!toggel)}} >Login</span> If You Are Already User. </p>:<p className="text"><span onClick={()=>{setToggel(!toggel)}} > Sign Up</span>If You A Not User. </p>}   
        
        </div>
    )
}



export default Form