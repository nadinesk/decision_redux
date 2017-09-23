const items = (state = [], action) => {
	
	switch(action.type) {
		case 'ADD_PRO_ITEM': 
			return [
				...state, 			
			{
				id: action.id, 
				text: action.text, 
				category: action.category,
				weight: action.weight
			}
		]

		case 'ADD_CON_ITEM': 
			return [
				...state, 			
			{
				id: action.id, 
				text: action.text, 
				category: action.category, 
				weight: action.weight
			}

		]

		default: 
			return state
	}
}

export default items