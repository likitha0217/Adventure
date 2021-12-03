import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 50px;
    
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
    
`
const Left = styled.div`
   width: 60%;
   display: flex;
   align-items: center;
   justify-content: space-between;
`
const Logo = styled.h1`
   font-weight:600;
   text-decoration: underline crimson;
`
const Menu = styled.ul`
display: flex;

list-style: none;
@media only screen and (max-width:480px){
  display: none;
}
`
const MenuItem = styled(Link)`
margin-right: 30px;
font-size: 20px;
font-weight: bold;
color: #527979;
text-decoration: none;
`
const Button = styled.button`
  border:2px solid black;
  font-weight: bold;
  border-radius: 10px;
  padding: 10px 15px;
  background-color: #ff9100;
`

const Navbar = () => {
    return (
      <Container>
          <Wrapper>
           <Left><Logo>Agency</Logo>
           <Menu>
               <MenuItem to="/">Home</MenuItem>
               <MenuItem to="/#Feature">Features</MenuItem>
               <MenuItem to="/#Services">Services</MenuItem>
               <MenuItem to="/#Pricing">Pricing</MenuItem>
               <MenuItem to="/#Contact">Contact</MenuItem>

               
            </Menu></Left>
           <Button>
               JOIN NOW
           </Button>
          </Wrapper>
      </Container>
    )
}

export default Navbar
