import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import '../App.css';

function Movie() {

  const [movies, setMovies] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [values, setValues] = useState({
    title:'',
    genre:'',
    released:''
  })


  const { id } = useParams();
  const navigate = useNavigate();

  const API_BASE = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:8000/api/v1' 
    : process.env.REACT_APP_BASE_URL;

    let ignore = false;
    useEffect(() => {

      if(!ignore){
        getMovie()
      }

      return () => {
        ignore = true;
      }
    }, [])

    const getMovie = async (res, req) =>{
      setLoading(true)
      try{
        await fetch(`${API_BASE}/movies/${id}`)
        .then(res => res.json())
        .then(data => {
          console.log({data})
          setValues({
            title: data.title,
            genre: data.genre,
            released: data.released
          })
        })

      } catch (error) {
        setError(error.message || "Unexpected error")

      } finally {
        setLoading(false)
      }

    }

    const deleteMovie = async () => {
        try{
            await fetch(`${API_BASE}/movies/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    setMovies(data)
                    navigate("/dashboard", { replace: true})
                })

        } catch (error) {
            setError(error.message || "Unexpected Error")
        } finally {
            setLoading(false)
        }
    }

    const updateMovie = async () => {
        try{
            await fetch(`${API_BASE}/movies/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
                .then(res => res.json())
                .then(data => {
                    console.log({data})
                })

        } catch (error) {
            setError(error.message || "Unexpected Error")
        } finally {
            setLoading(false)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        updateMovie();
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
      <header className="App-header" style={styles.header}>
        <nav>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/">Home</Link>
        </nav>
        <div>
          <h1>Movie Listing</h1>
          <h5>{values && values.title}</h5>
          <p>{values && values.genre}</p>
          <p>{values && values.released}</p>
          <button onClick={() => deleteMovie()}>Delete Movie</button>
          
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
        </div>
      </header>
    </div>
  );
}

export default Movie;

const styles = {
  header:{
    backgroundColor: '#f60000',
    opacity: 1,
    backgroundImage: 'linear-gradient(to right, #ee0000, #ee0000 11.5px, #f60000 11.5px, #f60000 )',
    backgroundSize: '23px 100%',
    height:'10%'
  }
}
