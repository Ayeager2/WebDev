import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 20vw;
  margin-bottom: 45px;
  cursor: pointer;
`;
const Image = styled.img`
  width: 100%;
  height: 202px;
  border-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
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

const Card = () => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none" }}>
      <Container>
        <Image src="https://images.gog-statics.com/239f94729f55602322cf6489798c57bed482b84ea7e253bb3bf716328619878a.jpg" />
        <Details>
          <ChannelImage src="https://art.ngfiles.com/thumbnails/234000/234001_full.jpg?f1552343482" />
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
