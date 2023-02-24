import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import '../App.css';
import AuthService from '../services/auth.service'


function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      await AuthService.signup(email, password).then(
        response => {
          navigate("/login")
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
        <h1>Sign Up Screen</h1>
      </div>
      <section>
        <form onSubmit={handleSignup}>
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
            <button type="submit">Sign Up</button>
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

export default SignUp;

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
