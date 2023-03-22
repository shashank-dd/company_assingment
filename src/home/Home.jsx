import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Nav } from '_components/Nav';


export { Home };

function Home() {
    const sto=useSelector((state)=>{
        return state.Todoarray
      })  
    const navigate=useNavigate()
    useEffect(() => {
 if(!window.localStorage.getItem("user") ){
              navigate("/login")
               }
       
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='jk'>
            <Nav/>
           <h1 className='hh1'>Hello {sto.uname} welcome </h1>
          <h2>Want explore or add cards? then click on cards in the  above nav bar</h2>
         
        </div>
    );
}
