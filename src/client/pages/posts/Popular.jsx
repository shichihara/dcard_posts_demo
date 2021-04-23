import React, {
  useRef,
  useState,
  useCallback,
} from 'react';
import { useFetchPost } from '../../hooks/useFetchPost';
import PostItem from '../../components/PostItem';

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
    ? <>
      {
        posts.map((post, index) => {
          console.log(posts.length / 2);
          if (Math.floor(posts.length / 1.5 ) === index + 1) {
            return <div key={index} ref={lastPostRef} id={post.id}>
              <PostItem
                post={post}
              />
              {loading ? <div>Loading</div> : null}
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
    </>
    : <></>
  )
}

export default Popular
