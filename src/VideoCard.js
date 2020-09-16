import React ,{forwardRef} from "react";
import "./VideoCard.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import TextTruncate from 'react-text-truncate'

const base_url = "https://image.tmdb.org/t/p/original/";

//using forwardRef in  such a way that this is this videocard and thats that videocard
export const VideoCard = forwardRef(({ movie },ref) => {
  return (
    <div ref={ref} className="videocard">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt=""
      />
      <TextTruncate
      line={1}
      element='p'
      truncateText='...'
      text={movie.overview}
      />
      {/* <p>{movie.overview}</p> */}
      <div className='movie__nameWithRating'>
      <h2>{movie.title || movie.original_name}</h2>
      <p className='movie__rating'>Rating : {movie.vote_average}</p>
      </div>
      
      <p className='movie__details'>
        {movie.release_date || movie.first_air_date} • <ThumbUpIcon /> {movie.vote_count}
      </p>
    </div>
  );
});
