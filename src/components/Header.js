import React, {useEffect} from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import { useState } from "react";
import{selectUserName, selectUserPhoto, setUserLogin, setSignOut} from "../features/users/UserSlice";
import {useDispatch, useSelector} from "react-redux";
import {firebaseApp, provider} from '../firebase';
import {signInWithPopup, signOut} from 'firebase/auth'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router";

function Header(props){
     const dispatch = useDispatch()
     const navigate = useNavigate();
     const userName = useSelector(selectUserName);
     const userPhoto = useSelector(selectUserPhoto);
     const [burgerStatus, setBurgerStatus] = useState(false);

     const signIn = () => {
          const auth = getAuth(firebaseApp);
          
          signInWithPopup(auth, provider).then((result) => {
               let user = result.user
               dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
               }))
               navigate("/home")
          });
     }
     useEffect(() =>{
          const auth = getAuth(firebaseApp);
          onAuthStateChanged(auth,  user => {
           if(user){
               dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
               }))
               navigate("/home")
           }
          })
     }, [])
     
     const signout = () => {
          const auth = getAuth(firebaseApp);
          signOut(auth).then(()=>{
               dispatch(setSignOut());
               navigate("/")
          });
     }
      
     return ( 
          <Nav>
               <LeftMenu>
                    <a>Menu</a>
                    <span><i className="fa fa-bars" aria-hidden="true" onClick = {() => setBurgerStatus(true)}></i></span>
               </LeftMenu>
               <BurgerNavMenu show = {burgerStatus}>
                    <CustomWrapper>
                         <span><i className="fa fa-times" aria-hidden="true" onClick ={() => setBurgerStatus(false)}></i></span>
                    </CustomWrapper>
                    <li>
                         <Link to = '/home'>
                              <img src = '/images/home-icon.svg' />
                              <span>Home</span>
                         </Link>
                    </li>
                    <li>
                         <img src = '/images/search-icon.svg' />
                         <span>Search</span>
                    </li>
                    <li>
                         <img src = '/images/watchlist-icon.svg' />
                         <span>watchlist</span>
                    </li>
                    <li>
                         <img src = '/images/original-icon.svg' />
                         <span>Originals</span>
                    </li>
                    <li>
                         <img src = '/images/movie-icon.svg' />
                         <span>Movies</span>
                    </li>
                    <li>
                         <img src = '/images/series-icon.svg' />
                         <span>Series</span>
                    </li>
               </BurgerNavMenu>
              <Logo src ='/images/logo.svg' /> 
               {!userName ? 
                    <Login onClick = {signIn}> Login</Login> :
                    <>
                        <NavMenu>
                              <li>
                                   <Link to = '/home'>
                                        <img src = '/images/home-icon.svg' />
                                        <span>Home</span>
                                   </Link>
                              </li>
                              <li>
                                   <img src = '/images/search-icon.svg' />
                                   <span>Search</span>
                              </li>
                              <li>
                                   <img src = '/images/watchlist-icon.svg' />
                                   <span>watchlist</span>
                              </li>
                              <li>
                                   <img src = '/images/original-icon.svg' />
                                   <span>Originals</span>
                              </li>
                              <li>
                                   <img src = '/images/movie-icon.svg' />
                                   <span>Movies</span>
                              </li>
                              <li>
                                   <img src = '/images/series-icon.svg' />
                                   <span>Series</span>
                              </li>
                         </NavMenu>
                         <UserImg onClick = {signout}  src= {userPhoto} />
                    </>
                    
              } 
               
              
          </Nav>
     );
}
export default Header;

const Nav = styled.nav`
     height: 70px;
     background: #090b13;
     display:flex;
     justify-content: space-between;
     align-items: center;
     padding:0 36px;
     @media(max-width: 480px){
          padding:0 24px; 
     }
`
const Logo = styled.img`
     width: 80px;
`
const NavMenu = styled.ul`
     display: flex;
     align-items: center;
     margin-top: 25px;
     li{
          display: flex;
          align-items: center;
          padding: 0 12px;
          cursor: pointer;
          text-transform: uppercase;
          img{
               height: 22px;
               margin-bottom: 5px;
          }
          
     }
     
     span:after{
          display:block;
          content: '';
          border-bottom: 2px solid white; 
          transform: scaleX(0);  
          transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.94) 0s;
     }
     li:hover span:after{
          transform: scaleX(1);  
         
     }
     
     span{
         font-size : 13px;
         letter-spacing: 1.42px;
         color: white;
     }
     a{
          color: white;
          text-decoration: none;
          display: flex;
          align-items: center;
     }
     a:hover{
          text-decoration: none;
          color: white;
     
     }
     
     @media(max-width: 798px){

          display: none;
     }
`
const UserImg = styled.img`
     height: 40px;
     width: 40px;
     border-radius: 50%;
     cursor: pointer;
`
const BurgerNavMenu = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    background: #090b13;
    z-index: 10;
    width: 300px;
    padding: 20px;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(-100%)'}; /*I used negative 100% because translateX starts from left to right(0% to 100%) */
    transition: .3s ease-in-out;
    li{
          list-style-type: none;
          padding: 15px 0px;
          border-bottom: 1px solid rgba(249,249,249,0.5);
          cursor: pointer;
          text-transform: uppercase;
          img{
               height: 22px;
               margin-bottom: 5px;
          }
          
     }
    
   
    span{
         cursor: pointer;
    }
    a{
          color: white;
          text-decoration: none;
          display: flex;
          align-items: center;
     }
     a:hover{
          text-decoration: none;
          color: white;
     
     }
`

const CustomWrapper = styled.div`
     display: flex;
     justify-content: flex-end;

`
const LeftMenu = styled.div`
     display: none;
     align-items: center;
     a {
          font-weight: 600;
          text-transform: uppercase;
          margin-right: 10px;
          flex-wrap: nowrap;
     }
     @media(max-width: 798px){
          display: flex;
     }
`
const Login = styled.div`
     border: 1px solid #f9f9f9;
     padding: 8px 16px;
     border-radius:4px;
     letter-spacing:1.5px;
     text-transform:uppercase;
     background-color: rgba(0, 0, 0, 0.6);
     transition: all 0.2s ease 0s;
     cursor: pointer;
     &:hover{
          background-color: #f9f9f9;
          color: black;
          border-color: transparent;
     }
`