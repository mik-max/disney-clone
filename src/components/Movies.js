import styled from "styled-components";
import {Link} from 'react-router-dom'
function Movies (props){
     
     return (
          <Container>
               <h4> <span><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span> Recommended For You</h4>
               <Content>
                    {props.movies.map(movie => <Wrap key = {movie.id}><Link to ={`/detail/${movie.id}`}><img src = {movie.src} /></Link></Wrap> )}
               </Content>
          </Container>
     );
}
export default Movies;

const Container = styled.div`
     padding: 5px 5px;
     h4{
          padding-bottom: 10px;
          @media (max-width: 640px){
               font-size: 16px;
          }
          
     }
    
`
const Content = styled.div`
     display: grid;
     grid-template-columns: repeat(4, minmax(0, 1fr));
     grid-gap: 20px;

     @media (max-width: 640px){
     display: grid;
     grid-template-columns: repeat(2, minmax(0, 1fr));
     grid-auto-flow:row dense;
     }
      
     
 
`
const Wrap = styled.div`
     border-radius: 10px;
     cursor: pointer;
     box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
     transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.94) 0s; 
     border: solid rgba(249, 249, 249, 0.1);
     border-radius: 10px;
     overflow: hidden;
     img{
          width: 100%;
          height: 100%;
          object-fit: cover;
     }
     &:hover{
          transform: scale(1.05);
          box-shadow: rgb(0 0 0 / 80%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
          border: solid rgba(249, 249, 249, 0.8);
     }
`