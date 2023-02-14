import { Link } from 'react-router-dom';
import '../App.css';

function Home() {

  return (
    <div className="App">
      <header className="App-header" style={styles.header}>
      <div>
        <h1>Welcome to Movie Lister!</h1>
      </div>
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
  },
  links:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-evenly',
  }

}
