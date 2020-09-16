import axios from 'axios'

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3"
})
export default instance

// https://api.themoviedb.org/3/trending/all/week?api_key=8f87663409dc78387b5699f5a13bd33f&language=en-US