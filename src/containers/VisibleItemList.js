import { connect } from 'react-redux'
import ItemList from '../components/ItemList'

const mapStateToProps = state => {
	return {
		items: state.items
	}
}

const VisibleItemList = connect(
	mapStateToProps, 
	null
)(ItemList)

export default VisibleItemList