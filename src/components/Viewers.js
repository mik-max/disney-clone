import React, {useState} from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
function Viewers (){
     const [disneyIsPlaying, setDisneyIsPlaying] = useState(false);
     const [pixarIsPlaying, setPixarIsPlaying] = useState(false);
     const [marvelIsPlaying, setMarvelIsPlaying] = useState(false);
     const [starwarsIsPlaying, setStarwarsIsPlaying] = useState(false);
     const [nationalIsPlaying, setNationalIsPlaying] = useState(false);
     const [disneyimageIsShowing, setDisneyImageIsShowing] = useState(true);
     const [pixarImageIsShowing, setPixarImageIsShowing] = useState(true);
     const [marvelImageIsShowing, setMarvelImageIsShowing] = useState(true);
     const [starwarsImageIsShowing, setStarwarsImageIsShowing] = useState(true);
     const [nationalImageIsShowing, setNationalImageIsShowing] = useState(true);
     return (
          <div>
               <Container>
                    <Wrap onMouseEnter = {() => {setDisneyIsPlaying(true); setDisneyImageIsShowing(false);}} onMouseLeave = {() => {setDisneyIsPlaying(false); setDisneyImageIsShowing(true);}} >
                         <img className = {disneyimageIsShowing ? 'show-img' : 'hide-img'} src ='/images/viewers-disney.png' />
                         <video className = {disneyIsPlaying ? 'show-video' : 'hide-video'} src = '/videos/disney.mp4' autoPlay muted loop ></video>
                    </Wrap>
                    <Wrap onMouseEnter = {() => {setPixarIsPlaying(true); setPixarImageIsShowing(false);}} onMouseLeave = {() => {setPixarIsPlaying(false); setPixarImageIsShowing(true);}}>
                         <img className = {pixarImageIsShowing ? 'show-img' : 'hide-img'} src ='/images/viewers-pixar.png' />
                         <video className = {pixarIsPlaying ? 'show-video' : 'hide-video'} src = '/videos/pixar.mp4' autoPlay muted loop ></video>
                    </Wrap>
                    <Wrap onMouseEnter = {() => {setMarvelIsPlaying(true); setMarvelImageIsShowing(false);}} onMouseLeave = {() => {setMarvelIsPlaying(false); setMarvelImageIsShowing(true);}}>
                         <img className = {marvelImageIsShowing ? 'show-img' : 'hide-img'} src ='/images/viewers-marvel.png' />
                         <video className = {marvelIsPlaying ? 'show-video' : 'hide-video'} src = '/videos/marvel.mp4' autoPlay muted loop ></video>
                    </Wrap>
                    <Wrap onMouseEnter = {() => {setStarwarsIsPlaying(true); setStarwarsImageIsShowing(false);}} onMouseLeave = {() => {setStarwarsIsPlaying(false); setStarwarsImageIsShowing(true);}}>
                         <img className = {starwarsImageIsShowing ? 'show-img' : 'hide-img'} src ='/images/viewers-starwars.png' />
                         <video className = {starwarsIsPlaying ? 'show-video' : 'hide-video'} src = '/videos/star-wars.mp4' autoPlay muted loop ></video>
                    </Wrap>
                    <Wrap onMouseEnter = {() => {setNationalIsPlaying(true); setNationalImageIsShowing(false);}} onMouseLeave = {() => {setNationalIsPlaying(false); setNationalImageIsShowing(true);}}>
                         <img className = {nationalImageIsShowing ? 'show-img' : 'hide-img'} src ='/images/viewers-national.png' />
                         <video className = {nationalIsPlaying ? 'show-video' : 'hide-video'} src = '/videos/national-geographic.mp4' autoPlay muted loop ></video>
                    </Wrap>
               </Container>
          </div>
     );
}
export default Viewers;

const Container = styled.div`
    margin-top: 30px;
    margin-bottom: 15px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr)) ;
    padding: 30px 0px 26px;
    @media (max-width: 640px){
     display: grid;
     grid-template-columns: repeat(3, minmax(0, 1fr));
     grid-auto-flow:row dense;
     }
    
`
const Wrap = styled.div`
     border-radius: 10px;
     cursor: pointer;
     border: solid rgba(249, 249, 249, 0.1);
     box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
     transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.94) 0s;
     overflow: hidden;
     img, video{
          width:100%;
          height: 100%;
          object-fit: cover;
     }
     video.hide-video, img.hide-img{
          display:none;
     }
     video.show-video, img.show-img{
          display: inline-block;
     }
     &:hover{
          transform: scale(1.05);
          border-color: rgba(249, 249, 249, 0.8);
          box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
          
     }
`