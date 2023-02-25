import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';
import MoviesService from '../services/movies.service';
import '../App.css';

function Dashboard() {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [values, setValues] = useState({
    title:'',
    genre:'',
    released:''
  })

  const navigate = useNavigate();


  const API_BASE = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:8000/api/v1' 
    : process.env.REACT_APP_BASE_URL;

    let ignore = false;
    useEffect(() => {
      MoviesService.getAllPrivatePosts().then(
        response => {
          setMovies(response.data)
        },
        error => {
          console.error("Secure page error", error.response)
          if(error.response && error.response.status === 403) {
            AuthService.logout();
            navigate('/login')
          }
        }
      )}
    )

    const getMovies = async (res, req) =>{
      setLoading(true)
      try{
        await fetch(`${API_BASE}/movies`)
        .then(res => res.json())
        .then(data => {
          console.log({data})
          setMovies(data)
        })

      } catch (error) {
        setError(error.message || "Unexpected error")

      } finally {
        setLoading(false)
      }

    }

    const createMovie = async () => {
      try{
      await fetch(`${API_BASE}/movies`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(values)
          })
              .then(() => getMovies())

      } catch (error) {
          setError(error.message || "Unexpected Error")
      } finally {
          setLoading(false)
      }
  }

    const handleSubmit = (event) => {
      event.preventDefault();
      createMovie();
  }

  const handleInputChange = (event) => {
      event.persist();
      setValues((values) => ({
          ...values,
          [event.target.name]: event.target.value

      }))
  }

  return (
    <div className="App">
    <Link style={styles.link} to="/">Home</Link>
      <header className="App-header" style={styles.header}>
        <nav style={styles.nav}>
          
        </nav>
        <div style={styles.dashboard}>
          <div style={styles.archive}>
          <h1>List of Movies</h1>
          
          <ul style={{listStyle:'none'}}>
          {
            movies.map(movie => (
              <li style={styles.list}>
                <Link style={{textDecoration:'none', color:'yellow'}} to={`/movie/${movie._id}`}>{movie.title}</Link>
              </li>
            ))
          }
          </ul>
            </div>
            
            <form style={styles.form} onSubmit={(event) => handleSubmit(event)}>
            <h1>Add a new Title <br></br> to the Archives!</h1>
              <div style={styles.entryContainer}>
                <label for="title">
                    Title:</label>
                    <input id='title' style={styles.inputs} type="text" name="title" value={values.title} onChange={handleInputChange} />
                
              </div>
                <div style={styles.entryContainer}>
                  <label for="genre">
                    Genre:</label>
                    <input id='genre' style={styles.inputs} type="text" name="genre" value={values.genre} onChange={handleInputChange} />
                  
                </div>
                <div style={styles.entryContainer}>
                  <label for="released">
                    Released:</label>
                    <input id='released' style={styles.inputs} type="text" name="released" value={values.released} onChange={handleInputChange} />
                </div>
                
                <input style={styles.button} type="submit" value="Submit" />
            </form>
        </div>
      </header>
    </div>
  );
}

export default Dashboard;

const styles = {
  header:{
    backgroundColor: '#f60000',
    opacity: 1,
    backgroundImage: 'linear-gradient(to right, #ee0000, #ee0000 11.5px, #f60000 11.5px, #f60000 )',
    backgroundSize: '23px 100%',
    height:'10%'
  },
  nav:{
    textAlign:'left',
    marginLeft:'2%',
    marginRight:'80%',
    marginTop:'1%',
  },
  link:{
    color:'white',
    textDecoration:'none'
  },
  list:{
    fontSize:24,
    
  },
  form:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    // backgroundColor:'rgba(0,0,0,0.25',
    borderRadius:'20px',
    
    width:'800px',
    height:'300px'
  },
  inputs:{
    marginLeft:'33%',
    marginRight:'33%',
    width:'33%',
    borderRadius:'20px',
    fontSize:18,
    // color:'yellow',
    textAlign:'center'
  },
  button:{
    width:'33%',
    marginRight:'33%',
    marginLeft:'33%',
    fontSize:18,
    padding:'2%',
    textAlign:'center',
    borderRadius:'20px',
    marginTop:'2%'

  },
  entryContainer:{
    display:'flex',
    flexDirection:'column'
  },
  dashboard:{
    display:'flex',
    flexDirection:'row',
    marginTop:'-10%'
  },
  archive:{
    marginLeft:'10%'
  }



}

