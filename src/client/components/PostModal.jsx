import React, {
  useEffect,
  useState
} from 'react';
import { MdClose } from 'react-icons/md';
import Modal from "react-modal";
import styled from 'styled-components';
import { useFetchPost } from '../hooks/useFetchPost';
import ContentLoading from './ContentLoading';
import IconItem from './IconItem';

const Title = styled.h2`
  	font-weight: bold;
`;

const Content = styled.p`
  font-size: 16px;
  width: 700px;
`

const ForumName = styled.p`
  color: #3397cf;
  font-size: 14px;
  font-weight: bold;
`
const BackButton = styled.button`
  background-color: #00324e;
  color: white;
  border-radius: 7px;
  min-height: 30px;
  min-width: 50px;
  cursor: pointer;

  :active {
    outline: none;
  }
`

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

const GrayImage = styled.img`
  filter: grayscale(100%);
`

const Hr = styled.hr`
  color: rgb(163,163,163);
`

const CloseBtn = styled(MdClose)`
  position: absolute;
  top: 30px;
  right: 30px;
  color: rgb(163,163,163);
  float: right;
  font-size: 30px;
`

const modalStyle =  {
  content : {
    top: '50%',
    left: '50%',
    width: '700px',
    maxHeight: '80%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    overflow : 'auto'
  }
};

const PostModal = ( {isOpen = false, onRequestClose, postId, countData}) => {

  useEffect(() => {
    Modal.setAppElement('body');
  }, []);

  const { loading, error, postData } = useFetchPost(postId)

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      closeTimeoutMS={0}
      style={modalStyle}
    >
      {
        loading 
        ? <ContentLoading/>
        : <>
          <Title>{ postData.title }</Title>
          <ForumName>{ postData.forumName }</ForumName>
          <Content>{ postData.content}</Content>
          <br/>
          <IconBlock>
            <IconGroup>
              { 
                countData.likeCount > 0 

                ? countData.reactions
                .slice(0,3)
                .map(reaction => 
                  <IconItem key={reaction.id} reaction={reaction}/>
                )
                : <GrayImage src='https://megapx-assets.dcard.tw/images/52057289-337a-4f2f-88c0-cb8a77ee422a/orig.png'/>
              }
              
            </IconGroup>
            <CountElement>
              {
                countData.likeCount
              }
            </CountElement>
            &#xFF0E;
            <CountElement>
              回應
              {
                countData.commentCount
              }
          </CountElement>
          </IconBlock>
          <Hr></Hr>
          <CloseBtn onClick={onRequestClose}>back</CloseBtn>
        </>
      }
    </Modal>
  )
}

export default PostModal
