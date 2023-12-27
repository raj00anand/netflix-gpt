import React from 'react'
import MovieCard from './MovieCard'
import ScrollMenu from 'react-horizontal-scroll-menu';



const Arrow = ({ text, className }) => {
  return (
    <div
      className='bg-gray-300 py-2 px-1 rounded-sm font-bold text-lg h-10 w-6 absolute z-10 '
    >{text}</div>
  );
};
 

 
const ArrowLeft = Arrow({ text: '<'});
const ArrowRight = Arrow({ text: '>' });
const MovieList = ({title, movies}) => {

  
  const moviesList = movies?.map((movie) => <MovieCard key={movie.id} posterPath={movie?.poster_path}/>);

   
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
