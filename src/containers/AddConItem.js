import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addConItem } from '../actions'
import { bindActionCreators } from 'redux'
import { Button, ButtonToolbar, Grid, Row, Col, Clearfix, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'


class AddConItem extends Component {

	constructor(props) {
		super(props) 

		 this.state = {
			weight: '', 
			text: ''
		}

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
	
		if ((this.state.text != '') && (this.state.weight != ''))  {
			this.props.addConItem(this.state.text, this.state.weight)	
			this.setState({
			text: '',
			weight: ''
			})

		
		} else {
			this.setState({
			text: '',
			weight: ''
			})
		}
		event.target.reset()
		


	}

	render() {
		return (
			<div>
			<h2> Cons </h2>  
				<form onSubmit={this.handleSubmit} > 
					
					
					<FormControl 				
						type="text"
						name="text"
						placeholder="Enter description"
						onChange={this.handleTextChange}
					/> <br /> 
					
					<FormControl 				
						type="number"
						name="weight"
						placeholder="Enter weight"
						onChange={this.handleWeightChange}
					/> <br/> 

					<button type="submit"> Submit Con Item </button> 
				</form> 

			</div> 

		)
	}

}


function mapDispatchToProps(dispatch) {	
	return { addConItem: bindActionCreators(addConItem, dispatch)}
}

AddConItem = connect(null, mapDispatchToProps)(AddConItem)


export default AddConItem