import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addQuestion } from '../actions'
import { bindActionCreators } from 'redux'
import { Button, ButtonToolbar, Grid, Row, Col, Clearfix, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'


class AddQuestion extends Component {

	constructor(props) {
		super(props) 

		 this.state = {
			question: ''			
		}

		this.handleChange = this.handleChange.bind(this)
    	 this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(event) {
		this.setState({
			question: event.target.value, 		
		})
	}



	handleSubmit(event) {
		event.preventDefault() 
		
		if (this.state.question != '') {
			this.props.addQuestion(this.state.question)	
			this.setState({
			question: ''
			})
		} else {
			this.setState({
			question: ''
			})
		}
		event.target.reset()
		


	}

	render() {
		return (
			<div>
			<h2> Decision to Make </h2>  
				<form onSubmit={this.handleSubmit} > 
					
					
					<FormControl 				
						type="text"
						name="question"
						placeholder="Enter Decision To Make"
						onChange={this.handleChange}
					/> <br /> 
					
				

					<button type="submit"> Submit Question </button> 
				</form> 

			</div> 

		)
	}

}


function mapDispatchToProps(dispatch) {	
	return { addQuestion: bindActionCreators(addQuestion, dispatch)}
}

AddQuestion = connect(null, mapDispatchToProps)(AddQuestion)


export default AddQuestion