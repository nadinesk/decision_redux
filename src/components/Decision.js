import React, {Component} from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, ButtonToolbar, Grid, Row, Col, Clearfix, FormGroup, FormControl, ControlLabel, Table } from 'react-bootstrap'




class Decision extends Component {

	constructor(props) {
		super(props) 

		this.state ={
			question: ''			
		}



	}

	
	render() {
		
		return (	
			<div>
			<hr /> 
			<Col md={3} /> 
			<Col md={6}> 								
				<h3>The Question Is: {this.props.question}</h3> 
			</Col>
			<Col md={3} /> 
			</div>
		)
	}

}



function mapStateToProps(state){
  
  return { question: state.question.question }
}

Decision = connect(mapStateToProps, null)(Decision)


export default Decision