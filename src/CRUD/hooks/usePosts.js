import { useContext } from 'react';
import { PostContext } from '../context/Context';

const usePosts = () => useContext(PostContext);

export { usePosts };
