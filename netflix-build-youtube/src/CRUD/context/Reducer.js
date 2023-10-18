export function postReducer(state, action) {
	switch (action.type) {
		case 'INITIAL_LOAD':
			return action.payload;
		case 'CREATE_POST':
			return [...state, action.payload];
		case 'UPDATE_POST':
			return state.map(post => (post.id === action.payload.id ? action.payload : post));
		case 'DELETE_POST':
			return state.filter(post => post.id !== action.payload.id);
		default:
			return state;
	}
}

/* O que é postReducer?

O postReducer é uma função que é utilizada em conjunto com o Hook useReducer do React. Basicamente, ele ajuda a gerenciar estados complexos de uma aplicação, em um formato mais organizado e previsível.

Parâmetros da função:

state: Este é o estado atual. Pensa nisso como a "fotografia" atual dos teus dados ou da informação que estás a gerir.
action: Este é um objeto que informa ao redutor a ação específica que queres executar. Normalmente, contém um type (que tipo de ação queres executar) e, às vezes, um payload (os dados específicos ou informações relacionadas a essa ação).
O que acontece dentro da função?

Dentro da função, temos uma instrução switch que avalia o type da ação. Dependendo do tipo, o estado é modificado e retornado de uma certa maneira.

'INITIAL_LOAD': Quando a ação é de tipo 'INITIAL_LOAD', o redutor simplesmente retorna o payload da ação. É como se estivesses a inicializar ou a configurar os teus posts pela primeira vez.

'CREATE_POST': Aqui, queres adicionar um novo post. Usas a técnica de espalhamento (...state) para pegar em todos os posts existentes e, depois, adicionas o novo post (action.payload) ao final.

'UPDATE_POST': Neste caso, pretendes atualizar um post específico. Percorres cada post (state.map(...)) e verificas se o id do post é igual ao id do post que queres atualizar. Se for, substituis esse post pelo novo (action.payload), senão, manténs o post como está.

'DELETE_POST': Aqui, queres remover um post específico. Usas o método filter para criar uma nova lista que contém todos os posts, exceto aquele com o id que queres remover.

default: Se nenhuma das ações acima corresponder ao type fornecido, simplesmente retornas o estado atual, sem fazer alterações. É uma boa prática ter um caso 'default' para lidar com ações desconhecidas ou inválidas.

Resumindo:

Esta função, postReducer, é uma forma de gerir as mudanças no estado dos teus posts. Dependendo da ação fornecida, ela determinará como o estado deve ser alterado e retornará essa nova versão do estado. E faz tudo isso de uma maneira organizada e previsível. */
