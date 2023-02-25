import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from "react"
import AuthService from '../services/auth.service'
import '../App.css';

function LogIn() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            await AuthService.login(email, password).then(
                response => {
                  alert('Login successful. Welcome back to Movie Lister!')
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
    <Link id="Link" to="/" style={{textDecoration:'none', color:'yellow', fontSize:20}}>Home</Link>
      <header className="App-header" style={styles.header}>
      <div>
        
      </div>
      <section>
        <form style={styles.loginForm} onSubmit={handleLogin}>
          <label for="emailInput" style={{color:'yellow'}}>Email:</label>
          <input style={styles.inputs}
            id="emailInput"
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            <label for="passInput" style={{color:'yellow'}}>Password:</label>
            <input style={styles.inputs}
            id="passInput"
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <button style={styles.loginBut} type="submit">Log In</button>
            </form>
      </section>
        <nav style={styles.nav}>
          <div style={styles.links}>
          
          {/* <Link to="/dashboard" style={{textDecoration:'none', color:'yellow'}}>Dashboard</Link> */}

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
  },
  loginForm:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-evenly',
    width:'150%',
    marginLeft:'-15%',
    marginTop:'-20%'
    
  },
  inputs:{
    padding:'2%',
    fontSize:18,
    textAlign:'center',
    borderRadius:'20px',
    margin:'2%' 
  },
  loginBut:{
    fontSize:18,
    padding:'2%',
    textAlign:'center',
    borderRadius:'20px',
    margin:'2%'
  }

}
