import styled, { css } from "styled-components";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Services from "./components/Services";
import {BrowserRouter as Router} from 'react-router-dom';

const Container= styled.div`
height: 100vh;
overflow: hidden;
position: relative;
`

const Shape = css`
 width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   position: absolute;
   z-index:-1;
`
const IntroShape = styled.div`
  ${Shape}
   clip-path: polygon(67% 0%, 100% 0%, 100% 100%, 55% 100%);
  
   background-color: crimson;

`
const FeatureShape = styled.div`
  ${Shape}
   clip-path: polygon(0% 0%, 55% 0%, 33% 100%, 0% 100%);
  
   background-color: pink;

`
const ServiceShape = styled.div`
  ${Shape}
   clip-path: polygon(0% 0%, 33% 0%, 33% 100%, 0% 100%);
  
   background-color: darkorchid;

`
const PriceShape = styled.div`
  ${Shape}
   clip-path: polygon(33% 0%, 100% 0%, 100% 100%, 67% 100%);
  
   background-color: hotpink;

`
function App() {
  const smallScreen = window.screen.width <=480 ? true : false
  return (
    <>
    <Router>
    <Container>
     <Navbar/>
     <Intro />
     <IntroShape />
    </Container>

    <Container id="Feature">
      <Feature/>
      <FeatureShape/>
    </Container>


    <Container id="Services">
      <Services />
      {!smallScreen && <ServiceShape />}
    </Container>

    <Container id="">
      <Price />
      <PriceShape />
    </Container>

    <Container>
      <Contact />
      <Footer /> 
    </Container>
    </Router>
    </>
  );
}

export default App;
