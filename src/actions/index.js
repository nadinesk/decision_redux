let nextItemId = 0

export const addProItem = (text, weight) => {	
	return {
		type: 'ADD_PRO_ITEM', 
		id: nextItemId++, 
		text,
		weight,
		category: 'pro'
	}
}

export const addConItem = (text, weight) => {
	return {
		type: 'ADD_CON_ITEM', 
		id: nextItemId++, 
		text,
		weight,
		category: 'con'
	}
}


export const addQuestion= (question) => {
	return {
		type: 'ADD_QUESTION', 		
		question
	}
}





