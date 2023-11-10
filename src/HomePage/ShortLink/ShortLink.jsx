import axios from "axios";
import "./ShortLink.css"
import { useEffect, useState } from "react";
import { set_url } from "../../UrlList";
import {  refresh} from "../../Slice/CreateSlice";
import { useDispatch, useSelector } from "react-redux";
function ShortLink(){
    const dispatch= useDispatch();
    const reload=useSelector((state)=>state.profileReducer.reload)
    const login=useSelector((state)=>state.profileReducer.login)
    const [input,setInput]= useState("");
    const [shortUrl,setShortUrl]=useState("");
      async function setLink()
      {
       
        const url=set_url;
        try{
         const res=await fetch(url,{ method:'POST',
         headers:{
              'Content-type': 'application/json',
         },
         credentials:"include",
           body:JSON.stringify({longUrl:input})})
           const data= await res.json();
           setShortUrl(data.shortUrl);

      }   
         catch(err){console.log(err.message)}
      }

      async function setAndClear()
      {
        await setLink();
        document.getElementById("input").value="" ;
         dispatch(refresh());
      }
      // FOR NEON
      useEffect(()=>{if(login==false)
      {
        setShortUrl("");
      }},[login])
    return (
        <>
      <div className="section">
        <span className="heading">Shorten your long links {`:)`}</span>
      <div className="input-bar">
       <input  className="input"type="text" name="" id="input" placeholder="  enter links"  onChange={(e)=>{setInput(e.target.value);setShortUrl("")}}/>
        <button className="go-button" onClick={setAndClear}>Submit</button>
      </div>
     { (localStorage.getItem('isLogin')=='true')&&<h3 className="short-url">{shortUrl}</h3>}
       </div>
        </>
    )
}
export default ShortLink;