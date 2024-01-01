import React from 'react'
import MovieCard from './MovieCard'
import ScrollMenu from 'react-horizontal-scroll-menu';



const Arrow = ({ text }) => {
  return (
    <div
      className='bg-black bg-opacity-70 pt-8  px-1 -mx-2 -mt-12 rounded-lg hover:rounded-lg font-bold  text-white hover:bg-opacity-90 text-2xl h-28 w-8 text-center absolute z-10 '
    >{text}</div>
  );
};
 

 
const ArrowLeft = Arrow({ text: '<'});
const ArrowRight = Arrow({ text: '>' });
const MovieList = ({title, movies}) => {

  
  const moviesList = movies?.map((movie) => <MovieCard key={movie.id} posterPath={movie?.poster_path} moviesTitle={movie?.title}/>);

   
  return (
    <div className='px-3 cursor-pointer '>
    <h1 className='text-lg md:text-xl text-white py-4 font-medium'>{title}</h1>
    
      {/* <div className='flex overflow-x-scroll'> */}
      
        {/* <div className='relative flex'> */}
       
        
        <ScrollMenu
          data={moviesList}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          dragging={true}
          wheel={false}
          alignCenter={false}
          clickWhenDrag={false}
        />
        
      {/* </div> */}
      
      {/* </div> */}
      
    </div>
  )
}

export default MovieList
