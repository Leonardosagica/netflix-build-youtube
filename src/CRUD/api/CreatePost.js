// eslint-disable-next-line react/prop-types

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts';
import PostForm from '../PostForm';

const CreatePost = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');
	const navigate = useNavigate();
	const { dispatch } = usePosts();

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:5000/posts', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ title, body }),
			});

			const data = await response.json();
			console.log(data);

			dispatch({ type: 'CREATE_POST', payload: data });

			// Redirecionar para a página principal ou mostrar mensagem de sucesso
			alert('novo post criado');
			navigate('/');
		} catch (error) {
			console.error('Erro ao criar post:', error);
		}
	};

	return (
		<>
			<PostForm action='create' id={null} title={title} body={body} onTitleChange={setTitle} onBodyChange={setBody} onSubmit={handleSubmit} />
		</>
	);
};

export default CreatePost;

/* Neste exemplo, adicionamos o uso do contexto de post, importado através do usePosts do PostContext. A função usePosts retorna a função dispatch do contexto.

No método handleSubmit, após criar o novo post no servidor, adicionamos o novo post ao estado posts do contexto através da ação ADD_POST e o payload data, que contém os detalhes do novo post.

Em seguida, chamamos a função dispatch com a ação ADD_POST e o payload data. Isso atualiza o estado posts no contexto. */
