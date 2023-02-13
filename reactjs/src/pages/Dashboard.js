
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../App.css';

function Dashboard() {

  const [students, setStudents] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  const API_BASE = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:8000/api/v1' 
    : process.env.REACT_APP_BASE_URL;

    let ignore = false;
    useEffect(() => {

      if(!ignore){
        getStudents()
      }

      return () => {
        ignore = true;
      }
    }, [])

    const getStudents = async (res, req) =>{
      setLoading(true)
      try{
        await fetch(`${API_BASE}/students`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setStudents(data)
        })

      } catch (error) {
        setError(error.message || "Unexpected error")

      } finally {
        setLoading(false)
      }

    }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Students</h1>
        <Link to="/">Home</Link>
        <ul>
        {
          students.map(student => (
             <li>
              {student.name}
            </li>
          ))
        }
        </ul>
      </header>
    </div>
  );
}

export default Dashboard;

