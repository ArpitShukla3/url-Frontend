import { useEffect, useState } from "react";
import "./LinkList.css"
import { show } from "../../UrlList";
import { useSelector } from "react-redux/es/hooks/useSelector";
function LinkList()
{
   const reload=useSelector((state)=>state.profileReducer.reload)
   const login=useSelector((state)=>state.profileReducer.login)
   const [list,setList]= useState([]);
   async function downloadList()
   {
            const url=show;
            const res =await fetch(url,{
                method:'GET',
                credentials:"include",
                headers:{
                    'Content-type':"application/json"
                }
            })
        const data=(await res.json());
        setList(data.data)
   }
   useEffect(()=>{setList([])},[login])
   useEffect(()=>{downloadList()},[reload])
   let i=0;
    return (
        <>
       {(localStorage.getItem('isLogin')=='true')?
        <div className="list heading" >
       <h1 className="element serial">S. No</h1>
        <h1 className="element longUrl">Url</h1>
        <h1 className="element shorturl">Short Link</h1>
       </div>:<></>
       }
       { 
       list.map((record)=>
         <div className="list" key={i}>
          <a className="element serial anchor">{i++}</a>
          <a className="element longUrl anchor" >{record.url}</a>
          <a  href={record.shortUrl} className="element shorturl anchor">{record.shortUrl}</a>
         </div>
       )}
       
        </>
    )
}
export default LinkList;