import { connect } from 'react-redux';
import Item from '../Component/Item';

const mapDispatchToProps = (dispatch) => {
    return {
        check: (id) => {
            dispatch({
                type: 'CHECK',
                id:id
            })
        }
    }
}

const mapStateToProps = (state) => {
    return {
        items:state.grade.Items
    }
}

const ItemContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
)(Item)

export default ItemContainer;