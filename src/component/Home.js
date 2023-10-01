import React from 'react'
import styled from "styled-components";
import Navbar from "./Navbar";
import Card from "./Card";
import Footer from './Footer';
function Home() {


  return (

    <>
    <Navbar />
    <Container>
      
      <Banner>
        <img src="./banner.jpg" alt="" />
        <img src="mobile_banner.jpg" alt="" />       
      </Banner>

      <Main>
        <Card 
            id = {1}
            image={"https://m.media-amazon.com/images/I/41n-Mot8qkL._SX300_SY300_QL70_FMwebp_.jpg"}
            price={2500}
            rating={4}
            title={"Kreo Hive Anti-ghosting Gaming"}
        />
        <Card 
            id = {2}
            image={"https://m.media-amazon.com/images/I/41vQryZrFgL._SX300_SY300_QL70_FMwebp_.jpg"}
            price={2800}
            rating={3}
            title={"ONIKUMA K5 Wired Gaming Headset with Base Sound "}
        />

        <Card 
            id = {3}
            image={"https://m.media-amazon.com/images/I/61RiY9CcC2L._AC_UL320_.jpg"}
            price={1600}
            rating={3}
            title={"Wired Gaming Mouse with Up to 6400 DPI"}
        />

        <Card 
            id = {4}
            image={"https://m.media-amazon.com/images/I/41qj6N+xqmL._SX342_SY445_.jpg"}
            price={2500}
            rating={4}
            title={"Amkette EvoFox One Universal Bluetooth Gamepad"}
        />

        <Card 
            id = {5} 
            image={"https://m.media-amazon.com/images/I/71ILbCOwZAL._SX679_.jpg"}
            price={2500}
            rating={4}
            title={"Ant Esports GS370SB Gaming Computer Speakers for PC"}
        />

        <Card 
            id = {6}
            image={"https://m.media-amazon.com/images/I/51Q4RPQpG4L._SX300_SY300_QL70_FMwebp_.jpg"}
            price={2500}
            rating={4}
            title={"Qizlar Extended Gaming Mouse Pad (800mm x 300mm x 3mm)"}
        />
       
      </Main>
    </Container>
    <Footer/>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  background-color: rgb(234, 237, 237);
  max-width: 1400px;
  margin: auto;
  height: fit-content;
`;


const Banner = styled.div`
  width: 100%;
  img {
    width: 100%;
    -webkit-mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 2),
      rgba(0, 0, 0, 0.95),
      rgba(0, 0, 0, 0.85),
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.55),
      rgba(0, 0, 0, 0)
    );

    &:nth-child(2) {
      display: none;
    }

    @media only screen and (max-width: 767px) {
      &:nth-child(1) {
        display: none;
      }

      &:nth-child(2) {
        display: block;
        -webkit-mask-image: none;
      }
    }
  }
`;

const Main = styled.div`
  display: grid;
  justify-content: center;
  place-items: center;
  width: 100%;

  // here grid is use to separate the products
  grid-auto-rows: 420px;
  grid-template-columns: repeat(4, 280px);
  grid-gap: 20px;

  /* Mobile */
  @media only screen and (max-width: 767px) {
    grid-template-columns: repeat(2, 50%);
    grid-gap: 0;
  }

  /* Tablets */

  @media only screen and (min-width: 767px) and (max-width: 1200px) {
    grid-template-columns: repeat(3, 30%);
  }

  @media only screen and (min-width: 767px) {
    margin-top: -130px;
    padding: 10px 0px;
  }
`;
export default Home
