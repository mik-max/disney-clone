import styled from "styled-components";
import {Link} from 'react-router-dom'
function Movies (props){
     function selectMovie(){
          
     }
     return (
          <Container>
               <h4> ---- Recommended For You</h4>
               <Content>
                    {props.movies.map(movie => <Wrap key = {movie.id}><Link to = "/detail"><img src = {movie.src} /></Link></Wrap> )}
               </Content>
          </Container>
     );
}
export default Movies;

const Container = styled.div`
     padding: 5px 5px;
     h4{
          padding-bottom: 10px;
     }
    
`
const Content = styled.div`
     display: grid;
     grid-template-columns: repeat(4, minmax(0, 1fr));
     grid-gap: 25px;
`
const Wrap = styled.div`
     border-radius: 10px;
     cursor: pointer;
     box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
     transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.94) 0s;   
     img{
          border-radius: 10px;
          width: 100%;
          height: 100%;
          object-fit: cover;
     }
     &:hover{
          transform: scale(1.05);
          box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
     }
`