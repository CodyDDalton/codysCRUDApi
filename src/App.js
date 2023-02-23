import{ Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import AuthService from './services/auth.service';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Movie from './pages/Movie';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';

function App() {
    const [currentUser, setCurrentUser] = useState(false);

    useEffect(() => {
        const user = AuthService.getCurrentUser();
        if(user){
            setCurrentUser(user)
        }
    }, [])

    const logOut = () => {
        AuthService.logout();
    }

    return(
        <div>
            <div>
                {
                    currentUser === false
                    ? <h2>Logged In</h2>
                    : <h2>Logged Out</h2>}
            </div>
            <section>
                <Routes>
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/movie/:id" element={<Movie />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/" exact element={<Home />} />
                </Routes>
            </section>
        </div>

    )
}

export default App;