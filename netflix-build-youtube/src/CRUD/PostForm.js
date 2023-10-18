/* eslint-disable react/prop-types */

import { useNavigate } from 'react-router-dom';

const PostForm = ({ action, id, title, body, onTitleChange, onBodyChange, onSubmit }) => {
	const navigate = useNavigate();

	const handleSubmit = async e => {
		e.preventDefault();

		// Ação DELETE
		if (action === 'delete') {
			onSubmit(); // A função handleDelete do componente DeletePost será chamada aqui
			return;
		}

		// Lógica para CREATE e UPDATE
		let url = 'http://localhost:5000/posts';
		let method = action === 'update' ? 'PUT' : 'POST';

		// Se estiver atualizando, adicionamos o ID à URL
		if (action === 'update') {
			url += `/${id}`;
		}

		try {
			const response = await fetch(url, {
				method: method,
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ title, body }),
			});

			if (response.ok) {
				navigate('/'); // Navega de volta para o início após a operação
			} else {
				console.error(`Failed to ${action} post. Status: ${response.status}`);
			}
		} catch (error) {
			console.error('An error occurred:', error);
		}
	};

	return (
		<section className='contacts'>
			<div className='contacts__wrapper'>
				<form onSubmit={handleSubmit} className='contacts__form'>
					<h3> {action === 'update' ? 'Update Post' : action === 'delete' ? 'Delete Post' : 'Create Post'}</h3>

					<div className='contacts__input'>
						<label>Title</label>
						<input type='text' value={title} onChange={e => onTitleChange(e.target.value)} required />
					</div>

					<div className='contacts__input'>
						<label>Body</label>
						<textarea value={body} onChange={e => onBodyChange(e.target.value)} required />
					</div>

					<div className='contacts__input center'>
						{action === 'delete' ? (
							<>
								<button className='form__btns' type='button' onClick={onSubmit}>
									Delete
								</button>
								<button className='form__btns' type='button' onClick={() => navigate('/')}>
									Cancel
								</button>
							</>
						) : (
							<>
								<button className='form__btns' type='submit'>
									{action === 'update' ? 'Update' : 'Submit'}
								</button>
								<button className='form__btns' type='button' onClick={() => navigate('/')}>
									Cancel
								</button>
							</>
						)}
					</div>
				</form>
			</div>
		</section>
	);
};

export default PostForm;
