import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Item from './Item'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'




class ItemList extends Component {

	constructor(props) {
		super(props) 

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



	render() {

		
		


		

		return (
			<div> 
				<ul>  
					{this.props.items.map(item => 
						
							<Item key={item.id}  {...item} /> 
					)}

				</ul> 
			

				
			<p>{this.makeSum()}</p>

			</div> 


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
  return { items: state.items}
}

ItemList = connect(mapStateToProps, null)(ItemList)


export default ItemList