import { connect } from 'react-redux';
import UnSelected from '../Component/UnSelected';

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

const UnSelectedList = connect(
    mapStateToProps, 
    mapDispatchToProps
)(UnSelected)

export default UnSelectedList;