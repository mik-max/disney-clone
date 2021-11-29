import styled from "styled-components";
import { useState,useEffect } from "react";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import Loader from "./Loader";
function Home(){
     const [isLoading, setIsLoading] = useState(true)
    const [loadedMovies, setloadedMovies] = useState([]);
    useEffect(() => {
        setIsLoading(true)
        fetch('https://disney-clone-99f2f-default-rtdb.firebaseio.com/Movies.json').then(response => {
            return response.json();
        }).then(data => {

          const moviesArray = data;
          setIsLoading(false)
          setloadedMovies(moviesArray);
          
        });
    }, []);
   
    if(isLoading){
        return (
            <section className = "container">
                <Loader></Loader>
            </section>
        )
    }
     
     return(
          <Container> 
             <ImageSlider/>
             <Viewers/>
             <Movies movies = {loadedMovies} />
          </Container>
     );
}
export default Home;
const Container = styled.main`
     min-height: 90vh;
     padding: 0 calc(3.5vw + 5px);
     background-image: url('/images/home-background.PNG') ;
     background-position:center;
     background-repeat:no-repeat;
     background-size:cover;
    overflow-x: hidden;
`
