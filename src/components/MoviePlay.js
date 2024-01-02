import React, {useEffect, useState} from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants';






const MoviePlay = () => {
    const navigate = useNavigate();
    
    const {moviesId} = useParams();
    const [video, setVideo] = useState(null);
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        
        const user = auth.currentUser;

        if (user) {
  // User is signed in, see docs for a list of available properties
  // https://firebase.google.com/docs/reference/js/auth.user
  
           
            navigate(`/browse/movie/${moviesId}`);
  // ...
        } else {
            navigate("/");
  // No user is signed in.
        }

        return () => navigate("/browse");
    },[])

    useEffect(() => {
        getMovieVideos();
        getMovieById();
        
    },[])
    

    const getMovieById = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+moviesId+"language=en-US", API_OPTIONS)
        const json = await data.json();
        
        
        setMovie(json)
      
      }
    
    const getMovieVideos = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+moviesId+"/videos?language=en-US", API_OPTIONS)
        const json = await data.json();
        
        const filterData = json.results?.filter((video) => video.type === "Trailer");
        
        const trailer = filterData?.length ? filterData[0] : json.results[0];
        setVideo(trailer)
      
      }


  
  return (
    <div className='h-screen w-full  bg-black'>
        <div >
            <iframe className='w-full h-[400px] md:h-[600px] p-1 rounded-lg'  src={"https://www.youtube.com/embed/"+video?.key}title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className='text-white text-justify m-2 p-2'>
            <span className='text-lg font-bold '>{movie?.original_title}</span>
            <p className='mt-2'><span className='text-lg font-semibold'>Summary : </span>{movie?.overview}</p>
        </div>

      
    </div>
  )
}

export default MoviePlay
