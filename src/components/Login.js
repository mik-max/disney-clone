import styled from "styled-components";
import {Card, Form, Button } from 'react-bootstrap';
import { useRef } from "react";
function Login (){
     const emailRef = useRef();
     const passwordRef = useRef();
     const paswordConfirmRef = useRef();
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
               {/* <div className = "container" style = {{
                    maxWidth: "400px"
               }}>
                    <Card className = "container" >
                         <Card.Body>
                              <h2 className = "text-center mt-2 text-dark">Sign Up</h2>
                              <Form>
                                   <Form.Group id ="email">
                                        <Form.Label className = "text-dark">Email</Form.Label>
                                        <Form.Control type = "email" ref ={emailRef} required />
                                   </Form.Group>
                                   <Form.Group id ="password">
                                        <Form.Label  className = "text-dark">Passwod</Form.Label>
                                        <Form.Control type = "password" ref ={passwordRef} required />
                                   </Form.Group>
                                   <Form.Group id ="password-confirm">
                                        <Form.Label  className = "text-dark">Confirm Pasword</Form.Label>
                                        <Form.Control type = "password" ref ={paswordConfirmRef} required />
                                   </Form.Group>
                                   <Button className = "w-100 mt-3 mb-3" type = "submit">Sign Up</Button>
                              </Form>
                         </Card.Body>
                    </Card>
                    <div className ="w-100 text-center mt-2" >
                         Already have an account? Log In
                    </div>
               </div> */}
               
          </Container>
     );
}
export default Login;

const Container =styled.div`
   
     
     padding: 0;
     min-height: 90vh;
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
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     @media (max-width: 480px){
          padding: 80px 5px;
     }
     
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