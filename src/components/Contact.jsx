import React from 'react'
import styled from 'styled-components'
import Map from '../img/map.png'
import Phone from '../img/phone.png'
import Send from '../img/send.png'

const Container = styled.div`
height: 90%;
background: url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");

`

const Wrapper = styled.div`
height:100%;
display: flex;
justify-content: center;
align-items: center;
padding:20px;
@media only screen and (max-width:480px){
    flex-direction:column;
}


`
const FormContainer = styled.div`
width: 50%;
@media only screen and (max-width:480px){
    width: 100%;
}

`
const AddressContainer = styled.div`
width: 50%;
@media only screen and (max-width:480px){
    width: 100%;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
     
}

`
const Form = styled.div`
   height: 250px;
   display: flex;
   justify-content: center;
   align-items: center;
   @media only screen and (max-width:480px){
    flex-direction:column;
}
`
const LeftForm = styled.div`
height: 100%;
   display: flex;
   margin-right: 10px;
   justify-content: space-between;
   flex-direction: column;
   @media only screen and (max-width:480px){
     margin-right: 0;
     height: 50%;
}
`
const Input = styled.input`
width: 200px;
padding: 20px;
@media only screen and (max-width:480px){
     padding: 5px;
     margin-top: 10px;
}  
    

`
const TextArea = styled.textarea`
width: 200px;
height: 60%;
padding: 20px;
@media only screen and (max-width:480px){
    padding: 5px;
     margin-top: 10px;
     
}
`
const RightForm = styled.div`
height: 100%;
   display: flex;
   justify-content: space-between;
   flex-direction: column;
`
const Button = styled.button`
   background-color: darkblue;
   border:none;
   padding:15px 20px;
   border-radius:20px;
   cursor: pointer;
   color: #fff;
   
   @media only screen and (max-width:480px){
    padding: 5px;
     margin-top: 10px;
     
}

`
const Title = styled.div`
    margin-left:120px;
    margin-bottom: 20px;

    margin-top:0;
    font-size: 40px;
    @media only screen and (max-width:480px){
    margin-left: 100px;
    
    font-size: 40px;
}
`
const AddressItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    @media only screen and (max-width:480px){
    margin-bottom: 20px;
     
}
`
const Icon = styled.img`
    width: 20px;
    margin-right: 20px;
`
const Text = styled.span`
    font-size: 20px;
    margin-right: 10px;
    @media only screen and (max-width:480px){
   font-size: 15px;
     
}
`
const Contact = () => {
    return (
        <Container>
            <Wrapper>
                <FormContainer>
                <Title>Question<br/>Let get in touch</Title>
                    <Form>
                       
                    <LeftForm>
                        <Input placeholder="Your Fullname" />
                        <Input placeholder="You email id" />
                        <Input placeholder="Subject" />
                    </LeftForm>
                    <RightForm>
                        <TextArea placeholder="Message" />
                        <Button>Send</Button>
                    </RightForm>
                    </Form>
                </FormContainer>
                <AddressContainer>
                    <AddressItem>
                        <Icon src={Map} />
                        <Text>123 Park Avenue. Bangalore</Text>
                    </AddressItem>
                    <AddressItem>
            <Icon src={Phone} />
            <Text>+1 631 1234 5678</Text>
            <Text>+1 326 1234 5678</Text>
          </AddressItem>
          <AddressItem>
            <Icon src={Send} />
            <Text>contact@gmail.com</Text>
            <Text>sales@gmail.com</Text>
            </AddressItem>
                </AddressContainer>

            </Wrapper>

        </Container>
    )
}

export default Contact
