import React from "react";
import styled from "styled-components";
import LocationInformation from "./LocationInformation";

const Box = styled.div`
  &&& {
    margin: 0;
    line-height: 1.43;
    width: 350px;
    display: flex;
    flex-direction: column;
    position: sticky;
    top: 100px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 236px;
`;

const ImageBox = styled.div`
  &&& {
    height: auto;
    display: flex;
    max-width: 100%;
    max-height: 100%;
  }
`;

const CardDetails = () => (
  <Box>
    <ImageBox>
      <Image src="https://resources.premierleague.com/photos/2019/03/24/cb91e149-7607-4cd6-ba9b-2eb821ed33ca/Totenham-Hotspur-open-new-stadium-action.jpg?width=860&height=573" />
    </ImageBox>
    <LocationInformation />
  </Box>
);

export default CardDetails;
