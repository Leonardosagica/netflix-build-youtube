import { createContext, useReducer } from 'react';
import { postReducer } from './Reducer';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
	const [state, dispatch] = useReducer(postReducer, []);
	return <PostContext.Provider value={{ posts: state, dispatch }}>{children}</PostContext.Provider>;
};
