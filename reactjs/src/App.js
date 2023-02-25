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
            <div style={styles.logScreen}>
                {
                    currentUser === true
                    ? <h3>Logged In</h3>
                    : <h3>Logged Out</h3>
                }
                <h3>Welcome to Movie Lister!</h3>
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
            <div style={styles.footer}>
                <h5>©2023 Movie Lister</h5>
            </div>
        </div>

    )
}

export default App;

const styles = {
    logScreen:{
        // marginLeft:'2%',
        // fontSize:12,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginLeft:'0%',
        marginRight:'25%'
    },
    footer:{
        textAlign:'center',
        fontSize:12
    }
}