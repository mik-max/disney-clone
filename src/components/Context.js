import React,{useState, useEffect, createContext} from 'react';
import Detail from "./Detail";
import Loader from './Loader';
 const Contexts = createContext({
     movies:[]
});

export function MoviesProvider(props){
     const [isLoading, setIsLoading] = useState(false)
     const [loadedMovies, setLoadedMovies] = useState([]);
     useEffect(() => {
          setIsLoading(true)
          fetch('https://disney-clone-99f2f-default-rtdb.firebaseio.com/Movies.json').then(response => {
               return response.json();
           }).then(data => {
   
             const moviesArray = data;
             setIsLoading(false)
             setLoadedMovies(moviesArray);
             
           });
           setIsLoading(false);
     }, [])
     if(isLoading){
          return (
              <section className = "container">
                  <Loader></Loader>
              </section>
          )
      }
      const values = {
           movies: loadedMovies
      }
      return <Contexts.Provider value = {values}>
               {props.children}
          </Contexts.Provider>
}
 export default Contexts;

