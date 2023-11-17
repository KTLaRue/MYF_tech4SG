// const clicked = require('./test.js');
const {React, useState} = require( "react");
const {styled} = require("styled-components");



// import React, { useState } from "react";
// import styled from "styled-components";

  
  const Button = styled.button`
    background-color: ${(props) => theme[props.theme].default};
    color: white;
    padding: 5px 15px;
    border-radius: 5px;
    outline: 0;
    text-transform: uppercase;
    margin: 10px 0px;
    cursor: pointer;
    box-shadow: 0px 2px 2px lightgray;
    transition: ease background-color 250ms;
    &:hover {
      background-color: ${(props) => theme[props.theme].hover};
    }
    &:disabled {
      cursor: default;
      opacity: 0.7;
    }
  `;


function clicked(res){
    console.log("testing button action calling from test")
}

// export clicked

// export default function App() {
//     return (
//       <>
//         <div>
//           <Button onClick={clickMe}>Button</Button>
//         </div>
//       </>
//     );
//   }
  