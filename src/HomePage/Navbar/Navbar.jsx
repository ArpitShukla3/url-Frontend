import { Link } from "react-router-dom";
import "./Navbar.css"
import { logout } from "../../UrlList";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import{  setLogin,setLogout,refresh, downloadList} from "../../Slice/CreateSlice"
// import Login/Signup from ""
function Navbar()
{
    const dispatch= useDispatch();
    const login= useSelector((state)=>state.profileReducer.login)
    async function executeLogout()
    {
        const res= await fetch(logout,{
            method:'POST',
            credentials:'include',
            headers:{
                'Content-type':"appplication/json"
            }
        });

        if(res.status==200)
        {
           dispatch(setLogout());
           dispatch(refresh());
        }
    }
    return (
        <>
            <div className="nav">
              <Link to={`/`} className="title">
              <h1>Linkly</h1>
              </Link>
                <div className="left-nav">
                   
                    {(document.cookie)?  <button className="login text-decoration-none" onClick={executeLogout}>LogOut</button>: 
                     <button className="login"> 
                    <Link to={`/login`} className="text-decoration-none">Login</Link>/ 
                    <Link to={`/signup`} className="text-decoration-none">Signup</Link>
                    </button>
                    }
                    
                  
                </div>
            </div>
        </>
    )
}
export default Navbar;