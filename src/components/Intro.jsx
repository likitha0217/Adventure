import React from 'react'
import styled from 'styled-components'
import Woman from '../img/images2.svg'
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
   height: calc(100vh - 50px);
   display: flex;
   padding: 20px;
   @media only screen and (max-width:480px){
     flex-direction:column;
}
 
`;
const Left = styled.div`
  width: 60%;
 display: flex;
 flex-direction:column;
 justify-content: center;
 align-items: center;
 @media only screen and (max-width:480px){
  width: 100%;
  height: 100%;
}
 
`;
const Right = styled.div`
   
   width: 40%;
   @media only screen and (max-width:480px){
  display: none;
}
`;
const Title = styled.h1`
  width: 60%;
  font-size: 60px;
  @media only screen and (max-width:480px){
  width: 100%;
  font-size: 50px;
}
 
`;
const Desc = styled.p`
  width: 60%;
  font-size: 25px;
  margin-top:20px;
  @media only screen and (max-width:480px){
  width: 100%;
}
 
`;
const Info = styled.div`
  width: 60%;
display: flex;
 align-items: center;
 justify-content: space-between;
 margin-top: 50px;
 @media only screen and (max-width:480px){
  width: 100%;
  flex-direction: column;
}
`;
const Button = styled.button`
  background-color: darkblue;
  border:none;
  padding: 15px;
  color: white;
  border-radius: 10px;
  letter-spacing: 2px;
  @media only screen and (max-width:480px){
   margin-bottom: 20px;
}
  
 
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  
 
`;
const Phone = styled.div`
  color: #f709ff;
  font-weight: bold;
 
`;
const ContactText = styled.div`
  color: blueviolet;
  margin-top: 5px;
 
`;
const Image = styled.img`
   width: 100%;
`

const Intro = () => {
    return (
        <Container>
            <Left><Title>Adventures in Creative Age</Title>
            <Desc> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Desc>
            <Info>
                <Button>START A PROJECT</Button>
                <Contact>
                    <Phone>Call Us: (+91) 7411969518</Phone>
                    <ContactText>For any question or concern</ContactText>
                </Contact>
            </Info>
            
            
            </Left>
            <Right>
                <Image src={Woman} />
            </Right>
            <AnimatedShapes />

        </Container>
    )
}

export default Intro
