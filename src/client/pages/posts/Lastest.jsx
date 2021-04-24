import React, {
  useRef,
  useState,
  useCallback,
} from 'react';
import styled from 'styled-components';
import { useFetchNewPosts } from '../../hooks/useFetchNewPosts';
import PostItem from '../../components/PostItem';
import ContentLoading from '../../components/ContentLoading';
import PostModal from '../../components/PostModal';

const Container = styled.div`
  padding: 0 50px;
  background-color: white;
  display: flex;
  flex-direction: column;
`

const Lastest = () => {
  const [lastId, setLastId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPostId, setModalPostId] = useState(null);
  const { loading, error, posts, hasMore } = useFetchNewPosts(lastId);
  const [countData, setCountData] = useState({
    likeCount: 0,
    reactions: [],
    commentCount: 0
  });

  const observer = useRef();
  const lastPostRef = useCallback(node => {
    if(loading) return;
    if(observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setLastId(node.id);
      }
    })
    if (node) observer.current.observe(node)
    },[loading, hasMore])

  const handleModalClose = () => setIsModalOpen(false);
  const handleModalOpen = (post) => {
    setIsModalOpen(true);
    setModalPostId(post.id);
    setCountData({
      likeCount: post.likeCount,
      reactions: post.reactions,
      commentCount: post.commentCount,
    });
  }
  
  return (
    posts.length > 0
    ? <Container>
      {
        posts.map((post, index) => {
          if (Math.floor(posts.length / 1 ) === index + 1) {
            return <div 
              key={index} 
              ref={lastPostRef} 
              id={post.id}
              onClick={() => handleModalOpen(post)}>
              <PostItem
                post={post}
              />
              {loading ? <ContentLoading/> : null}
              {error ? <div>Fetching posts failed...</div> : null}
            </div>
          }
          return <div 
            key={index}
            id={post.id}
            onClick={() => handleModalOpen(post)}>
            <PostItem
              post={post}
            />
          </div>
        })
      }
      <PostModal isOpen={isModalOpen} onRequestClose={handleModalClose} postId={modalPostId} countData={countData}/>
    </Container>
    : <Container></Container>
  )
}

export default Lastest
