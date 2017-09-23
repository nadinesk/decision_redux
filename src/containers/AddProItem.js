import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addProItem } from '../actions'
import { bindActionCreators } from 'redux'


class AddProItem extends Component {

	constructor(props) {
		super(props) 

		 
		this.handleTextChange = this.handleTextChange.bind(this)
		 this.handleWeightChange = this.handleWeightChange.bind(this)

    
    	 this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleTextChange(event) {
		

		this.setState({
			text: event.target.value, 		
		})
	}

	handleWeightChange(event) {
		this.setState({
			weight: event.target.value, 		
		})
	}


	handleSubmit(event) {
		event.preventDefault() 
	
		this.props.addProItem(this.state.text, this.state.weight)

		event.target.reset()
		

	}

	render() {
		return (
			<div> 
				<form onSubmit={this.handleSubmit} > 
					

					<input 				
						type="text"
						name="text"
						onChange={this.handleTextChange}
					/> 

					<input 				
						type="number"
						name="weight"
						onChange={this.handleWeightChange}
					/> 

					<button type="submit"> Submit Pro Item </button> 
				</form> 

			</div> 

		)
	}

}


function mapDispatchToProps(dispatch) {	
	return { addProItem: bindActionCreators(addProItem, dispatch)}
}

AddProItem = connect(null, mapDispatchToProps)(AddProItem)


export default AddProItem