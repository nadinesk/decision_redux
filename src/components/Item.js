import React from 'react'
import PropTypes from 'prop-types'



const Item = ({ text, category, weight }) => (
	<div> 
	{(category === 'pro') ? (		
		
		<li> 
			{text}
			{weight} 
			{category}
		</li> 
	
	) : (		
		<li className="con_list">
			{text} 
			{weight}
			{category}
		</li> 
	
	) 
}
</div> 	
	

		

)

Item.propTypes = {
	text: PropTypes.string.isRequired
}

export default Item