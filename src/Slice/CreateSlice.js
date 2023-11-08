import {createSlice} from "@reduxjs/toolkit"
import { show } from "../UrlList";
    const Slice= createSlice({
        name:'user',
        initialState:{
            list:[],
            reload:true,
            login:false
        },
        reducers:{
            setLogin:(state,action)=>{   
                state.login=true;
            },
            setLogout:(state,action)=>{
                state.login=false;
            },
            refresh:(state,action)=>{
                state.reload=!state.reload;
            },
            downloadList:async(state,action)=>
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
                 state.list=data.data;
            }
        }
    })

export const {  setLogin,setLogout,refresh, downloadList} = Slice.actions;
export default Slice.reducer;