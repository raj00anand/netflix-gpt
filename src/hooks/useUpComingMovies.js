import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpComingMovies } from "../utils/moviesSlice";

const useUpComingMovies = () => {
    const dispatch  = useDispatch()
    const upcomingMovies = useSelector((store) => store.movies.upComingMovies);

  useEffect(() => {
    !upcomingMovies && getUpComingMovies();
  },[])

  const getUpComingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', 
    API_OPTIONS
    )
    const json = await data.json();
    // console.log(json.results);
    dispatch(addUpComingMovies(json.results));
  }
};

export default useUpComingMovies;