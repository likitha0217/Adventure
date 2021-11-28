import React from 'react'
import styled from 'styled-components'
import App from '../img/imageapp.svg'
import AnimatedShapes from './AnimatedShapes'

const Container = styled.div`

display: flex;
padding: 50px 20px 0 0px;
@media only screen and (max-width:480px){
   flex-direction: column;
}

`

const Left = styled.div`
width: 50%;
@media only screen and (max-width:480px){
 display: none;
}
`

const Right = styled.div`

width: 50%;
display: flex;
flex-direction:column;
justify-content: center;
@media only screen and (max-width:480px){
  width: 100%;
  padding: 20px 20px;

}
`
const Image = styled.img`
   width: 80%;
   
`
const Title = styled.span`
font-size: 70px;
@media only screen and (max-width:480px){
  font-size: 50px;
}
  
`
const SubTitle = styled.span`
font-size: 24px;
font-style:italic;
color: #201e1e;
margin-top: 20px;
   
`
const Desc = styled.p`
font-size: 20px;
color: #777;
margin-top: 30px;
`
const Button = styled.button`
 border:none;
 background-color: darkblue;
 font-size: 20px;
 border-radius: 10px;
 color:#fff;
 width: 150px;
 padding: 15px 20px;
 margin-top: 20px;
 cursor: pointer;

`

const Feature = () => {
    return (
        <Container>
            <Left><Image src={App} /></Left>
            <Right>
                <Title><b>good</b>Design<br/>
                <b>good</b>Business
                </Title>
                <SubTitle>We create good design in terms of business</SubTitle>
                <Desc> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Desc>
                <Desc> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</Desc>
                <Button>Learn More</Button>
                <AnimatedShapes/>
            </Right>
        </Container>
    )
}

export default Feature
