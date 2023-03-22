import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Cards } from 'actions/action';
import  Card  from 'react-credit-cards';



export { Cardj};

function Cardj() {
  const  dispatch=useDispatch()
    const sto=useSelector((state)=>{
        return state.Todoarray
      })  
    const navigate=useNavigate()
const t=window.localStorage.getItem("user")
   useEffect(()=>{
axios.get("https://interview-api.onrender.com/v1/cards",{
    headers: {
        Authorization: `Bearer ${t}`
      }
}).then((res)=>{
    dispatch(Cards(res.data.results))
    console.log(res.data.results)
}).catch((err)=>{
    console.log(err)
})
   },[])
  
    return (
        <div className='body'>
         <Link to="/cards/new"> <h2 className='ac'> Add card</h2></Link>  
             <div className='loading'>
        {sto.cards&&sto.cards.map((card, index) => (
             
        
          <div  key={index}  style={{ '--i': index }}
         
        
            
            
         
          > <span>number={card.cardNumber}</span>   
 <span> name={card.name}</span>  
 <span>number={card.cardNumber}</span>  
         
           </div>
        ))}
      </div>
        </div>
     
   
    );
  
  
}
