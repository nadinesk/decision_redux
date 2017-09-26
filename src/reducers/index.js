import { combineReducers } from 'redux'
import items from './items'
import question from './questions'


const decisionApp = combineReducers({
	items, 

	question
})

export default decisionApp