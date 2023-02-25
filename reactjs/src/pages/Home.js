import { Link } from 'react-router-dom';
import '../App.css';

function Home() {

  return (
    <div className="App">
      <header className="App-header" style={styles.header}>
      <div>
        
      </div>
        <nav style={styles.nav}>
          <div style={styles.links}>
          <Link to="/login" style={{textDecoration:'none', color:'yellow', marginBottom:'25%'}}>Log In</Link>
          <Link to="/signup" style={{textDecoration:'none', color:'yellow',}}>Sign Up</Link>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Home;

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
    marginLeft:'-14%'
  },
  links:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-evenly',
    backgroundColor:'rgba(0,0,0,0.25)',
    padding:'80%',
    width:'100%',
    borderRadius:'20px',

  }

}
