import React , {useState,useEffect} from 'react'
import './Results.css'
import { VideoCard } from './VideoCard'
import axios from './axios'
import requests from './requests'
import FlipMove from 'react-flip-move'

export const Results = ({selectedOption}) => {

    const [movies,setMovies] =useState([])

    useEffect( ()=> {
        console.log('>>>>',1222)
        async function fetchData(){
            //console.log('>>>>',12222)
            const request = await axios.get(selectedOption)
            console.log(request.data.results)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    } ,[selectedOption])

    return (
        <div className='results'>
            <FlipMove>
            {
                movies.map( movie => (
                    <VideoCard key={movie.id}  movie={movie} />
                ))
            }
            </FlipMove>
        </div>
    )
}
