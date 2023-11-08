import { useState } from "react";
import "./Signup.css"
import { home, signup } from "../../UrlList";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Signup()
{
    const navigate = useNavigate();
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [confirmPassword,setconfirmPassword]= useState("");
    const [flag,setFlag]=useState(false);
    async function executeSignup()
    {
        // const url=signup;
        setFlag(false)
        const url="http://localhost:5001/short/signup/";
       const res= await fetch(url,{
        method:'POST',
        credentials:"include",
       headers:{
        'Content-type':"application/json",
       },
       body:JSON.stringify({
        email:email,
        password:password,
        confirmPassword:confirmPassword
       })
       }); 
       console.log(res);
       if(res.status==200)
       {
        navigate("/",{replace:true});
       }
       else{
           setFlag(true);
       }
    }
    function clearWarning()
    {
        setFlag(false);
    }
    return (
        <>
          <div className="page">
          <div className="packet">
           <h1 className="element heading">Signup</h1>
            <input  className="element" type="email" placeholder=" email .." name="" id="" onChange={(e)=>{setEmail(e.target.value);clearWarning()}}/>
            <input  className="element" type="password" placeholder=" password .." name="" id="" onChange={(e)=>{setPassword(e.target.value);clearWarning()}}/>
            <input  className="element" type="password" placeholder=" Renter password .." name="" id="" onChange={(e)=>{setconfirmPassword(e.target.value);clearWarning()}}/>
            {(flag)? <span className="invalid">! Invalid entries</span>:<></>}
           <button onClick={executeSignup} className="submit-button">Sumbit</button> 
           </div>
          </div>
          
        </>
    )
}
export default Signup;