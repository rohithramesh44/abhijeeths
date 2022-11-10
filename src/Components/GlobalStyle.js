import React from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: boreder-box;
    }
    html{
        box-sizing: inherit;
        font-size: 62.5%;
        font-weight: 400;
        font-family: 'Poppins', sans-serif;
    }
    h1{
        font-size: 4.8rem;
    }
    h2{
        font-size: 4rem;
    }
    h3{
        font-size: 3.2rem;
    }
    h4{
        font-size: 2.4rem;
    }
    h5{
        font-size: 20rem;
    }
    p{
        font-size: 1.6rem;
    }
    button{
        padding: 1.5rem 3rem;
        border-radius: 50%;
        &:focus{
            outline: none;
        }
    }

`;

export default GlobalStyle;
