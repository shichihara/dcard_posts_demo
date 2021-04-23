import React from 'react';
import styled from 'styled-components';
import IconItem from './IconItem';
const Container = styled.div`
  padding: 20px 0px;
  border-bottom: 1px solid rgb(233, 233, 233);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const ForumLabel = styled.div`
  margin: 5px 0;
  color: rgb(163, 163, 163);
  align-items: center;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const PostTitle = styled.h2`
  font-weight: 600;
  font-size: 18;
  line-height: 18px;
  align-items: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: 10px 0;
`;

const PostExcerpt = styled.div`
  font-weight: 400;
  font-size: 14px;
  overflow: hidden;
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: rgb(0, 0, 0, 0.75);
  margin-top: 5px;
  margin-bottom: 10px;
`;

const IconBlock = styled.div`
  height: 25px;
  line-height: 20px;
  align-items: center;
  display: flex;
`;

const IconGroup = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 5px;

  img {
    height: 16px;
    width: 16px;
  }
`;

const CountElement = styled.div`
  padding-left: 6px;
  margin-right: 10px;
  color: rgb(163, 163, 163);
`;

const PostItem = ({post}) => {
  return (
    post
    ? <Container>
        <ForumLabel>
          { post.forumName }
          &#xFF0E;
          {
            post.school ? post.school : '匿名'
          }
        </ForumLabel>
        <PostTitle>
          { post.title }
        </PostTitle>
        <PostExcerpt>
          { post.excerpt }
        </PostExcerpt>
        <IconBlock>
          <IconGroup>
            { 
              post.reactions
              .slice(0,3)
              .map(reaction => 
                <IconItem key={reaction.id} reaction={reaction}/>
              )
            }
            
          </IconGroup>
          <CountElement>
            {
              post.likeCount
            }
          </CountElement>
          <CountElement>
            回應
            {
              post.commentCount
            }
          </CountElement>
        </IconBlock>
    </Container>
    : <Container>

    </Container>
  )
}

export default PostItem
