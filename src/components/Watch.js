import React from 'react'
import styled from 'styled-components';
import { useParams } from "react-router";
import { useContext } from "react";
import Contexts from "./Context";
var imageId, description, title, trailer; 
function Watch() {
     const {id} = useParams();
     const movieDetails = useContext(Contexts);
     let moviesArray = movieDetails.movies;
     for( let x = 0; x < moviesArray.length; x++){
          if(id == moviesArray[x].id){
               imageId = moviesArray[x].src;
               title = moviesArray[x].title;
               description = moviesArray[x].description; 
               trailer = moviesArray[x].trailer;
               console.log(trailer);
          }
     }
     return (
          <Container>
              <video src = {trailer}  controls></video> 
          </Container>
     )
}

export default Watch
const Container = styled.div`
     height: calc(100vh - 70px);
     width: 100%;
     video{
          height: 100%;
          width: 100%;
          object-fit: cover;
     }
`