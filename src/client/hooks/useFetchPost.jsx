import { useEffect, useState } from 'react';
import axios from 'axios';

export function useFetchPost(postId) {
  const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [postData, setPostData] = useState({ 
    title: '',
    content: '',
    forumName: '',
   });

  useEffect(() => {
    setLoading(true);
		setError(false);
    axios.get('/post/' + postId)
      .then((result) => {
        setPostData({
          title: result.data.title,
          content: result.data.content,
          forumName: result.data.forumName,
        });
        setLoading(false);
      })
      .catch(() => {
        setError(true);
      });
  },[postId]);
  
  return { loading, error, postData };
}
