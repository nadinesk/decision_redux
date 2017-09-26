import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Item from './Item'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, ButtonToolbar, Grid, Row, Col, Clearfix, FormGroup, FormControl, ControlLabel, Table } from 'react-bootstrap'




class ItemList extends Component {

	constructor(props) {
		super(props) 

		this.state ={
			text: '', 
			weight: 0
		}



	}

	makeSum() {
		
		var proItems = this.props.items.filter(function(item) {
			return item.category == 'pro'
		})
		
		var proWeights = proItems.map(item => item.weight)		

		var proWeightsNum = proWeights.map(function(weight) {
			return parseFloat(weight)
		})

		var proWeightsSum =   proWeightsNum.reduce(function(a,b) { 		
			return a + b;}, 0)

		var conItems = this.props.items.filter(function(item) {
			return item.category == 'con'
		})
		
		var conWeights = conItems.map(item => item.weight)		

		var conWeightsNum = conWeights.map(function(weight) {
			return parseFloat(weight)
		})

		var conWeightsSum =   conWeightsNum.reduce(function(a,b) { 		
			return a + b;}, 0)
		
		return proWeightsSum - conWeightsSum


	    }

	makeAdvice(val) {
		if (val > 0) {
			return "You should do it"
		} else if (val < 0) {
			return "You shouldn't do it "
		} else if (val === 0) {
			return "Try another item to break a tie"
		} else {
			"I dunno"
		}

	}




	render() {

		
		


		

		return (
			
				
					
					<Col md={12}> 
						<hr /> 
						<h3>{this.props.question}</h3> 
						<Row> 
							<Col md={3} /> 
							<Col md={6} >
							<Table striped bordered condensed hover>
								<thead>
     								<tr>
					     				<th>Item</th> 
					     				<th>Weight</th> 
					     				<th>Category</th> 
     								</tr> 
								</thead> 
									{this.props.items.map(item => 
										
											<Item key={item.id}  {...item} /> 
									)}

							</Table>		
							</Col>
							<Col md={3} /> 

						</Row> 
					
						<Row> 
						<Col md={3} /> 
						<Col md={6} >
						<h4>Total: {this.makeSum()}</h4>
						<h4>Decision: {this.makeAdvice(this.makeSum())}</h4>
						</Col>
						<Col md={3} /> 
						</Row> 

					</Col> 

			


		)
	}

}


ItemList.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired, 
			text: PropTypes.string.isRequired, 
			category: PropTypes.string
		})
	).isRequired, 
}



function mapStateToProps(state){

  return { items: state.items, }
}

ItemList = connect(mapStateToProps, null)(ItemList)


export default ItemList