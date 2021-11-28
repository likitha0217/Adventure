import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height:10%;
background-color:#000;
color:lightcoral`

const Wrapper = styled.div`
padding: 20px;
display: flex;
justify-content: space-between;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin:0;
  display: flex;
`

const ListItem = styled.li`
margin-right: 20px;
@media only screen and (max-width:480px){
    margin-right: 8px;
    font-size: 15px;
     
}`

const Copyright = styled.span`
@media only screen and (max-width:480px){
    margin-right: 10px;
    font-size: 15px;
     
}`
    
const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <List>
                    <ListItem>Guide</ListItem>
                    <ListItem>API</ListItem>
                    <ListItem>Support</ListItem>
                    <ListItem>Community</ListItem>
                </List>
                <Copyright>Adventure @ 2021</Copyright>
            </Wrapper>
         </Container>
    )
}

export default Footer
