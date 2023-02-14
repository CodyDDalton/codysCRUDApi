import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Movie from './pages/Movie';

function App() {
    return(
        <Router>
            <Routes>
                <Route path="/movie/:id" element={<Movie />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" exact element={<Home />} />
            </Routes>
        </Router>

    )
}

export default App;