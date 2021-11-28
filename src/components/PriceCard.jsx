import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 20px;
  -webkit-box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.58);
box-shadow:0px 0px 17px -11px rgba(0,0,0,0.58);
background-color: white;
display: flex;
align-items: center;
border-radius: 10px;
flex-direction:column;
margin-right: 50px;
justify-content: center;
@media only screen and (max-width:480px){
    padding: 5px; 
    margin-right: 0;
    margin-bottom: 10px;
}
`
const PriceContainer = styled.div`
  align-items: center;
  display: flex;
`
const Price = styled.span`
font-weight: 600;
font-size: 50px;
@media only screen and (max-width:480px){
    font-size: 20px;
}

`
const Type = styled.button`
  background-color: #fff;
  font-size: 20px;
  margin: 20px 0;
  color: crimson;
  padding: 15px 20px;
  border-radius: 30px;
  border:1.5px solid crimson;
  @media only screen and (max-width:480px){
    padding: 10px;
    font-size: 18px;
}


`
const List = styled.ul`
list-style: none;

`
const ListItem = styled.li`
  margin:30px 0;
  @media only screen and (max-width:480px){
    margin:2px;
    font-size: 12px;
}
`
const Button = styled.button`
background-color: darkblue;
color: white;
border-radius: 10px;
cursor: pointer;
padding:10px 15px;
border:none;

@media only screen and (max-width:480px){
    font-size: 13px;
}

`

const PriceCard = ({price,type}) => {
    return (
        <Container>
           <PriceContainer>
                $<Price>{price}</Price>/month
                </PriceContainer> 
                <Type>{type} Plan</Type>
                <List>
                    <ListItem>200- handcraft template</ListItem>
                    <ListItem>Exclusive Support</ListItem>
                    <ListItem>Pre- buildtemplate</ListItem>
                    <ListItem>Perimum Pulgin</ListItem>{" "}
                </List>
                <Button>Join Now</Button>

           
        </Container>
    )
}

export default PriceCard
