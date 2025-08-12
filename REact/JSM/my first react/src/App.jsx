

import { useState, useEffect } from "react"
import Search from './components/Search'
import Spinner from './components/Spinner'
// API = Application Programmin Interface
// is a set of rules that allows one software application
// to talk with each other 

const App = () => {
  
const ApiURL = 'https://api.themoviedb.org/3'
const ApiKey = import.meta.env.VITE_ApiKey

const ApiOptions = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTdhMWY3OTJlZjlmODJmNmU2MTBjM2U0Mzg5MzczNyIsIm5iZiI6MTc1NDczNTQ2NC43MzksInN1YiI6IjY4OTcyMzY4NWUxMGQ2MzEwNGM0YjYzMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ssy9nv_8ncrK8lExIzTKsLYClWKjcQxp-EhjeFILIBM'
    }
}
const [searchTerm, setsearchTerm] = useState(''); // use state
const [ErrorMessage, setErrorMessage] = useState('');
const [movieList, setMovieList] = useState([]);
const [isLoading, setisLoading] = useState(false)

const fetchMovies = async() => {
     try {
      setisLoading(true); // to start the loading
      setErrorMessage('');

        const endpoint = `${ApiURL}/discover/movie?sort_by=popularity.desc`;

        const response = await fetch( endpoint, ApiOptions);

        if (!response.ok){
            throw new Error('Failed to fetch Data');
        }

        const data = await response.json()
        
       
        console.log(data)
      

        if(data.response === 'False'){
          setErrorMessage(data.Error)
          
        }else{
          setMovieList(data.results || []);
        }
     } catch (error) {
        console.log(`Error fetching movies ${error}`);
        setErrorMessage('Error fetching movies pls try again later');
     } finally{
       setisLoading(false); // no matter the results it will do this 
     }
}
  useEffect( ()=>{
    fetchMovies();
  }, []);
 
    return (

    <main>
       <div className='pattern'>
        <div className='wrapper'>
            <header>
                <img src='../public/hero.png'/>

                <h1>Find <span className='text-gradient'>Movies</span>  That You Enjoy Without hassle
            </h1>
            </header>
            <Search searchTerm={searchTerm} setsearchTerm={setsearchTerm}/>  {/*  so this is like a arguments that is passed to the component*/}
           
            {/* <h1> {searchTerm}</h1>    React is changing the value dynamically*/}
        
            <section className="all movies">

                <h2 className="mt-[40px]">All Movies</h2>

               {isLoading ? (
            <Spinner />

            ) : ErrorMessage ? (
              <p className="text-red-500">{ErrorMessage}</p>
            ) : (
              <ul>
                {movieList.map((movie) => (
                  <p key={movie.id} className="text-white">
                    {movie.title}
                  </p>
                ))}
              </ul>
            )}


            </section>

          

        </div>


       </div>
    </main>
  )
}

export default App
