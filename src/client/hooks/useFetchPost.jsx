import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_POST_LIMIT } from '../constant/api';

export function useFetchPost(popular=true, lastId=null) {
  const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [posts, setPosts] = useState([]);
	const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    setLoading(true);
		setError(false);

    if (lastId) {
      axios.get('/posts' +'?popular=' + popular + '&limit=' + API_POST_LIMIT + '&before=' +　lastId)
        .then((result) => {
          setPosts(prevPosts => {
            return [...prevPosts, ...result.data]
          });
          setHasMore(result.data.length > 0);
          setLoading(false);
        })
        .catch(() => {
          setError(true);
        });
    } else {
      axios.get('/posts' +'?popular=' + popular +' &limit=' + API_POST_LIMIT)
        .then((result) => {
          // @ts-ignore
          setPosts(prevPosts => {
            return [...prevPosts, ...result.data]
          });
          setHasMore(result.data.length > 0);
          setLoading(false);
        })
        .catch(() => {
          setError(true);
        });
      }
    },[popular, lastId]);
  
  return { loading, error, posts, hasMore };
}
