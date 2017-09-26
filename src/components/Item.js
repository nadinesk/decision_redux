import React from 'react'
import PropTypes from 'prop-types'
import { Button, ButtonToolbar, Grid, Row, Col, Clearfix, FormGroup, FormControl, ControlLabel, Table } from 'react-bootstrap'



const Item = ({ text, category, weight }) => (
	
	
	
	<tbody>
		{(category === 'pro') ? (	
		<tr className="pro_list"> 
			<td>{text}</td>
			<td>{weight} </td>
			<td>{category}</td> 
		</tr> 
		
	) : (
		<tr className="con_list"> 
			<td>{text}</td>
			<td>{weight} </td>
			<td>{category}</td> 
		</tr> 

	)
	
   }
   </tbody>

   

	

		

)

Item.propTypes = {
	text: PropTypes.string.isRequired
}

export default Item