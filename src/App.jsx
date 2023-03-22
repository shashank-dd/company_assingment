import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';



import { Home } from 'home';
import { Login } from 'login';
import {  Cardj } from 'home/card';
import { Createcard } from 'home/create';

export { App };

function App() {
    // init custom history object to allow navigation from 
    // anywhere in the react app (inside or outside components)
 

    return (
        <div className="app-container bg-light">
          
            <div className="container pt-4 pb-4">
                <Routes>
                <Route
                        path="/"
                        element={ 
                           
                                <Home />
                          
                        }
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/cards" element={<Cardj />} />
                    <Route path="/cards/new" element={<Createcard />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </div>
    );
}
