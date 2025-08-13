

import { useState, useEffect} from "react"
import { useDebounce} from "react-use"; // this is a package that will help us to implement the debounce
import Search from './components/Search'
import Spinner from './components/Spinner'
import MovieCard from "./components/MovieCard"
import {updateSearchCount,getTrendingMovies } from '../appwrite'
// API = Application Programmin Interface
// is a set of rules that allows one software application
// to talk with each other 
import TrendingCard from "./components/TrendingCard"
const App = () => {
  
const ApiURL = import.meta.env.VITE_API_URL; // this is the base url of the API
const ApiKey = import.meta.env.VITE_API_KEY

const ApiOptions = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `${ApiKey}` 
    }
}
const [searchTerm, setsearchTerm] = useState(''); // use state
const [ErrorMessage, setErrorMessage] = useState('');
const [movieList, setMovieList] = useState([]);
const [isLoading, setisLoading] = useState(false)
const [debounceSearchTerm, setDebounceSearchTerm] = useState('');     // optional // this will wait for 500ms before updating the search term
const [trendingMovies, setTrendingMovies] = useState([]); // optional
useDebounce(() => setDebounceSearchTerm(searchTerm) , 1000, [searchTerm])


const fetchMovies = async( query = '') => { // do not implement the search each character typed by the user
     try {                                  // this will increate the number of requests to the API
                                            // and more expensive , api overload
                                            // Solution: use a input debounce 
      setisLoading(true); // to start the loading
      setErrorMessage('');

        const endpoint =   query
          ? `${ApiURL}/search/movie?query=${encodeURIComponent(query)}` 
          : `${ApiURL}/discover/movie?sort_by=popularity.desc`

        const response = await fetch( endpoint, ApiOptions);

        if (!response.ok){
            throw new Error('Failed to fetch Data');
        }

        const data = await response.json()
        
       
        console.log(data)
        

if (data.success === false) {
    setErrorMessage(data.status_message || 'Unknown error');
          
        }else{
          
          setMovieList(data.results || []); // because i want to protect your app from crashing in case data.results is undefined or null.
          if (query && data.results.length > 0) {
          await updateSearchCount(query, data.results[0]);
        }
  
        }                                   //If data.results exists → use it
                                             //If data.results does not exist → use an empty array 

     } catch (error) {
        console.log(`Error fetching movies ${error}`);
        setErrorMessage('Error fetching movies pls try again later');
     } finally{
       setisLoading(false); // no matter the results it will do this 
     }
}

const loadingTrendingMovies = async () => {
  try {
    const movies = await getTrendingMovies();
    setTrendingMovies(movies);

  }catch (error) {
    console.error('Error fetching trending movies:', error);
   
  }
}

  useEffect( ()=>{
    
    fetchMovies(debounceSearchTerm);
  }, [debounceSearchTerm]); // this will run the fetchMovies function when the debounceSearchTerm changes
  
  useEffect(() => { 
    loadingTrendingMovies();
  }, []); // this will run the loadingTrendingMovies function when the component mounts

    return (

    <main>
       <div className='pattern'>
        <div className='wrapper'>
            <header>
                <img src='../public/hero.png'/>

                <h1>Find <span className='text-gradient'>Movies</span>  That You Enjoy Without hassle
            </h1>
            </header>
        
        {trendingMovies.length > 0 && (
          <section className="trending">
            <h2 >Trending Movies</h2>  
            <ul>
              {trendingMovies.map((movie, index ) => ( 
                <TrendingCard key={movie.$id} movie={movie}  index={index}/>
              ))}
            </ul>
          </section>)}
 
            <Search searchTerm={searchTerm} setsearchTerm={setsearchTerm}/>  {/*  so this is like a arguments that is passed to the component*/}
           
            {/* <h1> {searchTerm}</h1>    React is changing the value dynamically*/}
        
            <section className="all-movies">

                <h2 className="mt-[40px]">All Movies</h2>

               {isLoading ? (
            <Spinner />

            ) : ErrorMessage ? (
              <p className="text-red-500">{ErrorMessage}</p>
            ) : (
              <ul>             {/*  i want to pass all the information to the MovieCard component*/}
                {movieList.map((movie) => (
                                         //  movie = movie this allow to de structure the movie object
                    <MovieCard key={movie.id}  movie={movie}/>
                
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
