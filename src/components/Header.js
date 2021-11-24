import React from "react";
import styled from "styled-components";
function Header(){
     return (
          <Nav>
              <Logo src ='/images/logo.svg' /> 
              <NavMenu>
                 <a>
                     <img src = '/images/home-icon.svg' />
                     <span>Home</span>
                 </a>
                 <a>
                     <img src = '/images/search-icon.svg' />
                     <span>Search</span>
                 </a>
                 <a>
                     <img src = '/images/watchlist-icon.svg' />
                     <span>watchlist</span>
                 </a>
                 <a>
                     <img src = '/images/original-icon.svg' />
                     <span>Originals</span>
                 </a>
                 <a>
                     <img src = '/images/movie-icon.svg' />
                     <span>Movies</span>
                 </a>
                 <a>
                     <img src = '/images/series-icon.svg' />
                     <span>Series</span>
                 </a>
              </NavMenu>
              <UserImg src= '/images/profile.PNG' />
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
`
const Logo = styled.img`
     width:80px;
`
const NavMenu = styled.div`
     display: flex;
     a{
          display: flex;
          align-items: center;
          padding: 0 12px;
          cursor: pointer;
          img{
               height: 20px;
          }
          
     }
     span:after{
          display:block;
          content: '';
          border-bottom: 2px solid white; 
          transform: scaleX(0);  
          transition: all 250ms cubic-bezier(0.25, 0.45, 0.45, 0.94) 0s;
     }
     a:hover span:after{
          transform: scaleX(1);  
         
     }
     
     span{
         font-size : 13px;
         letter-spacing: 1.42px;
     }
`
const UserImg = styled.img`
     height: 50px;
     width: 50px;
     border-radius: 50%;
     cursor: pointer;
`