import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

const ItemList = ({ items }) => (

	<div> 
	<ul>  
		{items.map(item => 
			
				<Item key={item.id}  {...item} /> 
			

		)}

	</ul> 

	

	
	</div> 

)

ItemList.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired, 
			text: PropTypes.string.isRequired, 
			category: PropTypes.string
		})
	).isRequired, 
}

export default ItemList