import React from 'react';
import axios from "axios"
import {useSelector,useDispatch} from "react-redux";
import { Set ,Setname} from 'actions/action';
import { useNavigate } from 'react-router-dom';
export { Login };

function Login() {
    // form validation rules 
 // get functions to build form with useForm() hook
 const navigate=useNavigate()
 const  dispatch =useDispatch()
 const sto=useSelector((state)=>{
        return state.Todoarray
      })  
    function submit() {
      console.log( sto)
      axios.post("https://interview-api.onrender.com/v1/auth/login",sto.user).then((res)=>{
        console.log(res.data.tokens.access,res)
        dispatch(Setname(res.data.user.name))
        window.localStorage.setItem("user",res.data.tokens.access.token)
        if(res.status==200){
            navigate("/")
        }
      }).catch((err)=>{
        console.log(err)
      })
    }

    return (
        <div className="col-md-6 offset-md-3 mt-5">
          
            <div className="card">
                <h4 className="card-header">Login</h4>
                <div className="card-body">
                        <div className="form-group">
                            <label>Email</label>
                            <input name="email" type="text"   onChange={(e) => {  const {name,value}=e.target;
                            dispatch(Set(name,value)) }} className={`form-control  'is-invalid' }`} />
                            <div className="invalid-feedback">j</div>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input name="password" type="password"  onChange={(e) => {  const {name,value}=e.target;
                            dispatch(Set(name,value)) }}  className={`form-control  'is-invalid'  }`} />
                            <div className="invalid-feedback">j</div>
                        </div>
                        <button onClick={submit} className="btn btn-primary">
                           
                            Login
                        </button>
                </div>
            </div>
        </div>
    )
}
