import React from 'react'
import { styled } from 'styled-components'
import {useNavigate} from 'react-router-dom';

export default function About() {
    const navigate = useNavigate();
  return (
    <Container>
       <div>
        <p>
      <h2>  Welcome to the About page of the TextUtils React App</h2>! Here, we will provide you with all the essential information about our application and its purpose.

TextUtils App Overview:
TextUtils is a powerful and user-friendly React application designed to assist users with various text-related tasks. Whether you need to format, analyze, or manipulate text, TextUtils has got you covered. With its clean and intuitive interface, the app ensures a seamless user experience for anyone, from casual users to professionals.
        </p>        
       <button onClick={()=>{navigate('/')}}>Go back</button>
       </div>
    </Container>
  )
}

const Container = styled.div`
 width: 100vw;
 height: 100vh;
 display: flex;
 justify-content: center;
 overflow: hidden;
 div{
    padding: 20px;
    width: 60vw;
    /* height: 100%; */
    background-color: #e9dfdf;
    margin-top: 20px;
    margin-bottom: 20px;
}
button{
    width: 100px;
    height: 30px;
    outline: none;
    border: none;
    border-radius: 0.3rem;
    transform: 0.3s ease;
    cursor: pointer;
    &:hover{
        background-color: antiquewhite;
    }
    &:active{
        transform: scale(0.95);
    }
}

`