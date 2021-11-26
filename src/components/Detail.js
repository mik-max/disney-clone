import styled from "styled-components";
import { useParams } from "react-router";
import { useState,useEffect } from "react";

 var imageId, description, title; 
function Detail (props){
     
     const {id} = useParams();
     const [isLoading, setIsLoading] = useState(true)
     const [loadedMovies, setloadedMovies] = useState([]);
     useEffect(() => {
          setIsLoading(true)
          fetch('https://disney-clone-99f2f-default-rtdb.firebaseio.com/Movies.json').then(response => {
              return response.json();
          }).then(data => {
               const moviesArray = data;
               for( let x = 0; x < moviesArray.length; x++){
                    if(id == moviesArray[x].id){
                         imageId = moviesArray[x].src;
                         title = moviesArray[x].title;
                         description = moviesArray[x].description; 
                    }
               }
               
            
            setIsLoading(false)
            setloadedMovies(moviesArray);
            
          });
      }, []);
     return (
          <Container>
               <Background style ={{
                    backgroundImage: 'url('+imageId+')'
               }}>
                    <ImageTitle>
                         <img src ='/images/viewers-disney.png' />
                    </ImageTitle>
                    <Controls className = "container">
                         <PlayButton>
                              <img src = '/images/play-icon-black.png'/>
                              <span>PLAY</span>
                         </PlayButton>
                         <TrillerButton>
                              <img src = '/images/play-icon-white.png'/>
                              <span>Triller</span>
                         </TrillerButton>
                         <AddButton>
                              <span>+</span>
                         </AddButton>
                         <GroupWatchButton >
                              <img src = '/images/group-icon.png' />
                         </GroupWatchButton>
                    </Controls>
                    <Subtitle className = "container">
                         <h3>{title}</h3>
                    </Subtitle>
                    <Description className = "container">
                         {description}
                    </Description>
               </Background>
          </Container>
     );
}
export default Detail;
const Container = styled.div`
     min-height: 90vh;
     padding: 0 ;
     position: relative;
`
const Background = styled.div`
     min-height: 90vh;
     padding: fixed;
     top: 0;
     left: 0;
     bottom: 0;
     right: 0;
     z-index: -1;
     background-size: cover;
     background-repeat: no-repeat;
     background-position: center;
     background-color: rgba(0, 0, 0, 0.7);
     background-blend-mode: soft-light;

`
const ImageTitle = styled.div`
     height: 30vh;
     width: 35vw;
     min-height: 170px;
     min-width: 200px;
     img{
          width: 100%;
          height: 100%;
          object-fit: contain;
     }
`
const Controls = styled.div`
     display: flex;
     
     align-items: center;
     @media (max-width: 480px){
          flex-wrap: wrap;
     }
`    
const PlayButton = styled.button`
     border-radius: 4px;
     font-size: 15px;
     display: flex;
     align-items: center;
     height: 56px;
     background-color: rgb(249, 249, 249);
     border: none;
     padding: 0 24px;
     margin-right: 22px;
     letter-spacing: 1.8px;
     cursor: pointer;
     &:hover{
          background-color: rgb(198, 198, 198);
     }
     @media (max-width: 480px){
          
          margin-bottom: 15px
     }
`
const TrillerButton = styled(PlayButton)`
     background: rgba(0, 0, 0, 0.3);
     border: 1px solid rgb(249, 249, 249);
     color: rgb(249, 249, 249);
     text-transform: uppercase;
`
const AddButton = styled.button`
     width:44px;
     height:44px;
     display: flex;
     align-items: center;
     justify-content: center;
     border-radius: 50%;
     border: .5px solid white;
     background-color: rgba(0, 0, 0, 0.4);
     cursor: pointer;
     margin-right: 22px;
     span{
          font-size: 30px;
          color: white
     }
     @media (max-width: 480px){
          
     }
     
`
const GroupWatchButton = styled(AddButton)`
     background-color: black;
     @media (max-width: 480px){
          margin-right: 10px;
          margin-left: 0px
     }
`
const Subtitle = styled.div`
     color: rgb(249, 249, 249);
     font-size: 15px;
     min-height: 20px;
     margin-top: 26px;
    
`
const Description = styled.div`
 
     font-size: 20px;
     margin-top: 16px;
     color: rgb(249, 249, 249);
     
`