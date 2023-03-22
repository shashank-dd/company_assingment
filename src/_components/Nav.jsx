import { Link, useNavigate } from 'react-router-dom';




export { Nav };

function Nav() {
    
    const navigate=useNavigate()
  function logout(){
  window.localStorage.removeItem("user")
  navigate("/login")
  }
  
    
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
                <Link to="/" className="nav-item nav-link">Home</Link>
                <Link to="/cards" className="nav-item nav-link">Card</Link>
                <button onClick={logout} className="btn btn-link nav-item nav-link">Logout</button>
            </div>
        </nav>
    );
}