import { connect } from 'react-redux';
import Selected from '../Component/Selected';

const mapDispatchToProps = (dispatch) => {
    return {
        //return no action
    }
}

const mapStateToProps = (state) => {
    return {
        items:state.grade.Items
    }
}

const SelectedList = connect(
    mapStateToProps, 
    mapDispatchToProps
)(Selected)

export default SelectedList;