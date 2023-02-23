import { Routes, Route } from "react";
// import { useState, useEffect } from "react";
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Movie from './pages/Movie';

function App() {
    // const [currentUser, setCurrentUser] = useState(null);

    // useEffect(() => {
    //     const user = AuthService.getCurrentUser();
    //     if(user){
    //         setCurrentUser(user)
    //     }
    // }, [])


    return(
        <div>
            <section>
                <Routes>
                    <Route path="/movie/:id" element={<Movie />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/" exact element={<Home />} />
                </Routes>
            </section>
        </div>

    )
}

export default App;