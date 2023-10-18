import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts';
import PostForm from '../PostForm';

const UpdatePost = () => {
	const { id: postId } = useParams();
	const id = Number(postId);
	const navigate = useNavigate();
	const { dispatch } = usePosts();

	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await fetch(`http://localhost:5000/posts/${id}`);
				const post = await response.json();

				setTitle(post.title);
				setBody(post.body);
			} catch (error) {
				console.error('Erro ao buscar post:', error);
			}
		};

		fetchPost();
	}, [id]);

	const handleSubmit = async e => {
		e.preventDefault();

		try {
			const response = await fetch(`http://localhost:5000/posts/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ title, body }),
			});

			const updatedPost = await response.json();

			dispatch({ type: 'UPDATE_POST', payload: updatedPost });

			// Redirecionar para a página principal ou mostrar mensagem de sucesso
			alert('post atualizado');
			navigate('/');
		} catch (error) {
			console.error('Erro ao atualizar post:', error);
		}
	};

	return <PostForm action='update' id={id} title={title} body={body} onTitleChange={setTitle} onBodyChange={setBody} onSubmit={handleSubmit} />;
};

export default UpdatePost;

/* Neste exemplo, foi adicionado o uso do contexto de post, que foi importado através do usePosts do PostContext. A função usePosts retorna o estado posts e a função dispatch do contexto. O estado posts contém todos os posts, e a função dispatch é usada para enviar a ação de atualização para o reducer.

No useEffect, verificamos se o post já está presente no estado posts do contexto. Se estiver presente, pegamos os dados do post diretamente do estado. Caso contrário, fazemos uma chamada para buscar o post no servidor.

Após a atualização do post, chamamos a função dispatch com a ação UPDATE_POST e o post atualizado como payload. Isso atualiza o estado posts no contexto. */
