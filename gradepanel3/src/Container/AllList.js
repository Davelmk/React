import { connect } from 'react-redux';
import All from '../Component/All';

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

const AllList = connect(
    mapStateToProps, 
    mapDispatchToProps
)(All)

export default AllList;