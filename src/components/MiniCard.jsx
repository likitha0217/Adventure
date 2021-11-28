import React from 'react'
import styled from 'styled-components'
import Search from '../img/search.png'

const Container = styled.div`
display: flex;
align-items: center;
padding: 20px;
width: 100px;
flex-direction:column;
-webkit-box-shadow: 0px 0px 17px -11px rgba(0,0,0,0.58);
box-shadow:0px 0px 17px -11px rgba(0,0,0,0.58);
@media only screen and (max-width:480px){
    width: 50%;
}
`
const Image = styled.img`
  width: 20px;
 
`
const Text = styled.span`
margin-top: 10px;
text-align:center;
font-size: 14px;
font-weight: 300;
@media only screen and (max-width:480px){
    font-size: 12px;
}

`

const MiniCard = () => {
    return (
        <Container>
            <Image src={Search}/>
            <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</Text>
            
            
        </Container>
    )
}

export default MiniCard
