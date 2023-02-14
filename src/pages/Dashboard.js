
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
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

  


  const API_BASE = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:8000/api/v1' 
    : process.env.REACT_APP_BASE_URL;

    let ignore = false;
    useEffect(() => {

      if(!ignore){
        getMovies()
      }

      return () => {
        ignore = true;
      }
    }, [])

    const getMovies = async (res, req) =>{
      setLoading(true)
      try{
        await fetch(`${API_BASE}/movies`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
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
      <header className="App-header">
        <h1>Movies</h1>
        <Link to="/">Home</Link>
        <ul>
        {
          movies.map(movie => (
             <li>
              <Link to={`/movie/${movie._id}`}>{movie.title}</Link>
            </li>
          ))
        }
        </ul>
        <form onSubmit={(event) => handleSubmit(event)}>
            <label>
                Title:
                <input type="text" name="title" value={values.title} onChange={handleInputChange} />
            </label>
            <label>
                Genre:
                <input type="text" name="genre" value={values.genre} onChange={handleInputChange} />
            </label>
            <label>
                Released:
                <input type="text" name="released" value={values.released} onChange={handleInputChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default Dashboard;

