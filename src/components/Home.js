import styled from "styled-components";
import { useState,useEffect, useContext } from "react";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import Loader from "./Loader";
import Contexts from "./Context";
function Home(props){
    const displayMovies = useContext(Contexts);
     return(
        <>
        <Container > 
            <ImageSlider/>
            <Viewers/>
            <Movies movies = {displayMovies.movies} />
        </Container>
        </>
        
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
