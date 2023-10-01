import React from 'react'
import styled from "styled-components";
import Rating from '@mui/material/Rating';
import { useStateValue } from './StateProvider';


function Card({id,image, price, rating, title}) {
  
 

    return (
        <Container>
            <Image >
                <img src={image} alt="" />
            </Image>
            <Description>
                <h3  >{title}</h3>
                <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                <p>₹{price}</p>
                <button>Add to Cart</button>
            </Description>
           
        </Container> 
    )
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  background-color: #fff;
  z-index: 10;
`;

const Image = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex: 0.3;
  img {
    width: 180px;
    height: 200px;
  }
`;
const Description = styled.div`
  width: 80%;
  height:80%;
  margin: auto;

  flex-direction: column;
  justify-content: space-evenly;
  flex: 0.7;

  h3 {
    font-size: 16px;
    font-weight: 600;
  }

  p {
    font-weight: 600;
  }

  button {
    width: 100%;
    height: 33px;
    background-color: #8AC7DB;
    border: none;
    border-radius: 10px;
    cursor: pointer;
  }
`;
export default Card