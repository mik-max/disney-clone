import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
function Home(){
     return(
          <Container> 
             <ImageSlider/>
             <Viewers/>
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