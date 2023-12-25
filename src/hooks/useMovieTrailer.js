import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      getMovieVideos();
    },[])
  
    const getMovieVideos = async () => {
      const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS)
      const json = await data.json();
      // console.log(json);
      const filterData = json.results?.filter((video) => video.type === "Trailer");
      // console.log(filterData)
      const trailer = filterData?.length ? filterData[0] : json.results[0];
      dispatch(addTrailerVideo(trailer));
    //   console.log(trailer);
    }
}

export default useMovieTrailer;