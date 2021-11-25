import styled from "styled-components";
function Movies (){
     return (
          <Container>
               <h4> ---- Recommended For You</h4>
               <Content>
                    <Wrap>
                         <img src = '/images/Alladin.jfif' />
                    </Wrap>
                    <Wrap>
                         <img src = '/images/Brave.jfif' />
                    </Wrap>
                    <Wrap>
                         <img src = '/images/Lion-King.jfif' />
                    </Wrap>
                    <Wrap>
                         <img src = '/images/Encanto.jfif' />
                    </Wrap>
                    <Wrap>
                         <img src = '/images/Eternals.jfif' />
                    </Wrap>
                    <Wrap>
                         <img src = '/images/Frozen.jfif' />
                    </Wrap>
                    <Wrap>
                         <img src = '/images/home.jfif' />
                    </Wrap>
                    <Wrap>
                         <img src = '/images/Moana.jfif' />
                    </Wrap>
                    <Wrap>
                         <img src = '/images/Luca.jfif' />
                    </Wrap>
                    <Wrap>
                         <img src = '/images/Raya.jfif' />
                    </Wrap>
                    <Wrap>
                         <img src = '/images/fastandfurious9.jfif' />
                    </Wrap>
                    <Wrap>
                         <img src = '/images/Lockdown.jfif' />
                    </Wrap>
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