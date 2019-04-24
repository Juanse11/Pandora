import React from "react";
import styled from "styled-components";
import { Icon, Rating, Item, Label } from "semantic-ui-react";

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  min-width: 300px;
  height: 100%;
`;

const Box = styled.div`
  &&& {
    width: 300px;
    height: 200px;
  }
`;

const StyledItem = styled(Item)`
  &&& {
      border: 1px solid rgb(235,235,235);
      border-radius: 3px;
      box-shadow: none;
      display: flex;
  }
`;

const Sport = styled.p`
  &&& {
      font-size: 12px;
      color: #767676
      font-weight: 700;
      line-height: 1.33em
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      margin: 0;
  }
`;

const Position = styled.p`
  &&& {
      font-size: 16px;
      color: #483df6
      font-weight: 700;
      line-height: 1.33em
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      margin-left: auto;
  }
`;

const Title = styled.p`
  &&& {
      font-size: 18px;
      color: #4f4b65
      font-weight: 800;
      line-height: 1.44m
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      margin: 0;

  }
`;
const Details = styled.p`
  &&& {
      max-width: 100%;
      font-size: 14px;
      color: #4f4b65
      font-weight: 400;
      line-height: 1.44em
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      display: block;
      margin: 0;

  }
`;
const Price = styled.p`
&&& {
    font-size: 18px;
    color: #4f4b65
    font-weight: 800;
    line-height: 1.44em
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-left: auto;
    align-self: center;
}
`;
const StyledRating = styled(Rating)`
  &&& {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    align-self: center;
  }
`;
const Content = styled(Item.Content)`
  &&& {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    max-width: 100%;
    padding: 1.5em;
  }
`;

const RatingContainer = styled.div`
  &&& {
    display: flex
    justify-content: flex-start;
    margin-top: ${props => (props.rating ? "auto" : 0)};
}
`;
const PostItem = ({ title, price, rating, sport, image } = {}) => (
  <StyledItem
   
  >
    <Box>
      <Image src={image} />
    </Box>
    <Content>
      <RatingContainer>
        <Sport>
          <Icon name="soccer" style={{ fontSize: "12px" }} />
          {sport.toUpperCase()}
        </Sport>
        <Position>
          <Icon name="map marker alternate" style={{ fontSize: "18px" }} />
          <span style={{color: '#4f4b65'}}>a 3,5km</span>
        </Position>
      </RatingContainer>
      <Title>
        <span className="cinema">{title}</span>
      </Title>
      <Details>
        Grama sintética <span>&middot;</span> Cubierto <span>&middot;</span> 11
        contra 11 <span>&middot;</span> 9 contra 9
      </Details>
      <Details>
        Vestidores <span>&middot;</span> Duchas <span>&middot;</span> Cafetería <span>&middot;</span> Parqueadero gratis
      </Details>
      
      <RatingContainer rating>
        <span
          style={{
            "padding-right": "5px",
            alignSelf: "center",
            color: "#3a91aac9",
            fontWeight: 600,
            fontSize: "1em"
          }}
        >
          {4.95}
        </span>
        <StyledRating
          icon="star"
          disabled
          defaultRating={rating}
          maxRating={5}
          size="tiny"
        />
        <span
          style={{
            "padding-left": "5px",
            alignSelf: "center",
            color: "#4f4b65",
            fontWeight: 600,
            fontSize: "1em"
          }}
        >
          (120)
        </span>
        <Price>
          ${price} COP{" "}
          <span style={{ fontSize: "14px", fontWeight: 600 }}>/hora</span>
        </Price>
      </RatingContainer>
    </Content>
  </StyledItem>
);

export default PostItem;
