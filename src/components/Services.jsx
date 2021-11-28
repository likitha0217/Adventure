import React, {useState} from 'react'
import styled from 'styled-components'
import How from '../img/imageser.svg'
import MiniCard from './MiniCard'
import Play from '../img/play.png'

const Container = styled.div`
  display: flex;
  padding: 50px 10px;
  height: 100%;
  @media only screen and (max-width:480px){
   flex-direction:column;
}
`
const Left = styled.div`
 width: 50%;
 position: relative;
 @media only screen and (max-width:480px){
  display: none;
}

`
const Right = styled.div`
   width: 50%;
   @media only screen and (max-width:480px){
  width: 100%;
}

`
const Video = styled.video`
     display: ${(props) => !props.open && "none"};
     height: 45%;
     position: absolute;
     top: 0;
     margin: auto;
     bottom: 0;
     right: 0;
     @media only screen and (max-width:480px){
      width: 100%;
}
`
const Image = styled.img`
  display: ${(props) => props.open && "none"};
  height: 70%;
  margin-left: 100px;

`
const Wrapper = styled.h1`
  padding: 50px;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width:480px){
    padding: 20px;
}

`
const Title = styled.h1`
 
  font-size: 40px;
`
const Desc = styled.p`
  font-size: 20px;
  margin-top: 20px;
  color: #555;
  font-weight: 300;

`
const CardContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
`

const Button = styled.button`
width: 150px;
margin-top: 30px;
padding: 15px 20px;
border-radius: 10px;
background-color: darkblue;
border:none;
cursor: pointer;
color:#fff;
display: flex;
align-items: center;
`
const Icon= styled.img`
width:20px;
margin-right: 10px;
`

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: absolute;
  background-color: rgba(0,0,0,0.5);
`
const CloseButton = styled.div`
   position: absolute;
   background-color: #fff;
   padding: 5px;
   border:none;
   border-radius: 5px;
   right: 5px;
   top:30%;


`
const Services = () => {
    const [open, setOpen] = useState(false);
    const smallScreen = window.screen.width <=480 ? true : false
    return (
        <Container>
            <Left><Image open ={open} src={How} />
            <Video
          open={open}
          autoPlay
          loop
          controls
          src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
        />
         
            
            </Left>
            <Right>
                <Wrapper>
                    <Title>Simple process to start</Title>
                    <Desc>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer 
                        took a galley of type and scrambled it to make a type specimen book.</Desc>
                        <CardContainer>
                    <MiniCard />
                    <MiniCard />
                    <MiniCard />
                </CardContainer>
                <Button onClick={() => setOpen(true)}><Icon src={Play} /> Get Started</Button>
                </Wrapper>
                
            </Right>
            {smallScreen && open && (
              <Modal>
                    <Video
          open={open}
          autoPlay
          loop
          controls
          src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=139&oauth2_token_id=57447761"
        />
        <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
              </Modal>
            )}
        </Container>
    )
}

export default Services
