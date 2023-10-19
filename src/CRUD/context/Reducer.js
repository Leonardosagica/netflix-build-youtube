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
