import { useState } from "react";
import "./Login.css"
import { login_url } from "../../UrlList";
import signup from "../../Routes/CustomRoutesLink";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import  {  setLogin} from "../../Slice/CreateSlice"
import { useDispatch } from "react-redux";
import {  useSelector } from "react-redux/es/hooks/useSelector";
function Login()
{
    const {login}=(useSelector((state)=>state.profileReducer.login))
    const dispatch = useDispatch();
    const navigate= useNavigate();
    const [email,setEmail]= useState("");
    const [password,setPassword]= useState("");
    const [flag,setflag]= useState(false);
    async function signin()
    {
       
        setflag(false);
        const url=login_url;
        
       const res= await fetch(url,{
        method:'POST',
        credentials: "include",
       headers:{
        'Content-type':"application/json",
       },
       body:JSON.stringify({
        email:email,
        password:password
       })
       }); 
       console.log("am i working",res.status);
       if(res.status==200)
       {
        localStorage.setItem('isLogin','true');
        dispatch(setLogin());
        navigate("/",{replace:true});
       }
       else{
        setflag(true);
       }
    }
    return (
        <div className="page">
           <div className="packet">
           <h1 className="element heading">Login</h1>
            <input  className="element" type="email" placeholder=" email .." name="" id="" onChange={(e)=>setEmail(e.target.value)}/>
            <input  className="element" type="password" placeholder=" password .." name="" id="" onChange={(e)=>setPassword(e.target.value)}/>
            {(flag)? <span className="invalid">! Invalid entries</span>:<></>}
           <button onClick={signin} className="submit-button">Sumbit</button>
           <Link to={signup} className="element">
            <span className="create-account">Create Account</span>
           </Link>
           </div>
        </div>
    )
}
export default Login;