import React from "react";
import styled from "styled-components";
import { Comment } from "semantic-ui-react";

const Author = styled(Comment.Author)`
  &&& {
    font-size: 14px;
    font-weight: 800;
    color: #4f4b65;
  }
`;

const CreatedAt = styled(Comment.Metadata)`
  &&&&& {
    font-size: 14px;
    font-weight: 400;
    color: #4f4b65;
  }
`;

const CommentText = styled(Comment.Text)`
  &&&&& {
    font-size: 16px;
    font-weight: 400;
    color: #4f4b65;
  }
`;

const Avatar = styled(Comment.Avatar)`
  &&&&& {
    width: 48px;
  }
`;

const StyledComment = styled(Comment)`
  &&&&& {
    margin-bottom: 32px;
  }
`;

const ReviewMessage = () => (
  <StyledComment>
    <Avatar src="https://react.semantic-ui.com/images/avatar/small/matt.jpg" />
    <Comment.Content>
      <Author as="a">Matt</Author>
      <CreatedAt>
        <div>25 de Junio</div>
      </CreatedAt>
      <CommentText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et lorem
        dignissim, placerat eros ultrices, tempor massa. Nullam pellentesque mi
        a augue molestie dapibus.
      </CommentText>
    </Comment.Content>
  </StyledComment>
);

export default ReviewMessage;
