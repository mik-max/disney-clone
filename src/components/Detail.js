import styled from "styled-components";
import Movies from "./Movies";
function Detail (props){
     return (
          <Container>
               <Background>
                    <ImageTitle>
                         <img src ='/images/viewers-disney.png' />
                    </ImageTitle>
                    <Controls className = "container-fluid">
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
                    <Subtitle className = "container-fluid">
                         2021 family fantasy movie
                    </Subtitle>
                    <Description className = "container-fluid">
                         At the 18-minute mark in Luca, "Il Gatto e La Volpe" plays as the title character and Alberto bond while having fun on land. Lyrically, the song tells a tongue-in-cheek story about a cat and fox who work as businessmen, which is ultimately what the Disney movie's leads do, at least in spirit, as they try to sell themselves as actual humans.
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
     background-image: url('/images/Luca.jfif');
     background-size: cover;
     background-repeat: no-repeat;
     background-position: center;

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
     
`
const GroupWatchButton = styled(AddButton)`
     background-color: black;
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