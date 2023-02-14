import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Student from './pages/Student';

function App() {
    return(
        <Router>
            <Routes>
                <Route path="/student/:id" element={<Student />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/" exact element={<Home />} />
            </Routes>
        </Router>

    )
}

export default App;