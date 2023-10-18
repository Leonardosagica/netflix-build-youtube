/* eslint-disable react/prop-types */
const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
	// Criamos um array vazio 'pageNumbers' para armazenar os números das páginas que serão exibidos.
	const pageNumbers = [];

	// Calculamos o total de páginas usando a função Math.ceil para arredondar o número para cima.
	const totalPages = Math.ceil(totalPosts / postsPerPage);

	// Se estamos na primeira página, queremos exibir esta página e as duas próximas.
	if (currentPage === 1) {
		pageNumbers.push(currentPage, currentPage + 1, currentPage + 2);
		if (currentPage + 3 <= totalPages) {
			// Se houver mais páginas após as três primeiras, adicionamos '...' para indicar que existem mais páginas depois.
			pageNumbers.push('...');
		}
	}
	// Se estamos na última página, queremos exibir esta página e as duas anteriores.
	else if (currentPage === totalPages) {
		pageNumbers.push(currentPage - 2, currentPage - 1, currentPage);
		if (currentPage - 3 >= 1) {
			// Se houver mais páginas antes das três últimas, adicionamos '...' no início para indicar que existem mais páginas antes.
			pageNumbers.unshift('...');
		}
	}
	// Se não estivermos nem na primeira nem na última página, queremos exibir a página atual, uma antes e uma depois.
	else {
		pageNumbers.push(currentPage - 1, currentPage, currentPage + 1);
		if (currentPage + 2 <= totalPages) {
			pageNumbers.push('...');
		}
		if (currentPage - 2 >= 1) {
			pageNumbers.unshift('...');
		}
	}

	// Certificamo-nos de que o número 1 e o último número estão sempre presentes, mas que não sejam repetidos.
	if (!pageNumbers.includes(1)) {
		pageNumbers.unshift(1);
	}
	if (!pageNumbers.includes(totalPages)) {
		pageNumbers.push(totalPages);
	}

	return (
		<div className='pagination'>
			{/* Botão para voltar uma página. Está desativado se estivermos na primeira página. */}
			<button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
				Prev
			</button>

			{/* Iteramos sobre os números das páginas e renderizamos botões para cada um deles. */}
			{pageNumbers.map((number, idx) =>
				// Se o número for '...', renderizamos um span em vez de um botão.
				number === '...' ? (
					<span key={`ellipsis-${idx}`}>...</span>
				) : (
					// Para cada número de página, criamos um botão. Se for a página atual, o botão tem a classe 'active'.
					<button key={`page-${number}`} onClick={() => paginate(number)} className={currentPage === number ? 'active' : ''}>
						{number}
					</button>
				),
			)}

			{/* Botão para avançar uma página. Está desativado se estivermos na última página. */}
			<button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
				Next
			</button>
		</div>
	);
};

export default Pagination;
