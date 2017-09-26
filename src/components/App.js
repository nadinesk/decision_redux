import React from 'react'
import AddProItem from '../containers/AddProItem'
import AddConItem from '../containers/AddConItem'
import AddQuestion from '../containers/AddQuestion'
import ItemList from '../components/ItemList'
import Decision from '../components/Decision'
import '../App.css'
import { Button, ButtonToolbar, Grid, Row, Col, Clearfix, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

const App = () => (

	<Grid>
		<Row> 
			<Col md={12}>
				<AddQuestion /> 
			</Col> 
			<Col md={6} > 
				<AddProItem />
			</Col>  
			<Col md={6} > 
				<AddConItem /> 
			</Col>  	
		</Row> 
		<Row> 
			<Decision /> 
		</Row>
		<Row> 
			<ItemList /> 
		</Row>  
	</Grid>
)

export default App

