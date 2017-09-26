const question = (state = '', action) => {
	switch(action.type) {
		
		case 'ADD_QUESTION': 
			
			return {
				...state, 			
			question: action.question

			

			}
		default: 
			return state
	}
}

export default question