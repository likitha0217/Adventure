import React from 'react'
import styled from 'styled-components'


const SquareShapes = styled.div`
  width: 60px;
  height: 60px;
  background-color: blue;
  top:-60px;
  left: -60px;
  z-index:-1;
  position: absolute;
  opacity: 0.5;
  animation: square 25s linear alternate infinite;

  @keyframes square {
     to{
         transform: translate(100vw, 100vh);
     }
  }

`;
const CircleShapes = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #ff00d4;
  top:200px;
  left: -100px;
  z-index:-1;
  position: absolute;
  
  animation: circle 25s linear alternate infinite;

  @keyframes circle {
     to{
         transform: translate(100vw, -100vh);
     }
  }

`;
const RectShapes = styled.div`
  width: 100px;
  height: 60px;
  background-color: #00f7ff;
  top:400px;
  left: -50px;
  z-index:-1;
  position: absolute;
  opacity: 0.5;
  animation: Rect 25s linear alternate infinite;

  @keyframes Rect {
     to{
         transform: translate(100vw, -50vh);
     }
  }

`;
const AnimatedShapes = () => {
    return (
        <>
        <SquareShapes/>
        <CircleShapes/>
        <RectShapes />

        </>
    )
}

export default AnimatedShapes
