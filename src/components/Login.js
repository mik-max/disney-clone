import styled from "styled-components";
function Login (){
     return (
          <Container>
               <CTA className = "container">
                    <CTALogo1 src = '/images/cta-logo-one.svg' />
                    <SignUp>GET ALL THESE</SignUp>
                    <Description>
                         Get Premier Access to Raya and the Last Dragon for $4 only.
                         The Disney bundle will increase by $1 next week, so hurry now!
                    </Description>
                    <CTALogo2 src = '/images/cta-logo-two.png' />
               </CTA>
          </Container>
     );
}
export default Login;

const Container =styled.div`
   
     
     padding: 0;
     height: 90vh;
     padding: relative;
     background-image: url('/images/login-background.jpg');
     background-size:cover;
     background-repeat:no-repeat;
     background-position: center;
     opacity: 0.8;

`
const CTA = styled.div`
     max-width:650px;
     padding: 80px 80px;
     width: 70%;
     display: flex;
     flex-direction: column;
     align-items: center;
     
`
const CTALogo1 = styled.img``
const CTALogo2 = styled.img`
     width: 90%;
`
const SignUp = styled.a`
     width: 100%;
     background-color: #0063e5;
     font-weight: bold;
     padding: 17px 0;
     color: #f9f9f9;
     border-radius: 4px;
     text-align: center;
     font-size: 18px;
     cursor: pointer;
     transition: all 250ms;
     letter-spacing: 1.5px;
     margin-top: 8px;
     margin-bottom: 8px;
     &:hover{
          background-color: #0483ee;
          text-decoration: none;
          color: #f9f9f9;
     }
`
const Description = styled.p`
     font-size: 15px;
     letter-spacing: 1.5px;
     text-align: center;
     line-height: 1.5;
`