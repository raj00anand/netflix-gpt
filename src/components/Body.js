
import Login from './Login'
import Browse from './Browse'
import MoviePlay from './MoviePlay'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'


const Body = () => {
  
  

    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login/>
        },
        {
            path: '/browse',
            element: <Browse/>,
        },
        {
          path: '/movie/:moviesId',
          element: <MoviePlay/>
        }
        
    ])

    


  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
