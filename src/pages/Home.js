import { Link } from 'react-router-dom';
import '../App.css';

function Home() {

  return (
    <div className="App">
      <header className="App-header" style={styles.header}>
        <nav>
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        
      </header>
      <div>
        <h1>Movie List Homepage</h1>
      </div>
        
        
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
  }
}
