import axios from 'axios'
import authHeader from './auth-header'

const API_URL = "/http://localhost:8000/api/v1/movies";

const getAllPrivatePosts = () => {
    return axios.get("/", { headers: authHeader() })
}

const moviesService = {
    getAllPrivatePosts
}

export default moviesService;