import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';




export { Createcard};

function Createcard() {
    const[state,setstate]=useState({name:"",cardExpiration:"",cardHolder:"",cardNumber:"",category:""})

  const  dispatch=useDispatch()
    const sto=useSelector((state)=>{
        return state.Todoarray
      })  
    const navigate=useNavigate()
const t=window.localStorage.getItem("user")


 function handle(){
    console.log(t)
    axios.post("https://interview-api.onrender.com/v1/cards",{state,
        headers: {
            Authorization: `Bearer ${t}`
          }
    }).then((res)=>{
       
        console.log(res.data.results)
    }).catch((err)=>{
        console.log(err)
    })
}

    return (
        <div className='lkj'>
        <div>
            <label>name</label>
            <input  type="text" onChange={(e)=>{
                setstate({...state,name:e.target.value})
            }}></input>
        </div>
        <div>
            <label>cardExpiration</label>
            <input  type="text" onChange={(e)=>{
                setstate({...state,cardExpiration:e.target.value})
            }}></input>
        </div>
        <div>
            <label>cardHolder</label>
            <input  type="text" onChange={(e)=>{
                setstate({...state,cardHolder:e.target.value})
            }}></input>
        </div>
        <div>
            <label>cardNumber</label>
            <input  type="text" onChange={(e)=>{
                setstate({...state,cardNumber:e.target.value})
            }}></input>
        </div>
        <div>
            <label>category</label>
            <input  type="text" onChange={(e)=>{
                setstate({...state,category:e.target.value})
            }}></input>
        </div>
        <button onClick={handle}>submit</button>
        </div>
     
   
    );
  
  
}
