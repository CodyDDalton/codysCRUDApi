import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from "react"
import AuthService from '../services/auth.service'
import '../App.css';

function LogIn() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            await AuthService.login(email, password).then(
                response => {
                  navigate("/dashboard")
                },
                error => {
                    console.error(error)
                  }
            )
                
        } catch(error) {
          console.error(error)
    
        }
      }

  return (
    <div className="App">
      <header className="App-header" style={styles.header}>
      <div>
        <h1>Log In Screen</h1>
      </div>
      <section>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Log In</button>
        </form>
      </section>
        <nav style={styles.nav}>
          <div style={styles.links}>
          <Link id="Link" to="/" style={{textDecoration:'none', color:'yellow'}}>Home</Link>
          <Link to="/dashboard" style={{textDecoration:'none', color:'yellow'}}>Dashboard</Link>

          </div>
        </nav>
      </header>
    </div>
  );
}

export default LogIn;

const styles = {
  header:{
    backgroundColor: '#f60000',
    opacity: 1,
    backgroundImage: 'linear-gradient(to right, #ee0000, #ee0000 11.5px, #f60000 11.5px, #f60000 )',
    backgroundSize: '23px 100%',
    height:'10%'
  },
  nav:{
    fontSize:34,
  },
  links:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-evenly',
  }

}
