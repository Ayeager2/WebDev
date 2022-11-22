import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: ${(props) => props.type === "sm" && "360px"};
  margin-bottom: ${(props) => props.type === "sm" ? "10px" : "45px"};
  cursor: pointer;
  display: ${(props) => props.type === "sm" && "flex"};
  gap: 10px;
  &:hover{
    background-color:${({ theme }) => theme.soft};
  }

`;
const Image = styled.img`
  width: 100%;
  height: ${(props) => props.type === "sm" ? "100px" : "202px"};
  border-color: #999;
  flex:1;
  border-radius: 25px;
`;

const Details = styled.div`
  display: flex;
  margin-top: ${(props) => props.type === "sm" && "16px"};
  gap: 12px;
  flex:1;
  `;

const ChannelImage = styled.img`
width: 36px;
height: 36px;
border-radius: 50%;
background-color: ${(props) => props.type === "sm" && "none"};
display: ${(props) => props.type === "sm" && "none"};
`;

const Texts = styled.div``;
const Title = styled.h1`
font-size: 16px;
font-weight: 500;
color: ${({ theme }) => theme.text};
`;
const ChannelName = styled.h2`
font-size: 16px;
color: ${({ theme }) => theme.textSoft};
margin: 9px 0;
`;
const Info = styled.div`
font-size: 14px;
color: ${({ theme }) => theme.textSoft};
`;

const Card = ({ type }) => {
  return (
    <Link to="/video/test" style={ { textDecoration: "none" } }>
      <Container type={ type }>
        <Image type={ type } src="https://images.gog-statics.com/239f94729f55602322cf6489798c57bed482b84ea7e253bb3bf716328619878a.jpg" />
        <Details type={ type }>
          <ChannelImage type={ type } src="https://art.ngfiles.com/thumbnails/234000/234001_full.jpg?f1552343482" />
          <Texts>
            <Title>Test Video</Title>
            <ChannelName>NinnyOfDez Channel</ChannelName>
            <Info>1M views • 2 years ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
