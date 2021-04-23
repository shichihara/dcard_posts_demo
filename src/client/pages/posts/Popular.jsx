import React, {
  useRef,
  useState,
  useCallback,
} from 'react';
import { useFetchPost } from '../../hooks/useFetchPost';
import PostItem from '../../components/PostItem';
import ContentLoading from '../../components/ContentLoading';
import styled from 'styled-components';

const Container = styled.div`
  padding: 0 50px;
  background-color: white;
  display: flex;
  flex-direction: column;
`

const Popular = () => {
  const [popular, setPopular] = useState(true);
  const [lastId, setLastId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPostId, setModalPostId] = useState(null);
  const { loading, error, posts, hasMore } = useFetchPost(popular, lastId);

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
  return (
    posts.length > 0
    ? <Container>
      {
        posts.map((post, index) => {
          if (Math.floor(posts.length / 1 ) === index + 1) {
            return <div key={index} ref={lastPostRef} id={post.id}>
              <PostItem
                post={post}
              />
              {loading ? <ContentLoading/> : null}
              {error ? <div>Fetching posts failed...</div> : null}
            </div>
          }
          return <div key={index}>
            <PostItem
              post={post}
            />
          </div>
        })
      }
    </Container>
    : <Container></Container>
  )
}

export default Popular
