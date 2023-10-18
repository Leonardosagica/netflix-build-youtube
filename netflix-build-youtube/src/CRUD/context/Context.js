/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react';

// 2. Defina o reducer
import { postReducer } from './Reducer';

// 1. Criar o contexto
export const PostContext = createContext();

// 3. Defina o provider
export const PostProvider = ({ children }) => {
	const [state, dispatch] = useReducer(postReducer, []);

	return <PostContext.Provider value={{ posts: state, dispatch }}>{children}</PostContext.Provider>;
};

/* Envolver o seu aplicativo com o PostProvider (app.jsx). */
