import React, {useEffect, useState} from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants';
import CreditCard from './CreditCard';






const MoviePlay = () => {
    const navigate = useNavigate();
    
    const {moviesId} = useParams();
    const [video, setVideo] = useState(null);
    const [movie, setMovie] = useState(null);
    const [actors, setActors] = useState(null);
    const [directors, setDirectors] = useState(null);
    // const [producers, setProducers] = useState(null);

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
        getMoviesCredit();
        
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
      
    const getMoviesCredit = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+moviesId+"/credits?language=en-US", API_OPTIONS)
        const json = await data.json();
        // console.log(json.cast.slice(0,10));
        const crew = json.crew.slice(0,10);
        const actor= json.cast.slice(0,10);
        setActors(actor);
        setDirectors(crew);
        
    }

    
    console.log(actors);
    console.log(directors);

  
  return (
    <div className='h-screen w-full  bg-black'>
        <div >
            <iframe className='w-full h-[400px] md:h-[600px] p-1 rounded-lg'  src={"https://www.youtube.com/embed/"+video?.key}title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className='text-white text-justify m-2 p-2'>
            <span className='text-lg font-bold '>{movie?.original_title}</span>
            <p className='mt-2'><span className='text-lg font-semibold'>Summary : </span>{movie?.overview}</p>
            
        </div>
        
        <div className=' h-screen w-full bg-black '>
            <h1 className='text-white font-bold pl-6'>Actors</h1>
            <div className='bg-black flex flex-wrap  '>
            {actors && actors.map((actor) => <CreditCard key={actor.id} posterPath={actor?.profile_path
                } moviesTitle={actor?.name} work={actor.known_for_department}/>)}
                </div>
                <h1 className='pt-3 bg-black text-white font-bold pl-6'>Crew</h1>
            <div className='bg-black flex flex-wrap  '>
            {directors && directors.map((crew) => <CreditCard key={crew.id} posterPath={crew?.profile_path

                } moviesTitle={crew?.name} work={crew.known_for_department}/>)}
                </div>
        </div>
        {/* <div className='  bg-black '>
            
        </div> */}
      
    </div>
  )
}

export default MoviePlay
