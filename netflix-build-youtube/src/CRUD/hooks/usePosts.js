import { useContext } from 'react';
import { PostContext } from '../context/Context';

// Hook personalizado para facilitar o uso do contexto
const usePosts = () => useContext(PostContext);

export { usePosts };
